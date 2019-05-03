import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Register from './component/Register'
import Error from './component/Error'
import App from './App'
import Header from './component/Header'
import Icon from './component/Icons'
import Particles from './component/particles'


const home =() => {
    return(
        <div>
            <h1>home page</h1>
        </div>
    )
}

const RouteManage =() =>{

        return(
            <BrowserRouter>
            <div>
                {/* <Particles /> */}
                <Header />
                <Icon />
                
                    <Switch>
                        <Route exact path='/Home' component={App} />
                        <Route path='/Register' component={Register} />
                        <Route component={Error} />
                    </Switch>       
            </div>
  
            </BrowserRouter>
                    
        )   
    }
         


export default RouteManage