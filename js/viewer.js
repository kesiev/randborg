
function Viewer() {

    const
        PROJECT_NAME = "RAND BORG",
        PROJECT_VERSION = "v0.1b",
        PROJECT_LICENSE = "GPL3",
        PROJECT_AUTHOR = "KesieV",
        PROJECT_URL = "https://www.kesiev.com",
        PROJECT_SOURCES = "https://github.com/kesiev/randborg",
        PROJECT_DISCORD = "https://discord.gg/TeAWvnuGku",
        PROJECT_README = "https://github.com/kesiev/randborg/blob/main/README.md",
        PROJECT_FULLCREDITS = PROJECT_README+"#full-credits",
        FOOTER = "<div class='footer'>"+PROJECT_NAME+" "+PROJECT_VERSION+" by <a target=_blank href='"+PROJECT_URL+"'>"+PROJECT_AUTHOR+"</a> ‐ <a target=_blank href='"+PROJECT_FULLCREDITS+"'>Full credits</a> - <a target=_blank href='"+PROJECT_SOURCES+"'>Source Code</a> ‐ <a target=_blank href='"+PROJECT_DISCORD+"'>Discord</a> ‐ <a target=_blank href='"+PROJECT_README+"'>What the hell is this?</a>",
        SEEDLIMIT = 10000,
        VIEWS = [
            {
                label:"1 page, full width",
                run:(viewer, seed, render, cb)=>{
                    richView(viewer, seed, render, "singlePage",1,"vw",cb);
                }
            },{
                label:"1 page, full height",
                run:(viewer, seed, render, cb)=>{
                    richView(viewer, seed, render, "singlePage",1,"vh",cb);
                }
            },{
                label:"2 pages, full width",
                run:(viewer, seed, render, cb)=>{
                    richView(viewer, seed, render, "doublePage",0.4759,"vw",cb);
                }
            },{
                label:"Bare bones",
                run:(viewer, seed, render, cb)=>{
                    let
                        measure = new Measure(1,"vw"),
                        decorator = new BareDecorator(seed, render.language, measure);
                    viewer.innerHTML="<div class='barebones'><div style=\"margin-bottom:30px;background-image:url('database/extrapages/logo.svg');width:100%;height:30vw;max-height:40vh;background-repeat:no-repeat;background-position:center;background-size:contain\"></div>"+markdown(render.text)+"</div>"+FOOTER;
                    decorator.decorate(viewer,render.flags,render.globals,cb);
                }
            },{
                label:"Character roller",
                run:(viewer, seed, render, cb)=>{
                    let
                        playerRoller = new BorgPlayerRoller(lastRender);

                    setBusy(true);
                    playerRoller.generate((html)=>{
                        setBusy(false);
                        viewer.innerHTML="<div class='charactersheet'><div class='characterroller' id='characterroller'><span class='text'>Roll another one</span></div>"+html+"</div>"+FOOTER;
                        document.getElementById("characterroller").onclick=()=>{
                            setView(currentView);
                        }
                    });
                }
            },{
                label:"Coloring book",
                run:(viewer, seed, render, cb)=>{

                    let
                        buttonText = "Download PDF",
                        fileName,
                        isDone,
                        doc,
                        width,
                        height,
                        pages,
                        renderConfig,
                        printButton;

                    function addPage(id,cb) {
                        let
                            page = pages[id];

                        if (isDone) {

                            doc.save(fileName);
                            cb();

                        } else if (page) {

                            printButton.innerHTML = "Preparing page "+(id+1)+"/"+pages.length+"...";

                            if (id == 0) {
                                doc = new jspdf.jsPDF({
                                    orientation:"p",
                                    unit: 'mm',
                                    format:[ 148, 210 ]
                                });
                                width = doc.internal.pageSize.getWidth();
                                height = doc.internal.pageSize.getHeight();
                                renderConfig = {
                                    scale:2
                                }
                            } else {
                                doc.addPage(null, "p");
                            }
                            html2canvas(page, renderConfig).then(canvas => {
                                doc.addImage(canvas, "JPEG", 0, 0, width, height);
                                addPage(id+1,cb);
                            });
                        } else {
                            printButton.innerHTML = buttonText;

                            isDone = true;
                            doc.save(fileName);
                            cb();
                        }
                    }

                    viewer.innerHTML = "<div class='coloringbookbox'><div class='coloringbookheader'></div><p>Want to illustrate your Borg-like by hand, inspired by random words? You've come to the right place!</p><p>Here you can download a black-and-white, no illustrations PDF version of this manual. Print out the pages you're interested in, grab anything can leave a trace, and let your madness flow!</p><div class='coloringcolorbutton' id='printbutton'>"+buttonText+"</div></div><div id='hiddenviewer' style='height:0px;width:0px;overflow:hidden'></div>";
                    printButton = document.getElementById("printbutton");
                    printButton.onclick = ()=>{
                        if (!isBusy) {
                            setBusy(true);
                            richView(document.getElementById("hiddenviewer"), seed, render, "singlePage",20,"px",()=>{
                                
                                fileName = "randborg-coloringbook-"+lastRender.seed+".pdf";
                                
                                setBusy(true);
                                [
                                    { get:".layer.overlay", remove:true },
                                    { get:".layer.art", remove:true },
                                    { get:".layer.overart", remove:true },
                                    { get:".page .borders", style:{ borderWidth:0 } },
                                    { get:".page", style:{ background:"none" } },
                                    { get:".page .layer.art", style:{ background:"none" } },
                                    { get:".page .content *", style:{ backgroundColor:"transparent", color:"#000", textShadow:"none", boxShadow:"none" } },
                                    { get:".page .content TR", style:{ borderColor:"#000" } },
                                    { get:".page h3", style:{ borderColor:"#000" } },
                                ].forEach(change=>{
                                    let
                                        nodes = [...document.querySelectorAll(change.get)];

                                    nodes.forEach(node=>{
                                        if (change.remove)
                                            node.parentNode.removeChild(node);
                                        if (change.style) {
                                            for (let k in change.style) {
                                                node.style[k] = change.style[k];
                                            }
                                        }
                                    })
                                })

                                pages = document.getElementsByClassName("page");
                                addPage(0,()=>{
                                    setBusy(false);
                                });
                                
                            });
                        }
                    }

                    cb();
                }
            }
        ];

    let
        bar = document.createElement("div"),
        barlogo = document.createElement("div"),
        viewer = document.createElement("div"),
        right = document.createElement("div"),
        left = document.createElement("div"),
        selector = document.createElement("select"),
        button = document.createElement("div"),
        seed = 0,
        isBusy = false,
        lastRender,
        currentView = 0;

    VIEWS.forEach((view,id)=>{
        let
            option = document.createElement("option");

        option.innerHTML = view.label;
        option.value = id;
        selector.appendChild(option);
    })

    bar.className = "bar";
    viewer.className = "viewer";
    barlogo.className = "logo";
    right.className = "right";
    left.className = "left";
    button.className = "button";
    barlogo.style.backgroundImage = "url('database/extrapages/header-logo.svg')";
    button.innerHTML = "New Seed";

    function richView(viewer, seed, render, layout, measureratio, measureunit, cb) {
        let
            measure = new Measure(measureratio,measureunit),
            decorator = new BorgDecorator(seed, render.language, measure);

        viewer.innerHTML=markdown(render.text)+FOOTER;
        decorator.decorate(viewer,layout,render.flags,render.globals,cb)
    }

    function setBusy(mode) {
        if (mode) {
            isBusy = true;
            button.style.color = "#ccc";
            selector.disabled=true;
        } else {
            isBusy = false;
            button.style.color = "#fff";
            selector.disabled=false;
        }
    }

    function prepareData(newseed,cb) {

        if (!newseed || (newseed<=0)) {
            newseed = 1+Math.floor(Math.random() * SEEDLIMIT);
        }

        if (newseed != seed) {
            let
                builder;

            seed = newseed;
            builder = new Builder({
                projectName: PROJECT_NAME,
                projectLicense: PROJECT_LICENSE,
                projectAuthor: PROJECT_AUTHOR,
                projectUrls: PROJECT_URL+" - "+PROJECT_SOURCES
            }, seed);
            setBusy(true);

            document.location.hash = "#"+seed;

            builder.initialize(()=>{
                setBusy(false);
                lastRender = builder.renderInstanceById(0,"rpg");
                cb();
            });
            
        } else {
            cb();
        }

    }

    function setView(mode, changeseed) {
        currentView = mode;
        selector.value = mode;
        prepareData(changeseed === undefined ? seed : changeseed,()=>{
            viewer.innerHTML = "";
            setBusy(true);
            VIEWS[currentView].run(viewer, seed, lastRender, ()=>{
                setBusy(false);
            });
        });
    }

    function cycleFromHash() {
        let
            hash = document.location.hash ? parseInt(document.location.hash.substr(1)) : 0;

        if ((hash>0) && (hash<SEEDLIMIT)) {
            setView(currentView, hash);
            return true;
        } else {
            return false;
        }
    }

    return {
        run:()=>{
            if (document.body.clientWidth > document.body.clientHeight) {
                currentView = 1;
            } else {
                currentView = 0;
            }

            left.appendChild(button);
            right.appendChild(selector);
            bar.append(barlogo);
            bar.appendChild(right);
            bar.appendChild(left);
            document.body.appendChild(viewer);
            document.body.appendChild(bar);

            if (!cycleFromHash()) {
                setView(currentView, 0);
            }

            button.onclick=()=>{
                if (!isBusy) {
                    setView(currentView, 0);
                }
            }

            selector.onchange=function() {
                setView(this.value);
            }

            window.onhashchange=()=>{
                if (!isBusy) {
                    if (!cycleFromHash()) {
                        setView(currentView, 0);
                    }
                }
            }
        }
    }
    
}

window.addEventListener("load",()=>{
    let
        viewer = new Viewer();

    viewer.run();
});
