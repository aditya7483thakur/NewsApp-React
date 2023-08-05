import React from 'react'
import loading from './loading-gif.gif'

const Spinner = () =>{
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading...."  height={50}/>
      </div>
    )
  }
export default Spinner
