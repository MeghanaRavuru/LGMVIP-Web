import React from 'react'
import loading from '../loading.gif'
const Spinner = () => {

    // style={{width:'300px', height:'300px'}}
    return (
        <div className='loaderr' style={{textAlign:'center', margin:'3px 0px', }} >
            <img src={loading} alt="" srcSet="" style={{width:'300px'}} />
        </div>
      )
  
}

export default Spinner