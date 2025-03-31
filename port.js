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

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
  const translations = {
      Uzb: {
          home: "Bosh sahifa",
          about: "Haqida",
          certificates: "Sertifikatlar",
          contact: "Bog'lanish",
          introduction: "Men kiberxavfsizlik va veb-dasturlash bo'yicha mutaxassisman.",
          hireMe: "Meni yollang",
          downloadCV: "CV-ni yuklab olish",
          getInTouch: "Bog'laning",
          email: "Elektron pochta",
          phone: "Telefon",
          footerText: "Barcha huquqlar himoyalangan.",
          scrollDown: "Pastga aylantiring",
          aboutHeader: "Haqimda",
          aboutDescription: "Men kiberxavfsizlik va veb-dasturlash bo'yicha nazariy bilimlarga ega bo'lgan mutaxassisman. Amaliy tajriba orttirishga intilaman.",
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
      Eng: {
          home: "Home",
          about: "About",
          certificates: "Certificates",
          contact: "Contact",
          introduction: "I am a cybersecurity and web development specialist.",
          hireMe: "Hire Me",
          downloadCV: "Download CV",
          getInTouch: "Get in touch",
          email: "Email",
          phone: "Phone",
          footerText: "All rights reserved.",
          scrollDown: "Scroll Down",
          aboutHeader: "About Me",
          aboutDescription: "I am a cybersecurity and web development specialist with strong theoretical knowledge. I am eager to gain practical experience.",
          certificatesHeader: "Certificates",
          contactHeader: "Get in touch",
          contactSubtext: "Do you have a project in mind? Contact me here",
          findMe: "Find Me",
          myIntroduction: "My Introduction",
          name: "Davronbek Ibodov",
          cvFile: "eng.pdf",
          send: "Send",
          pronounText: "I'm",
          typedStrings: ["Cybersecurity Specialist", "Web Developer", "Ethical Hacker"]
      },
      Rus: {
          home: "Главная",
          about: "О нас",
          certificates: "Сертификаты",
          contact: "Контакты",
          introduction: "Я специалист по кибербезопасности и веб-разработке.",
          hireMe: "Нанять меня",
          downloadCV: "Скачать резюме",
          getInTouch: "Связаться",
          email: "Электронная почта",
          phone: "Телефон",
          footerText: "Все права защищены.",
          scrollDown: "Прокрутите вниз",
          aboutHeader: "Обо мне",
          aboutDescription: "Я специалист по кибербезопасности и веб-разработке с сильными теоретическими знаниями. Стремлюсь получить практический опыт.",
          certificatesHeader: "Сертификаты",
          contactHeader: "Связаться",
          contactSubtext: "У вас есть проект? Свяжитесь со мной здесь",
          findMe: "Найти меня",
          myIntroduction: "Мое введение",
          name: "Давронбек Ибодов",
          cvFile: "rus.pdf",
          send: "Отправить",
          pronounText: "Я",
          typedStrings: ["Специалист по кибербезопасности", "Веб-разработчик", "Этический хакер"]
      }
  };

  // Matnlarni o'zgartirish
  document.getElementById("langBtn").innerText = lang;
  document.querySelector(".nav-link.active-link").textContent = translations[lang].home;
  document.querySelectorAll(".nav-link")[1].textContent = translations[lang].about;
  document.querySelectorAll(".nav-link")[2].textContent = translations[lang].certificates;
  document.querySelectorAll(".nav-link")[3].textContent = translations[lang].contact;

  document.querySelector(".featured-text-info").textContent = translations[lang].introduction;
  document.querySelector(".btn.blue-btn").textContent = translations[lang].hireMe;

  // Barcha "Download CV" tugmalarini o'zgartirish
  document.querySelectorAll(".download-cv-btn").forEach(button => {
      button.innerHTML = `${translations[lang].downloadCV} <i class="uil uil-file-alt"></i>`;
      button.onclick = function () {
          const link = document.createElement("a");
          link.href = translations[lang].cvFile;
          link.download = translations[lang].cvFile;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      };
  });

  document.querySelector(".top-header span").textContent = translations[lang].getInTouch;
  document.querySelector(".contact-info p:nth-child(2)").innerHTML = `<i class="uil uil-envelope"></i> ${translations[lang].email}: davronbekibodov9557@gmail.com`;
  document.querySelector(".contact-info p:nth-child(3)").innerHTML = `<i class="uil uil-phone"></i> ${translations[lang].phone}: +998 33 734 9557`;

  // Section: About
  document.querySelector("#about .top-header h1").textContent = translations[lang].aboutHeader;
  document.querySelector("#about .about-info h3").textContent = translations[lang].myIntroduction;
  document.querySelector("#about .about-info p").textContent = translations[lang].aboutDescription;

  // Section: Certificates
  document.querySelector("#projects .top-header h1").textContent = translations[lang].certificatesHeader;

  // Section: Contact
  document.querySelector("#contact .top-header h1").textContent = translations[lang].contactHeader;
  document.querySelector("#contact .top-header span").textContent = translations[lang].contactSubtext;

  // Find Me
  document.querySelector("#contact .contact-info h2").innerHTML = `${translations[lang].findMe} <i class="uil uil-corner-right-down"></i>`;

  // Davronbek Ibodov matnlarini o'zgartirish
  document.querySelector(".nav-name").textContent = translations[lang].name;
  document.querySelector(".featured-text-card span").textContent = translations[lang].name;
  document.querySelector("footer .top-footer p").textContent = translations[lang].name;
  document.querySelector("footer .bottom-footer a").textContent = translations[lang].name;

  // Pastki qism (footer)
  document.querySelector("footer .bottom-footer p").innerHTML = `Copyright © <a href="#home" style="text-decoration: none;">${translations[lang].name}</a> - ${translations[lang].footerText}`;

  // Scroll down matni
  document.querySelector(".scroll-icon-box p").textContent = translations[lang].scrollDown;

  // "Send" tugmasi matnini o'zgartirish
  const sendButton = document.querySelector(".send-btn");
  if (sendButton) {
      sendButton.textContent = translations[lang].send;
  }

  // Pronoun-text ni o'zgartirish va qora rangga bo'yash
  const pronounTextElement = document.querySelector(".pronoun-text");
  pronounTextElement.textContent = translations[lang].pronounText;
  pronounTextElement.style.color = "black"; // Qora rang qo'shildi

  // Typed.js ni yangilash
  if (typedInstance) {
      typedInstance.destroy(); // Avvalgi Typed instanceni o'chirish
  }
  typedInstance = new Typed(".typedText", {
      strings: translations[lang].typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
  });

  // Dropdown menyuni yopish
  document.querySelector("#langList").style.display = "none";
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

// ScrollReveal animatsiyasi
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

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
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
      } else {
          document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
      }
  });
}


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
window.addEventListener("scroll", scrollActive);