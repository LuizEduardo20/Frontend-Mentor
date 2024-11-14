import img_qrCode from './img/image-qr-code.png'
import './App.css'

export default function App() {
  return (
    <>
      <div className='conteiner'>
        <img src={img_qrCode} alt='qrCode'/>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  )
}