import React, { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";
import RamApi from "../../services/RamApi";
import Spinner from "../spinner/Spinner";

class CharList extends Component {
  constructor(props) {
    super(props);
  } 
  
  state = {
    charList: [],
    loading: true ,
    error: false
  }

  ramApi = new RamApi();

  componentDidMount() {
    this.ramApi.getAllCharacters()
        .then(this.onCharListLoaded)
        .catch(this.onError)
  }

  onCharListLoaded = (charList) => {
    this.setState({
      charList,
      loading: false
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <li className="char__item" key={item.id}>
            <div className="char__block">
              <img src={item.image} alt="char" className="char__img" />
            </div>
            <h6 className="char__name">{item.name}</h6>
        </li>
      )
    })
    return (
      <ul className="char__grid">
        {items}
      </ul>
    )
  }

  render() {

    const {charList , loading , error} = this.state;
    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button style={{marginTop: '3em'}}>load more</button>
      </div>
    );
  }
}

export default CharList;