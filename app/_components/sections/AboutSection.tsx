import Image from "next/image";

export function AboutSection() {
    return (
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
    );
}
