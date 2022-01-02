import './App.css';
import { TeamPage } from './component/teampage/TeamPage';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import { HomePage } from './component/homePage/homePage'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TeamPage /> */}
      <HomePage/>
      
      <Footer />
    </div>
  );
}

export default App;
