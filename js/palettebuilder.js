function PaletteBuilder(seed) {

    let
        random = new Random(seed);

    function harmonize(color, start, end, interval) {
        const colors = [color]
        const [h, s, l] = parseHSL(color)

        for(let i = start; i <= end; i += interval) {
            const h1 = (h + i) % 360
            const c1 = `hsl(${h1}, ${s}%, ${l}%)`
            colors.push(c1)
        }

        return colors
    }
    
    function parseHSL(str) {
        var
            hsl, h, s, l;

        hsl = str.replace(/[^\d,]/g, '').split(',');
        h = Number(hsl[0]);
        s = Number(hsl[1]);
        l = Number(hsl[2]);
        return [h, s, l];
    }

    return {
        build:()=>{
            let
                h = random.integer(360),
                plainColor = "hsl("+h+", 80%, 40%)",
                lightColor = "hsl("+h+", 80%, 70%)",
                plainPalette = harmonize(plainColor, 150, 210, 60),
                lightPalette = harmonize(lightColor, 150, 210, 60);

            plainPalette.push("#222");
            plainPalette.push("#eee");

            return {
                plain:plainPalette,
                light:lightPalette
            }
        }
    } 
}