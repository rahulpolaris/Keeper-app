import React from 'react'
import Card from './Card'


const CardStack = (props)=>{
console.log(props)
return(
    <div className="row">
        <Card listTitle="This some list" listContent="this some Content"/>
        <Card listTitle="this is another list" listContent="this is 1 mo contentSS"/>
    </div>
)
}

export default CardStack