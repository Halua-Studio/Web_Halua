import Navbar from "./Navbar.jsx";
import Section1 from "./Section1.jsx";
import Banner from "./Banner.jsx";
import CardSection from "./Cards.jsx";
import LittlePortfolioSection from "./LittlePortfolioSection.jsx";
import SectionForm from "./SectionForm.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Section1/>
        <Banner/>
        <CardSection/>
        <LittlePortfolioSection/>
        <SectionForm/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
        
  );
}

export default Home;
