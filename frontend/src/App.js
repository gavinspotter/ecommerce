import logo from './logo.svg';
import {Container} from "react-bootstrap"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
    <Header/>
    <main>
    <Container>
    <h2>pro shop</h2>
    </Container>
      
    
    </main>
    <Footer/>
    </>
  );
}

export default App;
