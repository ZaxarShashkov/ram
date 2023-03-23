import React, { Component } from "react";

import './charModal.scss'

class CharModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="char__modal">
        <div className="char__modal_content">
            <div className="char__modal_img">
                <img src="#" alt="char" />
            </div>
            <div className="char__modal_desc">
                <h6 className="char__modal_title">Name</h6>
                <p className="char__modal_text">Description</p>
            </div>
        </div>
      </div>
    );
  }
}

export default CharModal;
