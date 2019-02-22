import React, { Component } from 'react'
import { Link } from 'react-router'

import Sacola from './dropdowns/sacola'
import Dropdown from './dropdowns/dropdown'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className='navbar-brand' to='/'><img className="card-img-top mx-auto d-block" style={{width: '63px', height: '63px'}} src='https://image.freepik.com/vetores-gratis/praia-logotipo-vetores_56473-3.jpg'></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Dropdown title='Acessórios'  link_name1='Bolsas' to1='/bolsas' link_name2='Sandalias' to2='/sandalias' link_name3='Toalhas' to3='/toalhas'/>
                        <Dropdown title='Masculino' icon='fa fa-male' link_name1='Camisas' to1='/camisas' link_name2='Bermudas' to2='/bermudas' link_name3='Sungas' to3='/sungas'/>
                        <Dropdown title='Feminino' icon='fa fa-female' link_name1='Sutiã' to1='/sutia' link_name2='Calcinha' to2='/calcinha' link_name3='Maiô' to3='/maio'/>
                        <Dropdown title='Infantil' icon='fa fa-child' link_name1='Biquínis' to1='/biquinis' link_name2='Sungas' to2='/sungasI' link_name3='Bermudas' to3='/bermudasI'/>
                        <Sacola />
                    </ul>
                </div>
            </nav>
        )
    }
}