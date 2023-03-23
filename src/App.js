import AppHeader from './components/appHeader/AppHeader';
import CharList from './components/charList/CharList';
import CharModal from './components/charModal/CharModal';

import './style/style.scss';


function App() {  
  return (
    <div className="App">
      <CharModal/>
      <AppHeader/>
      <main className="main">
        <CharList/>
      </main>
    </div>
  );
}

export default App;
