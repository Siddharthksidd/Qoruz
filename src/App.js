import Agencysection from './Components/Agencysection';
import BrandList from './Components/BrandList';
import CuratedSection from './Components/CuratedSection';
import CuratedSectionM from './Components/CuratedSectionM';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ImgSection from './Components/ImgSection';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <CuratedSection />
    <BrandList />
    <CuratedSectionM />
    <Navigation />
    <Feature />
    <ImgSection />
    <Agencysection />
    <Footer />
    </div>
  );
}

export default App;
