
function BareDecorator(seed, language, measure) {
    let
        random = new Random(seed),
        hexmapRenderer = new HexmapRenderer(measure);

    return {
        decorate:(root, flags, globals, cb)=>{
            let
                vars = {
                    packs:{ fontText:[], fontTitle:[] },
                },
                fontText,
                fontTitle,
                fontBold;

            for (let k in FONTS.bySetting) {
                if (flags[k]) {
                    vars.packs.fontText = vars.packs.fontText.concat(FONTS.bySetting[k].text);
                    vars.packs.fontTitle = vars.packs.fontTitle.concat(FONTS.bySetting[k].titles);
                }
            }

            fontText = random.element(vars.packs.fontText);
            fontTitle = random.element(vars.packs.fontTitle);
            fontBold = random.element(vars.packs.fontTitle);

            root.style.fontFamily = fontText[0].style.fontFamily;

            [
                { node:"h1", fontFamily: fontTitle[0].style.fontFamily },
                { node:"h2", fontFamily: fontTitle[0].style.fontFamily },
                { node:"strong", fontFamily: fontTitle[0].style.fontBold },
            ].forEach(map=>{
                let
                    nodes = root.querySelectorAll(map.node);

                for (let i=0;i<nodes.length;i++) {
                    nodes[i].style.fontFamily = map.fontFamily;
                }
            })

             hexmapRenderer.prepare(()=>{
                let
                    maps = document.getElementsByClassName("generatedata");

                for (let i=0;i<maps.length;i++) {
                    hexmapRenderer.render(maps[i], "bare", globals.generateData[maps[i].getAttribute("data-id")], globals, language);
                }
                
                cb();
            })
        
        }
    }
    
}
