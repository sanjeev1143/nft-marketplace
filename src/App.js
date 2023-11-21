import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import Navbar from './components/NavBar/Navbar';
import SecondPage from './components/SecondPage/secondPage';
import LiveAuction from './components/LiveAuction/LiveAuction';
import Roadmap from './components/Roadmap/Roadmap';
import TopCollection from './components/TopCollection/topCollection';
function App() {
  return (
    <>
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
      <LiveAuction/>
      <Roadmap/>
      <TopCollection/>
      <br/><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default App;
