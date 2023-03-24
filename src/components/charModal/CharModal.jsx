import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


import RamApi from "../../services/RamApi";
import './charModal.scss'

class CharModal extends Component {

  render() {

    const visibility = this.props.visible ? true : null;

    return (
      <div className={visibility + ' char__modal'}>
          <div className="char__modal_content"
          >
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
