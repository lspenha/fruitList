import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Cards/Cards.css';

function CardDetail () {
  const { id } = useParams()
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
      axios("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
      .then(response => { setFruit(response.data.find((fruit)=> fruit.name === id))})
    }, [id])

  return (
    <>
      <div className="main">
        <h1>Detalhes da fruta</h1>
          {fruit &&    
            <div className="card">
              <div className="card_image"><img src={fruit.photo} alt="Fruit"/></div>
              <div className="card_content">
                <h2 className="card_title">{fruit.name}</h2>
                <p className="card_text">{`Calorias: ${fruit.calories} | Proteína: ${fruit.protein} | Carboidrato: ${fruit.carbohydrates}`}</p>
                <p className="card_text">{`Fibra: ${fruit.fiber} | Gordura ${fruit.blubber} | Porção: ${fruit.portion}`}</p>
                <Link to="/" className="btn card_btn">retornar a página inicial</Link>
              </div>
            </div>
          }
      </div>
    </>
  )
};

export default CardDetail;