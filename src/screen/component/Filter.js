import React from 'react'
import FilterbyLocation from '../filter/FilterbyLocation'
import FilterbyProperty from '../filter/FilterbyProperty'
import FilterbyDate from '../filter/FilterbyDate'
import FilterbyPrice from '../filter/FilterbyPrice'
import { useState } from 'react'

function captureSearch(){

}

export default function Filter({searchLocVal, setSearchLocVal,searchPriceRange,setSearchPriceRange,searchProperty,setSearchProperty}) {
    // const [searchLocVal, setSearchLocVal] = useState(props.searchLocVal);

  return (
    <div className='container'>
        <div className='row  '>
            <div className='col-3 2'>
                <FilterbyLocation searchLocVal={searchLocVal} setSearchLocVal={setSearchLocVal}/>
            </div>
            
           
            <div className='col-3 '>
                <FilterbyDate/>
            </div>
            
            <div className='col-3 '>
                <FilterbyPrice searchPriceRange={searchPriceRange} setSearchPriceRange={setSearchPriceRange}/>
            </div>
           
            <div className='col-3 '>
                <FilterbyProperty searchProperty={searchProperty} setSearchProperty={setSearchProperty}/>
            </div>
            
            <div className='col-3 my-3'>
            <button type="button" className="btn btn-primary" >Search</button>
            </div>
            
        </div>
    </div>
  )
}
