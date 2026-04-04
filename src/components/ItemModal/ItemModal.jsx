import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_is-opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item"
        >
          <img src={closeButton} alt="close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-first__line">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              onClick={() => onDeleteItem(card)}
              className="modal__footer-delete__button"
            >
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
