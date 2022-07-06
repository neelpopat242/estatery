import React from 'react'
import Navb from './component/Navb'
import Searchbar from './component/Searchbar'
import Filter from './component/Filter'
import Card from './component/Card'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    let temp = require('./data/list.json');  
    const[data,setData]=useState(temp[0].products);
    const [searchLocVal, setSearchLocVal] = useState('');
    const [searchPriceRange, setSearchPriceRange] = useState(0);
    const [searchProperty, setSearchProperty] = useState('');
    function onSetSearchLoc(loc){
        setSearchLocVal(loc);
    }
    function onSetSearchPriceRange(price){
        setSearchPriceRange(price);
    }
    function onSetSearchProperty(property){
        setSearchProperty(property);
    }
    useEffect(() => {

        const tempList=temp[0].products;
        
        
        const finalList=tempList.filter((elem)=>{
            return ((searchLocVal===elem.Location || searchLocVal==='All') &
            (searchPriceRange>elem.price || searchPriceRange==='All') &
             (searchProperty===elem.house_type || searchProperty==='All'))
        })
        setData(finalList);
        
    
      
    }, [searchLocVal,searchPriceRange,searchProperty,temp])
    
  return (
    <div>
        
        <Navb/>
        <div className='container my-5 px-5'>
            <Searchbar/>
            <Filter searchLocVal={searchLocVal} setSearchLocVal={onSetSearchLoc} searchPriceRange={searchPriceRange} setSearchPriceRange={onSetSearchPriceRange}
            setSearchProperty={onSetSearchProperty} searchProperty={searchProperty}/>
            <div className='row ' >
                
                {data.map((product, i) => {
                    return (
                        <div className='col-lg-4 mb-3 d-flex align-items-stretch'>
                        {<Card className="p-4 border bg-light  " data={product} key={product.id}/>}
                        </div>
                    );
                })}
                
                
            </div>
           

        </div>
        
    </div>
  )
}
