import imgAvatar from './assets/images/image-avatar.png'
import iconClock from './assets/images/icon-clock.svg'
import iconEthereum from './assets/images/icon-ethereum.svg'
import './App.css'

export default function App() {
  return (
    <>
    <div className='conteiner'>
      <div className='img_equilibrium'></div>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <img src={iconEthereum} className='icon_ethereum' alt='icon_ethereum'/>
      <h2>0.041 ETH</h2>
      <img src={iconClock} className='icon_clock' alt='clock'/>
      <p className='clock_p'>3 days left</p>
      <hr/>
      <img src={imgAvatar} className='icon_avatar' alt='icon_avatar'/>
      <p className='avatar_p'>Creation of <strong>Jules Wyvern</strong></p>
    </div>
    </>
  )
}