import React from 'react'


const CardForm = ()=>
{
    return(
        <div className="App border-bottom border-3">
        <form className="row g-3">
        <div className="col-6">
        <label for="Title" className="mx-3 form-label fw-bold">Title:</label>
        <input type="text" className="rounded-pill form-control" name="Title"/>
        </div>
        <div className="col-6">
        <label for="Content" className="mx-3 form-label fw-bold">Content:</label>
        <input type="text" className="rounded-pill form-control" name="Content"/>
        </div>
        
        <button type = "submit" className="btn btn-primary rounded-pill mb-3 ">Submit</button>
        
            
        </form>

        </div>
    )
}


export default CardForm