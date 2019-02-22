import React from 'react'

const CardImg = props => (
    <div className='col-12 col-sm-4' style={{ paddingTop: '7px' }}>
        <div className="card" >
            <img style={{ width: '200px', height: '200px' }} src={props.src} className="card-img-top rounded mx-auto d-block" alt='Card image cap' />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                por:<a href="#" className="btn btn-outline-success">R$ 250,00</a>
            </div>
        </div>
    </div>
)

export default CardImg