import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


import "./charModal.scss";
import RamApi from "../../services/RamApi";

class CharModal extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  ramApi = new RamApi()

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
       this.updateChar();
    }
  }

  updateChar = () => {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.onCharLoading();

    this.ramApi
      .getCharacter(charId)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  };

  onCharListLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { visible } = this.props;
    const {char , loading , error} = this.state;

    let classNames = "char__modal";
    if (visible) {
      classNames += " active";
    }

    const removeClasses = () => {
      const modal = document.querySelector(".char__modal");
      modal.classList.remove("active");
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
      <div className={`${classNames}`} onClick={removeClasses}>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ char }) => {

  const {name , status , origin , image , species , location , gender } = char;

  return (
    <>
      <div className="char__modal_content">
        <div className="char__modal_img">
          <img src={image} alt={name} />
        </div>
        <div className="char__modal_desc">
          <h6 className="char__modal_title">{name}</h6>
          <p className="char__modal_text">{status}</p>
        </div>
      </div>
    </>
  );
};

export default CharModal;
