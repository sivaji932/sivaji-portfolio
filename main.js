var audio = document.getElementById("audioPlayer"), loader = document.getElementById("preloader"); function settingtoggle() { document.getElementById("setting-container").classList.toggle("settingactivate"), document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"), document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow") } function playpause() { !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play() } function visualmode() { document.body.classList.toggle("light-mode"), document.querySelectorAll(".needtobeinvert").forEach(function (e) { e.classList.toggle("invertapplied") }) } window.addEventListener("load", function () { loader.style.display = "none", document.querySelector(".hey").classList.add("popup") }); let emptyArea = document.getElementById("emptyarea"), mobileTogglemenu = document.getElementById("mobiletogglemenu"); function hamburgerMenu() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"), document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"), document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"), document.getElementById("burger-bar3").classList.toggle("hamburger-animation3") } function hidemenubyli() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"), document.getElementById("burger-bar1").classList.remove("hamburger-animation1"), document.getElementById("burger-bar2").classList.remove("hamburger-animation2"), document.getElementById("burger-bar3").classList.remove("hamburger-animation3") } const sections = document.querySelectorAll("section"), navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"), mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li"); window.addEventListener("scroll", () => { let e = ""; sections.forEach(t => { let o = t.offsetTop; t.clientHeight, window.scrollY >= o - 200 && (e = t.getAttribute("id")) }), mobilenavLi.forEach(t => { t.classList.remove("activeThismobiletab"), t.classList.contains(e) && t.classList.add("activeThismobiletab") }), navLi.forEach(t => { t.classList.remove("activeThistab"), t.classList.contains(e) && t.classList.add("activeThistab") }) }); let mybutton = document.getElementById("backtotopbutton"); function scrollFunction() { document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none" } function scrolltoTopfunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } window.onscroll = function () { scrollFunction() };

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (lightbox && lightboxImg) {
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
}

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

if (countEl) {
    countEl.innerText = visitCount;
}

/* PROJECT DETAILS MODAL
   Add this at the END of main.js. It does not replace your existing lightbox code. */

(() => {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const titleEl = document.getElementById("project-modal-title");
  const subtitleEl = document.getElementById("project-modal-subtitle");
  const descriptionEl = document.getElementById("project-modal-description");
  const featuresEl = document.getElementById("project-modal-features");
  const techEl = document.getElementById("project-modal-tech");
  const linksEl = document.getElementById("project-modal-links");
  const closeButton = modal.querySelector(".project-modal-close");
  let previousFocus = null;

  const projects = {
    mpox: {
      title: "Deep Learning Based Mpox Classification & Outbreak Prediction",
      subtitle: "AI-powered skin lesion classification and outbreak risk prediction.",
      description:
        "A web application that classifies Mpox skin lesions and predicts outbreak risks using Flask and ONNX, containerized with Docker and deployed on AWS EC2 behind a load balancer.",
      features: [
        "Skin lesion classification",
        "Outbreak risk prediction",
        "ONNX model integration",
        "Docker-based deployment",
        "AWS EC2 and load balancing"
      ],
      tech: ["Python", "Flask", "ONNX", "Docker", "AWS EC2", "Load Balancer"],
      links: [
        {
          label: "GitHub Repository",
          icon: "src/png/github-light.png",
          url: "https://github.com/sivaji932/MPOX-Detection-and-Outbreak-Prediction.git"
        },
        {
          label: "LinkedIn",
          icon: "src/png/linkedin.png",
          url: "https://www.linkedin.com/posts/sivaji-donga-732a13275_machinelearning-deeplearning-devops-ugcPost-7458209047394275329-NyV9/"
        }
      ]
    },
    labeling: {
      title: "Serverless Image Labeling Pipeline on AWS",
      subtitle: "Event-driven image processing using AWS AI services.",
      description:
        "An automated pipeline that detects objects in uploaded images with AWS Rekognition and draws bounding boxes using Python and Pillow. S3 events trigger Lambda processing, with IAM policies controlling access.",
      features: [
        "S3-triggered image processing",
        "AI-based object detection",
        "Bounding-box generation",
        "AWS Lambda automation",
        "IAM-based access control"
      ],
      tech: ["Python", "AWS Lambda", "Amazon S3", "Rekognition", "Pillow", "IAM"],
      links: [
        {
          label: "GitHub Repository",
          icon: "src/png/github-light.png",
          url: "https://github.com/sivaji932/AWS-Lambda-Image-Annotation-with-Rekognition.git"
        },
        {
          label: "LinkedIn",
          icon: "src/png/linkedin.png",
          url: "https://www.linkedin.com/posts/sivaji-donga-732a13275_aws-amazonrekognition-serverless-activity-7393684656690294785-df01"
        }
      ]
    },
    photos: {
      title: "Role-Based Photo Sharing Platform",
      subtitle: "Secure REST API and cloud-based media delivery.",
      description:
        "A multi-role photo-sharing platform built with FastAPI, SQLModel, and PostgreSQL, featuring JWT authentication, PIN authorization, optimized database queries, and secure AWS S3 media downloads.",
      features: [
        "OAuth2/JWT authentication",
        "Admin and Team role-based access",
        "bcrypt PIN authorization",
        "N+1 query optimization",
        "PostgreSQL connection pooling",
        "S3 presigned URLs for media downloads"
      ],
      tech: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "OAuth2/JWT", "bcrypt", "AWS S3"],
      links: [
        {
          label: "GitHub Repository",
          icon: "src/png/github-light.png",
          url: "https://github.com/sivaji932/Role-Based-Photo-Sharing-Platform"
        }
      ]
    }
  };

  function openProject(projectKey, trigger) {
    const project = projects[projectKey];
    if (!project) return;

    previousFocus = trigger || document.activeElement;
    titleEl.textContent = project.title;
    subtitleEl.textContent = project.subtitle;
    descriptionEl.textContent = project.description;

    featuresEl.replaceChildren();
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresEl.appendChild(li);
    });

    techEl.replaceChildren();
    project.tech.forEach((technology) => {
      const tag = document.createElement("span");
      tag.textContent = technology;
      techEl.appendChild(tag);
    });

    linksEl.replaceChildren();

    const linksTitle = document.createElement("h3");
    linksTitle.textContent = "Public Links";
    linksTitle.className = "project-modal-links-title";
    linksEl.appendChild(linksTitle);

    project.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.setAttribute("aria-label", link.label);
      anchor.title = link.label;

      const image = document.createElement("img");
      image.src = link.icon;
      image.alt = link.label;
      anchor.appendChild(image);
      linksEl.appendChild(anchor);
    });

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-modal-open");
    closeButton.focus();
  }

  function closeProjectModal() {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-modal-open");
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  document.querySelectorAll(".project-details-button[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project, button));
  });

  modal.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProjectModal();

    // Keep keyboard focus inside the modal while it is open.
    if (event.key === "Tab" && modal.classList.contains("is-open")) {
      const focusable = modal.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
