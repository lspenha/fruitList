import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards () {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    axios("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
    .then(response => { setFruits(response.data)})
  }, [])

  return (
    <>
      <div className="main">
        <h1>Lista de Frutas</h1>
        <ul className="cards">
          {fruits && fruits.map((fruit, index) => {   
           return <li class="cards_item">
              <div className="card">
                <div className="card_image"><img src={fruit.photo} alt="Fruit"/></div>
                <div className="card_content">
                  <h2 className="card_title">{fruit.name}</h2>
                  <p className="card_text">{`Calorias: ${fruit.calories} | Proteína: ${fruit.protein} | Carboidrato: ${fruit.carbohydrates}`}</p>
                  <p className="card_text">{`Fibra: ${fruit.fiber} | Gordura ${fruit.blubber} | Porção: ${fruit.portion}`}</p>
                  <Link to={`/detalhes/${fruit.name}`} className="btn card_btn">Consulte mais informações</Link>
                </div>
              </div>
            </li> 
          })}
        </ul>
      </div>
    </>
  )
};

export default Cards;