import Image from "next/image";

export function ContactSection() {
    return (
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
    );
}
