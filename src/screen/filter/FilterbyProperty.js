
import React from 'react'
import 'antd/dist/antd.min.css'
import { Select } from 'antd';


const { Option } = Select;

export default function FilterbyProperty({searchProperty, setSearchProperty}) {
  
const onChange = (value) => {
  console.log(`selected ${value}`);
  setSearchProperty(value)
};

const onSearch = (value) => {
  console.log('search:', value);
};

  return (
    <div>
<h6>Property Type </h6>
<Select
    showSearch
    placeholder="Select Property Type"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="All">All Type</Option>
    <Option value="Flat">Flat</Option>
    <Option value="House">House</Option>
    <Option value="Villa">Villa</Option>
  </Select>
    </div>
  )
}