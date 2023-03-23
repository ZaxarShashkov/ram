import React, { Component } from "react";

import "./charList.scss";
import RamApi from "../../services/RamApi";

class CharList extends Component {
  constructor(props) {
    super(props);
  }  

  ramApi = new RamApi();

  

  render() {
    return (
      <div className="char__list">
        <ul className="char__grid">
          <li className="char__item">
            <h2 className="char__item_name">Name</h2>
          </li>
          <li className="char__item">
            <h2 className="char__item_name">Name</h2>
          </li>
          <li className="char__item">
            <h2 className="char__item_name">Name</h2>
          </li>
          <li className="char__item">
            <h2 className="char__item_name">Name</h2>
          </li>
        </ul>
      </div>
    );
  }
}

export default CharList;
