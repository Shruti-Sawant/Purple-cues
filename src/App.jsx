import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComponent from './components/Navigation/NavbarComponent';
import MainPage from './components/LandingPage/MainPage';
import CardComponent from './components/cards/CardComponent';
import CardCompSec from './components/cards/CardCompSec';
import Testimonies from './components/cards/Testimonies';
import ImageCard from './components/cards/ImageCard';
import Footer from './components/footer/Footer';
import LoginPage from './components/Navigation/LoginPage';
function App() {


  return (
    <>
      <NavbarComponent />
      <MainPage />
      <CardComponent />
      <CardCompSec />
      <Testimonies />
      <ImageCard />
      <Footer />
   
    </>
  )
}

export default App
