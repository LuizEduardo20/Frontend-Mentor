import iconSedans from '../images/icon-sedans.svg'
import './Sedans.css'

export default function Sedans(){
    return(
        <>
        <section className='conteinerSedans'>
            <img src={iconSedans}/>
            <h1>SEDANS</h1>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button>Learn More</button>
        </section>
        </>
    )
}