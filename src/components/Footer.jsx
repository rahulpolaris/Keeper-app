import React from 'react'


const date =  new Date;



const Footer =()=>
{
    return (
        <div className='App-footer'>
            <p>copyright {date.getFullYear()}</p>
        </div>

    )
}

export default Footer