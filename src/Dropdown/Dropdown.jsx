import React, { useState } from 'react'

export default function Dropdown() {
    const [isOpen,SetIsopen]= useState(false);
  return (
    <div>
      <button onClick={()=>{
        SetIsopen(true);
      }}>Select Category</button>
      {isOpen && <ul>
        <li>
            Food
        </li>
        <li>Entertainment</li>
        <li>Travel</li>
      </ul>
    }
    </div>
  )
}
