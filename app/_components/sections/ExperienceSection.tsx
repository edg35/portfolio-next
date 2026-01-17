import Image from "next/image";

export function ExperienceSection() {
    return (
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
    );
}
