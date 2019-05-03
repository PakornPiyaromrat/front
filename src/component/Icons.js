import React from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Grid, IconButton, Button, Fab, withStyles, Popover } from '@material-ui/core';
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const styles ={
    icon: {
        padding:20, 
        marginLeft:10, 
        marginRight:10
    },
    popover: {
        pointerEvents: 'none'
    },
}

class Icons extends React.Component {
    

    render(){
       
        return(
            <div>
                <Grid container justify='center' >
                    <Grid item sm style={styles.icon}>
                        <NavLink to='/Register'>                                    {/* link to register */}
                            <IconButton variant='contained'>
                                <AccessAlarmIcon color='primary'  />                            
                            </IconButton>
                        </NavLink>        
                    </Grid>
                    <Grid item sm style={styles.icon}>
                        <NavLink to='/Home'>                                        {/* link to home */}
                            <Button 
                                variant='contained'
                            >
                                <AccessAlarmIcon color='secondary'  />
                            </Button>
                        </NavLink>                     
                    </Grid>
                    <Grid item sm style={styles.icon}>
                        <Button variant='outlined'>
                            <AccessAlarmIcon color='error'  />
                        </Button>
                    </Grid>
                    <Grid item sm style={styles.icon}>
                        <Fab variant='extended 'color='primary'>
                            <AccessAlarmIcon color='text'  />
                        </Fab>
                    </Grid>            
                    
                </Grid>
                
            </div>     
        )
    }         
}

Icons.PropTypes={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Icons)