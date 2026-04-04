import "./DeleteConfirmationModal.css";
import closeButton from "../../assets/closeButton.png";

function DeleteConfirmationModal({ isOpen, handleCardDelete, onClose }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h2 className="deleteConfirmationModal__title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button
          onClick={onClose}
          type="button"
          className="deleteConfirmationModal__close"
        >
          <img src={closeButton} alt="close" />
        </button>
        <button
          type="button"
          onClick={handleCardDelete}
          className="deleteConfirmationModal__delete deleteConfirmationModal__button"
        >
          Yes, delete item
        </button>
        <button
          type="button"
          onClick={onClose}
          className="deleteConfirmationModal__cancel deleteConfirmationModal__button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
