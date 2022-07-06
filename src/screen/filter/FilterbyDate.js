
import React from 'react'
import 'antd/dist/antd.min.css'
import { Select } from 'antd';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// or
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
const { Option } = Select;



export default function FilterbyDate() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };
  return (
    <div>
        <h6>
            When
        </h6>
      <DatePicker  value='' />
      
    </div>
    
  )
}