'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addResumeDownload = () => {
    // Add your resume download logic here
    window.open('/assets/resume.pdf', '_blank');
  };

  const loadAWSDiagram = () => {
    // Add your AWS diagram loading logic here
    console.log('Loading AWS diagram');
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Ethan Green</div>
        <div>
          <ul className="nav-links">
            <li><a href="#live">Live Data</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Ethan Green</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <Image className="section__image" src="/assets/profile-pic.jpeg" alt="Ethan Green profile picture" width={400} height={400} />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I&apos;m</p>
          <h1 className="title">Ethan Green</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2 text-xs" onClick={addResumeDownload}>
              Download CV
            </button>
            <button className="btn btn-color-1 text-xs" onClick={() => window.location.href = '#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <Image src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" width={40} height={40}
              onClick={() => window.location.href = 'https://www.linkedin.com/in/ethan-green-98b4271a1/'} />
            <Image src="/assets/github.png" alt="My Github profile" className="icon" width={40} height={40}
              onClick={() => window.location.href = 'https://github.com/edg35'} />
          </div>
        </div>
      </section>
      <section id="live">
        <p className="section__text__p1">Take a Look</p>
        <h1 className="title">Live Data</h1>
        <div className="live-container">
          <div className="live-data-container">
            <div className="details-container max-height">
              <Image src="/assets/education.png" alt="Education icon" className="icon" width={40} height={40} />
              <p>Resume Downloads</p>
              <h3 className="live-number" id="resume_downloads">-</h3>
            </div>
            <div className="details-container max-height">
              <Image src="/assets/education.png" alt="Education icon" className="icon" width={40} height={40} />
              <p>Total Views</p>
              <h3 className="live-number" id="total_views">-</h3>
            </div>
            <div className="details-container max-height">
              <Image src="/assets/education.png" alt="Education icon" className="icon" width={40} height={40} />
              <p>Views This Month</p>
              <h3 className="live-number" id="monthly_views">-</h3>
            </div>
          </div>
          <p className="live-about-paragraph">
            The infrastructure for this live data feature is powered by AWS. JavaScript manages user sessions to prevent duplicate
            view registrations on each page load. Data retrieval and updates are handled through API calls to a Lambda function,
            which authenticates requests and executes the required actions. This project demonstrates my expertise in designing and
            deploying efficient, cloud-based solutions.
          </p>
          <div className="live-button-container">
            <button className="btn btn-color-2" onClick={() => window.location.href = 'https://github.com/edg35/portfolio'}>
              Github
            </button>
            <button className="btn btn-color-1" onClick={loadAWSDiagram}>
              Diagram
            </button>
          </div>
        </div>
        <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow arrow-down" width={30} height={30} onClick={() => window.location.href = '#about'} />
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image src="/assets/about.JPG" alt="Profile picture" className="about-pic" width={400} height={400} />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <Image src="/assets/experience.png" alt="Experience icon" className="icon" width={40} height={40} />
                <h3>Experience</h3>
                <p>1.5+ years <br />Software Development</p>
              </div>
              <div className="details-container">
                <Image src="/assets/education.png" alt="Education icon" className="icon" width={40} height={40} />
                <h3>Education</h3>
                <p>B.A. Bachelors Degree<br />Computer Science</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Solid foundation in HTML and CSS, with intermediate proficiency in languages such as Python, Java, and
                technologies like Node.js, Express.js, and React. I&apos;m also experienced in using Git for version control.
                In my projects, I&apos;ve utilized my skills to develop web applications and software solutions,leveraging frameworks like
                Flask and Flutter. I enjoy exploring new technologies and solving complex problems through code. Feel free to browse
                through my portfolio to see some of my recent projects. If you have any questions or would like to
                discuss potential collaborations, don&apos;t hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
        <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" width={30} height={30} onClick={() => window.location.href = '#experience'} />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Languages</h2>
              <div className="article-container">
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Java</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Technologies</h2>
              <div className="article-container">
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>SQL / NoSQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Flask</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>AWS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image src="/assets/checkmark.png" alt="Experience icon" className="icon" width={30} height={30} />
                  <div>
                    <h3>Next.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="experience-certifications-container">
            <iframe
              src="https://www.credly.com/embedded_badge/7e072f0b-d919-4956-afe8-4c62c65fc588"
              width="250"
              height="270"
              style={{ border: 'none' }}
              title="View my verified achievement on Credly."
            ></iframe>
          </div>
        </div>
        <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" width={30} height={30} onClick={() => window.location.href = '#projects'} />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <Image src="/assets/project-1.png" alt="Project 1" className="project-img" width={300} height={200} />
              </div>
              <h2 className="experience-sub-title project-title">CJ Environmental</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/edg35/cj-environmental'}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://cjenvironmentalsolutions.com'}>
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <Image src="/assets/project-2.jpg" alt="Project 2" className="project-img" width={300} height={200} />
              </div>
              <h2 className="experience-sub-title project-title">Dos Manos</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/edg35/dos-manos-official'}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://edg35.github.io/dos-manos-official/index.html'}>
                  Demo Site
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <Image src="/assets/smell-logo.png" alt="Project 3" className="project-img" width={300} height={200} />
              </div>
              <h2 className="experience-sub-title project-title">SmellScout</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/edg35/aroma_official'}>
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" width={30} height={30} onClick={() => window.location.href = '#contact'} />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <Image src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" width={40} height={40} />
            <p><a href="mailto:ethdavidgreen@gmail.com">ethdavidgreen@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <Image src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" width={40} height={40} />
            <p><a href="https://www.linkedin.com/in/ethan-green-98b4271a1/">Ethan Green</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#live">Live Data</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Ethan Green. All Rights Reserved.</p>
      </footer>
    </>
  );
} 
