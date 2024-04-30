import {AiOutlineClose} from "react-icons/ai";
import {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Contact} from "../../types";
import {addContact, closeModal, setModalOpen} from "../../store/contactSlice";

export default function AddContactForm() {


    const dispatch = useDispatch();
    const [contact, setContact] = useState<Contact>({name: '', gender: '', number: '', active: ''});

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((prevContact) => ({...prevContact, [name]: value}));
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            dispatch(addContact(contact));
            handleClose()
    };

    const handleClose = () => {
        dispatch(closeModal());
    };


    return(
        <div className="w-full fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="bg-white p-2 rounded w-96">
                <form onSubmit={(event)=>handleSubmit(event)} className='flex flex-col flex-1 p-4 gap-8'>
                    <div className='flex flex-col gap-1'>
                        <div className='inline-flex justify-between items-center'>
                            <p className='text-xl font-bold'>Add new contact</p>
                            <AiOutlineClose className='text-xl text-[var(--fg)] font-bold cursor-pointer' onClick={handleClose}/>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-md font-bold'>Name</p>
                        <input required name='name'
                               className='w-full py-2  rounded-md border-2 border-[var(--fg)] outline-0'
                               value={contact.name} onChange={(e) => handleChange(e)}/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xl font-bold'>Gender</p>
                            <div className='flex gap-2'>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={contact.gender === 'male'}
                                        onChange={(e)=>handleChange(e)}
                                    /> Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={contact.gender === 'female'}
                                        onChange={(e)=>handleChange(e)}
                                    /> Female
                                </label>
                            </div>
                        </div>
                        <p className='text-md font-bold'>Phone No.</p>
                        <input required name='number'
                               className='w-full py-2 rounded-md border-2 border-[var(--fg)] outline-0'
                               value={contact.number} onChange={(e) => handleChange(e)}/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xl font-bold'>Status</p>
                            <div className='flex gap-2'>
                                <label>
                                    <input
                                        type="radio"
                                        name="active"
                                        value="active"
                                        checked={contact.active ===  "active"}
                                        onChange={(e)=>handleChange(e)}
                                    /> Active
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="active"
                                        value="inactive"
                                        checked={contact.active === "inactive"}
                                        onChange={(e)=>handleChange(e)}
                                    /> Inactive
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        <div className='bg-[var(--bg)] px-3 py-0.5 rounded-lg '>
                            <button className='text-white text-lg leading-6' type='submit'>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
