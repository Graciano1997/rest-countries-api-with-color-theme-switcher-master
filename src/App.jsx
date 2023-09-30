import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
