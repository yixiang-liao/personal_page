import React from "react";

const AcknowledgementModal = ({ open, onClose, acknowledgement }) => {
  if (!open || !acknowledgement) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{acknowledgement.name}</h2>
        <p className="modal-tags">
          {acknowledgement.tags.map((tag, i) => `#${tag}`).join("、")}
        </p>
        <p className="modal-description">{acknowledgement.description}</p>
        <img src={acknowledgement.image} alt={acknowledgement.name} />
      </div>
    </div>
  );
};

export default AcknowledgementModal;
