
import React from 'react'
import 'antd/dist/antd.min.css'
import { Select } from 'antd';


const { Option } = Select;

export default function FilterbyPrice({searchPriceRange,setSearchPriceRange}) {
  
const onChange = (value) => {
  console.log(`selected ${value}`);
  setSearchPriceRange(value);
};

const onSearch = (value) => {
  console.log('search:', value);
};

  return (
    <div>
        <h6>
            Price (in $)
        </h6>


<Select
    showSearch
    placeholder="Select Price Range "
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="All"></Option>
    <Option value="2000">&lt;2000</Option>
    <Option value="4000">&lt;4000</Option>
    <Option value="6000">&lt;6000</Option>
  </Select>
    </div>
  )
}