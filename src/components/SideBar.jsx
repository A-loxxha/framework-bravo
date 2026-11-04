export default function SideBar() {
    return (
        <div className="sidebar bg-1 fg-2">
            <input type="text" className="form-control m-2" placeholder="Search..." />
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about-us">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-us">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
            </ul>
        </div>
    )
}