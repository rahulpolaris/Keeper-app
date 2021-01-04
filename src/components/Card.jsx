import React from "react";



const Card = (props)=>
{
    return(
        <div className="card shadow-sm  rounded col-lg-3 px-0 ">
            
             <div className="card-header mx-0 fw-bold"><p className="card-title">{props.listTitle}</p></div>
             <div className="card-body card-text"><p className="card-text">{props.listContent}</p></div>
        </div>
    )
    
}

export default Card