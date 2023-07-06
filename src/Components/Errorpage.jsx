import { NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Errorpage = () => {
  return (
    <>
      <Header />
      <main className="error-box grid-center">
        <div className="grid-center">
          <p className="error">404</p>
          <p className="msg">Sorry Page note found</p>
          <NavLink className="nav-btn" to="/">Go back</NavLink>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Errorpage