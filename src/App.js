import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InnerHeader from './components/Header/InnerHeader';
import HomePage from './components/HomePage';

function App() {
  return (<>
   <Header/>
   <InnerHeader/>
   <HomePage/>
   </>
  );
}

export default App;
