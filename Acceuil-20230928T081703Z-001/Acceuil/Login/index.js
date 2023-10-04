const cuttedPage = window.location.href.split("/");
//          Wait for the page to load
document.addEventListener("DOMContentLoaded", async function() {
    document.getElementById("openBtn").onclick = function() {
        document.getElementById("sideNav").classList.add("active");
    };
    document.getElementById("closeBtn").onclick = function() {
        document.getElementById("sideNav").classList.remove("active");
    };
    //      Retrieves the list of available languages

    //      Place the selector on the current language
    for (let i = 0; i < document.getElementById("lang").options.length; i++) {
        if (document.getElementById("lang").options[i].value === cuttedPage[window.location.href.split("/").length-2]) {
            document.getElementById("lang").selectedIndex = i;
            break;
        }
    }
    
    //      Redigier l'utilisateur quand il change de langue
    document.getElementById("lang").addEventListener("change", function() {
        if (cuttedPage[window.location.href.split("/").length-2] === event.target.id) return;
        window.location.href = `https://${window.location.host}/${cuttedPage[window.location.href.split("/").length-3]}/${event.target.value ?? event.target.id}/menufr.html`;
    });

    //      Change the theme
    document.querySelector("button#theme").onclick = function() {
        this.classList.remove("fade");
        document.body.classList.remove("fade");
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
            this.querySelector("img").src = "./cdn/img/sun.png";
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            document.body.classList.add("fade");
        } else {
            localStorage.setItem("theme", "light");
            this.querySelector("img").src = "./cdn/img/moon.png";
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            document.body.classList.add("fade");
        }
        this.classList.add("fade");
        setTimeout(function() { document.body.classList.remove("fade"); }, 500)
    }
});