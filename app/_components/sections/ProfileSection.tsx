import Image from "next/image";

interface ProfileSectionProps {
    onResumeDownload: () => void;
}

export function ProfileSection({ onResumeDownload }: ProfileSectionProps) {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <Image className="section__image" src="/assets/profile-pic.jpeg" alt="Ethan Green profile picture" width={400} height={400} />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I&apos;m</p>
                <h1 className="title">Ethan Green</h1>
                <p className="section__text__p2">Software Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2 text-xs" onClick={onResumeDownload}>
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
    );
}
