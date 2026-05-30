#!/usr/bin/env python3
"""Remove MergeTable JSX from all 21 files, restoring original markdown tables."""
import os, re

promo_dir = 'docs/monetize/promotion'
ids = [
    "activity-type-0000001131086020", "ads-bwgzkpl-0000002506543599",
    "ads-gjrjhg-0000002544259658", "ads-hygzhfcz-0000002505686321",
    "ads-khhy-0000002317140653", "ads-kpscmgzd-0000002499514356",
    "ads-toufanguangliguifang-0000001793450445", "ads_ocpc01-0000001058599220",
    "bp-bonus-cooperation-0000001309230226",
    "bp-delivery-task-management-index-0000001293894160",
    "bp-functions-rta-create-0000001351897861",
    "bpos-start-guest-recharge-overview-0000001379677849",
    "bpos-start-service-provider-financial-management-0000001328517614",
    "different-ratings-0000001234125571", "display-0000001057113500",
    "finance-0000001058604140", "fusion-summary-0000002499177821",
    "overview-wytg-0000001228193251", "settlement-overview-0000001176952305",
    "targeting-0000001180547094", "ads_gongju28-0000001625985609",
]

for oid in ids:
    fpath = os.path.join(promo_dir, f"{oid}.md")
    if not os.path.exists(fpath):
        continue
    
    with open(fpath) as f:
        content = f.read()
    
    # Remove import line
    content = re.sub(r'^import MergeTable.*\n?', '', content, flags=re.MULTILINE)
    
    # Remove MergeTable JSX block (from <MergeTable to />)
    content = re.sub(
        r'\n<MergeTable\s*\n.*?/>\s*\n?',
        '',
        content,
        flags=re.DOTALL
    )
    
    with open(fpath, 'w') as f:
        f.write(content)
    
    print(f"  Cleaned: {oid}")

print("Done!")
