import React from "react";



const Card = (props)=>
{
    return(
        <div className="card shadow-sm  rounded col-3 mx-2 px-0">
            
             <div className="card-header mx-0"><p className="card-title">{props.listTitle}</p></div>
             <div className="card-body card-text"><p className="card-text">{props.listContent}</p></div>
        </div>
    )
    
}

export default Card