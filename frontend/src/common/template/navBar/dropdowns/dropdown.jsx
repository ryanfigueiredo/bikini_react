import React from 'react'
import {Link} from 'react-router'
import './ajustes.css'

export default props => (

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href='#' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className={props.icon}></i> {props.title}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to={props.to1}>{props.link_name1}</Link>
            <Link className='dropdown-item' to={props.to2}>{props.link_name2}</Link>
            <Link className='dropdown-item' to={props.to3}>{props.link_name3}</Link>
        </div>
    </li>

)