
import {Container} from "react-bootstrap"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
   <>
    <Header/>
    <main className="py-3">
    <Container>
    <h2>pro shop</h2>
    </Container>
      
    
    </main>
    <Footer/>
    </>
  );
}

export default App;
