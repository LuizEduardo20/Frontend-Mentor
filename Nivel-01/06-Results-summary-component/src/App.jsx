import iconMemory from './assets/images/icon-memory.svg'
import iconReaction from './assets/images/icon-reaction.svg'
import iconVerbal from './assets/images/icon-verbal.svg'
import iconVisual from './assets/images/icon-visual.svg'
import './App.css'

export default function App(){
  return(
    <>
    <section className="results">
      <h2>Your Result</h2>
      <h1>76</h1>
      <h3>of 100</h3>
      <h2 className='great'>Great</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
      <div className="summary">
        <h1>Summary</h1>
        <div className='box'>
          <img src={iconReaction}/>
          <h3>Reaction</h3>
          <p className='primary'>80</p>
          <p className='second'>/ 100</p>
        </div>
        <div className='box'>
          <img src={iconMemory}/>
          <h3>Memory</h3>
          <p className='primary'>92</p>
          <p className='second'>/ 100</p>
        </div>
        <div className='box'>
          <img src={iconVerbal}/>
          <h3>Verbal</h3>
          <p className='primary'>61</p>
          <p className='second'>/ 100</p>
        </div>
        <div className='box'>
          <img src={iconVisual}/>
          <h3>Visual</h3>
          <p className='primary'>72</p>
          <p className='second'>/ 100</p>
        </div>
        <button>Continue</button>
      </div>
    </section>
    </>
  )
}