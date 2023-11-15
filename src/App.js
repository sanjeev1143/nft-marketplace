import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import Navbar from './components/NavBar/Navbar';
import SecondPage from './components/SecondPage/secondPage';
import LiveAuction from './components/LiveAuction/LiveAuction';
function App() {
  return (
    <>
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
      <LiveAuction/>
    </>
  );
}

export default App;
