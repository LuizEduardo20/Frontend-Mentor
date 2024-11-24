import img_product from './images/image-product-desktop.jpg'
import icon_cart from './images/icon-cart.svg'
import './App.css'

export default function App() {
  return (
    <>
      <section>
        <img src={img_product}/>
        <h3>PERFUME</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <h1 className='pricing'>$149.99</h1>
        <h1 className='before-pricing'>$169.99</h1>
        <img className='icon-cart' src={icon_cart}/>
        <button>Add to Cart</button>
        
      </section>
    </>
  )
}