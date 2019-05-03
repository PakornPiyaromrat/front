import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Typography, Avatar, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {withRouter} from 'react-router-dom'
import './header.css'

// const styles ={
//   root: {
//       flexGrow: 1,
//   },
//   grow: {
//       flexGrow: 1,
//   },
//   menuButton: {
//       marginLeft: 10,
//       marginRight: 10,
//   },
//   avatar:{
//     margin: 10,
//     width: 60,
//     height: 60,
//   },
// }

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const path = this.props.location.pathname.slice(1)
    // const { classes } = props
    return (
    // <div /*className={classes.root}*/>
    
      // <AppBar position='sticky' color='secondary'>
      //   <Toolbar >
          
      //     <IconButton /*className={classes.menuButton}*/ color="inherit" aria-label="Menu">
      //       <MenuIcon />
      //     </IconButton>
      //     <Typography variant="h6" color="inherit" /*className={classes.grow}*/>
      //       {path}
      //     </Typography>
      //     <Grid container justify='center' alignItems='center'>
      //       <Avatar src='https://www.w3schools.com/images/w3schools_green.jpg' /*className={classes.avatar}*/ />
      //     </Grid>
          
      //     <Button class='active' color="inherit">Login</Button>
          
      //   </Toolbar>
      // </AppBar>
    
      
    // </div>
      
        // <script src = "https://code.jquery.com/jquery-3.2.1.js"></script>
        // <script type = "text/javascript">
        
        // </script>

        <nav>
          <div>
            <h1>header</h1>
          </div>
          <ul>
            <li class="active">home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        
        </nav>
    
      
      
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Header)     //withStyles(styles)
