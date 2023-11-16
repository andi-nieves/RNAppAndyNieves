export const ADD_NOTE = "ADD_NOTE";

let noteId = 0;

export const addTodo = note => ({
  type: ADD_NOTE,
  payload: {
    id: ++noteId,
    note
  }
});