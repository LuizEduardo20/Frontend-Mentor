import bgCard from '../images/bg-pattern-card.svg'
import imagePersona from '../images/image-victor.jpg'
import './Card.css'

export default function Card(){
  return(
    <>
    <section className='conteiner'>
      <img className='bgCard' src={bgCard}/>
      <img className='persona' src={imagePersona}/>
      <h1>Victor Crest</h1>
      <p className='numberTitle'>26</p>
      <p className='locate'>London</p>
      <hr/>
      <h2 className='numberFollowers'>80K</h2>
      <p className='nameFollowers'>Followers</p>
      <h2 className='numberLikes'>803K</h2>
      <p className='nameLikes'>Likes</p>
      <h2 className='numberPhotos'>1.4K</h2>
      <p className='namePhotos'>Photos</p>
    </section>
    </>
  )
}