import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// paginas
import Home from './common/template/navBar/paginas/Home'

// acessorios
import Bolsas from './common/template/navBar/paginas/acessorios/bolsas'
import Sandalias from './common/template/navBar/paginas/acessorios/sandalias'
import Toalhas from './common/template/navBar/paginas/acessorios/toalhas'

// // masculino
import Camisas from './common/template/navBar/paginas/masculino/camisas'
import Bermudas from './common/template/navBar/paginas/masculino/bermudas'
import Sungas from './common/template/navBar/paginas/masculino/sungas'

// // feminino
import Sutia from './common/template/navBar/paginas/feminino/sutia'
import Calcinha from './common/template/navBar/paginas/feminino/calcinha'
import Maio from './common/template/navBar/paginas/feminino/maio'

// // infantil
import Biquinis from './common/template/navBar/paginas/infantil/biquinis'
import sungas from './common/template/navBar/paginas/infantil/sungas'
import bermudas from './common/template/navBar/paginas/infantil/bermudas'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>

            <Route path='/bolsas' component={Bolsas} />
            <Route path='/sandalias' component={Sandalias} />
            <Route path='/toalhas' component={Toalhas} />

            <Route path='/camisas' component={Camisas} />
            <Route path='/bermudas' component={Bermudas} />
            <Route path='/Sungas' component={Sungas} />

            <Route path='/sutia' component={Sutia} />
            <Route path='/calcinha' component={Calcinha} />
            <Route path='/maio' component={Maio} />

            <Route path='/biquinis' component={Biquinis} />
            <Route path='/bermudasI' component={bermudas} />
            <Route path='/SungasI' component={sungas} />
        </Route>
    </Router>
    ,
    document.getElementById("app")
)