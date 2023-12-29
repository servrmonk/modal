import React from "react";

export default function MyModal({ visible, onClose }) {
  const handleClose = (e) => {
    if (e.target.id == "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <p>My modal</p>
        {/* <button onClick={onClose}>X</button> */}
        {/* if u click on the my modal it will close again this is not good remember ex of cart this is happenning with event handling so simple ek id de do and handleonclose me condition likh do */}
      </div>
    </div>
  );
}
