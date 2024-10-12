import React, { useState } from 'react'
import styles from './Tracker.module.css'
import PieCharts from '../Piecharts/Piecharts'
import Modal from '../ModalPopup/Modal'

export default function Tracker() {
  const [isOpen,SetIsOpen] = useState(false);
  console.log(isOpen);
  const handleOpen=()=>{
    SetIsOpen(true);
  }
  const handleclose=()=>{
    SetIsOpen(false);
  }
  return (
    <div className={styles.background}>
    <h1 className={styles.header}>Expense Tracker</h1>
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
          <div className={styles.popUps}>
          <div className={styles.innerPopup}>
                <h1 className={styles.innerheader}>Wallet Balance:$4500</h1>
               <button className={styles.Addbutton} onClick={handleOpen}>Add income +</button>
          </div>
          <Modal isopen={isOpen} handleClose={handleclose}>
          </Modal>
          <div className={styles.innerPopup}>
<h1 className={styles.innerheader}>Add Expense:$4500</h1>
               <button className={styles.Addbutton}>Add Expense +</button>
          </div>
          </div>

          <div className={styles.topChart}>
            <PieCharts  />
          </div>
      </div>
      <div className={styles.bottomSection}>

      </div>
      </div>
    </div>
  )
}
