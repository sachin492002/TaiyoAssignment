import React from 'react';
import {IoMdPersonAdd} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {setModalOpen} from "../../store/contactSlice";
import AddContactForm from "./AddContactForm";
import ContactCard from "./ContactCard";

function Home() {

    // @ts-ignore
    const {isModalOpen, contacts} = useSelector((state) => state.contacts);
    const dispatch = useDispatch()
    const handleCreate = () =>{
          dispatch(setModalOpen())
    }
    return (
        <>
        <div className='flex w-full flex-col gap-4 px-8 py-12'>
            <div className='inline-flex justify-between'>
            <span className='text-4xl font-bold '>Contacts</span>
                <button className='inline-flex gap-2 items-center text-white bg-[var(--bg)] rounded-lg px-2 py-1' onClick={handleCreate}>
                    <IoMdPersonAdd />Create Contact
                </button>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    contacts.map((contact:any)=>{
                        return(
                            <ContactCard contact={contact}/>
                        )
                    })
                }
            </div>
        </div>

    {isModalOpen && <AddContactForm/>}
            </>
    );
}

export default Home;