import React, { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charModal.scss";
import RamApi from "../../services/RamApi";

const CharModal = (props) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const ramApi = new RamApi();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    onCharLoading();

    ramApi.getCharacter(charId).then(onCharListLoaded).catch(onError);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onCharListLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const { visible } = props;

  let classNames = "char__modal";
  if (visible) {
    classNames += " active";
  }

  const removeClasses = () => {
    const modal = document.querySelector(".char__modal");
    modal.classList.remove("active");
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className={`${classNames}`} onClick={removeClasses}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, status, origin, image, species, location, gender } = char;

  return (
    <>
      <div className="char__modal_content">
        <div className="char__modal_img">
          <img src={image} alt={name} />
        </div>
        <div className="char__modal_desc">
          <div className="char__modal_card">
            <h6 className="char__modal_title">Name</h6>
            <p className="char__modal_text">{name}</p>
          </div>
          <div className="char__modal_card">
            <h6 className="char__modal_title">Status</h6>
            <p className="char__modal_text">{status}</p>
          </div>
          <div className="char__modal_card">
            <h6 className="char__modal_title">Species</h6>
            <p className="char__modal_text">{species}</p>
          </div>
          <div className="char__modal_card">
            <h6 className="char__modal_title">Origin</h6>
            <p className="char__modal_text">{origin}</p>
          </div>
          <div className="char__modal_card">
            <h6 className="char__modal_title">Location</h6>
            <p className="char__modal_text">{location}</p>
          </div>
          <div className="char__modal_card">
            <h6 className="char__modal_title">Gender</h6>
            <p className="char__modal_text">{gender}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharModal;
