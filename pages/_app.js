import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/mainPage.css'
import '../styles/makers.css'
import '../styles/production.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {

  return <html lang="ru">
  <Navbar/>
  <div className="wrapper">
    <Component {...pageProps} />
    </div>
  <Footer/>
  </html>

}

export default MyApp
