import iconSuvs from '../images/icon-suvs.svg'
import './Suvs.css'

export default function Suvs(){
    return(
        <>
        <section className='conteinerSuvs'>
            <img src={iconSuvs}/>
            <h1 className='titleSuvs'>SUVS</h1>
            <p className='descriptionSuvs'>Take an SUV for its spacious interior, powerm and versatility. Perfect for your next family  vacation and off-road adventures.</p>
            <button className='buttonSuvs'>Learn More</button>
        </section>
        </>
    )
}