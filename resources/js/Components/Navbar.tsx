export function Navbar() {
    return (
        <nav>
            <div className="logo">
                <a href="/" className="flex items-center">
                    <img
                        className="logo"
                        src="/assets/svg/hose-logo.svg"
                        alt="logo"
                    />
                    <img
                        className="pl-2 logo-name md:pl-4"
                        src="/assets/img/logo-name.png"
                        alt="logo-name"
                    />
                </a>
            </div>
            <ul className="nav-links">
                <li>
                    <a>Invitation Letters</a>
                </li>
                <li>
                    <a>Programme</a>
                </li>
                <li>
                    <a href="/conference#speakers">Speakers</a>
                </li>
                <li>
                    <a href="/conference/speakers/apply">Apply to Speak</a>
                </li>
                <li>
                    <a href="/conference/register">Register</a>
                </li>
                <li>
                    <a href="/conference#faq">FAQ</a>
                </li>
            </ul>
            <button className="nav-cta">Get Invitation Letter</button>
        </nav>
    );
}
