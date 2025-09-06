function openWindow() {
    const iframe = document.getElementById("wikiIframe");
    iframe.style.display = "block";
}

function closeWindow(){
    const iframe = document.getElementById("wikiIframe");
    iframe.style.display = "none";
}

function toggleWindow() {
    const iframe = document.getElementById("wikiIframe");
    if (iframe.style.display === "none" ){  
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}