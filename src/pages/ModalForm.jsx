import './styles.css';
import { useState } from 'react';
import { postFetch } from 'fetch/fetch.js';
import { toast } from 'react-toastify';

const ModalForm = () => {
  const [vanish, setVanish] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const body = document.querySelector('body');

  const openModal = () => {
    setVanish(!vanish);
    body.classList.add('body_scroll_off');
  };

  const closeModal = () => {
    setVanish(!vanish);
    body.classList.remove('body_scroll_off');
  };

  const addPost = event => {
    event.preventDefault();

    if (title === '' || text === '') {
      return toast.error('Please enter text/title', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    closeModal();
    postFetch(title, text);
  };

  const currentName = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'title':
        return setTitle(value);
      case 'text':
        return setText(value);
      default:
        return console.log('Wrong qwery');
    }
  };

  return (
    <>
      <div className="button_vanish-container">
        <button className="button_vanish" onClick={openModal}>
          Make a post
        </button>
      </div>

      {vanish && (
        <div className="modal_container">
          <div className="form_container">
            <button className="overlat-page__button-x" onClick={closeModal}>
              X
            </button>
            <form onSubmit={addPost} className="form_makerPost">
              <label className="modal-page__info-container">
                <span className="modal-page__text"></span>
                <input
                  type="text"
                  className="modal-page__info"
                  name="title"
                  placeholder="Title"
                  onChange={currentName}
                />
              </label>

              <label className="modal-page__textarea-container">
                <textarea
                  className="modal-page__textarea"
                  name="text"
                  placeholder="Text"
                  onChange={currentName}
                ></textarea>
              </label>

              <button type="submit" className="modal-page__button-submit">
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
