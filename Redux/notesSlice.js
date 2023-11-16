import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.notes.push(action.payload)
    },
    remove: (state, action) => {
      
    },

  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = notesSlice.actions

export default notesSlice.reducer