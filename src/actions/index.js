export const select = (user) => {
  return {
    type: "USER_SELECTED",
    payload: user
  }
};

export const unSelect = () => {
  return {
    type: "USER_NOT_SELECTED",
    payload: null
  }
};

export const addUser = (name, surname, sex) => {
  return {
    type: "ADD_USER",
    name: name,
    sex: sex,
    payload: surname
  }
};

export const addTask = (task, userID) => {
  return {
    type: "ADD_TASK",
    id: userID,
    payload: task
  }
};

export const deleteTask = (taskID) => {
  return {
    type: "DELETE_TASK",
    payload: taskID
  }
};

export const completeTask = (taskID) => {
  return {
    type: "COMPLETE_TASK",
    payload: taskID
  }
};

export const editState = (taskID) => {
  return {
    type: "EDIT_STATE",
    payload: taskID
  }
};

export const editTask = (changedText, taskID) => {
  return {
    type: "EDIT_TASK",
    taskID: taskID,
    payload: changedText
  }
};
