import logo from './logo.svg';
import './App.css';
import RouterPage from './Router';
import Footer from './footers/Footer';
import Carrer from './careers/Career';
import Project from './project/Project';
import Cards from './cards/Cards';

function App() {
  return (
    <div className="App">
 <RouterPage />
 <Cards />
 <Project />
 <Carrer />
   <Footer />

    </div>
  );
}

export default App;
