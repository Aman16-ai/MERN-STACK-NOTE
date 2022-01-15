import React from 'react'

export default function NoteItem(props) {
    return (
        <div className='col-md-3 mx-3'>
            <div className="card" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <i class="fas fa-trash-alt mx-2"></i>
                    <i class="fas fa-edit"></i>
                </div>
            </div>
        </div>
    )
}
