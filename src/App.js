import { useState } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import CharList from "./components/charList/CharList";
import CharModal from "./components/charModal/CharModal";

import "./style/style.scss";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);
  const [modal, setOnModal] = useState(false);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  const setModal = () => {
    setOnModal(modal => !modal);
  };

  return (
    <div className="App">
      <CharModal charId={selectedChar} visible={modal} />
      <AppHeader />
      <main className="main">
        <CharList
          onCharSelected={onCharSelected}
          setModal={setModal}
        />
      </main>
    </div>
  );
};

export default App;
