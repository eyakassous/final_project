import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function Details({Shop}) {
const {id}=useParams();//returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> . Child routes inherit all params from their parent routes.
const foundArticle=Shop.find((elt)=>
elt.id==id
) 
    return (
      <div className="container"
      style={{marginTop:'20%',
      fontFamily: 'cursive',}}>
       <Link to="/">
       
       <Button variant="primary">go back</Button>
       </Link>
       <br/><br/>

       <h3 style={{ fontWeight: 'bold' }}>prix:</h3>
       <div>{foundArticle.prix}</div>
       <h3 style={{ fontWeight: 'bold' }}>description:</h3>
       <div>{foundArticle.decription}</div>
       <h3 style={{ fontWeight: 'bold' }}>livraison:</h3>
       <div>{foundArticle.livraison}</div>
       <h3 style={{ fontWeight: 'bold' }}>disponibilite:</h3>
       <div>{foundArticle.disponibilite}</div>
      
      </div>
    );
  }
  
  export default Details;