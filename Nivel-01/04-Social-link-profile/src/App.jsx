import Avatar from './img/avatar-jessica.jpeg'
import Buttons from './Components/Buttons'
import './App.css'

export default function App(){
  return(
    <>
    <div className='conteiner'>
      <img src={Avatar} alt='Avatar-J'/>
      <h1>Jessica Randall</h1>
      <p className='locate'>London, United kingdom</p>
      <p className='about'>"Front-end developer and avid reader"</p>
      <Buttons/>
    </div>
    </>
  )
}