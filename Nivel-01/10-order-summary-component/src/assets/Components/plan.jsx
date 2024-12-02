import iconMusic from '../images/icon-music.svg';
import './plan.css'

export default function Plan(){
    return(
        <>
        <div className='music-conteiner'>
            <img className='icon-music' src={iconMusic}/>
            <h1 className='plan'>Annual Plan</h1>
            <p className='price'>$59.99/year</p>
            <a href='#'>Change</a>
        </div>
        </>
    )
}