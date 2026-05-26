var audio = document.getElementById("audioPlayer"), loader = document.getElementById("preloader"); function settingtoggle() { document.getElementById("setting-container").classList.toggle("settingactivate"), document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"), document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow") } function playpause() { !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play() } function visualmode() { document.body.classList.toggle("light-mode"), document.querySelectorAll(".needtobeinvert").forEach(function (e) { e.classList.toggle("invertapplied") }) } window.addEventListener("load", function () { loader.style.display = "none", document.querySelector(".hey").classList.add("popup") }); let emptyArea = document.getElementById("emptyarea"), mobileTogglemenu = document.getElementById("mobiletogglemenu"); function hamburgerMenu() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"), document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"), document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"), document.getElementById("burger-bar3").classList.toggle("hamburger-animation3") } function hidemenubyli() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"), document.getElementById("burger-bar1").classList.remove("hamburger-animation1"), document.getElementById("burger-bar2").classList.remove("hamburger-animation2"), document.getElementById("burger-bar3").classList.remove("hamburger-animation3") } const sections = document.querySelectorAll("section"), navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"), mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li"); window.addEventListener("scroll", () => { let e = ""; sections.forEach(t => { let o = t.offsetTop; t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id")) }), mobilenavLi.forEach(t => { t.classList.remove("activeThismobiletab"), t.classList.contains(e) && t.classList.add("activeThismobiletab") }), navLi.forEach(t => { t.classList.remove("activeThistab"), t.classList.contains(e) && t.classList.add("activeThistab") }) }); let mybutton = document.getElementById("backtotopbutton"); function scrollFunction() { document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none" } function scrolltoTopfunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } window.onscroll = function () { scrollFunction() }, document.addEventListener("contextmenu", function (e) { "IMG" === e.target.nodeName && e.preventDefault() }, !1);

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imageSrc) {
    lightbox.style.display = 'block';
    setTimeout(() => {
        lightbox.classList.add('show');
        lightboxImg.src = imageSrc;
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }, 300);
    document.body.style.overflow = 'auto';
}

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        closeLightbox();
    }
});

// Visitor Counter
const countEl = document.getElementById('visitor-count');
// Local Visitor Counter
const COUNTER_KEY = 'page_view';
const RESET_KEY = 'counter_reset_v1'; // Change this to force reset

let visitCount = localStorage.getItem(COUNTER_KEY);

// Reset count if new version
if (!localStorage.getItem(RESET_KEY)) {
    visitCount = 1;
    localStorage.setItem(COUNTER_KEY, visitCount);
    localStorage.setItem(RESET_KEY, 'true');
} else {
    // Check if this session has already counted a visit
    if (!sessionStorage.getItem("visit_counted")) {
        if (visitCount) {
            visitCount = Number(visitCount) + 1;
        } else {
            visitCount = 1;
        }
        localStorage.setItem(COUNTER_KEY, visitCount);
        sessionStorage.setItem("visit_counted", "true");
    } else {
        if (!visitCount) visitCount = 1;
    }
}

countEl.innerText = visitCount;