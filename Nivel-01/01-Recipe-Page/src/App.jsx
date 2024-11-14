import Imagem from './img/image-omelette.jpeg'
import './App.css'

export default function App(){
  return(
    <>
    <section className='conteiner'>
      <img src={Imagem} alt='Img-01'/>
      <h1>Simple Omelette Recipe</h1>
      <p className='description'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p><br/>
      <div className='preparationTime'>
        <h3>Preparation time</h3>
        <ul>
          <li><strong>Total: </strong> Approximately 10 minutes</li>
          <li><strong>Preparation: </strong> 5 minutes</li>
          <li><strong>Cooking: </strong> 5 minutes</li>
        </ul>
      </div><br/>
      <div className='ingredients'>
        <h3>Ingredients</h3>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Option fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div><br/>
      <div className='line'></div><br/>
      <div className='instructions'>
        <h3>Instructions</h3>
        <ol>
          <li><strong>Beat the eggs: </strong>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You con add a tablespoon of water or milk for a fluffier texture.</li>
          <li><strong>Heat the pan: </strong>Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li><strong>Cook the omeletter: </strong>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to emsure the eggs evenly coat the surface.</li>
          <li><strong>Add fillings &#x28;optional&#x29;: </strong>When the eggs begin to set at the edges but are still slinghtly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li><strong>Fold and serve: </strong>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li><strong>Enjoy: </strong>Serve hot, with additional alt and pepper if needed.</li>
        </ol>
      </div><br/>
      <div className='line'></div><br/>
      <div className='nutrition'>
        <h3>Nutrition</h3>
        <p>The table below shows nutrictionL values per serving without the additional fillings.</p>
        <table>
          <tr>
            <td>Calories</td>
            <td className='value'>277kcal</td>
          </tr>
          <div className='line'></div>
          <tr>
            <td>Carbs</td>
            <td className='value'>0g</td>
          </tr>
          <div className='line'></div>
          <tr>
            <td>Protein</td>
            <td className='value'>20g</td>
          </tr>
          <div className='line'></div>
          <tr>
            <td>Fat</td>
            <td className='value'>22g</td>
          </tr>
        </table>
      </div>
    </section>
    </>
  )
}