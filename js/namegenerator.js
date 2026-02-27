
function NameGenerator(lang) {

 
    let
        language = NameGenerator.LANGUAGES[lang],
        dictionary = [];

    function getFile(file,cb) {
        var xmlhttp = new XMLHttpRequest();
        if (cb)
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4)
                    if ((xmlhttp.status == 200)||(xmlhttp.status==0)) cb(xmlhttp.responseText);
                    else cb();
            };
        xmlhttp.open("GET", file, true);
        xmlhttp.send();
    }

    function getDictionary(language, cb) {
        if (language.data)
            cb(language.data);
        else
            getFile(language.dictionary,(text)=>{
                language.data = text;
                cb(text);
            })
    }

    function generateName(random, style) {
        let
            styleData=NameGenerator.NAMES.styles[style],
            syllabes=NameGenerator.NAMES.sets[styleData.set],
            version=random.element(styleData.versions),
            name="";
        for (let i=0;i<version.length;i++)
            name+=random.element(syllabes[version[i]]);
        return name;
    }

    function generate(random, text) {
        return text.replace(/\[([^\]]+)\]/g,(m,m1)=>{
            let
                option = random.element(m1.split("|")),
                word,
                parts,
                command,
                special;

            if (option.substr(0,2)=="^^") {
                special = 1;
                option = option.substr(2);
            } else if (option.substr(0,1)=="^") {
                special = 2;
                option = option.substr(1);
            }

            parts = option.split(" ");
            command = parts[0];
            
            if (NameGenerator.NAMES.styles[command]) {
                word = generateName(random, command);
            } else {
                let
                    selection = [];

                dictionary.forEach(word=>{
                    let
                        isOk = true;
                    parts.forEach(part=>{
                        isOk &= word.tags.indexOf(part)!= -1;
                    })
                    if (isOk) {
                        selection.push(word);
                    }
                });

                if (selection.length) {
                    word = random.element(selection).word;
                } else {
                    console.warn("Can't find any word for",option);
                    word = "[???]";
                }
            }

            switch (special) {
                case 1:{
                    return word.toUpperCase();
                    break;
                }
                case 2:{
                    return word[0].toUpperCase()+word.substr(1);
                    break;
                }
                default:{
                    return word;
                }
            }
        })
    }

    return {
        initialize:(cb)=>{
            getDictionary(language,(data)=>{
                data.split("\n").forEach(line=>{
                    line = line.trim();
                    if (line) {
                        let
                            isOk = true,
                            entry = { tags:[], word:line.substr(language.tags.length) };
                        language.tags.forEach((tag,pos)=>{
                            let
                                value = tag[line[pos]];
                            if (value)
                                entry.tags.push(value);
                            else {
                                isOk = false;
                                console.warn("Invalid tag:",line,"Pos",pos,language);
                            }
                        });
                        if (isOk) {
                            dictionary.push(entry);
                        }
                    }
                })

                cb();
            })
        },
        generate:(random, text)=>{
            return generate(random, text);
        }
    }
}

NameGenerator.LANGUAGES = {
    EN:{
        dictionary:"database/words/en/words.txt",
        tags:[
            { j:"Adjective", r:"Verb", v:"Adverb", u:"Noun" },
            { E:"Evil", G:"Good", I:"Item" }
        ]
    }
};

