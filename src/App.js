import { Component } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import CharList from "./components/charList/CharList";
import CharModal from "./components/charModal/CharModal";

import "./style/style.scss";

class App extends Component {

  state = {
    selectedChar: null,
    modal: false,  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    })
  }

  setModal = (modal) => {
    this.setState({
      modal: !modal,
    })
  }

  render() {

    const {selectedChar, modal} = this.state;
    
    return (
      <div className="App">
        <CharModal charId={selectedChar} visible={modal} />
        <AppHeader />
        <main className="main">
          <CharList onCharSelected={this.onCharSelected} setModal={this.setModal} visible={modal}/>
        </main>
      </div>
    );
  }
}

export default App;
