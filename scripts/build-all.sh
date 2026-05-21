#!/opt/local/bin/bash
# ==============================================================================
# Split build & merge script for developer_hos
# ==============================================================================
# Usage:
#   ./scripts/build-all.sh                    # Full build (all modules + merge)
#   ./scripts/build-all.sh dev-app            # Build only dev-app module
#   ./scripts/build-all.sh dev-app,design     # Build specific modules
#   ./scripts/build-all.sh --clean            # Clean build dir before building
#   ./scripts/build-all.sh --merge-only       # Only merge (if parts already built)
#   ./scripts/build-all.sh --clean --merge-only  # Clean + merge only
#
# Build flow:
#   1. Build each module → build/.parts/<module>/
#   2. Merge: extract HTML from all parts → build/
#   3. Use the "misc" module's assets as the base (JS/CSS/theme)
#
# Env vars (set automatically, override if needed):
#   NODE_OPTIONS="--max-old-space-size=8192"
#   GENERATE_SOURCEMAP=false
# ==============================================================================

set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=8192}"
export GENERATE_SOURCEMAP="${GENERATE_SOURCEMAP:-false}"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
BUILD_DIR="$PROJECT_DIR/build"
PARTS_DIR="$BUILD_DIR/.parts"

# All available modules and their configs
declare -A MODULES
MODULES=(
  ["dev-app"]="docusaurus.config.dev-app.js"
  ["dev-adv"]="docusaurus.config.dev-adv.js"
  ["design"]="docusaurus.config.design.js"
  ["distribute"]="docusaurus.config.distribute.js"
  ["monetize"]="docusaurus.config.monetize.js"
  ["tools"]="docusaurus.config.tools.js"
  ["misc"]="docusaurus.config.misc.js"
)

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

log()  { echo -e "${GREEN}[build]${NC} $*"; }
warn() { echo -e "${YELLOW}[warn]${NC} $*"; }
err()  { echo -e "${RED}[error]${NC} $*"; }
info() { echo -e "${CYAN}[info]${NC} $*"; }

# Parse arguments
MERGE_ONLY=false
CLEAN=false
TARGET_MODULES=()

for arg in "$@"; do
  case "$arg" in
    --merge-only) MERGE_ONLY=true ;;
    --clean) CLEAN=true ;;
    *)
      IFS=',' read -ra MODS <<< "$arg"
      for m in "${MODS[@]}"; do
        if [[ -n "${MODULES[$m]:-}" ]]; then
          TARGET_MODULES+=("$m")
        else
          err "Unknown module: $m. Available: ${!MODULES[*]}"
          exit 1
        fi
      done
      ;;
  esac
done

# If no modules specified, build all
if [[ ${#TARGET_MODULES[@]} -eq 0 ]]; then
  TARGET_MODULES=("${!MODULES[@]}")
  log "Building ALL modules: ${TARGET_MODULES[*]}"
else
  log "Building modules: ${TARGET_MODULES[*]}"
fi

info "NODE_OPTIONS=$NODE_OPTIONS"
info "GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP"

# Clean build directory
if [[ "$CLEAN" == true ]]; then
  log "Cleaning build directory..."
  rm -rf "$BUILD_DIR"
  mkdir -p "$PARTS_DIR"
fi

# ── 0. Ensure parts dir exists ──────────────────────────────────────────
mkdir -p "$PARTS_DIR"

# ── 1. Build each module ────────────────────────────────────────────────
if [[ "$MERGE_ONLY" != true ]]; then
  TOTAL_MODS=${#TARGET_MODULES[@]}
  CURRENT=0

  for mod in "${TARGET_MODULES[@]}"; do
    CURRENT=$((CURRENT + 1))
    config="${MODULES[$mod]}"
    out_dir="$PARTS_DIR/$mod"

    log "[$CURRENT/$TOTAL_MODS] Building $mod → $out_dir"

    START_TIME=$(date +%s)

    cd "$PROJECT_DIR"
    npx docusaurus build \
      --config "$config" \
      --out-dir "$out_dir" \
      --no-minify \
      || {
        err "Build failed for $mod"
        exit 1
      }

    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    MIN=$((DURATION / 60))
    SEC=$((DURATION % 60))

    html_count=$(find "$out_dir/docs" -name '*.html' 2>/dev/null | wc -l)
    part_size=$(du -sh "$out_dir" 2>/dev/null | cut -f1)
    log "✓ $mod (${MIN}m${SEC}s, $html_count pages, $part_size)"
  done
fi

# ── 2. Merge ────────────────────────────────────────────────────────────
log "Merging build artifacts..."

# Use misc (or first available) as base for assets
BASE_MODULE="misc"
if [[ ! -d "$PARTS_DIR/$BASE_MODULE" ]]; then
  BASE_MODULE=$(ls "$PARTS_DIR" | head -1)
  warn "misc module not found, using $BASE_MODULE as base"
fi
log "Base assets from: $BASE_MODULE"

# Copy base assets (everything except docs/)
rsync -a "$PARTS_DIR/$BASE_MODULE/" "$BUILD_DIR/" \
  --exclude 'docs'

# Merge docs from ALL parts
for mod in "${TARGET_MODULES[@]}"; do
  if [[ -d "$PARTS_DIR/$mod/docs" ]]; then
    log "  Merging docs from $mod..."
    rsync -a "$PARTS_DIR/$mod/docs/" "$BUILD_DIR/docs/"
  fi
done

# Merge assets (JS/CSS chunks) from ALL parts so cross-module pages can load their scripts
log "  Merging assets from all modules..."
for mod in "${TARGET_MODULES[@]}"; do
  if [[ -d "$PARTS_DIR/$mod/assets" ]]; then
    rsync -a "$PARTS_DIR/$mod/assets/" "$BUILD_DIR/assets/"
  fi
done

# ── 3. Summary ──────────────────────────────────────────────────────────
total_html=$(find "$BUILD_DIR/docs" -name '*.html' 2>/dev/null | wc -l)
total_size=$(du -sh "$BUILD_DIR" 2>/dev/null | cut -f1)

log "────────────────────────────────────────────"
log "✓ Build complete!"
log "  HTML pages: $total_html"
log "  Total size: $total_size"
log "  Output:     $BUILD_DIR"
log "────────────────────────────────────────────"
