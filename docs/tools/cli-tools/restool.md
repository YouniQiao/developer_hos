---
title: "restoolе·Ҙе…·"
displayed_sidebar: cliToolsSidebar
original_url: /docs/tools/cli-tools/restool
format: md
---


# restoolе·Ҙе…·

## з®Җд»Ӣ

restoolжҳҜдёҖз§Қеә”з”Ёе·ҘзЁӢиө„жәҗзј–иҜ‘е·Ҙе…·пјҢйҖҡиҝҮзј–иҜ‘иө„жәҗж–Үд»¶еҲӣе»әиө„жәҗзҙўеј•гҖҒи§Јжһҗиө„жәҗпјҢејҖеҸ‘иҖ…еҸҜд»Ҙи°ғз”Ё[иө„жәҗз®ЎзҗҶжҺҘеҸЈ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)иҺ·еҸ–еҲ°еҜ№еә”иө„жәҗгҖӮrestoolе·Ҙе…·дҝқеӯҳеңЁsdkе®үиЈ…зӣ®еҪ•дёӢзҡ„toolchainsеӯҗзӣ®еҪ•гҖӮ

## еҸӮж•°иҜҙжҳҺ

### restoolж”ҜжҢҒзҡ„е‘Ҫд»ӨйҖүйЎ№

