import illustrationArticle from './img/illustration-article.svg'
import imageAvatar from './img/image-avatar.webp'
import './App.css'

export default function App() {
  return (
    <>
    <div className='conteiner'>
      <img className='illustration' src={illustrationArticle} alt='illustration-article'/>
      <p className='learning'>Learning</p>
      <p className='date'>Published 21 Dec 2023</p>
      <h1>HTML & CSS Foundations</h1>
      <p className='description'>These languages are the backbone of every website, defining structure, content, and presetation.</p>
      <img className='avatar' src={imageAvatar} alt='image-avatar'/>
      <p className='name'>Greg Hooper</p>
    </div>
    </>
  )
}
