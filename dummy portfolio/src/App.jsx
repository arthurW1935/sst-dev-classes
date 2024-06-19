import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Tile from './components/Tile/Tile';
import Banner from './components/Banner/Banner';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Tile 
        heading="Heading 1"
        subHeading="Sub Heading 1"
        image="https://via.placeholder.com/180"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec nunc lacinia."
        link="#"
        linkText="Link 1"
      />
      
      <ProgressBar/>
    </>
  )
}

export default App;
