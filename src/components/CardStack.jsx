import React from 'react'
import Card from './Card'
import TaskInfo from './../TaskInfo'


const createCard=(TaskInf)=>
{
  return (
     <Card listTitle={TaskInf.listTitle} listContent={TaskInf.listContent} />
  )
}

const CardStack = (props)=>{
console.log(props)
return(
    <div className="row">
        {TaskInfo.map(createCard)}

        
        {/* <Card listTitle="This some list1" listContent="this some Content"/>
        <Card listTitle="this is another list2" listContent="dsd this is contnent"/>
        <Card listTitle="this is another list3" listContent="this is 1 mo contentSS"/>
        <Card listTitle="this is another list4" listContent="this is 1 mo contentSS"/>
        <Card listTitle="this is another list5" listContent="this is 1 mo contentSS"/>
        <Card listTitle="this is another list6" listContent="this is 1 mo contentSS"/> */}
        
    </div>
)
}

export default CardStack