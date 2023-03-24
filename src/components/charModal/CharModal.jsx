import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


import RamApi from "../../services/RamApi";
import './charModal.scss'

class CharModal extends Component {

  render() {

    const {visible} = this.props;

    let classNames = 'char__modal';
    if(visible) {
      classNames += ' active';
    }

    const removeClasses = () => {
      const modal = document.querySelector('.char__modal');
      modal.classList.remove('active')
    }
    


    return (
      <div className={`${classNames}`}
      onClick={removeClasses}>
          <div className="char__modal_content">
            <div className="char__modal_img">
                <img src='#' alt="char" />
            </div>
            <div className="char__modal_desc">
                <h6 className="char__modal_title">Name</h6>
                <p className="char__modal_text">status</p>
            </div>
        </div>
      </div>
    );
  }
}

export default CharModal;
