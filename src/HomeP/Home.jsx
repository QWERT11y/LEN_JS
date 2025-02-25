import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "scrollreveal";
import './Home.css'
import Burger from "../Burger/burger";

const Home = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })
    const [activeSection, setActiveSection] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    // Активное меню при клике
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
        document.getElementById("nav-menu").classList.remove("show");
      });
    });

    // Показ мобильного меню
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }

    // Смена активного раздела при скролле
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  useEffect(() => {
    // Scroll Reveal Анимации
    ScrollReveal().reveal(".home-title", { origin: "top", distance: "80px", duration: 2000, reset: true });
    ScrollReveal().reveal(".home-scroll", { delay: 200 });
    ScrollReveal().reveal(".home-img", { origin: "right", delay: 400 });
    ScrollReveal().reveal(".about-img", { delay: 500 });
    ScrollReveal().reveal(".about-subtitle", { delay: 300 });
    ScrollReveal().reveal(".about-profession", { delay: 400 });
    ScrollReveal().reveal(".about-text", { delay: 500 });
    ScrollReveal().reveal(".about-social-icon", { delay: 600, interval: 200 });
    ScrollReveal().reveal(".skills-subtitle", {});
    ScrollReveal().reveal(".skills-name", { distance: "20px", delay: 50, interval: 100 });
    ScrollReveal().reveal(".skills-img", { delay: 400 });
    ScrollReveal().reveal(".portfolio-img", { interval: 200 });
    ScrollReveal().reveal(".contact-subtitle", {});
    ScrollReveal().reveal(".contact-text", { interval: 200 });
    ScrollReveal().reveal(".contact-input", { delay: 400 });
    ScrollReveal().reveal(".contact-button", { delay: 600 });
  }, []);

  return (
    <>
     <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="#" class="nav-logo">LEN_js</a>
            </div>

            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#skills" class="nav-link">Start Learn</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
           
            <div class="nav-toggle" id="nav-toggle">
               <Burger/>
            </div>
        </nav>
        
    </header>

    <main class="l-main">
        <section class="home" id="home">
            <div class="home-container bd-grid">
                <div className="flex justify-between">
                <h1 class="home-title"><span>HE</span > <br />LLO</h1>
                
                </div>
           
                <div class="home-scroll">
                    <a href="#about" class="home-scroll-link"><i class='bx bx-up-arrow-alt' ></i>SCROLL DOWN</a>
                </div>
        
            
            </div>
        </section>
    

        <section class="about section" id="about">
            <h2 class="section-title">About</h2>

            <div class="about-container bd-grid">
                <div class="about-img">
                    {/* <img src="https://i.postimg.cc/x8js2KnT/perfil.png" alt="John Doe image"> */}
                </div>

                <div>
                    <h2 class="about-subtitle">We're a company about teaching the P.L</h2>
                    <span class="about-profession">to be Web Designer</span>
                    <p class="about-text">As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience</p>

                    <div class="about-social">
                        <a href="#" class="about-social-icon"><i class='bx bxl-linkedin'></i></a>
                        <a href="#" class="about-social-icon"><i class='bx bxl-github'></i></a>
                        <a href="#" class="about-social-icon"><i class='bx bxl-instagram'></i></a>
                    </div>
                </div>   
            </div>
        </section>

        <section class="skills section" id="skills">
            <h2 class="section-title">Start!</h2>

            <div class="skills-container bd-grid">
                <div class="skills-box">
                    <h3 class="skils-subtitle">Development</h3>

                    <span class="skills-name">HTML</span>
                    <span class="skills-name">CSS</span>
                    <span class="skills-name">JAVASCRIPT</span>
                    <span class="skills-name">SCSS</span>
                    <span class="skills-name">REACT</span>
                    <span class="skills-name">VUE</span>

                    <h3 class="skils-subtitle">Design</h3>

                    <span class="skills-name">FIGMA</span>
                    <span class="skills-name">ADOBE XD</span>
                    <span class="skills-name">PHOTOSHOP</span>
                </div>

                <div class="skills-img">
                    {/* <img src="" alt="skills image"> */}
                </div>
            </div>
        </section>

       

        <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="contact-container bd-grid">
                <div class="contact-info">
                    <h3 class="contact-subtitle">EMAIL</h3>
                    <span class="contact-text">info.mail.com</span>

                    <h3 class="contact-subtitle">PHONE</h3>
                    <span class="contact-text">+20 999-999</span>

                    <h3 class="contact-subtitle">ADDRESS</h3>
                    <span class="contact-text">Sacramento, California, USA</span>
                </div>

                <form action="" class="contact-form">
                    <div class="contact-inputs">
                        {/* <input type="text" placeholder="Name" class="contact-input"> */}
                        {/* <input type="email" placeholder="Email" class="contact-input"> */}
                    </div>

                    <textarea name="" id="" cols="0" rows="10" class="contact-input"></textarea>

                    {/* <input type="submit" value="Send" class="contact-button"> */}
                </form>
            </div>
        </section>

    </main>

    <footer class="footer section">
        <div class="footer-container bd-grid">
            <div class="footer-data">
                <h2 class="footer-title">LEN_js</h2>
                <p class="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illum!</p>
            </div>

            <div class="footer-data">
                <h2 class="footer-title">Len_js</h2>
                <ul>
                    <li><a href="#home" class="footer-link">Home</a></li>
                    <li><a href="#about" class="footer-link">About</a></li>
                    <li><a href="#skills" class="footer-link">Skills</a></li>
                    <li><a href="#portfolio" class="footer-link">Portfolio</a></li>
                    <li><a href="#contact" class="footer-link">Contact</a></li>
                </ul>
            </div>

            <div class="footer-data">
                <h2 class="footer-title">FOLLOW</h2>

                <a href="#" class="footer-social"><i class='bx bxl-instagram'></i></a>
                <a href="#" class="footer-social"><i class='bx bxl-facebook'></i></a>
                <a href="#" class="footer-social"><i class='bx bxl-twitter'></i></a>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Home;