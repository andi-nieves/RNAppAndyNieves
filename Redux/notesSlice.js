import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
  counter: 0
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      if (!action.payload.id) {
        const count = state.counter + 1
        state.notes.push({...action.payload, id: count })
        state.counter = count
        return
      }
      const index = state.notes.findIndex(item => item.id === action.payload.id)
      state.notes[index] = action.payload
    },
    remove: (state, action) => {
      state.notes = state.notes.filter(item => item.id !== action.payload.id)
    },
  },
})

export const { add, remove } = notesSlice.actions

export const getNotesState = createSelector(
  (state) => state,
  ({notes}) => notes 
);

export default notesSlice.reducer