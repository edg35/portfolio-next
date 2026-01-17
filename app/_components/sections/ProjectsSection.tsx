import Image from "next/image";

export function ProjectsSection() {
    return (
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
            <Image src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" width={30} height={30} onClick={() => window.location.href = '#reading'} />
        </section>
    );
}