| йҖүйЎ№ | жҳҜеҗҰеҸҜзјәзңҒ | жҳҜеҗҰеӯҳеңЁе…ҘеҸӮ | жҸҸиҝ° |
| --- | --- | --- | --- |
| -i/--inputPath | дёҚеҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡйңҖиҰҒжһ„е»әзҡ„иө„жәҗзӣ®еҪ•жҲ–иҖ…иө„жәҗдёӯй—ҙд»¶гҖӮ  еңЁиө„жәҗзӣ®еҪ•дёӯж”ҜжҢҒжҢҮе®ҡдёҖдёӘзј–иҜ‘еҘҪзҡ„HAP/HSPиө„жәҗзӣ®еҪ•пјҲи§ЈеҺӢжҖҒпјүпјҢеңЁжӯӨHAP/HSPзҡ„еҹәзЎҖдёҠе®ҢжҲҗеҸ еҠ зј–иҜ‘гҖӮ  е…·дҪ“еҸҜеҸӮиҖғеҰӮдёӢ[зј–иҜ‘иө„жәҗе‘Ҫд»Ө](#зј–иҜ‘иө„жәҗ)гҖӮ |
| -j/--json | дёҚеҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡconfig.jsonжҲ–иҖ…module.jsonж–Үд»¶и·Ҝеҫ„гҖӮ |
| -o/--outputPath | дёҚеҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡе·Ізј–иҜ‘иө„жәҗзҡ„иҫ“еҮәи·Ҝеҫ„гҖӮ |
| -p/--packageName | дёҚеҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡзј–иҜ‘иө„жәҗзҡ„bundleеҗҚз§°гҖӮ |
| -r/--resHeader | дёҚеҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡиө„жәҗзҡ„еӨҙж–Үд»¶з”ҹжҲҗи·Ҝеҫ„пјҢж–Үд»¶еҶ…е®№дёәиө„жәҗеҗҚз§°дёҺиө„жәҗIDзҡ„жҳ е°„иЎЁпјҢж”ҜжҢҒ4з§Қж јејҸпјҡвҖң.txtвҖқгҖҒвҖң.jsвҖқгҖҒвҖң.hвҖқгҖҒвҖң.tsвҖқгҖӮ  <strong>иҜҙжҳҺпјҡ</strong>  - вҖң.txtвҖқгҖҒвҖң.jsвҖқгҖҒвҖң.hвҖқж јејҸзҡ„ж–Үд»¶еҢ…еҗ«-iжҢҮе®ҡзҡ„жүҖжңүиө„жәҗзӣ®еҪ•дёӢзҡ„иө„жәҗжҳ е°„иЎЁгҖӮ  - д»ҺAPI version 23ејҖе§ӢпјҢж”ҜжҢҒвҖң.tsвҖқж јејҸпјҢж–Үд»¶еҶ…е®№д»…еҢ…еҗ«-iжҢҮе®ҡзҡ„HARзј–иҜ‘дә§зү©зҡ„иө„жәҗзӣ®еҪ•дёӢзҡ„иө„жәҗжҳ е°„иЎЁгҖӮ |
| -e/--startId | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡз”ҹжҲҗиө„жәҗзҡ„иө·е§ӢIDеҖјпјҢдҫӢеҰӮпјҡ0x01000000,иҢғеӣҙ[0x01000000, 0x06FFFFFF),[0x08000000, 0xFFFFFFFF)гҖӮ |
| -f/--forceWrite | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | еҰӮжһңиҫ“еҮәи·Ҝеҫ„е·Із»ҸеӯҳеңЁгҖӮејәеҲ¶еҲ йҷӨпјҢйҮҚж–°з”ҹжҲҗгҖӮ |
| -h/--help | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | жҹҘзңӢе·Ҙе…·её®еҠ©дҝЎжҒҜгҖӮ |
| -m/--modules | еҸҜзјәзңҒ | еёҰеҸӮж•° | еӨҡжЁЎеқ—иҒ”еҗҲзј–иҜ‘ж—¶пјҢжҢҮе®ҡеӨҡдёӘжЁЎеқ—еҗҚгҖӮз”ЁвҖң,вҖқиҝһжҺҘгҖӮ |
| -x/--append | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡз”ҹжҲҗдёӯй—ҙж–Үд»¶зҡ„иө„жәҗзӣ®еҪ•жҲ–еҚ•дёӘиө„жәҗи·Ҝеҫ„гҖӮеҗҢдёҖдёӘе‘Ҫд»ӨеҸҜд»ҘеӨҡж¬ЎжҢҮе®ҡгҖӮ |
| -z/--combine | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | й’ҲеҜ№иө„жәҗдёӯй—ҙж–Үд»¶зӣ®еҪ•пјҢз”ҹжҲҗзј–иҜ‘з»“жһңгҖӮ |
| -l/--fileList | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡе‘Ҫд»ӨйҖүйЎ№зҡ„йӣҶеҗҲjsonж–Үд»¶пјҢдҫӢеҰӮпјҡresConfig.jsonгҖӮиҜҰз»Ҷж јејҸиҜ·жҹҘзңӢдёӢж–№-l/--fileListеҸӮж•°иҜҙжҳҺгҖӮ |
| -v/--version | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | жҹҘзңӢе·Ҙе…·зүҲжң¬еҸ·гҖӮ |
| --ids | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡз”ҹжҲҗid\_defined.jsonзҡ„иҫ“еҮәзӣ®еҪ•гҖӮ |
| --defined-ids | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡid\_defined.jsonж–Үд»¶и·Ҝеҫ„пјҢдёҖиҲ¬йғҪжҳҜйҖҡиҝҮ--idsз”ҹжҲҗгҖӮ  id\_defined.jsonеҢ…еҗ«иө„жәҗзұ»еһӢгҖҒеҗҚз§°еҸҠе…¶IDзҡ„еҲ—иЎЁгҖӮ  ејҖеҸ‘иҖ…еҸҜд»ҘиҮӘе®ҡд№үid\_defined.jsonдёӯзҡ„иө„жәҗIDгҖӮ |
| --dependEntry | еҸҜзјәзңҒ | еёҰеҸӮж•° | FAжЁЎеһӢдёӢеҚ•зӢ¬зј–иҜ‘featureж—¶пјҢжҢҮе®ҡentryжЁЎеқ—зҡ„зј–иҜ‘з»“жһңзӣ®еҪ•гҖӮ |
| --icon-check | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | ејҖеҗҜiconе’ҢstartWindowIconзҡ„PNGеӣҫзүҮж ЎйӘҢеҠҹиғҪгҖӮ |
| --compressed-config | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡйңҖиҰҒиҝӣиЎҢзә№зҗҶеҺӢзј©зҡ„jsonй…ҚзҪ®ж–Үд»¶гҖӮдҫӢеҰӮпјҡopt-compression.jsonпјҢjsonй…ҚзҪ®ж–Үд»¶зҡ„иҜҰз»Ҷж јејҸиҜ·жҹҘзңӢдёӢж–№--compressed-configеҸӮж•°иҜҙжҳҺгҖӮ |
| --thread | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡиө„жәҗзј–иҜ‘ж—¶ејҖеҗҜзҡ„еӯҗзәҝзЁӢж•°йҮҸгҖӮ  <strong>иҜҙжҳҺпјҡ</strong>  д»ҺAPI version 18ејҖе§ӢпјҢж”ҜжҢҒиҜҘйҖүйЎ№гҖӮ |
| --target-config | еҸҜзјәзңҒ | еёҰеҸӮж•° | дёҺвҖң-iвҖқе‘Ҫд»ӨеҗҢж—¶дҪҝз”ЁпјҢж”ҜжҢҒйҖүжӢ©зј–иҜ‘гҖӮ  е…·дҪ“еҸҜеҸӮиҖғеҰӮдёӢ<strong>target-configеҸӮж•°иҜҙжҳҺ</strong>гҖӮ |
| --ignored-file | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡиө„жәҗж–Үд»¶е’Ңиө„жәҗзӣ®еҪ•зҡ„еҝҪз•Ҙи§„еҲҷпјҢж јејҸдёәжӯЈеҲҷиЎЁиҫҫејҸпјҢеӨҡдёӘи§„еҲҷд№Ӣй—ҙд»ҘвҖң:вҖқеҲҶйҡ”гҖӮж–Үд»¶гҖҒзӣ®еҪ•зҡ„еҗҚз§°дёҺжӯЈеҲҷиЎЁиҫҫејҸеҢ№й…Қзҡ„дјҡиў«еҝҪз•ҘгҖӮ  дҫӢеҰӮпјҡвҖң\.git:\.svnвҖқеҸҜд»ҘеҝҪз•ҘжүҖжңүеҗҚз§°дёәвҖң.gitвҖқгҖҒвҖң.svnвҖқзҡ„ж–Үд»¶е’Ңзӣ®еҪ•гҖӮ  <strong>иҜҙжҳҺпјҡ</strong>  д»ҺAPI version 19ејҖе§ӢпјҢж”ҜжҢҒиҜҘйҖүйЎ№гҖӮ |
| --ignored-path | еҸҜзјәзңҒ | еёҰеҸӮж•° | жҢҮе®ҡиө„жәҗж–Үд»¶е’Ңиө„жәҗзӣ®еҪ•зҡ„еҝҪз•Ҙи§„еҲҷпјҢж јејҸдёәжӯЈеҲҷиЎЁиҫҫејҸпјҢеӨҡдёӘи§„еҲҷд№Ӣй—ҙд»ҘвҖң:вҖқеҲҶйҡ”гҖӮж–Үд»¶гҖҒзӣ®еҪ•зҡ„еҗҚз§°жҲ–и·Ҝеҫ„дёҺжӯЈеҲҷиЎЁиҫҫејҸеҢ№й…Қзҡ„дјҡиў«еҝҪз•ҘгҖӮ  дҫӢеҰӮпјҡвҖң.+/rawfile/\.git:\.svnвҖқдёӯз¬¬дёҖдёӘжӯЈеҲҷеҢ…еҗ«жҢҮе®ҡи·Ҝеҫ„вҖң.+/rawfile/вҖқпјҢеҸҜд»ҘеҝҪз•Ҙrawfileзӣ®еҪ•дёӢзҡ„вҖң.gitвҖқж–Үд»¶е’Ңзӣ®еҪ•пјҢдёҚдјҡеҝҪз•Ҙе…¶д»–зӣ®еҪ•дёӢзҡ„вҖң.gitвҖқж–Үд»¶е’Ңзӣ®еҪ•пјӣз¬¬дәҢдёӘи§„еҲҷдёҚеҢ…еҗ«д»»дҪ•жҢҮе®ҡи·Ҝеҫ„пјҢеҸҜд»ҘеҝҪз•ҘжүҖжңүеҗҚз§°дёәвҖң.svnвҖқзҡ„ж–Үд»¶е’Ңзӣ®еҪ•гҖӮ  <strong>иҜҙжҳҺпјҡ</strong>  д»ҺAPI version 23ејҖе§ӢпјҢж”ҜжҢҒиҜҘйҖүйЎ№гҖӮ |

<strong>target-configеҸӮж•°иҜҙжҳҺ</strong>

ж”ҜжҢҒеҸӮж•°й…ҚзҪ®зұ»еһӢпјҡMccMncгҖҒLocaleгҖҒOrientationгҖҒDeviceгҖҒColorModeгҖҒDensityгҖӮ

еҸӮж•°ж јејҸиҜҙжҳҺпјҡй…ҚзҪ®д№Ӣй—ҙз”ЁвҖң;вҖқеҲҶеүІпјҢй…ҚзҪ®дёӯзҡ„еҖјз”ЁвҖң[]вҖқе°ҒиЈ…пјҢе№¶дҪҝз”ЁвҖң,вҖқеҲҶеүІгҖӮ

MccMncеҢ№й…Қи§„еҲҷпјҡMccпјҲеӣҪе®¶з Ғпјүеҝ…йЎ»зӣёеҗҢпјӣMncпјҲзҪ‘з»ңз ҒпјүдёҚеӯҳеңЁж—¶й»ҳи®ӨеҢ№й…ҚпјҢеҗҰеҲҷMncйЎ»зӣёеҗҢжүҚеҢ№й…ҚгҖӮ

LocaleеҢ№й…Қи§„еҲҷпјҡLocaleеҢ№й…ҚйңҖж»Ўи¶ід»ҘдёӢдёүжқЎи§„еҲҷгҖӮ

1гҖҒиҜӯиЁҖйЎ»зӣёеҗҢгҖӮ

2гҖҒи„ҡжң¬пјҲж–Үеӯ—пјүдёҚеӯҳеңЁж—¶й»ҳи®ӨеҢ№й…ҚпјҢеҗҰеҲҷеҝ…йЎ»зӣёеҗҢгҖӮ

3гҖҒеӣҪе®¶жҲ–ең°еҢәдёҚеӯҳеңЁж—¶й»ҳи®ӨеҢ№й…ҚпјҢеҗҰеҲҷеҝ…йЎ»зӣёеҗҢгҖӮ

еҸӮж•°дёҫдҫӢиҜҙжҳҺпјҡLocale[zh\_CN,en\_US];Device[phone]пјҢиҜҘеҸӮж•°иҝҮж»Өе…¶д»–иҜӯиЁҖпјҢдҝқз•ҷиғҪеҢ№й…ҚдёҠzh\_CNе’Ңen\_USзҡ„иҜӯиЁҖпјӣиҝҮж»Өе…¶д»–и®ҫеӨҮпјҢдҝқз•ҷphoneпјӣе…¶д»–еҸӮж•°пјҲеҰӮMccMncгҖҒOrientationзӯүпјүй…ҚзҪ®дёҚиҝҮж»ӨеқҮдҝқз•ҷгҖӮ

<strong>-l/--fileListеҸӮж•°иҜҙжҳҺ</strong>

з”ЁдәҺжҢҮе®ҡе‘Ҫд»ӨйҖүйЎ№йӣҶеҗҲзҡ„jsonж–Үд»¶пјҢjsonж–Үд»¶еҢ…еҗ«зҡ„еӯ—ж®өдёҺе‘Ҫд»ӨйҖүйЎ№зҡ„еҜ№еә”е…ізі»еҰӮдёӢгҖӮ

| еӯ—ж®өеҗҚз§° | зұ»еһӢ | е‘Ҫд»ӨйҖүйЎ№ | жҸҸиҝ° |
| --- | --- | --- | --- |
| configPath | string | -j/--json | иҜ·еҸӮиҖғ-j/--jsonзҡ„иҜҙжҳҺгҖӮ |
| packageName | string | -p/--packageName | иҜ·еҸӮиҖғ-p/--packageNameзҡ„иҜҙжҳҺгҖӮ |
| output | string | -o/--outputPath | иҜ·еҸӮиҖғ-o/--outputPathзҡ„иҜҙжҳҺгҖӮ |
| startId | string | -e/--startId | иҜ·еҸӮиҖғ-e/--startIdзҡ„иҜҙжҳҺгҖӮ |
| moduleNames | string | -m/--modules | иҜ·еҸӮиҖғ-o/--outputPathзҡ„иҜҙжҳҺгҖӮ |
| ResourceTable | string[] | -r/--resHeader | еҸҜд»ҘеҢ…еҗ«еӨҡдёӘи·Ҝеҫ„пјҢзӣёеҪ“дәҺеӨҡж¬ЎжҢҮе®ҡ-r/--resHeaderгҖӮ |
| applicationResource | string | -i/--inputPath | жҢҮе®ҡAppScopeзҡ„иө„жәҗзӣ®еҪ•гҖӮ |
| moduleResources | string[] | -i/--inputPath | жҢҮе®ҡеҪ“еүҚжЁЎеқ—зҡ„иө„жәҗзӣ®еҪ•пјҢеҸҜд»ҘеҢ…еҗ«еӨҡдёӘзӣ®еҪ•пјҢзӣёеҪ“дәҺеӨҡж¬ЎжҢҮе®ҡ-i/--inputPathгҖӮ |
| dependencies | string[] | -i/--inputPath | жҢҮе®ҡдҫқиө–жЁЎеқ—зҡ„иө„жәҗзӣ®еҪ•пјҢеҸҜд»ҘеҢ…еҗ«еӨҡдёӘзӣ®еҪ•пјҢзӣёеҪ“дәҺеӨҡж¬ЎжҢҮе®ҡ-i/--inputPathгҖӮ |
| entryCompiledResource | string | --dependEntry | иҜ·еҸӮиҖғ--dependEntryзҡ„иҜҙжҳҺгҖӮ |
| iconCheck | boolean | --icon-check | жҳҜеҗҰеҗҜз”Ёiconе’ҢstartWindowIconзҡ„PNGеӣҫзүҮж ЎйӘҢеҠҹиғҪгҖӮ  - trueпјҡеҗҜз”ЁгҖӮ  - falseпјҲзјәзңҒй»ҳи®ӨеҖјпјүпјҡдёҚеҗҜз”ЁгҖӮ |
| ids | string | --ids | иҜ·еҸӮиҖғ--idsзҡ„иҜҙжҳҺгҖӮ |
| definedIds | string | --defined-ids | иҜ·еҸӮиҖғ--defined-idsзҡ„иҜҙжҳҺгҖӮ |
| compression | string | --compressed-config | иҜ·еҸӮиҖғ--compressed-configзҡ„иҜҙжҳҺгҖӮ |
| thread | integer | --thread | иҜ·еҸӮиҖғ--threadзҡ„иҜҙжҳҺгҖӮ |
| ignoreResourcePattern | string[] | --ignored-file | иҜ·еҸӮиҖғ--ignored-fileзҡ„иҜҙжҳҺгҖӮ |
| ignoreResourcePathPattern | string[] | --ignored-path | иҜ·еҸӮиҖғ--ignored-pathзҡ„иҜҙжҳҺгҖӮ |
| qualifiersConfig | object | --target-config | жҢҮе®ҡйҖүжӢ©зј–иҜ‘зҡ„еҸӮж•°й…ҚзҪ®пјҢж јејҸдёәjsonпјҢж”ҜжҢҒзҡ„еӯ—ж®өдёҺ--target-configзҡ„й…ҚзҪ®зұ»еһӢдёҖиҮҙпјҢеӯ—ж®өзұ»еһӢдёәеӯ—з¬ҰдёІж•°з»„пјҢиЎЁзӨәдёҖдёӘй…ҚзҪ®зұ»еһӢдёӢеҸҜд»Ҙй…ҚзҪ®еӨҡдёӘеҖјгҖӮдёҫдҫӢиҜҙжҳҺпјҡ&#123;"Locale":["zh\_CN","en\_US"], "Device":["phone"]&#125;зӯүеҗҢдәҺ--target-configзҡ„й…ҚзҪ®Locale[zh\_CN,en\_US];Device[phone]гҖӮ  <strong>иҜҙжҳҺпјҡ</strong>  д»ҺAPI version 23ејҖе§ӢпјҢж”ҜжҢҒиҜҘеӯ—ж®өгҖӮ |

<strong>--compressed-configеҸӮж•°иҜҙжҳҺ</strong>

еңЁDevEco Studioй…ҚзҪ®[зә№зҗҶеҺӢзј©](./ide-hvigor-build-profile.md#section2095319147103)зҡ„зј–иҜ‘й…ҚзҪ®еҸӮж•°пјҢзј–иҜ‘еҗҺдјҡеңЁжЁЎеқ—зҡ„build\default\intermediates\res\defaultдёӢз”ҹжҲҗrestoolзҡ„зә№зҗҶеҺӢзј©й…ҚзҪ®ж–Үд»¶opt-compression.jsonпјҢж–Үд»¶з»“жһ„еҰӮдёӢпјҡ

```
{
  "context": {
    // зә№зҗҶеҺӢзј©еә“зҡ„з»қеҜ№и·Ҝеҫ„
    "extensionPath": "xxx\\xxx\\libimage_transcoder_shared.dll"
  },
  "compression": {
    // жҳҜеҗҰеҜ№йў„зҪ®mediaеӣҫзүҮиө„жәҗеҗҜз”Ёзә№зҗҶеҺӢзј©гҖӮtrueпјҡеҗҜз”ЁпјҢfalseпјҡдёҚеҗҜз”ЁгҖӮ
    "media": {
      "enable": true
    },
    // filtersжҳҜйў„зҪ®mediaеӣҫзүҮиө„жәҗзҡ„иҝҮж»Өй…ҚзҪ®еҸӮж•°
    "filters": [
      {
        // зә№зҗҶеҺӢзј©зҡ„ж–№ејҸпјҢtypeдёәиҪ¬жҚўзұ»еһӢпјҢж”ҜжҢҒ"astc"гҖҒ"sut"
        // blockдёәиҪ¬жҚўжү©еұ•еҸӮж•°пјҢеҶіе®ҡз”»иҙЁе’ҢеҺӢзј©зҺҮпјҢеҪ“еүҚд»…ж”ҜжҢҒ"4x4"
        "method": {
          "blocks": "4x4",
          "type": "astc"
        },
        // йңҖиҰҒеҺӢзј©зҡ„mediaеӣҫзүҮиө„жәҗж–Үд»¶з»қеҜ№и·Ҝеҫ„
        "path": [
          "xxx\\MyApplication\\entry\\src\\main\\resources\\base\\media\\startIcon.png",
          "xxx\\MyApplication\\entry\\src\\main\\resources\\base\\media\\icon.png",
        ],
        // йңҖиҰҒиҝҮж»Өзҡ„mediaеӣҫзүҮиө„жәҗж–Үд»¶з»қеҜ№и·Ҝеҫ„
        "exclude_path": [],
        // жҢүеӨ§е°Ҹе’ҢеҲҶиҫЁзҺҮеҢ№й…Қpathдёӯзҡ„еӣҫзүҮиө„жәҗж–Үд»¶и·Ҝеҫ„пјҢз¬ҰеҗҲжқЎд»¶зҡ„ж–Үд»¶е°Ҷиў«еҺӢзј©
        "rules_origin": {
          // дәҢз»ҙж•°з»„пјҢж•°з»„дёӯжҜҸдёӘе…ғзҙ иЎЁзӨәдёҖдёӘеӨ§е°ҸиҢғеӣҙпјҢеҚ•дҪҚдёәеӯ—иҠӮ
          "size": [
            [
              0,
              10485760
            ]
          ],
          // дәҢз»ҙж•°з»„пјҢж•°з»„дёӯжҜҸдёӘе…ғзҙ иЎЁзӨәдёҖдёӘеҲҶиҫЁзҺҮиҢғеӣҙпјҢеҰӮдёӢиЎЁзӨәеҲҶиҫЁзҺҮд»Һ0x0еҲ°1024x1024
          "resolution": [
            [
              {
                "height": 0,
                "width": 0
              },
              {
                "height": 1024,
                "width": 1024
              }
            ]
          ]
        },
        // жҢүеӨ§е°Ҹе’ҢеҲҶиҫЁзҺҮеҢ№й…Қexclude_pathдёӯзҡ„еӣҫзүҮиө„жәҗж–Үд»¶пјҢз¬ҰеҗҲжқЎд»¶зҡ„ж–Үд»¶е°Ҷиў«иҝҮж»Ө
        "rules_exclude": {
          "size": [
            [
              0,
              1048576
            ]
          ],
          "resolution": [
            [
              {
                "height": 0,
                "width": 0
              },
              {
                "height": 64,
                "width": 64
              }
            ]
          ]
        }
      }
    ]
  }
}
```

### restoolж”ҜжҢҒзҡ„еӯҗе‘Ҫд»Ө

| е‘Ҫд»Ө | жҸҸиҝ° |
| --- | --- |
| dump | д»Ҙjsonзҡ„ж јејҸиҫ“еҮәHAPеҢ…дёӯresourceзҡ„еҶ…е®№гҖӮ |

<strong>dumpе‘Ҫд»Ө</strong>

```
restool dump [-h] [config] filePath
```

dumpе‘Ҫд»ӨеҸӮж•°еҲ—иЎЁпјҡ

| еҸӮж•° | жҳҜеҗҰеҸҜзјәзңҒ | жҳҜеҗҰеӯҳеңЁе…ҘеҸӮ | жҸҸиҝ° |
| --- | --- | --- | --- |
| -h | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | её®еҠ©дҝЎжҒҜгҖӮ |
| config | еҸҜзјәзңҒ | дёҚеёҰеҸӮж•° | еҸӘжү“еҚ°HAPеҢ…дёӯиө„жәҗзҡ„йҷҗе®ҡиҜҚдҝЎжҒҜгҖӮ |

зӨәдҫӢпјҡ

```
# жү“еҚ°HAPеҢ…дёӯжүҖжңүзҡ„иө„жәҗдҝЎжҒҜ
restool dump entry.hap
# жү“еҚ°HAPеҢ…дёӯиө„жәҗзҡ„йҷҗе®ҡиҜҚдҝЎжҒҜ
restool dump config entry.hap
```

## дҪҝз”Ёе®һдҫӢ

дҫӢеҰӮпјҢentryзӣ®еҪ•з»“жһ„еҰӮдёӢпјҡ

```
entry/src/main
|    |----resource
|    |    |----base
|    |    |    |----element
|    |    |    |----media
|    |    |    |----profile
|    |    |----rawfile
|    |    |----resfile
|    |----config.json/module.json
```

### зј–иҜ‘иө„жәҗ

зј–иҜ‘иө„жәҗзҡ„ж–№ејҸжңүдёүз§ҚпјҢеҲҶеҲ«жҳҜе…ЁйҮҸиө„жәҗзј–иҜ‘гҖҒеўһйҮҸиө„жәҗзј–иҜ‘е’ҢеҸ еҠ иө„жәҗзј–иҜ‘гҖӮе…¶дёӯеўһйҮҸзј–иҜ‘д»…йў„и§ҲжЁЎејҸеҸҜз”ЁпјҢз”ЁдәҺйў„и§ҲејҖеҸ‘йҳ¶ж®өзҡ„з»„д»¶ж•Ҳжһңпјӣе…ЁйҮҸзј–иҜ‘з”ЁдәҺжһ„е»әе·ҘзЁӢзҡ„иө„жәҗж–Үд»¶пјӣеҸ еҠ зј–иҜ‘ж”ҜжҢҒе°Ҷе·ҘзЁӢдёӯзҡ„иө„жәҗеҸ еҠ иҝӣе·Іжңүзҡ„HAPжЁЎжқҝиө„жәҗдёӯпјҢеӨҚз”Ёе·Ізј–иҜ‘зҡ„иө„жәҗйЎ№гҖӮ

1гҖҒе…ЁйҮҸиө„жәҗзј–иҜ‘пјҢе‘Ҫд»ӨеҰӮдёӢпјҡ

```
restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt -f
```

2гҖҒеўһйҮҸиө„жәҗзј–иҜ‘пјҢе…·дҪ“жӯҘйӘӨеҰӮдёӢпјҡ

жӯҘйӘӨдёҖпјҡз”ҹжҲҗиө„жәҗдёӯй—ҙд»¶пјҢе‘Ҫд»ӨеҰӮдёӢ:

```
restool -x entry/src/main/resource -o out
```

жӯҘйӘӨдәҢпјҡзј–иҜ‘иө„жәҗдёӯй—ҙд»¶пјҢе‘Ҫд»ӨеҰӮдёӢ:

```
restool -i out1 -i out2 -o out -p com.ohos.demo -r out/ResourceTable.txt -j entry/src/main/module.json -f -z
```

3гҖҒеҸ еҠ иө„жәҗзј–иҜ‘пјҢе‘Ҫд»ӨеҰӮдёӢпјҡ

```
# hapResourceдёәи§ЈеҺӢеҗҺзҡ„HAPеҢ…и·Ҝеҫ„
restool -i entry/src/main -i hapResource -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt -f
```

### еӣәе®ҡиө„жәҗID

еӣәе®ҡиө„жәҗIDпјҢе…·дҪ“жӯҘйӘӨеҰӮдёӢпјҡ

жӯҘйӘӨдёҖпјҡеҲӣе»әid\_defined.jsonж–Үд»¶гҖӮеҲӣе»әж–№ејҸжңүдёӨз§ҚпјҢеҲҶеҲ«жҳҜйҖҡиҝҮе‘Ҫд»ӨиЎҢе’ҢиҮӘе®ҡд№үгҖӮ

* ж–№ејҸдёҖпјҡйҖҡиҝҮе‘Ҫд»ӨиЎҢз”ҹжҲҗжӯӨж–Үд»¶пјҢе‘Ҫд»ӨеҰӮдёӢпјҡ

```
restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt --ids out -f
```

* ж–№ејҸдәҢпјҡиҮӘе®ҡд№үж–Үд»¶пјҢж–Үд»¶еҗҚеҝ…йЎ»жҳҜid\_defined.jsonпјҢж–Үд»¶еҶ…е®№еҰӮдёӢпјҡ

```
{
    "record" :
    [
        {
            "id" : "0x01000000", // иө„жәҗйңҖиҰҒеӣәе®ҡзҡ„IDеҖј
            "name" : "app_name", // иө„жәҗеҗҚз§°
            "type" : "string" // иө„жәҗзұ»еһӢ
        }
    ]
}
```

жӯҘйӘӨдәҢпјҡе®ҢжҲҗиө„жәҗIDеӣәе®ҡгҖӮе®ҢжҲҗеӣәе®ҡзҡ„ж–№ејҸжңүдёӨз§ҚпјҢйҖҡиҝҮе‘Ҫд»ӨдёҖе®ҢжҲҗеӣәе®ҡжҲ–иҖ…е°ҶиҮӘе®ҡд№үзҡ„id\_defined.jsonж”ҫеңЁresource/base/element/зӣ®еҪ•дёӢеҗҺйҖҡиҝҮе‘Ҫд»ӨдәҢе®ҢжҲҗеӣәе®ҡгҖӮ

* е‘Ҫд»ӨдёҖпјҡ

```
restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out1 -r out1/ResourceTable.txt --defined-ids out/id_defined.json -f
```

* е‘Ҫд»ӨдәҢпјҡ

```
restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out1 -r out1/ResourceTable.txt  -f
```

## restoolе·Ҙе…·й”ҷиҜҜз Ғ

### 11201001 еҠ иҪҪдҫқиө–еә“еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to load the library 'xxx.dll'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҠ иҪҪдҫқиө–еә“еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

1. дҫқиө–еә“и·Ҝеҫ„й”ҷиҜҜжҲ–и·Ҝеҫ„ж— и®ҝй—®жқғйҷҗгҖӮ
2. дёүж–№дҫқиө–еә“жңӘе®үиЈ…пјҢжҲ–и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–и·Ҝеҫ„ж— и®ҝй—®жқғйҷҗгҖӮ
3. еҮәзҺ°Windowsзі»з»ҹжҠҘй”ҷпјҢз”ұдәҺеңЁз”ЁжҲ·зҺҜеўғеҸҳйҮҸе’Ңзі»з»ҹзҺҜеўғеҸҳйҮҸдёӯпјҢжҺ’еңЁxxx.dllи·Ҝеҫ„д№ӢеүҚзҡ„и·Ҝеҫ„ж–Үд»¶ж— жі•иў«и®ҝй—®пјҢеҜјиҮҙеҠ иҪҪдҫқиө–еә“ж—¶жҗңзҙўзҺҜеўғеҸҳйҮҸй”ҷиҜҜгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

1. жЈҖжҹҘдҫқиө–еә“и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ
2. жҢүз…§й”ҷиҜҜдҝЎжҒҜжҸҗзӨәе®үиЈ…зјәеӨұзҡ„дёүж–№дҫқиө–еә“пјҢе№¶дҝқиҜҒдёүж–№дҫқиө–еә“и·Ҝеҫ„еҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ
3. е°ҶSDKдёӢзҡ„xxx/HarmonyOS/previewer/common/binи·Ҝеҫ„еҸҠдҫқиө–еә“жүҖеңЁи·Ҝеҫ„ж·»еҠ иҮізҺҜеўғеҸҳйҮҸPathзҡ„еүҚдёӨиЎҢпјҢдёӨиҖ…е…ҲеҗҺйЎәеәҸж— йҷҗеҲ¶гҖӮ

### 11203001 JSONж–Үд»¶жү“ејҖеӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to open the JSON file 'xxx.json'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONж–Үд»¶жү“ејҖеӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11203002 JSONж–Үд»¶и§ЈжһҗеӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to parse the JSON file: incorrect format.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONж–Үд»¶ж јејҸй”ҷиҜҜпјҢи§ЈжһҗеӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONж–Үд»¶ж јејҸй”ҷиҜҜпјҢеҰӮеҢ…еҗ«еӨҡдҪҷзҡ„йҖ—еҸ·зӯүгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONж–Үд»¶ж јејҸпјҢеҸҜеҸӮиҖғ[JSON](https://www.json.org/json-zh.html)гҖӮ

### 11203003 JSONиҠӮзӮ№зҡ„зұ»еһӢдёҺйў„жңҹдёҚеҢ№й…Қ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The value type of node 'xxx' does not match. Expected type: xxx.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONдёӯxxxиҠӮзӮ№зҡ„зұ»еһӢй”ҷиҜҜгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONдёӯеҜ№еә”иҠӮзӮ№зҡ„зұ»еһӢй”ҷиҜҜпјҢеҰӮйў„жңҹзұ»еһӢжҳҜstringпјҢе®һйҷ…зұ»еһӢдёәnumberгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONдёӯxxxиҠӮзӮ№зҡ„зұ»еһӢгҖӮ

### 11203004 JSONдёӯзјәе°‘еҝ…йңҖиҠӮзӮ№

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The required node 'xxx' is missing.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONдёӯзјәе°‘еҝ…йңҖзҡ„xxxиҠӮзӮ№гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONдёӯжІЎжңүй…ҚзҪ®еҜ№еә”зҡ„еҝ…йңҖиҠӮзӮ№пјҢеҰӮnameгҖҒvalueзӯүгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONдёӯжҳҜеҗҰзјәе°‘xxxиҠӮзӮ№гҖӮ

### 11203005 JSONдёӯеӯҳеңЁз©әobjectжҲ–з©әж•°з»„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The array or object node 'xxx' cannot be empty.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONдёӯxxxиҠӮзӮ№дёәз©әobjectжҲ–з©әж•°з»„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONдёӯеҜ№еә”иҠӮзӮ№дёәз©әпјҢеҰӮobjectй…ҚзҪ®дёә&#123;&#125;пјҢжҲ–ж•°з»„й…ҚзҪ®дёә[]гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONдёӯxxxиҠӮзӮ№жҳҜеҗҰдёәз©әгҖӮ

### 11203006 JSONдёӯеҢ…еҗ«еӨҡдёӘеӯҗиҠӮзӮ№

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The node 'xxx' in the JSON file can have only one member.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

JSONдёӯxxxиҠӮзӮ№д»…иғҪеҢ…еҗ«дёҖдёӘеӯҗиҠӮзӮ№гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONдёӯеҜ№еә”иҠӮзӮ№еҢ…еҗ«дәҶеӨҡдёӘеӯҗиҠӮзӮ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘxxxиҠӮзӮ№жҳҜеҗҰд»…еҢ…еҗ«дёҖдёӘеӯҗиҠӮзӮ№гҖӮ

### 11203007 ж— ж•Ҳзҡ„JSONиҠӮзӮ№еҗҚз§°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid node name 'xxx'. Valid values: ["boolean","color","float","id","intarray","integer","pattern","plural","strarray","string","symbol","theme"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„JSONиҠӮзӮ№еҗҚз§°xxxгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

JSONдёӯеҜ№еә”иҠӮзӮ№зҡ„еҗҚз§°й”ҷиҜҜпјҢдёҚеңЁжҢҮе®ҡзҡ„еҗҚз§°["boolean","color","float","id","intarray","integer","pattern","plural","strarray","string","symbol","theme"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘJSONдёӯxxxиҠӮзӮ№зҡ„еҗҚз§°жҳҜеҗҰеңЁжҢҮе®ҡзҡ„иҢғеӣҙеҶ…гҖӮ

### 11204001 еҲӣе»әж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to create the directory or file 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҲӣе»әж–Үд»¶еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

ж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11204003 еҲ йҷӨж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to delete the directory or file 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҲ йҷӨж–Үд»¶еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

ж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11204004 жӢ·иҙқж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to copy the file from 'xxx' to 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

жӢ·иҙқж–Үд»¶еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

ж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11204005 жү“ејҖж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to open the file 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

жү“ејҖж–Үд»¶еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

ж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11204006 иҜ»еҸ–ж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to read the file 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иҜ»еҸ–ж–Үд»¶еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

1. ж–Үд»¶и·Ҝеҫ„й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ
2. ж–Үд»¶еҶ…е®№дёәз©әгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

1. жЈҖжҹҘж–Үд»¶и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ
2. жЈҖжҹҘж–Үд»¶еҶ…е®№жҳҜеҗҰдёәз©әгҖӮ

### 11210001 жңӘзҹҘе‘Ҫд»ӨйҖүйЎ№

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Unknown option 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

жңӘзҹҘе‘Ҫд»ӨйҖүйЎ№гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

дёҚж”ҜжҢҒеҜ№еә”е‘Ҫд»ӨйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘе‘Ҫд»ӨжҳҜеҗҰеҮҶзЎ®пјҢеҸҜдҪҝз”Ё-hжҹҘзңӢе‘Ҫд»Өеё®еҠ©дҝЎжҒҜпјҢиҫ“е…ҘжӯЈзЎ®зҡ„е‘Ҫд»ӨйҖүйЎ№е’ҢеҸӮж•°гҖӮ

### 11210002 йҖүйЎ№зјәе°‘еҝ…йңҖеҸӮж•°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Option 'xxx' requires an argument.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҖүйЎ№зјәе°‘еҝ…йңҖзҡ„еҸӮж•°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҖүйЎ№зјәе°‘еҝ…йңҖзҡ„еҸӮж•°пјҢеҰӮ-i/--inputPathжІЎжңүжҢҮе®ҡиҫ“е…Ҙи·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘе‘Ҫд»ӨжҳҜеҗҰеҮҶзЎ®пјҢеҸҜдҪҝз”Ё-hжҹҘзңӢе‘Ҫд»Өеё®еҠ©дҝЎжҒҜпјҢиҫ“е…ҘжӯЈзЎ®зҡ„е‘Ҫд»ӨйҖүйЎ№е’ҢеҸӮж•°гҖӮ

### 11210003 ж— ж•ҲеҸӮж•°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid argument value 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„еҸӮж•°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

е‘Ҫд»ӨйҖүйЎ№еқҮйңҖеёҰжңүеүҚзјҖзҹӯеҲ’зәҝ-пјҢйҖүйЎ№еҜ№еә”зҡ„еҸӮж•°ж— зҹӯеҲ’зәҝпјҢиӢҘиҫ“е…ҘйҖүйЎ№ж—¶йҒ—жјҸдәҶзҹӯеҲ’зәҝпјҢиҜҘйҖүйЎ№е°Ҷиў«еҪ“дҪңеҸӮж•°еӨ„зҗҶпјҢж— жі•з”ҹж•ҲпјҢеҰӮиҫ“е…Ҙrestool inputPathгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘе‘Ҫд»ӨжҳҜеҗҰеҮҶзЎ®пјҢеҸҜдҪҝз”Ё-hжҹҘзңӢе‘Ҫд»Өеё®еҠ©дҝЎжҒҜпјҢиҫ“е…ҘжӯЈзЎ®зҡ„е‘Ҫд»ӨйҖүйЎ№е’ҢеҸӮж•°гҖӮ

### 11210004 ж— ж•Ҳзҡ„иҫ“е…Ҙи·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid input path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иҫ“е…Ҙи·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

-i/--inputPathйҖүйЎ№жҢҮе®ҡзҡ„и·Ҝеҫ„еҸӮж•°й”ҷиҜҜпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘи·Ҝеҫ„еҸӮж•°жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11210005 йҮҚеӨҚзҡ„иҫ“е…Ҙи·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated input path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҮҚеӨҚзҡ„иҫ“е…Ҙи·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡдёӘ-i/--inputPathйҖүйЎ№жҢҮе®ҡдәҶзӣёеҗҢзҡ„иҫ“е…Ҙи·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ-i/--inputPathйҖүйЎ№жҢҮе®ҡзҡ„и·Ҝеҫ„жҳҜеҗҰйҮҚеӨҚгҖӮ

### 11210006 еҢ…еҗҚеӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The package names 'xxx' and 'xxx' conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҢ…еҗҚеӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ-p/--packageNameйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ-p/--packageNameйҖүйЎ№гҖӮ

### 11210007 ж— ж•Ҳзҡ„иҫ“еҮәи·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid output path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иҫ“еҮәи·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

-o/--outputPathжҢҮе®ҡзҡ„иҫ“еҮәи·Ҝеҫ„дёҚеӯҳеңЁпјҢжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘи·Ҝеҫ„еҸӮж•°жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11210008 иҫ“еҮәи·Ҝеҫ„еӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The output paths 'xxx' and 'xxx' conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иҫ“еҮәи·Ҝеҫ„еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ-o/--outputPathйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ-o/--outputPathйҖүйЎ№гҖӮ

### 11210009 йҮҚеӨҚзҡ„иө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated resource header path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҮҚеӨҚзҡ„иө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡдёӘ-r/--resHeaderйҖүйЎ№жҢҮе®ҡдәҶзӣёеҗҢзҡ„иө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ-r/--resHeaderйҖүйЎ№жҢҮе®ҡзҡ„иө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„жҳҜеҗҰйҮҚеӨҚгҖӮ

### 11210010 жЁЎеқ—еҗҚз§°еӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The module names 'xxx' and 'xxx' conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

жЁЎеқ—еҗҚз§°еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ-m/--modulesйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ-m/--modulesйҖүйЎ№гҖӮ

### 11210011 йҮҚеӨҚзҡ„жЁЎеқ—еҗҚз§°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated module name 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҮҚеӨҚзҡ„жЁЎеқ—еҗҚз§°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

-m/--modulesйҖүйЎ№жҢҮе®ҡдәҶйҮҚеӨҚзҡ„жЁЎеқ—еҗҚз§°пјҢеҰӮ-m entry,entryгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ-m/--modulesйҖүйЎ№жҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°жҳҜеҗҰйҮҚеӨҚгҖӮ

### 11210012 еә”з”Ёй…ҚзҪ®ж–Үд»¶еӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The paths 'xxx' and 'xxx' of the module.json (in the stage model) or config.json (in the FA model) file conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еә”з”Ёй…ҚзҪ®ж–Үд»¶[module.jsonпјҲStageжЁЎеһӢпјү](./module-configuration-file.md)жҲ–[config.jsonпјҲFAжЁЎеһӢпјү](./application-configuration-file-overview-fa.md)зҡ„и·Ҝеҫ„еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ-j/--jsonйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ-j/--jsonйҖүйЎ№гҖӮ

### 11210013 ж— ж•Ҳзҡ„иө„жәҗиө·е§Ӣid

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid start ID 'xxx'. It is out of range.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иө„жәҗиө·е§ӢidгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҖҡиҝҮ-e/--startIdжҢҮе®ҡзҡ„иө„жәҗиө·е§ӢidдёҚеңЁжҢҮе®ҡиҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗиө·е§ӢidжҳҜеҗҰеңЁ[0x01000000, 0x06FFFFFF) жҲ– [0x08000000, 0xFFFFFFFF)зҡ„иҢғеӣҙеҶ…гҖӮ

### 11210014 йҮҚеӨҚзҡ„еўһйҮҸиө„жәҗж–Үд»¶и·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated append path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҮҚеӨҚзҡ„еўһйҮҸиө„жәҗж–Үд»¶и·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡдёӘ-x/--appendйҖүйЎ№жҢҮе®ҡдәҶзӣёеҗҢзҡ„еўһйҮҸиө„жәҗж–Үд»¶и·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ-x/--appendжҢҮе®ҡзҡ„еўһйҮҸиө„жәҗж–Үд»¶и·Ҝеҫ„жҳҜеҗҰйҮҚеӨҚгҖӮ

### 11210015 target-configеӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The target configurations 'xxx' and 'xxx' conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еӨҡдёӘtarget-configйҖүйЎ№жҢҮе®ҡзҡ„еҸӮж•°еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ--target-configйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ--target-configйҖүйЎ№гҖӮ

### 11210016 ж— ж•Ҳзҡ„target-config

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid target configuration argument 'xxx'. The argument format for option --target-config should be like 'Locale[zh\_CN,en\_US];Device[phone]'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„target-configеҸӮж•°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

--target-configйҖүйЎ№жҢҮе®ҡзҡ„еҸӮж•°ж јејҸй”ҷиҜҜгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ--target-configйҖүйЎ№еҜ№еә”еҸӮж•°ж јејҸжҳҜеҗҰеҮҶзЎ®пјҢеҰӮпјҡLocale[zh\_CN,en\_US];Device[phone]пјҢе…·дҪ“ж јејҸдҝЎжҒҜеҸҜд»ҘеҸӮиҖғ[restoolж”ҜжҢҒзҡ„е‘Ҫд»ӨйҖүйЎ№](#restoolж”ҜжҢҒзҡ„е‘Ҫд»ӨйҖүйЎ№)дёӯе…ідәҺtarget-configзҡ„иҜҙжҳҺгҖӮ

### 11210017 ж— ж•Ҳзҡ„зі»з»ҹиө„жәҗid\_defined.jsonи·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid system id\_defined.json path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„зі»з»ҹиө„жәҗid\_defined.jsonи·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҖҡиҝҮ--defined-sysidsжҢҮе®ҡзҡ„зі»з»ҹиө„жәҗзҡ„id\_defined.jsonи·Ҝеҫ„й”ҷиҜҜжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘзі»з»ҹиө„жәҗзҡ„id\_defined.jsonи·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11210018 йҮҚеӨҚзҡ„зі»з»ҹиө„жәҗid\_defined.jsonи·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated system id\_defined.json path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

--defined-sysidsйҖүйЎ№жҢҮе®ҡзҡ„ж–Үд»¶и·Ҝеҫ„йҮҚеӨҚгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡдёӘ--defined-sysidsйҖүйЎ№жҢҮе®ҡдәҶзӣёеҗҢзҡ„зі»з»ҹиө„жәҗid\_defined.jsonи·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ--defined-sysidsйҖүйЎ№жҢҮе®ҡзҡ„зі»з»ҹиө„жәҗid\_defined.jsonж–Үд»¶и·Ҝеҫ„жҳҜеҗҰйҮҚеӨҚгҖӮ

### 11210019 compressed-configеӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The compression JSON paths 'xxx' and 'xxx' conflict.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еӨҡдёӘ--compressed-configйҖүйЎ№жҢҮе®ҡзҡ„еҸӮж•°еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӨҡж¬ЎжҢҮе®ҡдәҶ--compressed-configйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеӨҡж¬ЎжҢҮе®ҡ--compressed-configйҖүйЎ№гҖӮ

### 11210020 еҸӮж•°йқһASCIIеҖј

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The argument value 'xxx' is not an ASCII value.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҸӮж•°йқһASCIIеҖјгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

иҫ“е…ҘгҖҒиҫ“еҮәи·Ҝеҫ„зӯүеҸӮж•°дёӯеӯҳеңЁдёӯж–ҮжҲ–е…¶д»–йқһASCIIеӯ—з¬ҰгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘеҸӮж•°дёӯжҳҜеҗҰеӯҳеңЁдёӯж–ҮжҲ–иҖ…е…¶д»–йқһASCIIеӯ—з¬ҰгҖӮ

### 11210021 йҖүйЎ№д№Ӣй—ҙеӯҳеңЁдә’ж–Ҙ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Options 'xxx' and 'xxx' cannot be used together.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

дёҚиғҪеҗҢж—¶жҢҮе®ҡдёӨдёӘдә’ж–Ҙзҡ„йҖүйЎ№гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҗҢж—¶жҢҮе®ҡдәҶдёӨдёӘдә’ж–Ҙзҡ„йҖүйЎ№пјҢеҰӮ-xе’Ң--target-configгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘе‘Ҫд»ӨжҳҜеҗҰеҮҶзЎ®пјҢйҒҝе…ҚжҢҮе®ҡдә’ж–Ҙзҡ„йҖүйЎ№пјҢеҸҜд»ҘдҪҝз”Ё-hжҹҘзңӢе‘Ҫд»Өеё®еҠ©дҝЎжҒҜпјҢиҫ“е…ҘжӯЈзЎ®зҡ„е‘Ҫд»ӨйҖүйЎ№е’ҢеҸӮж•°гҖӮ

### 11210022 еҢ…еҗҚдёәз©ә

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The package name is empty. It should be specified with option -p/--packageName.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҢ…еҗҚдёәз©әгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

жңӘжҢҮе®ҡ-p/--packageNameйҖүйЎ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰйҖҡиҝҮ-p/--packageNameйҖүйЎ№жҢҮе®ҡеҢ…еҗҚгҖӮ

### 11210023 иө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„дёәз©ә

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The resource header path (for example, ./ResourceTable.js, ./ResourceTable.h) is empty. It should be specified with option -r/--resHeader.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иө„жәҗеӨҙж–Үд»¶зҡ„и·Ҝеҫ„дёәз©әгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

жңӘйҖҡиҝҮ-r/--resHeaderйҖүйЎ№жҢҮе®ҡиө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰйҖҡиҝҮ-r/--resHeaderйҖүйЎ№жҢҮе®ҡиө„жәҗеӨҙж–Үд»¶и·Ҝеҫ„гҖӮ

### 11210024 dumpе‘Ҫд»Өзјәе°‘HAPеҢ…и·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The HAP path of the resource dump command is missing.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

dumpе‘Ҫд»Өзјәе°‘HAPеҢ…и·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

dumpе‘Ҫд»ӨжңӘжҢҮе®ҡHAPеҢ…и·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘdumpе‘Ҫд»ӨжҳҜеҗҰжҢҮе®ҡHAPеҢ…и·Ҝеҫ„пјҢеҰӮпјҡrestool dump xxx/entry.hapгҖӮ

### 11210025 dumpе‘Ҫд»ӨжҢҮе®ҡзҡ„HAPеҢ…и·Ҝеҫ„ж— ж•Ҳ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid HAP path 'xxx' in the resource dump command.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

dumpе‘Ҫд»ӨжҢҮе®ҡHAPеҢ…и·Ҝеҫ„ж— ж•ҲгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

dumpе‘Ҫд»ӨжҢҮе®ҡзҡ„HAPеҢ…и·Ҝеҫ„й”ҷиҜҜжҲ–ж— и®ҝй—®жқғйҷҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘdumpе‘Ҫд»ӨжҢҮе®ҡзҡ„HAPеҢ…и·Ҝеҫ„жҳҜеҗҰеҮҶзЎ®дё”жңүи®ҝй—®жқғйҷҗгҖӮ

### 11210026 ж— ж•Ҳзҡ„еӯҗзәҝзЁӢж•°йҮҸ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid thread count 'xxx'. It should be an integer greater than 0.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„еӯҗзәҝзЁӢж•°йҮҸгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

--threadйҖүйЎ№жҢҮе®ҡзҡ„еӯҗзәҝзЁӢж•°йҮҸдёәиҙҹж•°жҲ–е°Ҹж•°гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ--threadйҖүйЎ№зҡ„еҸӮж•°жҳҜеҗҰдёәеӨ§дәҺ0зҡ„ж•ҙж•°гҖӮ

### 11211001 иҫ“еҮәи·Ҝеҫ„е·ІеӯҳеңЁ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The output path exists. Specify option -f/--forceWrite to overwrite.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иҫ“еҮәи·Ҝеҫ„е·ІеӯҳеңЁгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҖҡиҝҮ-o/--outputжҢҮе®ҡзҡ„иҫ“еҮәи·Ҝеҫ„дёӢе·ІеӯҳеңЁж–Үд»¶пјҢж— жі•зӣҙжҺҘиҰҶзӣ–гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиҫ“еҮәи·Ҝеҫ„дёӢжҳҜеҗҰе·Іжңүж–Үд»¶пјҢеҸҜжүӢеҠЁеҲ йҷӨжҲ–жҢҮе®ҡ-f/--forceWriteйҖүйЎ№ејәеҲ¶иҰҶзӣ–гҖӮ

### 11211002 зјәе°‘жЁЎеқ—й…ҚзҪ®ж–Үд»¶и·Ҝеҫ„

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

There are multiple input paths, but the path of the module.json (in the stage model) or config.json (in the FA model) file is not specified with option -j/--json.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

зјәе°‘еә”з”Ёй…ҚзҪ®ж–Үд»¶[module.jsonпјҲStageжЁЎеһӢпјү](./module-configuration-file.md)жҲ–[config.jsonпјҲFAжЁЎеһӢпјү](./application-configuration-file-overview-fa.md)зҡ„и·Ҝеҫ„гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҪ“йҖҡиҝҮ-i/--inputPathд»…жҢҮе®ҡдәҶеҚ•дёӘиҫ“е…Ҙи·Ҝеҫ„ж—¶пјҢrestoolй»ҳи®Өд»Һиҫ“е…Ҙи·Ҝеҫ„зҡ„зҲ¶зӣ®еҪ•иҜ»еҸ–еә”з”Ёй…ҚзҪ®ж–Үд»¶пјӣеҪ“жҢҮе®ҡдәҶеӨҡдёӘиҫ“е…Ҙи·Ҝеҫ„ж—¶пјҢеҰӮrestool -i xxx\AppScope -i xxx\entry\mainпјҢйңҖиҰҒйҖҡиҝҮ-j/--jsonжҳҺзЎ®жҢҮе®ҡеә”з”Ёй…ҚзҪ®ж–Үд»¶зҡ„и·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰйҖҡиҝҮ-j/--jsonжҳҺзЎ®жҢҮе®ҡеә”з”Ёй…ҚзҪ®ж–Үд»¶и·Ҝеҫ„гҖӮ

### 11211003 ж— ж•Ҳзҡ„жЁЎеқ—зұ»еһӢ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid module type 'xxx'. Valid values: ["entry", "har", "shared", "feature"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„жЁЎеқ—зұ»еһӢгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еә”з”Ёй…ҚзҪ®ж–Үд»¶[module.jsonпјҲStageжЁЎеһӢпјү](./module-configuration-file.md)жҲ–[config.jsonпјҲFAжЁЎеһӢпјү](./application-configuration-file-overview-fa.md)дёӯжҢҮе®ҡзҡ„жЁЎеқ—зұ»еһӢй”ҷиҜҜпјҢеҸ–еҖјдёҚеңЁ["entry", "har", "shared", "feature"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжЁЎеқ—зұ»еһӢжҳҜеҗҰеңЁжҢҮе®ҡзҡ„иҢғеӣҙеҶ…гҖӮ

### 11211004 иө„жәҗиө·е§ӢidдёҺid\_defined.jsonеӯҳеңЁеҶІзӘҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The start ID 'xxx' specified by option -e/--startId conflict with the IDs in the id\_defined.json file.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

йҖҡиҝҮ-e/--startIdжҢҮе®ҡзҡ„иө„жәҗиө·е§ӢidдёҺid\_defined.jsonж–Үд»¶еӯҳеңЁеҶІзӘҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

й»ҳи®Өжғ…еҶөдёӢпјҢиө„жәҗиө·е§Ӣidдёә0x01000000пјҢзј–иҜ‘ж—¶иө„жәҗidдҫқж¬ЎйҖ’еўһпјҢеҗҢж—¶restoolжҸҗдҫӣдәҶдёӨз§Қж–№ејҸиҮӘе®ҡд№үиө„жәҗidпјҡ

1. йҖүйЎ№-e/--startIdпјҡеҸҜд»ҘеңЁ[0x01000000, 0x06FFFFFF) жҲ– [0x08000000, 0xFFFFFFFF)зҡ„иҢғеӣҙеҶ…жҢҮе®ҡиө„жәҗиө·е§ӢidгҖӮ
2. [еӣәе®ҡиө„жәҗID](#еӣәе®ҡиө„жәҗid)пјҡйҖҡиҝҮid\_defined.jsonж–Үд»¶жҢҮе®ҡиө„жәҗidгҖӮ

иӢҘеҗҢж—¶дҪҝз”ЁдёӨз§Қж–№ејҸпјҢеҸҜиғҪеҜјиҮҙеҗҢдёҖдёӘиө„жәҗеңЁдёӨз§Қж–№ејҸдёӢи®Ўз®—еҫ—еҲ°зҡ„иө„жәҗidеҖјдёҚдёҖиҮҙпјҢеӯҳеңЁеҶІзӘҒгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘжҳҜеҗҰеҗҢж—¶дҪҝз”ЁдёҠиҝ°дёӨз§Қж–№ејҸиҮӘе®ҡд№үиө„жәҗidгҖӮ

### 11211007 id\_defined.jsonдёӯзҡ„иө„жәҗзұ»еһӢж— ж•Ҳ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid resource type 'xxx' in the id\_defined.json file. Valid values: ["boolean","color","float","id","intarray","integer","pattern","plural","strarray","string","symbol","theme"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

id\_defined.jsonдёӯзҡ„иө„жәҗзұ»еһӢж— ж•ҲгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

id\_defined.jsonдёӯиө„жәҗзұ»еһӢtypeзҡ„еҸ–еҖјдёҚеңЁ["boolean","color","float","id","intarray","integer","pattern","plural","strarray","string","symbol","theme"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗзұ»еһӢжҳҜеҗҰеңЁжҢҮе®ҡиҢғеӣҙеҶ…гҖӮ

### 11211008 id\_defined.jsonдёӯзҡ„иө„жәҗidж— ж•Ҳ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid ID value 'xxx' in the id\_defined.json file. It should be a hexadecimal string, match the pattern ^0[xX][0-9a-fA-F]&#123;8&#125;, and be in the scope [0x01000000,0x06FFFFFF] or [0x08000000,0xFFFFFFFF].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

id\_defined.jsonдёӯиө„жәҗidж— ж•ҲгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

1. id\_defined.jsonдёӯиө„жәҗidйқһеҚҒе…ӯиҝӣеҲ¶ж•°гҖӮ
2. idеҸ–еҖјдёҚеңЁ[0x01000000,0x06FFFFFF] жҲ– [0x08000000,0xFFFFFFFF]зҡ„иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗidжҳҜеҗҰдёәеҚҒе…ӯиҝӣеҲ¶ж јејҸдё”еҸ–еҖјеңЁ[0x01000000,0x06FFFFFF] жҲ– [0x08000000,0xFFFFFFFF]иҢғеӣҙеҶ…гҖӮ

### 11211012 id\_defined.jsonе®ҡд№үдәҶйҮҚеӨҚзҡ„id

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The names 'xxx' and 'xxx' in the id\_defined.json file define the same ID.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

id\_defined.jsonдёӯдёӨдёӘиө„жәҗе®ҡд№үдәҶеҗҢдёҖдёӘиө„жәҗidеҖјгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

id\_defined.jsonдёӯдёӨдёӘиө„жәҗе®ҡд№үдәҶеҗҢдёҖдёӘиө„жәҗidеҖјгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘid\_defined.jsonдёӯзҡ„иө„жәҗidжҳҜеҗҰе”ҜдёҖдё”еҸ–еҖјеңЁ[0x01000000,0x06FFFFFF] жҲ– [0x08000000,0xFFFFFFFF]иҢғеӣҙеҶ…гҖӮ

### 11211014 й”ҷиҜҜзҡ„жЁЎеқ—еҗҚз§°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The module name 'xxx' is not found in ["yyy","zzz"], which is specified by -m/--modules.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еә”з”Ёй…ҚзҪ®ж–Үд»¶дёӯзҡ„жЁЎеқ—еҗҚз§°дёҚеңЁ-m/--modulesжҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°еҲ—иЎЁеҶ…гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

1. -m/--modulesжҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°еҲ—иЎЁй”ҷиҜҜгҖӮ
2. еә”з”Ёй…ҚзҪ®ж–Үд»¶[module.jsonпјҲStageжЁЎеһӢпјү](./module-configuration-file.md)жҲ–[config.jsonпјҲFAжЁЎеһӢпјү](./application-configuration-file-overview-fa.md)дёӯnameжҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°й”ҷиҜҜгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘ-m/--modulesжҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°еҲ—иЎЁдёӯжҳҜеҗҰеҢ…еҗ«еә”з”Ёй…ҚзҪ®ж–Үд»¶дёӯnameжҢҮе®ҡзҡ„жЁЎеқ—еҗҚз§°гҖӮ

### 11211101 ж— ж•Ҳзҡ„иө„жәҗж–Үд»¶

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to scan resources: invalid path 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

жү«жҸҸиө„жәҗеӨұиҙҘпјҢж— ж•Ҳзҡ„иө„жәҗж–Үд»¶гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

иө„жәҗж–Үд»¶дёҚз¬ҰеҗҲиҰҒжұӮпјҢжҜ”еҰӮпјҡ

1. rawfileеә”иҜҘжҳҜдёҖдёӘж–Үд»¶еӨ№пјҢе®һйҷ…жҳҜж–Үд»¶гҖӮ
2. base/elementдёӢеә”иҜҘйғҪжҳҜJSONж–Үд»¶пјҢе®һйҷ…еӯҳеңЁж–Үд»¶еӨ№гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗж–Үд»¶зҡ„зұ»еһӢжҳҜеҗҰжӯЈзЎ®пјҢеҸҜеҸӮиҖғ[иө„жәҗеҲҶзұ»дёҺи®ҝй—®-иө„жәҗеҲҶзұ»](./resource-categories-and-access.md#иө„жәҗеҲҶзұ»)дёӯе…ідәҺеҗ„зұ»иө„жәҗж–Үд»¶зҡ„иҜҙжҳҺгҖӮ

### 11211103 ж— ж•Ҳзҡ„йҷҗе®ҡиҜҚзӣ®еҪ•

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid qualifier key 'xxx'. It should match the pattern of the qualifiers directory, for example zh\_CN or en\_US.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„йҷҗе®ҡиҜҚзӣ®еҪ•гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҷҗе®ҡиҜҚзӣ®еҪ•еҗҚз§°й”ҷиҜҜгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘйҷҗе®ҡиҜҚзӣ®еҪ•еҗҚз§°жҳҜеҗҰеҮҶзЎ®пјҢйҷҗе®ҡиҜҚзӣ®еҪ•е‘ҪеҗҚи§„еҲҷеҸҜеҸӮиҖғ[иө„жәҗеҲҶзұ»дёҺи®ҝй—®-йҷҗе®ҡиҜҚзӣ®еҪ•](./resource-categories-and-access.md#иө„жәҗзӣ®еҪ•)гҖӮ

### 11211104 ж— ж•Ҳзҡ„иө„жәҗз»„зӣ®еҪ•

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid resource directory name 'xxx'. Valid values: ["element","media","profile"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иө„жәҗз»„зӣ®еҪ•еҗҚз§°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

йҷҗе®ҡиҜҚзӣ®еҪ•дёӢзҡ„иө„жәҗз»„зӣ®еҪ•еҗҚз§°й”ҷиҜҜпјҢдёҚеңЁ["element","media","profile"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘйҷҗе®ҡиҜҚзӣ®еҪ•дёӢжҳҜеҗҰд»…еҢ…еҗ«[иө„жәҗз»„зӣ®еҪ•](./resource-categories-and-access.md#иө„жәҗз»„зӣ®еҪ•)пјҡelementпјҢmediaе’ҢprofileгҖӮ

### 11211106 ж— ж•Ҳзҡ„зҝ»иҜ‘зҠ¶жҖҒ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid translation priority value 'xxx'. Valid values: ["code","translate","LT","customer"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„зҝ»иҜ‘зҠ¶жҖҒгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еӯ—з¬ҰдёІжҲ–[еҚ•еӨҚж•°](./l10n-singular-plural.md)иө„жәҗзҡ„еҸҜзҝ»иҜ‘еұһжҖ§attrдёӢзҡ„зҝ»иҜ‘зҠ¶жҖҒеұһжҖ§priorityй…ҚзҪ®й”ҷиҜҜпјҢдёҚеңЁ["code","translate","LT","customer"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘзҝ»иҜ‘зҠ¶жҖҒpriorityзҡ„еҖјжҳҜеҗҰеҮҶзЎ®пјҢеҸҜеҸӮиҖғ[иө„жәҗеҸҜзҝ»иҜ‘зү№жҖ§](./resource-categories-and-access.md#иө„жәҗеҸҜзҝ»иҜ‘зү№жҖ§)дёӯе…ідәҺpriorityзҡ„иҜҙжҳҺгҖӮ

### 11211107 дёҚж”ҜжҢҒзҡ„elementиө„жәҗзұ»еһӢ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Unsupported element resource type 'xxx'. Valid values: ["integer","string","strarray","intarray","boolean","color","theme","plural","float","pattern","symbol"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

дёҚж”ҜжҢҒзҡ„elementиө„жәҗзұ»еһӢгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

elementзӣ®еҪ•дёӢjsonиө„жәҗж–Үд»¶ж”ҜжҢҒзҡ„иө„жәҗзұ»еһӢдёә["integer","string","strarray","intarray","boolean","color","theme","plural","float","pattern","symbol"]пјҢдёҚж”ҜжҢҒ"id"гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘelementиө„жәҗзҡ„зұ»еһӢжҳҜеҗҰеҮҶзЎ®пјҢеҸҜеҸӮиҖғ[иө„жәҗз»„зӣ®еҪ•](./resource-categories-and-access.md#иө„жәҗз»„зӣ®еҪ•)дёӯе…ідәҺelementиө„жәҗзҡ„иҜҙжҳҺгҖӮ

### 11211108 ж— ж•Ҳзҡ„йўңиүІеҖј

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid color value 'xxx' of the resource 'xxx'. It can only reference '$color:xxx' or be '#rgb', '#argb', '#rrggbb', or '#aarrggbb'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„йўңиүІеҖјгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

colorиө„жәҗеҸӘж”ҜжҢҒд»ҘдёӢдёӨз§Қж јејҸпјҡ

1. еј•з”Ёе…¶д»–colorиө„жәҗпјҢеҰӮ$color:xxxеј•з”Ёеә”з”ЁиҮӘиә«colorиө„жәҗпјҢжҲ–$ohos:color:xxxеј•з”Ёзі»з»ҹcolorиө„жәҗгҖӮ
2. д»Ҙ#ејҖеӨҙзҡ„rgbйўңиүІеҖјж јејҸпјҢеҰӮ#rgb,#argb,#rrggbb,#aarrggbbгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘcolorиө„жәҗжҳҜеҗҰдёәжӯЈзЎ®зҡ„еј•з”Ёж јејҸжҲ–rgbж јејҸгҖӮ

### 11211109 ж— ж•Ҳзҡ„иө„жәҗеј•з”Ё

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid resource reference $xxx:xxx. Supported reference: $(ohos:)?xxx:xxx.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иө„жәҗеј•з”ЁгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

иө„жәҗеј•з”ЁеҸӘйҖӮз”ЁдәҺеҗҢзұ»еһӢиө„жәҗд№Ӣй—ҙпјҢеҰӮstring.jsonдёӯзҡ„еӯ—з¬ҰдёІиө„жәҗеҸҜд»Ҙз”Ё$string:xxxеј•з”Ёеә”з”ЁиҮӘиә«зҡ„еӯ—з¬ҰдёІиө„жәҗпјҢжҲ–дҪҝз”Ё$ohos:string:xxxеј•з”Ёзі»з»ҹеӯ—з¬ҰдёІиө„жәҗпјҢдҪҶдёҚиғҪйҖҡиҝҮ$integer:xxxеј•з”Ёж•ҙж•°иө„жәҗгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗеј•з”Ёж–№ејҸжҳҜеҗҰжӯЈзЎ®гҖӮ

### 11211110 themeиө„жәҗзҡ„parentдёәз©ә

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The parent value of resource 'xxx' is empty. It should be a valid resource name.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

themeиө„жәҗзҡ„parentеҖјдёәз©әгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

themeиө„жәҗзҡ„parentеұһжҖ§жҳҜеҸҜйҖүзҡ„пјҢе…¶еҖјйңҖй…ҚзҪ®дёәе…¶д»–themeиө„жәҗзҡ„еҗҚз§°пјҢдёҚиғҪжҳҜз©әеӯ—з¬ҰдёІгҖӮеҰӮдёӢжӯЈзЎ®зӨәдҫӢпјҡ

```
{
  "theme": [
    {
      "name": "base",
      "value": [
        {
          "name": "width",
          "value": "wrap_content"
        },
        {
          "name": "height",
          "value": "wrap_content"
        },
        {
          "name": "size",
          "value": "25dp"
        }
      ]
    },
    {
      "name": "child",
      "parent": "base",
      "value": [
        {
          "name": "noTitle",
          "value": "yes"
        }
      ]
    }
  ]
}
```

е…¶дёӯеЈ°жҳҺдәҶдёӨдёӘthemeиө„жәҗbaseе’ҢchildпјҢbaseдёҚеҢ…еҗ«parentеұһжҖ§пјҢchildзҡ„parentй…ҚзҪ®дёә"base"гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘthemeиө„жәҗзҡ„parentжҳҜеҗҰдёәз©әпјҢеҰӮж— йңҖparentеұһжҖ§пјҢеҸҜд»Ҙе°Ҷе…¶з§»йҷӨгҖӮ

### 11211111 ж•°з»„зұ»еһӢзҡ„иө„жәҗи¶…й•ҝ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The array resource 'xxx' is too large. The total length of the value of the array elements cannot exceed 65535.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж•°з»„зұ»еһӢзҡ„иө„жәҗи¶…й•ҝгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҚ•дёӘж•°з»„зұ»еһӢиө„жәҗжҖ»й•ҝеәҰи¶…иҝҮдәҶ65535дёӘеӯ—иҠӮгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘж•°з»„зұ»еһӢиө„жәҗжҳҜеҗҰи¶…й•ҝпјҢеҸҜд»Ҙе°Ҷе…¶жӢҶеҲҶдёәеӨҡдёӘж•°з»„иө„жәҗгҖӮ

### 11211112 ж— ж•Ҳзҡ„еҚ•еӨҚж•°иө„жәҗзұ»еҲ«

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid quantity 'xxx' of the plural resource 'xxx'. Valid values: ["zero","one","two","few","many","other"].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„еҚ•еӨҚж•°иө„жәҗзұ»еҲ«гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҚ•еӨҚж•°иө„жәҗзҡ„зұ»еҲ«еұһжҖ§quantityй…ҚзҪ®й”ҷиҜҜпјҢдёҚеңЁ["zero","one","two","few","many","other"]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘеҚ•еӨҚж•°зҡ„зұ»еҲ«жҳҜеҗҰеҮҶзЎ®пјҢеҸҜеҸӮиҖғ[ж”ҜжҢҒеҚ•еӨҚж•°](./l10n-singular-plural.md)дёӯе…ідәҺеҚ•еӨҚж•°зұ»еҲ«зҡ„иҜҙжҳҺгҖӮ

### 11211113 еҚ•еӨҚж•°иө„жәҗзҡ„зұ»еҲ«йҮҚеӨҚ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Duplicated quantity 'xxx' of the plural resource 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҚ•еӨҚж•°иө„жәҗзҡ„зұ»еҲ«йҮҚеӨҚгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҚ•еӨҚж•°иө„жәҗдёӯйҮҚеӨҚеЈ°жҳҺдәҶзӣёеҗҢзҡ„зұ»еҲ«пјҢеҰӮдёӢй”ҷиҜҜзӨәдҫӢдёӯeat\_appleйҮҚеӨҚеЈ°жҳҺдәҶзұ»еҲ«oneпјҡ

```
{
  "plural": [
    {
      "name": "eat_apple",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘеҚ•еӨҚж•°иө„жәҗеЈ°жҳҺзҡ„зұ»еҲ«жҳҜеҗҰйҮҚеӨҚпјҢеҸҜеҸӮиҖғ[ж”ҜжҢҒеҚ•еӨҚж•°](./l10n-singular-plural.md)дёӯе…ідәҺеҚ•еӨҚж•°зұ»еҲ«зҡ„иҜҙжҳҺгҖӮ

### 11211114 еҚ•еӨҚж•°иө„жәҗзјәе°‘otherзұ»еҲ«

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The plural resource 'xxx' should contain the 'other' quantity.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еҚ•еӨҚж•°иө„жәҗеә”иҜҘеҢ…еҗ«otherзұ»еҲ«гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еҚ•еӨҚж•°иө„жәҗзјәе°‘otherзұ»еҲ«зҡ„еЈ°жҳҺгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘеҚ•еӨҚж•°иө„жәҗжҳҜеҗҰеҢ…еҗ«otherзұ»еҲ«зҡ„еЈ°жҳҺпјҢеҸҜеҸӮиҖғ[ж”ҜжҢҒеҚ•еӨҚж•°](./l10n-singular-plural.md)дёӯе…ідәҺеҚ•еӨҚж•°зұ»еҲ«зҡ„иҜҙжҳҺгҖӮ

### 11211115 ж— ж•Ҳзҡ„symbolиө„жәҗ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid value 'xxx' of the symbol resource 'xxx'. It should be in the scope [0xF0000,0xFFFFF] or [0x100000,0x10FFFF].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„symbolиө„жәҗеҖјгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

symbolиө„жәҗзҡ„еҖјдёҚеңЁ[0xF0000,0xFFFFF] жҲ– [0x100000,0x10FFFF]иҢғеӣҙеҶ…гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘsymbolиө„жәҗзҡ„еҖјжҳҜеҗҰеңЁжҢҮе®ҡиҢғеӣҙеҶ…гҖӮ

### 11211116 ж— ж•Ҳзҡ„иө„жәҗеҗҚз§°

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Invalid resource name 'xxx'. It should match the pattern [a-zA-Z0-9\_].

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

ж— ж•Ҳзҡ„иө„жәҗеҗҚз§°гҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

иө„жәҗеҗҚз§°йңҖиҰҒдёҺи§„еҲҷ[a-zA-Z0-9\_]еҢ№й…ҚпјҢеҸӘиғҪеҢ…еҗ«еӨ§е°ҸеҶҷеӯ—жҜҚгҖҒж•°еӯ—е’ҢдёӢеҲ’зәҝгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗеҗҚз§°дёҺи§„еҲҷ[a-zA-Z0-9\_]жҳҜеҗҰеҢ№й…ҚгҖӮ

### 11211117 иө„жәҗйҮҚеӨҚе®ҡд№ү

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Resource 'xxx' conflict. It is first declared at 'xxx' and declared again at 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иө„жәҗйҮҚеӨҚе®ҡд№үгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еңЁеӨҡеӨ„е®ҡд№үдәҶеҗҢзұ»еһӢеҗҢеҗҚзҡ„иө„жәҗпјҢеӯҳеңЁеҶІзӘҒгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘиө„жәҗжҳҜеҗҰйҮҚеӨҚе®ҡд№үпјҢеҸҜд»Ҙдҝ®ж”№иө„жәҗеҗҚз§°жҲ–еҲ йҷӨйҮҚеӨҚиө„жәҗгҖӮ

### 11211118 иө„жәҗidи¶…иҝҮжңҖеӨ§еҖј

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The resource ID 'xxx' exceeds the maximum ID 'xxx'.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

иө„жәҗidи¶…иҝҮжңҖеӨ§еҖјгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

еә”з”Ёиө„жәҗidзҡ„иҢғеӣҙдёә[0x01000000,0x06FFFFFF] жҲ– [0x08000000,0xFFFFFFFF]пјҢиө„жәҗиҝҮеӨҡпјҢжҲ–жҢҮе®ҡдәҶиҫғеӨ§зҡ„иө„жәҗиө·е§ӢidпјҢеҸҜиғҪеҜјиҮҙidжәўеҮәи¶…иҝҮжңҖеӨ§еҖј0x06FFFFFF жҲ– 0xFFFFFFFFгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

1. еҲ йҷӨж— з”Ёиө„жәҗгҖӮ
2. жҢҮе®ҡиҫғе°Ҹзҡ„иө„жәҗиө·е§ӢidгҖӮ

### 11211120 еј•з”Ёзҡ„иө„жәҗжңӘе®ҡд№ү

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

The resource reference '$xxx:xxx' is not defined.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

еј•з”Ёзҡ„иө„жәҗжңӘе®ҡд№үгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

1. еј•з”Ёзҡ„иө„жәҗдёҚеӯҳеңЁпјҢеҰӮиө„жәҗе·Іиў«еҲ йҷӨжҲ–йҮҚе‘ҪеҗҚгҖӮ
2. еј•з”Ёзҡ„иө„жәҗжүҖеңЁзҡ„зӣ®еҪ•жңӘйҖҡиҝҮ-i/--inputPathжҢҮе®ҡдёәиҫ“е…Ҙи·Ҝеҫ„гҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

1. жЈҖжҹҘжҠҘй”ҷзҡ„иө„жәҗжҳҜеҗҰеӯҳеңЁгҖӮ
2. жЈҖжҹҘиө„жәҗжүҖеңЁзҡ„resourcesзҡ„зҲ¶зӣ®еҪ•жҳҜеҗҰйҖҡиҝҮ-i/--inputPathжҢҮе®ҡдёәиҫ“е…Ҙи·Ҝеҫ„пјҢеҰӮжҠҘй”ҷдҝЎжҒҜдёӯзҡ„иө„жәҗе®ҡд№үеңЁxxx/entry/src/main/resources/base/element/string.jsonдёӯпјҢеҲҷйңҖжҢҮе®ҡxxx/entry/src/mainдёәиҫ“е…Ҙи·Ҝеҫ„гҖӮ

### 11211124 и§Јжһҗresources.indexж–Үд»¶еӨұиҙҘ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to parse the resources.index file.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

и§Јжһҗresources.indexеӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

resources.indexж јејҸдёҚжӯЈзЎ®пјҢеҰӮеҶ…е®№дёәз©әжҲ–ж–Үд»¶ејҖеӨҙдёҚеӯҳеңЁ128еӯ—иҠӮзҡ„зүҲжң¬дҝЎжҒҜгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘresources.indexж–Үд»¶зҡ„жқҘжәҗпјҢзЎ®дҝқиҜҘж–Үд»¶жҳҜз”ұrestoolе·Ҙе…·зј–иҜ‘з”ҹжҲҗгҖӮ

### 11212001 и§ЈжһҗHAPеҢ…й”ҷиҜҜ

<strong>й”ҷиҜҜдҝЎжҒҜ</strong>

Failed to parse the HAP.

<strong>й”ҷиҜҜжҸҸиҝ°</strong>

и§ЈжһҗHAPеҢ…еӨұиҙҘгҖӮ

<strong>еҸҜиғҪеҺҹеӣ</strong>

HAPеҢ…ж јејҸдёҚжӯЈзЎ®пјҢеҰӮз»ҸиҝҮеӨҡж¬ЎеҺӢзј©еҜјиҮҙи§ЈеҺӢеӨұиҙҘгҖӮ

<strong>еӨ„зҗҶжӯҘйӘӨ</strong>

жЈҖжҹҘHAPеҢ…ж јејҸпјҢзЎ®дҝқHAPеҢ…з”ұSDKе·Ҙе…·зӣҙжҺҘз”ҹжҲҗпјҢж— еҺӢзј©и§ЈеҺӢзӯүдҝ®ж”№ж“ҚдҪңгҖӮ