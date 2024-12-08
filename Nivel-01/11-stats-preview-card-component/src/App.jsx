import imgDesktop from './assets/images/image-header-desktop.jpg';
import Value from './assets/Components/value'
import './App.css';

export default function App(){
  return(
    <>
    <section className='conteiner'>
    <div className="image-overlay">
      <img src={imgDesktop} className="image"/>
    </div>
      <h1>Get <strong>insights</strong> that help your business grow.</h1>
      <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
      experience, and overall efficiency.</p>
      <Value/>
    </section>
    </>
  );
};