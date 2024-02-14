import React, { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate ,onUpdate}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  // const handleCreate = () => {
  //   if (!title.trim() || !description.trim()) {
  //     return;
  //   }
  //   onCreate(title, description);
  //   setTitle("");
  //   setDescription("");
  // }
  const handleTaskChange = (e) => {
    setDescription(e.target.value);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!title.trim() || !description.trim()) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
    else {
      if (taskFormUpdate) {
        onUpdate(task.id,title, description)
      }
      else
      {
        onCreate(title, description);
      }
    }
    onCreate(title, description);
    setTitle("");
    setDescription("");
    onCreate(title, description);
    console.log(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen taskı Düzenleyiniz.</h3>
          <form className="task-form">
            <label className="lbl">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="lbl">Task Girin.</label>
            <textarea
              value={description}
              onChange={handleTaskChange}
              className="task-input"
              rows="10"
            />

            <button className="btn btn-primary btn-update" onClick={handleSubmit}>
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Task Ekleyin.</h3>
          <form className="task-form">
            <label className="lbl">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="lbl">Task Girin.</label>
            <textarea
              value={description}
              onChange={handleTaskChange}
              className="task-input"
              rows="10"
            />

            <button className="btn btn-primary" onClick={handleSubmit}>
              Task Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default TaskCreate;
