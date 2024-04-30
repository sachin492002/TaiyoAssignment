import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from "../types";



const initialState = {
    contacts : [],
    isModalOpen : false,
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
          addContact : (state:any,action:PayloadAction<Contact>) =>{
              return {
                  ...state,
                  contacts: [...state.contacts, action.payload]
              };
          },
          deleteContact : (state:any,action:PayloadAction<String>)=>{
              state.contacts = state.contacts.filter(( obj : Contact ) => obj.number !== action.payload);
          },
          setModalOpen: (state)=>{
              state.isModalOpen = true
          },
          closeModal : (state)=>{
              state.isModalOpen = false
          }
    },
});

export const { addContact,deleteContact, setModalOpen,closeModal } = contactSlice.actions;

export default contactSlice.reducer;
