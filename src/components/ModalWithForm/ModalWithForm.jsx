import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({ children, buttonText, title, name, isOpen, onClose }) {
  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""} modal_type_{name}`}
    >
      <form name={name} className="modal__form ">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeButton} alt="close" />
        </button>
        {children}
        <button type="submit" className="modal__submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
