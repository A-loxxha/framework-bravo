export default function SideBar() {
    return (
        <aside className="sidebar bg-1 p-3">
            <div className="sidebar-header">
                <input type="text" className="form-control mb-3" placeholder="Search..." />
            </div>
            <nav className="sidebar-nav border-top border-bottom py-3">
                <div className="sidebar-item flex justify-content-between align-items-center">
                    <ul className="list-unstyled">
                        <li className="sidebar-header">
                            <h5>Categories</h5>
                        </li>
                        <li className="navbar-item"><a className="nav-link active" href="#">View all</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Framework Laptops</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Framework Desktops</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Mainboards</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Expansion Cards</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Memory & Storage</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Keyboards</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Parts</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Customization</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Tools</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Software</a></li>
                        <li className="sidebar-item"><a className="nav-link" href="#">Merch</a></li>
                    </ul>
                </div>
            </nav>  
            <div className="sidebar-footer mt-auto p-3">
                <ul className="list-unstyled">
                    <li className="sidebar-header">
                            <h5>Sort by</h5>
                        </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel" className="radio theme-secondary" />
                        <label htmlFor="radioLabel" className="p-2"> Featured </label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel2" className="radio theme-secondary" />
                        <label htmlFor="radioLabel2" className="p-2">Price: Low to High</label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel3" className="radio theme-secondary" />
                        <label htmlFor="radioLabel3" className="p-2">Price: High to Low</label> 
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel4" className="radio theme-secondary" />
                        <label htmlFor="radioLabel4" className="p-2">Newest</label>
                    </li>
                </ul>
                
                
                  
                
            </div>
            
        </aside>
    )
}