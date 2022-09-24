import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import {useNavigate} from "react-router-dom"
//import Details from './Details'

function CardArticle({article,handlepanier}) {

const navigate = useNavigate(); //useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
const handleDetails=()=>{
navigate(`/Details/${article.id}`);
}

    return (
      <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.poster} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{article.title}</Card.Title>
        <Card.Text>
        {article.prix}
        </Card.Text>
        <ReactStars
    count={5}
    value={article.rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
 <Button variant="success" onClick={handleDetails}>voir détails</Button>
 <br/> <br/>
 <Button onClick={()=>handlepanier(article)}
 variant="outline-dark">Ajouter au panier</Button>
      </Card.Body>
    </Card>
      </div>
    );
  }
  
  export default CardArticle;