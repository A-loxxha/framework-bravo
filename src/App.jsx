import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <main className="container">
        <h1>Framework Laptop 13 is a thin, light, and fast 13.5” notebook that is simple to customize, upgrade, and repair, so it stays yours for longer.</h1>
        <div className="row">
          <Card>
            <img src="https://images.frame.work/frameworkmarketplace/aeUO651ZCF7ETVrh_fw13-family_overview_highlights_customize.jpg?auto=format%2Ccompress" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Customize</h4>
              <p className="card-text">Expansion Cards, keyboard languages, Bezel colors. It’s yours to choose.</p>
              <a href="#" className="btn-solid theme-success">Buy Now</a>
            </div>

          </Card>
          <Card>
            <img src="https://images.frame.work/frameworkmarketplace/aeUO7Z1ZCF7ETVrj_fw13-family_overview_highlights_upgrade.jpg?auto=format%2Ccompress" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Upgrade</h4>
              <p className="card-text">Upgrade your processor generation-over-generation, and add more memory and storage whenever you need.</p>
              <a href="#" className="btn-solid theme-warning">Buy Now</a>
            </div>
          </Card>
          <Card>
            <img src="https://images.frame.work/frameworkmarketplace/aeUO7J1ZCF7ETVri_fw13-family_overview_highlights_repair.jpg?auto=format%2Ccompress" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Repair</h4>
              <p className="card-text">Every part is replaceable with just the one tool that comes in the box.</p>
              <a href="#" className="btn-solid theme-success">Buy Now</a>
            </div>
          </Card>
        </div>
           
        </main>  
        <Footer year={new Date().getFullYear()}/>

    </>
    
  )
}