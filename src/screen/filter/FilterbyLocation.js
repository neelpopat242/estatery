import React from 'react'
import 'antd/dist/antd.min.css'

import { Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

export default function FilterbyLocation({searchLocVal ,setSearchLocVal}) {

// const [searchVal, setSearchVal] = useState('');
const onChange = (value) => {
  console.log(`selected ${value}`);
  setSearchLocVal(value);
};

const onSearch = (value) => {
  console.log('search:', value);
};

  return (
    <div>
        <h6>Location</h6>
<Select
    showSearch
    placeholder="Select Location"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="All">All Cities</Option>
    <Option value="Ahmedabad">Ahmedabad</Option>
    <Option value="Vadodara">Vadodara</Option>
    <Option value="Mumbai">Mumbai</Option>
  </Select>
    </div>
  )
}
