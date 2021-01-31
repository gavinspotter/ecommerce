
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} />



          </Container>


        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
