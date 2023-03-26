import React, { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from 'prop-types';

import "./charList.scss";
import RamApi from "../../services/RamApi";
import Spinner from "../spinner/Spinner";

class CharList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    page: 1,
    autoLoad: true
  };

  ramApi = new RamApi();

  scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      return this.onRequest(this.state.page);
    }  
  }

  onLoad = () => {
    this.setState({
      autoLoad: !this.state.autoLoad
    })
  }

  removeScrollHandler = () => {
    this.onLoad();
    window.removeEventListener('scroll', this.scrollHandler);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler)
    this.ramApi
        .getAllCharacters()
        .then(this.onCharListLoaded)
        .catch(this.onError);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  onRequest = (page) => {
    this.onCharListLoading();
    this.ramApi
        .getAllCharacters(page)
        .then(this.onCharListLoaded)
        .catch(this.onError);
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    })
  }

  onCharListLoaded = (newCharList) => {
    this.setState(({page , charList}) => ({
        charList: [...charList, ...newCharList],
        loading: false,
        newItemLoading: false,
        page: page + 1,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  

  renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <li
          className="char__item"
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
          >
          <div className="char__block"
          onClick={() => this.props.setModal(this.props.visible)}
          visible={this.props.visible}>
            <img src={item.image} alt="char" className="char__img" />
          </div>
          <h6 className="char__name">{item.name}</h6>
        </li>
      );
    });
    return (
        <ul className="char__grid">
            {items}
        </ul>
    )
  }

  render() {
    const { charList, loading, error, newItemLoading , page } = this.state;
    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    if(this.state.autoLoad) {
      window.addEventListener('scroll', this.scrollHandler);
    }

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button style={{ marginTop: "3em" }}
                disabled={newItemLoading}
                onClick={() => this.onRequest(page)}
                >
                Load More
        </button>
        <button className="remove"
        style={{ marginBottom : "20em" }}
        onClick={() => this.removeScrollHandler()}
                >remove</button>
      </div>
    );
  }
}


CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}

export default CharList;
