import '../common/template/dependencies'
import React, { Component } from 'react'

import NavBar from '../common/template/navBar/NavBar'
import Footer from '../common/template/navBar/footerBar/footer'
export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
