import React from 'react';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {Contact} from "../../types";
import {IoCall} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../store/contactSlice";

interface Props{
    contact : Contact
}
function ContactCard({contact}:Props) {
    const dispatch = useDispatch()
    const handleDelte = () => {
        dispatch(deleteContact(contact.number))
    }
    return (
        <div className='w-48 flex flex-col px-4 py-4 rounded-lg bg-[var(--fg)]'>
            <div className='inline-flex w-full justify-between'>
                <AiFillEdit/>
                <AiFillDelete className='text-red-500' onClick={handleDelte}/>
            </div>
            <div className='flex flex-col items-center'>
                <img src='/logo.png' alt='no' className='w-10'/>
                <span>{contact.name}</span>
            </div>
            <div className='inline-flex gap-2'>
                <span>Status : {contact.active}{contact.active === "active" ? <span className='w-2 h-2 rounded-full bg-lime-600'/> :
                    <span className='w-2 h-2 rounded-full bg-red-600'/>}</span>
            </div>
            <div className='inline-flex gap-2'>
                <div className='bg-[var(--bg)] text-white p-1 rounded-lg'><IoCall/></div>
                <span>{contact.number}</span>
            </div>
        </div>
    );
}

export default ContactCard;