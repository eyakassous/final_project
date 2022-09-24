import CardArticle from './CardArticle';
import {useState} from "react";
function List({Shop,Caracter,Rate,handlepanier}) {

   return (
      <div 
      className='container fluid '
      style={{display:'flex',flexWrap: 'wrap',
      width:'1000px',
      justifyContent:'space-around',
      marginTop:'20px',
      padding:'auto',
      fontFamily: 'cursive',}}>
    { 
    Shop.filter((elt)=>
    (elt.title.toUpperCase().includes(Caracter.toUpperCase()) && elt.rate>=Rate))
    .map((elt)=> (
    <CardArticle key={elt.id} article={elt} handlepanier={handlepanier}/>
    ))}


    
      </div>
    );
  }
  
   export default List;
