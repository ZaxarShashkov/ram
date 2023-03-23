import AppHeader from './components/appHeader/AppHeader';
import CharList from './components/charList/CharList';
import RandomChar from './components/randomChar/RandomChar'

import RamApi from './services/RamApi';
import './style/style.scss';

const ramApi = new RamApi;

// ramApi.getAllCharacters().then(res => res.results.forEach(item => console.log(item.image)))

// // ramApi.getCharacter(2).then(res => console.log(res.location.name))


function App() {  
  return (
    <div className="App">
      <AppHeader/>
      <RandomChar/>
      <main className="main">
        <CharList/>
      </main>
    </div>
  );
}

export default App;
