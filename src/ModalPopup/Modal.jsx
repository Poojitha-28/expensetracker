import React from 'react'
import ReactModal from 'react-modal';
import styles from './Modal.module.css';
import Dropdown from '../Dropdown/Dropdown';

export default function Modal({isopen,handleClose}) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };  return (
    <ReactModal 
    style={customStyles}
    isOpen={isopen}
    
    >
      <h2>Add Expenses</h2>
      <form className={styles.textClass}>
        <input name="Title" placeholder='Title'/>
        <input name="Price" placeholder='Price'/>
        <br />
        <Dropdown />
        <input name="date" placeholder='dd/mm/yyyy'/>
        <br />
        <button>Add Expense</button>
        <button onClick={handleClose}>close</button>
      </form>
    </ReactModal>
  )
}
