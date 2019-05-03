import React, { Component } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Icons from './component/Icons'
import Para from './component/Para'
import MouseOverPopover from './component/demo'
import Particles from './component/particles'

import {Route, BrowserRouter} from 'react-router-dom'
import Register from './component/Register'
import Error from './component/Error'





class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     scrolled: false,
  //   }
  // }
  
  // componentDidMount() {
  //   window.addEventListener('scroll', () =>{
  //     const isTop = window.scrollY < 100
  //     if(isTop !== true) {
  //       this.setState({ scrolled: true })
  //     } else {
  //       this.setState({ scrolled: false })
  //     }
  //   })
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll')
  // }

  render() {
  
    return (
      
      <div >
        

        {/* <Particles /> */}
      
       {/* scroll header */}
       {/* <div className={this.state.scrolled ? 'nav scrolled' : 'nav' } style={{zIndex: 1}} >   
          <Header />           
       </div> */}
      
        
        {/* <BrowserRouter>
          <div>
            
            <Route path='/Register' component={Register} />
            <Route component={Error} />
          </div>
        </BrowserRouter> */}
        
            
        {/* <Icons /> */}

        {/* <MouseOverPopover /> */}
        <Para />
        <Footer />   

        
      </div>    
    )
  }
}

export default App

