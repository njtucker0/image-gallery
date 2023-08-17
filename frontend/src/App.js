import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
};

function App() {
  const [word,setWord] = useState('');

  return (
    <div className="App">
      <Header title='Images Gallery'/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
