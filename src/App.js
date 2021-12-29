import './App.css';
import { TeamPage } from './component/teampage/TeamPage';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TeamPage />
      <TeamPage />
      <TeamPage />
      <Footer />
    </div>
  );
}

export default App;
