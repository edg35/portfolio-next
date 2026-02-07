
interface NavigationProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export function DesktopNav() {
    return (
        <nav id="desktop-nav">
            <div className="logo">Ethan Green</div>
            <div>
                <ul className="nav-links">
                    <li><a href="#live">Live Data</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#reading">Reading</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export function HamburgerNav({ isMenuOpen, toggleMenu }: NavigationProps) {
    return (
        <nav id="hamburger-nav">
            <div className="logo">Ethan Green</div>
            <div className="hamburger-menu">
                <div className={`hamburger-icon${isMenuOpen ? ' open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu-links${isMenuOpen ? ' open' : ''}`}>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#reading" onClick={toggleMenu}>Reading</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </div>
            </div>
        </nav>
    );
}