NameGenerator.NAMES = {
    sets:{
        base:[
            [ "ab", "al", "am", "an", "ar", "as", "av", "aw", "ay", "ba", "bo", "bi", "be", "bra", "bro", "bri", "bre", "bru", "bar", "ban", "baw", "bal", "bay", "ber", "bor", "bur", "bar", "bol", "bul", "bel", "bil", "ben", "bon", "bun", "bin", "bow", "by", "ca", "co", "cu", "cra", "cro", "cru", "con", "can", "cun", "caw", "cay", "cam", "com", "cor", "car", "cur", "cal", "col", "cul", "da", "do", "de", "di", "du", "dra", "dro", "dre", "dri", "dru", "dray", "day", "dal", "dol", "dul", "dil", "del", "dan", "den", "din", "don", "dun", "dam", "dem", "dim", "dom", "das", "dos", "dis", "des", "dus", "dur", "dor", "dar", "dir", "der", "dag", "dog", "dig", "dy", "el", "en", "em", "eg", "es", "eb", "ev", "ee", "er", "ez", "ex", "ein", "fa", "fe", "fo", "fi", "fu", "fla", "fle", "flo", "fli", "flu", "fy", "fay", "fan", "fen", "fin", "fon", "fal", "fel", "fol", "ful", "fil", "fes", "fas", "fos", "ga", "go", "gu", "gla", "glo", "gle", "gra", "gro", "gre", "gri", "gru", "gar", "gur", "gor", "gad", "gid", "gus", "gos", "gal", "gil", "gol", "gul", "gun", "gan", "gon", "gam", "gaz", "goz", "gruf", "graf", "grif", "gram", "grim", "grom", "grum", "griz", "graz", "groz", "grez", "ho", "ha", "hi", "he", "hu", "hay", "hal", "hel", "hol", "hul", "hil", "han", "hen", "has", "hes", "hus", "har", "hor", "hur", "hy", "in", "ish", "il", "im", "ir", "is", "iz", "ix", "ith", "ig", "ja", "je", "ji", "jo", "ju", "jan", "jon", "jen", "jin", "jun", "jar", "jor", "jer", "jig", "jag", "jas", "jes", "jos", "jus", "jal", "jel", "jil", "jol", "jam", "jem", "jom", "jim", "jad", "jed", "jud", "jod", "jaz", "joz", "jez", "joy", "jay", "jy", "ka", "ke", "ki", "ko", "ku", "kra", "kre", "kro", "kru", "kay", "kan", "ken", "kon", "kun", "kin", "kar", "ker", "kor", "kur", "kam", "kal", "kul", "kol", "kil", "kel", "kas", "kes", "kos", "kar", "ker", "kir", "kor", "kaz", "koz", "ky", "la", "le", "li", "lo", "lu", "lan", "lon", "len", "lin", "lun", "lyn", "lar", "lor", "lam", "lum", "lom", "lim", "lem", "law", "lew", "las", "les", "lus", "los", "lis", "lib", "ly", "ma", "me", "mi", "mo", "mu", "man", "men", "min", "mon", "mun", "mar", "mor", "mer", "mur", "mas", "mis", "mes", "mus", "mos", "moth", "mith", "myth", "mag", "meg", "mog", "mal", "me", "mol", "mul", "mil", "mad", "med", "mid", "mod", "mud", "maw", "my", "na", "ni", "ne", "no", "nu", "nil", "nel", "nal", "nol", "nul", "nis", "nes", "nos", "nas", "nar", "nor", "nur", "nir", "nim", "nam", "nav", "niv", "nev", "nov", "naz", "niz", "noz", "nes", "new", "ny", "oo", "ol", "on", "om", "og", "or", "oth", "osh", "os", "ox", "oz", "pa", "po", "pi", "pe", "pla", "pra", "plo", "pro", "pri", "pre", "pru", "pan", "pen", "pon", "par", "per", "por", "pas", "pos", "pel", "pol", "pul", "pil", "pal", "pam", "pom", "plum", "py", "qua", "quo", "que", "qui", "quiz", "quoz", "quaz", "quil", "quel", "qual", "quan", "quin", "quen", "quag", "queg", "quad", "quay", "ry", "ra", "ro", "ri", "re", "ru", "rad", "red", "rid", "rud", "rod", "rel", "ral", "rol", "run", "ran", "ren", "rin", "ron", "ram", "rim", "rem", "rom", "rum", "roz", "raz", "riz", "rez", "rex", "rax", "rox", "rux", "rix", "row", "raw", "ror", "sy", "so", "sa", "si", "se", "su", "slo", "sla", "sli", "sle", "slu", "sno", "sna", "smi", "sho", "sha", "shi", "she", "shu", "shu", "sam", "sim", "sum", "som", "sal", "sel", "sol", "sul", "sil", "soth", "seth", "sath", "suth", "sith", "stan", "sten", "stun", "stam", "stom", "swan", "swen", "sor", "ser", "sar", "sur", "sir", "saw", "star", "stur", "six", "tan", "tin", "ten", "ton", "tun", "tim", "tom", "tam", "tum", "tar", "tur", "tor", "tal", "til", "tol", "tel", "tul", "tas", "tes", "tis", "tos", "tus", "tay", "ty", "ta", "to", "ti", "te", "tu", "tha", "tho", "thi", "the", "thu", "tra", "tro", "tri", "tre", "tru", "uv", "un", "um", "ug", "uz", "ul", "ur", "ush", "uth", "va", "vi", "vo", "ve", "val", "vil", "vel", "vol", "vul", "van", "ven", "vin", "von", "vam", "vem", "vom", "vim", "var", "ver", "vor", "ver", "vay", "voy", "vas", "ves", "vis", "vos", "wa", "we", "wo", "wi", "wal", "wel", "wol", "wil", "was", "wes", "wis", "wiz", "waz", "wez", "way", "wax", "wix", "wox", "wex", "west", "wist", "win", "wen", "won", "wan", "war", "wor", "wur", "wer", "wy", "xa", "xo", "xi", "xe", "xan", "xin", "xon", "xen", "xar", "xor", "xel", "xal", "xol", "xom", "xam", "xad", "xy", "ya", "yo", "ye", "yan", "yin", "yun", "yon", "yen", "yew", "yaw", "yow", "yor", "yar", "yos", "yas", "yosh", "yash", "yel", "yol", "yal", "za", "zo", "ze", "zi", "zu", "zan", "zin", "zen", "zon", "zun", "zil", "zal", "zol", "zul", "zel", "zar", "zur", "zer", "zor", "zy" ],
            [ "ban", "ben", "bin", "bon", "bur", "bar", "bor", "bit", "bat", "bet", "bit", "but", "bot", "bak", "bek", "bik", "bok", "buk", "bad", "bud", "bid", "cad", "cam", "can", "cal", "cat", "cot", "cut", "cul", "car", "cor", "cur", "cox", "con", "col", "cath", "coth", "din", "dan", "den", "don", "dun", "dam", "dim", "dom", "daz", "dez", "diz", "doz", "dol", "dal", "dil", "del", "dash", "dosh", "dith", "deth", "doth", "dev", "dib", "dub", "duc", "dac", "dic", "dec", "doc", "dar", "der", "dor", "dur", "gad", "god", "good", "gray", "grim", "grod", "grad", "grif", "grun", "gren", "gran", "gron", "goss", "gor", "gar", "gan", "gen", "gon", "gin", "gaz", "goz", "gas", "gis", "gos", "gus", "gul", "gal", "gil", "jab", "jib", "jeb", "jan", "jen", "jin", "jon", "jun", "jaw", "jak", "jor", "jar", "jay", "joy", "kel", "kal", "kil", "kul", "kan", "ken", "kin", "kun", "kam", "kim", "kar", "kor", "kaz", "koz", "kaw", "lam", "lem", "lim", "leg", "log", "lug", "lin", "len", "lon", "lar", "lor", "lur", "ler", "lad", "lev", "laz", "mar", "mor", "mer", "mur", "mac", "mec", "muc", "moc", "mid", "med", "mud", "mod", "mad", "mil", "mel", "mal", "mol", "mul", "man", "men", "min", "mon", "mun", "may", "moy", "mas", "mis", "mes", "mus", "mos", "mat", "met", "mit", "mot", "mut", "mag", "meg", "mig", "mog", "mug", "mez", "maz", "miz", "moz", "muz", "max", "mox", "maw", "nic", "nac", "nec", "noc", "nuc", "nal", "nel", "nil", "nol", "nul", "nar", "nor", "ner", "nir", "nur", "nas", "nes", "nos", "nus", "nis", "nad", "nid", "nod", "nay", "nog", "neg", "nug", "nig", "nin", "nen", "non", "nan", "pan", "pen", "pon", "pin", "par", "per", "por", "pir", "pur", "pel", "pol", "pul", "pal", "pren", "pran", "prin", "ran", "ren", "rin", "ron", "run", "ras", "rus", "res", "ris", "ros", "ral", "rel", "ril", "rul", "rol", "raw", "ray", "roy", "rey", "rex", "rix", "rux", "raz", "rez", "riz", "roz", "rom", "rim", "rem", "rum", "ram", "rid", "rad", "rud", "red", "rod", "rev", "rav", "ric", "rec", "roc", "ruc", "rig", "ry", "sam", "sim", "som", "san", "sin", "son", "sun", "sen", "sig", "seg", "sten", "stan", "ston", "stun", "stin", "sly", "sy", "sed", "sid", "sal", "sel", "sol", "sul", "sil", "shan", "shen", "shin", "shon", "sar", "ser", "sir", "sor", "sur", "ses", "sas", "sos", "sis", "sus", "shaw", "shay", "shar", "sham", "shem", "shal", "shel", "six", "sax", "set", "sit", "set", "stoy", "tal", "tel", "til", "tol", "tul", "tar", "ter", "tor", "tur", "tran", "tren", "trin", "tron", "trun", "ty", "try", "tay", "tan", "ten", "tin", "ton", "tun", "tam", "tem", "tim", "tom", "tum", "taz", "tez", "tas", "tes", "tis", "tos", "tus", "tic", "tac", "tec", "toc", "tuc", "var", "ver", "vor", "van", "vin", "ven", "von", "vay", "vad", "vid", "ved", "vod", "vix", "vox", "vax", "vex", "vic", "vac", "voc", "vel", "val", "vol", "vil", "vash", "vish", "vesh", "vosh", "vas", "ves", "vis", "vos", "vy", "way", "wan", "wen", "win", "won", "war", "wer", "wor", "wal", "wel", "wil", "wol", "weg", "wig", "wag", "wog", "wug", "wic", "wac", "woc", "war", "wer", "wor", "wex", "wix", "yan", "yin", "yen", "yon", "yun", "yel", "yal", "yar", "yer", "yor", "zan", "zen", "zin", "zon", "zun", "zic", "zac", "zim", "zy", "zer", "zar", "zor" ],
            [ "bar", "ber", "bor", "bur", "ban", "ben", "bin", "bon", "car", "cor", "cur", "tas", "tes", "tis", "tos", "tak", "tok", "tan", "ten", "tin", "ton", "tar", "ter", "tor", "try", "sin", "sen", "son", "san", "sun", "shan", "shen", "shin", "shon", "shun", "man", "men", "min", "mon", "nor", "y", "gris", "gren", "grin", "gran", "grun", "gash", "gor", "gar", "ger", "lan", "len", "lin", "lon", "lun", "let", "lit", "lig", "leg", "lic", "lac", "loc", "lec" ],
            [ "a", "e", "o", "i", "u", "an", "on", "en", "in", "nor", "ish", "at", "as", "es", "is", "os", "us", "ma", "mo", "mi", "my", "na", "ni", "no", "nu", "ny", "ra", "ro", "ri", "ry", "by", "bo", "ba", "la", "lo", "ly", "lan", "len", "lin", "lon", "ler", "lar", "lor", "sic", "sec", "san", "sen", "sin", "son", "sa", "so", "si", "y" ]
        ]
    },
    styles:{
        Place:{
            versions:[
                [ 0, 2 ]
            ],
            set:"base"
        },
        Hero:{
            versions:[
                [ 0, 1 ],
                [ 0, 1, 2]
            ],
            set:"base"
        },
        Badguy:{
            versions:[
                [ 0, 1, 2, 3]
            ],
            set:"base"
        }
    }
};
