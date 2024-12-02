import illustrationHero from '../images/illustration-hero.svg';
import Plan from './plan';
import Buttons from './Buttons'
import './orderSummary.css';

export default function orderSummary(){
    return(
        <>
        <div className='conteiner'>
            <img src={illustrationHero}/>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <Plan />
            <Buttons />
        </div>
        </>
    )
}