import React from 'react'
import './ajustes.css'

export default props => (
    <div className="jumbotron jumbotron-fluid" style={{ marginTop: '8px'}}>
            <h1 className="display-4">{props.name}</h1>
    </div>
)