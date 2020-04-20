import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Repository from './pages/Repository'


// usamos o EXACT pra atribuir a rota exatamente quando o usuario digitar o MAIN.

export default function Routes(){
    return(

        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/repository/:repository" component={Repository}/>
        </Switch>
        </BrowserRouter>
    )
}
