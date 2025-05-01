// Menyu funksiyasi
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

// Header soyasini boshqarish
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

// Typing effekt uchun global o'zgaruvchi
let typedInstance;

// Utility function to update text content
function updateTextContent(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
}

// Utility function to update inner HTML
function updateInnerHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
}

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    const translations = {
        Eng: {
            home: '🏠',
            about: 'About',
            work: 'Work Exp',
            certificates: 'Certificates',
            contact: 'Contact',
            'work-header': 'Work Experience',
            'work-placeholder': 'Your work experience will be displayed here.',
            introduction: "I am a cybersecurity and web development specialist.",
            hireMe: "Hire Me",
            downloadCV: "Download CV",
            getInTouch: "Get in touch",
            email: "Email",
            phone: "Phone",
            footerText: "All rights reserved.",
            scrollDown: "Scroll Down",
            aboutHeader: "About Me",
            aboutDescription: "I am a specialist in cybersecurity and information security. I have experience in security policies, network and system security, identifying vulnerabilities, and mitigating them. I work on developing advanced protection measures against cyber threats and creating secure infrastructures. Additionally, I am active in web development to ensure security in web applications.",
            certificatesHeader: "Certificates",
            contactHeader: "Get in touch",
            contactSubtext: "Do you have a project in mind? Contact me here",
            findMe: "Find Me",
            myIntroduction: "My Introduction",
            name: "Davronbek",
            cvFile: "eng.pdf",
            send: "Send",
            pronounText: "I'm",
            typedStrings: ["Cybersecurity Specialist", "Web Developer", "Ethical Hacker"]
        },
        Uzb: {
            home: '🏠',
            about: 'Haqida',
            work: 'Ish',
            certificates: 'Sertifikatlar',
            contact: 'Aloqa',
            'work-header': 'Ish tajribasi',
            'work-placeholder': 'Bu yerda ish tajribangiz ko‘rsatiladi.',
            introduction: "Men kiberxavfsizlik va veb-dasturlash bo'yicha mutaxassisman.",
            hireMe: "Meni yollang",
            downloadCV: "CV-ni yuklab olish",
            getInTouch: "Bog'laning",
            email: "Elektron pochta",
            phone: "Telefon",
            footerText: "Barcha huquqlar himoyalangan.",
            scrollDown: "Pastga aylantiring",
            aboutHeader: "Men haqimda",
            aboutDescription: "Men — kiberxavfsizlik va axborot xavfsizligi bo‘yicha mutaxassisman. Xavfsizlik siyosatlari, tarmoq va tizim xavfsizligi, zaifliklarni aniqlash va ularni bartaraf etish bo‘yicha tajribaga egaman. Kiber tahdidlarga qarshi ilg‘or himoya choralarini ishlab chiqish hamda xavfsiz infratuzilma yaratish ustida ishlayman. Qo‘shimcha ravishda, web dasturlarda xavfsizlikni ta'minlash maqsadida web development sohasida ham faoliyat yuritaman.",
            certificatesHeader: "Sertifikatlar",
            contactHeader: "Bog'lanish",
            contactSubtext: "Agar loyihangiz bo'lsa, bu yerda bog'laning",
            findMe: "Meni toping",
            myIntroduction: "Mening tanishtiruvim",
            name: "Davronbek",
            cvFile: "uzb.pdf",
            send: "Yuborish",
            pronounText: "Men",
            typedStrings: ["Kiberxavfsizlik Mutaxassisi", "Veb-Dasturchi", "Axloqiy Xaker"]
        },
        Rus: {
            home: '🏠',
            about: 'Обо мне',
            work: 'Опыт',
            certificates: 'Сертификаты',
            contact: 'Контакт',
            'work-header': 'Опыт работы',
            'work-placeholder': 'Ваш опыт работы будет отображен здесь.',
            introduction: "Я специалист по кибербезопасности и веб-разработке.",
            hireMe: "Нанять меня",
            downloadCV: "Скачать резюме",
            getInTouch: "Связаться",
            email: "Электронная почта",
            phone: "Телефон",
            footerText: "Все права защищены.",
            scrollDown: "Прокрутите вниз",
            aboutHeader: "Обо мне",
            aboutDescription: "Я специалист по кибербезопасности и информационной безопасности. У меня есть опыт в разработке политик безопасности, защите сетей и систем, выявлении уязвимостей и их устранении. Я занимаюсь разработкой передовых мер защиты от киберугроз и созданием безопасной инфраструктуры. Кроме того, я активно работаю в области веб-разработки для обеспечения безопасности веб-приложений.",
            certificatesHeader: "Сертификаты",
            contactHeader: "Связаться",
            contactSubtext: "У вас есть проект? Свяжитесь со мной здесь",
            findMe: "Найти меня",
            myIntroduction: "Мое введение",
            name: "Давронбек",
            cvFile: "rus.pdf",
            send: "Отправить",
            pronounText: "Я",
            typedStrings: ["Специалист по кибербезопасности", "Веб-разработчик", "Этический хакер"]
        }
    };

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Adjust navbar layout dynamically
    const navMenu = document.querySelector('.nav-menu');
    if (lang === 'Rus' || lang === 'Uzb') {
        navMenu.style.flexWrap = 'wrap'; // Allow wrapping for longer text
    } else {
        navMenu.style.flexWrap = 'nowrap'; // Default layout for English
    }

    const t = translations[lang];

    // Update navigation links
    document.querySelectorAll(".nav-link").forEach((link, index) => {
        const keys = ["home", "about", "work", "certificates", "contact"];
        link.textContent = t[keys[index]];
    });

    // Update featured section
    updateTextContent(".featured-text-info", t.introduction);
    updateTextContent(".btn.blue-btn", t.hireMe);

    // Update "Download CV" buttons
    document.querySelectorAll(".download-cv-btn").forEach(button => {
        button.innerHTML = `${t.downloadCV} <i class="uil uil-file-alt"></i>`;
        button.onclick = () => {
            const link = document.createElement("a");
            link.href = t.cvFile;
            link.download = t.cvFile;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    });

    // Update about section
    updateTextContent("#about .top-header h1", t.aboutHeader);
    updateTextContent("#about .about-info h3", t.myIntroduction);
    updateTextContent("#about .about-info p", t.aboutDescription);

    // Update certificates section
    updateTextContent("#projects .top-header h1", t.certificatesHeader);

    // Update contact section
    updateTextContent("#contact .top-header h1", t.contactHeader);
    updateTextContent("#contact .top-header span", t.contactSubtext);
    updateInnerHTML(".contact-info p:nth-child(2)", `<i class="uil uil-envelope"></i> ${t.email}: davronbekibodov9557@gmail.com`);
    updateInnerHTML(".contact-info p:nth-child(3)", `<i class="uil uil-phone"></i> ${t.phone}: +998 33 734 9557`);
    updateInnerHTML("#contact .contact-info h2", `${t.findMe} <i class="uil uil-corner-right-down"></i>`);

    // Update footer
    updateTextContent(".nav-name", t.name);
    updateTextContent(".featured-text-card span", t.name);
    updateTextContent("footer .top-footer p", t.name);
    updateInnerHTML("footer .bottom-footer p", `Copyright © <a href="#home" style="text-decoration: none;">${t.name}</a> - ${t.footerText}`);

    // Update scroll down text
    updateTextContent(".scroll-icon-box p", t.scrollDown);

    // Update send button
    updateTextContent(".send-btn", t.send);

    // Update pronoun text
    const pronounTextElement = document.querySelector(".pronoun-text");
    pronounTextElement.textContent = t.pronounText;
    pronounTextElement.style.color = "black";

    // Update Typed.js
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed(".typedText", {
        strings: t.typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });

    // Close dropdown menu
    document.querySelector("#langList").style.display = "none";

    // Update the language button text when a language is selected
    document.getElementById("langBtn").innerText = lang;
}

