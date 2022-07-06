
import React from 'react'
import 'antd/dist/antd.min.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// or



export default function FilterbyDate() {
  
  return (
    <div>
        <h6>
            When
        </h6>
      <DatePicker  value='' />
      
    </div>
    
  )
}