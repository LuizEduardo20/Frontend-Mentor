import { useState } from 'react';
import iconShare from './assets/images/icon-share.svg';
import iconFacebook from './assets/images/icon-facebook.svg';
import iconPinterest from './assets/images/icon-pinterest.svg';
import iconTwitter from './assets/images/icon-twitter.svg';
import avatar from './assets/images/avatar-michelle.jpg';
import './App.css';

export default function App() {
  const [showSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <section className='container'>
      <div className='image'></div>
      <h1>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className='description'>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I've got some simple tips to help you make
        any room feel complete
      </p>
      <img src={avatar} className='avatar' />
        <h2>Michelle Appleton</h2>
        <p className='dateTime'>28 Jun 2020</p>
      <div className='share-container'>
          <div className='conteinerIcon' onClick={toggleSocial}>
            <img src={iconShare} />
          </div>
            {showSocial && (
              <div className='socialMidia'>
              <h4>SHARE</h4>
                <img src={iconFacebook} alt="Facebook Icon" />
                <img src={iconTwitter} alt="Twitter Icon" />
                <img src={iconPinterest} alt="Pinterest Icon" />
            </div>
          )}
        </div>
    </section>
  );
}