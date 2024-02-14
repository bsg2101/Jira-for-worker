import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete , onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete(task.id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <div className="task-main">
            <p className="task-main-p">{task.title}</p>
          </div>
          <h3 className="task-title">Yapılacaklar</h3>
          <div className="task-main">
            <p className="task-main-p">{task.description}</p>
          </div>
          <div className="all-btn">
            <button className="btn-danger" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="btn-edit" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p className="confirmation-text">Bu görevi silmek istediğinizden emin misiniz?</p>
          <div className="confirmation-buttons">
            <button className="btn-danger" onClick={handleConfirmDelete}>
              Evet
            </button>
            <button className="btn-edit" onClick={handleCancelDelete}>
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
