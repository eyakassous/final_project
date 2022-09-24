import React from 'react'
import Form from 'react-bootstrap/Form';
import ReactStars from "react-rating-stars-component";

function Options({setRate,Shop,setShop}) {

     // filtrer les produit d'apres le sexe
  const filterResult = (catItem) => {
    const result = Shop.filter((elt) => {
      return elt.sexe === catItem;
    });
    setShop(result);
  }

     // filtrer les produit d'apres le rate
  const handleRate = (e) => {
    setRate(e);
  }

    // filtrer les produit d'apres le livraison
    const livraisonGratuite = (catItem)=>{
        const liv = Shop.filter((elt)=>
        {
          return elt.livraison === catItem;
        });
        setShop(liv);
       }

       // filtrer les produit d'apres le disponibilite
    const disponibilite = (catItem)=>{
        const dis = Shop.filter((elt)=>
        {
          return elt.disponibilite === catItem;
        });
        setShop(dis);
       }


  return (
    <form>
    <div  style={{backgroundColor:'#DCDCDC',height:'30 px'}}>
      <h1>choisir les options</h1>
      <Form.Check onClick={() => filterResult('f')}
      type="radio" aria-label="radio 1" label="femmes" />
      <Form.Check onClick={() => filterResult('h')}
      type="radio" aria-label="radio 1" label="hommes"  />
      <br/>
      <Form.Group onClick={()=>livraisonGratuite('y')}
      className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="livraison gratuite" />
      </Form.Group>
      <Form.Group onClick={()=>disponibilite('d')}
      className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="disponible pour le moment" />
      </Form.Group>
      <ReactStars
          onChange={handleRate}
          edit={true}
          count={5}
          size={24}
          activeColor="#ffd700"
        />
        <div ></div>
      </div>
    </form>
  )
}

export default Options
