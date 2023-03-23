import AppHeader from './components/appHeader/AppHeader';
import CharList from './components/charList/CharList';

import './style/style.scss';


function App() {  
  return (
    <div className="App">
      <AppHeader/>
      <main className="main">
        <CharList/>
      </main>
    </div>
  );
}

export default App;
