import Pattern from './img/background-pattern-desktop.svg'
import Minus from './img/icon-minus.svg'
import Plus from './img/icon-plus.svg'
import Star from './img/icon-star.svg'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [showContent, setShowContent] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleContent = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index)
    setShowContent(true)
  }

  return (
    <>
    <img className='pattern' src={Pattern} />
    <section className='conteiner'>
      <img src={Star} alt="star-icon" className="star-icon" />
      <h1>FAQs</h1>
      <section className="accordion">
        <div>
          <h1 onClick={() => toggleContent(0)}>What is Frontend Mentor, and how will it help me?</h1>
          <img src={showContent && activeIndex === 0 ? Minus : Plus} onClick={() => toggleContent(0)} alt="Toggle icon" 
          />
          {showContent && activeIndex === 0 && (
            <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills projects in HTML, CSS, JavaScript. It's suitable for all levels and ideal for portfolio building</p>
          )}
        </div>
        <div className='line'></div>
        <div>
          <h1 onClick={() => toggleContent(1)}>Is Frontend Mentor free?</h1>
          <img src={showContent && activeIndex === 1 ? Minus : Plus} onClick={() => toggleContent(1)} alt="Toggle icon" 
          />
          {showContent && activeIndex === 1 && (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus accusamus debitis numquam repellendus error vel consequuntur reiciendis quo veritatis ipsa alias architecto quia sapiente quibusdam fugiat nemo, accusantium maxime!</p>
          )}
        </div>
        <div className='line'></div>
        <div>
          <h1 onClick={() => toggleContent(2)}>Cam i use Frontend Mentor projects in my portfolio?</h1>
          <img src={showContent && activeIndex === 2 ? Minus : Plus} onClick={() => toggleContent(2)} alt="Toggle icon" 
          />
          {showContent && activeIndex === 2 && (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus accusamus debitis numquam repellendus error vel consequuntur reiciendis quo veritatis ipsa alias architecto quia sapiente quibusdam fugiat nemo, accusantium maxime!</p>
          )}
        </div>
        <div className='line'></div>
        <div>
          <h1 onClick={() => toggleContent(3)}>How can i get help of i'm stuck on a challenge?</h1>
          <img src={showContent && activeIndex === 3 ? Minus : Plus} onClick={() => toggleContent(3)} alt="Toggle icon" 
          />
          {showContent && activeIndex === 3 && (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus accusamus debitis numquam repellendus error vel consequuntur reiciendis quo veritatis ipsa alias architecto quia sapiente quibusdam fugiat nemo, accusantium maxime!</p>
          )}
        </div>
      </section>
    </section>
    </>
  )
}
