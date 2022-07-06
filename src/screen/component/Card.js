import React from 'react'

import { FaBed, FaBath, } from 'react-icons/fa';
import {BiArea} from 'react-icons/bi'


export default function Card(props) {
  return (
    <div className='col md-4 ' >
      <div className="card my-3  "  >
        <img  src={props.data['image_link']}
         className="card-img-top" alt="..." />
        <div className="card-body">
          <div className='row'>
              <div className='col-9'>
              <h5 className="card-title">$ {props.data.price}/month</h5>
          <strong><h5 className="card-title">{props.data.Location}</h5></strong>
              </div>
              <div className='col-3 my-3'>
              <i style={{fontSize:"24px"}} className="fa">&#xf004;</i>
              </div>
          </div>
       
          <p className="card-text">{props.data.long_location}</p>
          <p>{props.data.house_type}</p>
          <hr></hr>
          <div className='row'>
            <div className='col'>
            <FaBed/>  {props.data.bed} Bed
            </div>
            <div className='col'>
               <FaBath/> {props.data.bathroom} Bathroom
            </div>
            <div className='col'>

             <BiArea/> {props.data.area_len}x{props.data.area_width} m<sup>2</sup>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}
