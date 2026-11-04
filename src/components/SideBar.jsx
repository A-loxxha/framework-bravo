export default function SideBar() {
    return (
        <aside className="sidebar bg-1 p-3">
            <div className="border-bottom sticky-top bg-2 p-3 my-0">
                <input type="text" className="form-control mb-3" placeholder="Search..." />
            </div>
            <nav className="sidebar-nav border-bottom py-3">
                <div className="sidebar-item flex justify-content-between align-items-center">
                    <ul className="list-unstyled">
                        <li className="sidebar-header">
                            <h5>Categories</h5>
                        </li>
                        <li className="navbar-item"><a className="nav-link active hover-lift" href="#">View all</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Framework Laptops</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Framework Desktops</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Mainboards</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Expansion Cards</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Memory & Storage</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Keyboards</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Parts</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Customization</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Tools</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Software</a></li>
                        <li className="sidebar-item"><a className="nav-link hover-lift" href="#">Merch</a></li>
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
                        <label htmlFor="radioLabel" className="p-2 hover-lift"> Featured </label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel2" className="radio theme-secondary" />
                        <label htmlFor="radioLabel2" className="p-2 hover-lift">Price: Low to High</label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel3" className="radio theme-secondary" />
                        <label htmlFor="radioLabel3" className="p-2 hover-lift">Price: High to Low</label> 
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel4" className="radio theme-secondary" />
                        <label htmlFor="radioLabel4" className="p-2 hover-lift">Newest</label>
                    </li>
                </ul>
                <ul className="list-unstyled">
                    <li className="sidebar-header">
                        <h5>Outlet</h5>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Last gen</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Factory seconds</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Refurbished</label>
                        </div>
                    </li>
                </ul>
                
                <ul className="list-unstyled">
                    <li className="sidebar-header">
                        <h5>Compatible with</h5>
                    </li>
                    <li className="sidebar-text">
                        <p>Laptop 12</p>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">13th Gen Intel® Core™</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Intel® Core™ Series 3</label>
                        </div>
                    </li>
                    <br/>
                    <li className="sidebar-text">
                        <p>Desktop</p>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ AI Max 300 Series</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ AI Max PRO 400 Series</label>
                        </div>
                    </li>
                    <br/>
                    <li className="sidebar-text">
                        <p>Laptop 13 Pro</p>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ AI 300 Series</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Intel® Core™ Ultra Series 3</label>
                        </div>
                    </li>
                    <br/>
                    <li className="sidebar-text">
                        <p>Laptop 16</p>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ 7040 Series</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ AI 300 Series</label>
                        </div>
                    </li>
                    <br/>
                    <li className="sidebar-text">
                        <p>Laptop 13</p>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Chromebook</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">11th Gen Intel® Core™</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ 7040 Series</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">AMD Ryzen™ AI 300 Series</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">Intel® Core™ Ultra Series 1</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">13th Gen Intel® Core™</label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="form-field">
                        <input type="checkbox" id="checkLabel" className="check" />
                        <label for="checkLabel" className="hover-lift">12th Gen Intel® Core™</label>
                        </div>
                    </li>
                </ul>
                
                  
                
            </div>
            
        </aside>
    )
}