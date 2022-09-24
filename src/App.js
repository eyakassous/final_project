import { useState } from 'react';
import './App.css';
import{ articles } from'./Data'; 
import List from './Components/List';
import CostumNavbar from './Components/CostumNavbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './Components/Details'
import Options from './Components/Options'
import { Container } from 'react-bootstrap';

function App() { 
  const[Shop,setShop]=useState(articles);
  const[Caracter,setCaracter]=useState('');//ou on va situer les textes ecrite dans recherche
  const[Rate,setRate]=useState(0);
  const [show,setShow] = useState(true);
  
  const [panier, setPanier] = useState([]); //state qui contient les produits ajouter au panier

  const handlepanier = (elt)=> 
  {
   setPanier([...panier,elt]);
   console.log(panier);
} ;
  return (
    <div>
      <CostumNavbar 
      // setShow={setShow}
      setCaracter={setCaracter}  Shop={Shop} setShop={setShop}/>
        {/* {show ? <List handlepanier={handlepanier}/>: "panier"}   */}
       
  <Container>
   <br/>
   <div  style={{display:'flex'}}>
   <Options Shop={Shop} setShop={setShop} setRate={setRate}/> 
  
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<List Shop={Shop} Caracter={Caracter} Rate={Rate}/>}> </Route>
      <Route path="/Details/:id" element={<Details Shop={Shop}/>}> </Route>
      <Route path="/Ajouter" element={<List />}> </Route>
    </Routes>
  </BrowserRouter>
  </div>

  </Container>
   
   
    </div>
    

    
    );
}

export default App;