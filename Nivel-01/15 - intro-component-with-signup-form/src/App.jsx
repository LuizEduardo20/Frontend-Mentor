import Singup from './assets/Components/Singup'
import BgDesktop from './assets/images/bg-intro-desktop.png'
import BgMobile from './assets/images/bg-intro-mobile.png'
import './App.css'

export default function App() {
  return (
    <>
      <section className='container'>
        <picture>
          <source media="(max-width: 376px)" srcSet={BgMobile} />
          <img src={BgDesktop} alt="ImgDesktop" />
        </picture>
        
        <div className="content-wrapper">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>

        <div className="form-wrapper">
          <p className='Oferta'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
          <Singup />
        </div>
      </section>
    </>
  )
}