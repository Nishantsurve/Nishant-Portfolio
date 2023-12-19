import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      
      <Sidebar/>

      <div className="wrapper">
    <span>Nishant Surve</span>
  <div className="social">
    <a href="https://twitter.com/NishantS208"><img src="/Twitter.png" alt="" /></a>
    <a href="#"><img src="/instagram.png" alt="" /></a>
    <a href="https://www.linkedin.com/in/nishant-surve-148973214/"><img src="/LinkedIN.png" alt="" /></a>
    <a href="https://github.com/Nishansurve"><img src="/Github.png" alt="" /></a>
  </div>
      </div>
    </div>
  )
}

export default Navbar