// Dropdown menyuni ochish va yopish
document.querySelector("#langBtn").addEventListener("click", function () {
  const langList = document.querySelector("#langList");
  if (langList.style.display === "block") {
      langList.style.display = "none";
  } else {
      langList.style.display = "block";
  }
});

// Dastlabki Typed.js sozlamasi (standart ingliz tili)
typedInstance = new Typed(".typedText", {
  strings: ["Cybersecurity Specialist", "Web Developer", "Ethical Hacker"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// Ensure ScrollReveal is initialized and applied correctly
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true, // Ensure animations reset on scroll
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// Ensure left and right animations are applied
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// Scroll aktiv linkni boshqarish
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Adjust for header height
        const sectionId = current.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document
                .querySelector(`.nav-link[href="#${sectionId}"]`)
                .classList.add("active-link");
        } else {
            document
                .querySelector(`.nav-link[href="#${sectionId}"]`)
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Day-Night Mode Toggle
function toggleDayNight() {
    const body = document.body;
    const toggleButton = document.getElementById("dayNightToggle");

    // Toggle the 'night-mode' class on the body
    body.classList.toggle("night-mode");

    // Update the button text and icon
    if (body.classList.contains("night-mode")) {
        toggleButton.innerHTML = "☀️ Day Mode";
    } else {
        toggleButton.innerHTML = "🌙 Night Mode";
    }
}

// Add event listener for the toggle button
document.getElementById("dayNightToggle").addEventListener("click", toggleDayNight);

// Forma yuborishni boshqarish
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;

  // '<' yoki '>' belgilarini tekshirish
  if (name.includes('<') || name.includes('>') || 
      email.includes('<') || email.includes('>') || 
      message.includes('<') || message.includes('>')) {
      e.preventDefault(); // Yuborishni to'xtatish
      alert("Xabarda '<' yoki '>' belgilarini ishlatish mumkin emas!");
      return;
  }

  // Agar JavaScript orqali yubormoqchi bo'lsangiz (ixtiyoriy)
  const formData = new FormData(this);
  fetch('send_email.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      alert('Xabar muvaffaqiyatli yuborildi!');
      this.reset(); // Formani tozalash
  })
  .catch(error => {
      alert('Xabar yuborishda xatolik: ' + error);
  });

  e.preventDefault(); // Agar fetch ishlatilsa, bu qator qoladi
});

// Default language setup
document.addEventListener("DOMContentLoaded", function () {
    changeLanguage("Eng"); // Set default language to English
});

window.addEventListener("scroll", scrollActive);