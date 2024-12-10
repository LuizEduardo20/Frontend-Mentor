import iconLuxury from '../images/icon-luxury.svg'
import './Luxury.css'

export default function Luxury(){
    return(
        <>
        <section className='conteinerLuxury'>
            <img src={iconLuxury}/>
            <h1 className='titleLuxury'>LUXURY</h1>
            <p className='descriptionLuxury'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button className='buttonLuxury'>Learn More</button>
        </section>
        </>
    )
}