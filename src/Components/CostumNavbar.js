import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CardArticle from './CardArticle';
import '../styles/navbar.css';


function CostumNavbar({ setCaracter, Shop, setShop, setShow }) {

  const handleChange = (e) => {
    setCaracter(e.target.value);
  }


  return (
    <Navbar bg="black" expand="lg" style={{ backgroundColor: 'black', height: '90px', borderRadius: '2px', }}>
      <Container fluid>
       
            <div style={{ display: 'flex', wrap: 'noWrap', justifyContent: 'space-between' }}>
            
            <h1
                style={{ color: 'white', margin: '10px 50px 20px 0', fontFamily: 'cursive' }}>

                Eya-store
              </h1>
             
              
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="All"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                  />
                </Form>


              </Navbar.Collapse>


            </div>
            <div className='chariot'>
              <span>
                <i class="fas fa-cart-plus"></i>
              </span>
              <span  >0</span>

            </div>
         
      </Container>

    </Navbar>
  );
}

export default CostumNavbar;


