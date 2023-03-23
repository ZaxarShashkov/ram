import { Component } from "react";
import RamApi from "../../services/RamApi";
import "./randomChar.scss";

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        name: null ,
        status: null,
        image: null,
        species: null,
        gender: null,
        location: null,
        origin: null
    }

    ramApi = new RamApi();

    updateChar = () => {
        const id = 5;
        this.ramApi
          .getCharacter(id)
          .then(res => {
            this.setState({
              name: res.name ,
              status: res.status,
              image: res.image,
              species: res.species,
              gender: res.gender,
              location: res.location.name,
              origin: res.origin.name
            })
        })
    }

  render() {

    const {name , status , image , location , species , gender , origin} = this.state;

    return (
      <div className="randomchar">
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
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src="#" alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
