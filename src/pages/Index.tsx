
import { useEffect, useRef } from "react";
import PortfolioScript from "../components/PortfolioScript";

const Index = () => {
  const headerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initialize animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="portfolio-container">
      <PortfolioScript />
      {/* Header */}
      <header ref={headerRef} className="portfolio-header">
        <div className="container">
          <div className="logo">John Doe</div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">John Doe</span>
              <span className="role">Web Developer & Designer</span>
            </h1>
            <p className="hero-description">
              I build beautiful, interactive websites and applications with a focus on user experience.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="graphic-element circle-1"></div>
              <div className="graphic-element circle-2"></div>
              <div className="graphic-element square"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="image-frame">
                {/* Profile image would go here in an img tag */}
                <div className="profile-placeholder"></div>
              </div>
            </div>
            <div className="about-text">
              <h3>Who am I?</h3>
              <p>
                I'm a passionate web developer with over 5 years of experience creating digital
                experiences that users love. I focus on building clean, efficient, and scalable web
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in tech started when I built my first website back in 2015, and I've been
                hooked ever since. I love learning new technologies and challenging myself with complex
                projects.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">John Doe</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">john@example.com</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span className="value">New York, USA</span>
                </div>
                <div className="info-item">
                  <span className="label">Availability:</span>
                  <span className="value available">Available for Freelance</span>
                </div>
              </div>
              <a href="#" className="btn primary-btn download-cv">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="section-divider"></div>
          </div>
          <div className="projects-filter">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="web">Web Design</button>
            <button className="filter-btn" data-filter="app">App Development</button>
            <button className="filter-btn" data-filter="other">Other</button>
          </div>
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card" data-category="web">
              <div className="project-image">
                <div className="project-placeholder"></div>
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">E-commerce Website</h3>
                <p className="project-description">
                  A fully responsive e-commerce platform built with modern web technologies.
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="project-card" data-category="app">
              <div className="project-image">
                <div className="project-placeholder"></div>
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  A productivity application that helps users manage their daily tasks.
                </p>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                  <span className="tag">React</span>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="project-card" data-category="web">
              <div className="project-image">
                <div className="project-placeholder"></div>
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">Portfolio Template</h3>
                <p className="project-description">
                  A customizable portfolio template for creative professionals.
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">SCSS</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <div className="section-divider"></div>
          </div>
          <div className="skills-content">
            <div className="skills-text">
              <p>
                I've worked with a variety of technologies in the web development world.
                From front-end design to back-end systems, I enjoy the full spectrum of creating digital experiences.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">HTML5</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "95%"}}></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">CSS3/SCSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "90%"}}></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "85%"}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "80%"}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "75%"}}></div>
                    </div>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Express</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "70%"}}></div>
                    </div>
                    <span className="skill-percentage">70%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">MongoDB</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "65%"}}></div>
                    </div>
                    <span className="skill-percentage">65%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">SQL</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: "60%"}}></div>
                    </div>
                    <span className="skill-percentage">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon email-icon"></div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>john@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon phone-icon"></div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+1 123 456 7890</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon"></div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>New York, NY, USA</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon linkedin"></a>
                <a href="#" className="social-icon github"></a>
                <a href="#" className="social-icon twitter"></a>
                <a href="#" className="social-icon instagram"></a>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder="Your Name" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder="Your Email" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" id="subject" name="subject" placeholder="Subject" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" placeholder="Your Message" required className="form-textarea"></textarea>
                </div>
                <button type="submit" className="btn primary-btn send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <p>&copy; 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
