import { Component } from "react";
import Spinner from '../spinner/Spinner';

import RamApi from "../../services/RamApi";
import "./randomChar.scss";

class RandomChar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    ramApi = new RamApi();

    componentDidMount() {
      this.updateChar();
      this.allChar();
    }

    onCharLoaded = (char) => {
      this.setState({char, loading: false})
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (840 - 0));
        this.ramApi
          .getCharacter(id)
          .then(this.onCharLoaded)
          .catch(this.onError);
    }

    onError = () => {
      this.setState({loading: false, error: true})
    }

    allChar = () => {
      this.ramApi
        .getAllCharacters()
        .then(res => console.log(res))
    }

  render() {

    const {char , loading} = this.state;

    return (
      <div className="randomchar">
        {loading ? <Spinner/> : <View char={char}/>}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner" onClick={this.updateChar}>try it</div>
          </button>
        </div>
      </div>
    );
  }
}

const View = ({char}) => {
  const {name , status , image , location , species , gender , origin } = char;

  return (
    <div className="randomchar__block">
          <img src={image} alt="Random character" className="randomchar__img" />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
              {status}
              {location}
              {species}
            </p>
            <div className="randomchar__btns">
              <a href="#" className="button button__main">
                <div className="inner">{gender}</div>
              </a>
              <a href="#" className="button button__secondary">
                <div className="inner">{origin}</div>
              </a>
            </div>
          </div>
        </div>
  )
}

export default RandomChar;
