/*
fetch(`../../sections/header.html`)
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("div#header");
    let newelem = document.createElement("div");
    newelem.classList.add("header","d-flex", "align-items-center");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})*/

document.addEventListener('DOMContentLoaded', function() {
    const sectionLists = ["topbar", "trial", "header", "footer"];

    sectionLists.forEach(element => {
        fetchAndReplace(element);
    });

    function fetchAndReplace(elementId) {
        fetch(`../../sections/${elementId}.html`)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const content = doc.body.firstChild;
                
                const targetElement = document.getElementById(elementId);
                if (targetElement && content) {
                    targetElement.parentNode.replaceChild(content, targetElement);
                } else {
                    console.warn(`Element with id '${elementId}' not found or content is empty`);
                }
            })
            .catch(error => {
                console.error(`Error fetching or replacing ${elementId}:`, error);
            });
    }
});
/*window.onload = function() {
    fetch(`../../sections/topbar.html`)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector(`script#topbar`);
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    });
    fetch(`../../sections/trial.html`)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector(`script#trial`);
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    });
    fetch(`../../sections/footer.html`)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector(`script#footer`);
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    });
}*/