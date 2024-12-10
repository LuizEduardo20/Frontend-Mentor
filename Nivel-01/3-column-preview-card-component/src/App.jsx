import Sedans from './assets/Components/Sedans';
import Suvs from './assets/Components/Suvs';
import Luxury from './assets/Components/Luxury';
import './App.css';

export default function App(){
  return(
    <>
    <section className='boxConteiner'>
      <Sedans/>
      <Suvs/>
      <Luxury/>  
    </section>
    </>
  );
};