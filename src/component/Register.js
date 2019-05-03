import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Facebook from './Facebook'
import axios from 'axios'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Register extends React.Component {
  state = {
    name: '',
    surename: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  async componentDidMount() {
    let ans = await axios.get('http://localhost:8080/')
    console.log('answer', ans)
    this.setState({
        name: ans.data.name
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>

        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          id="outlined-surename"
          label="Surename"
          className={classes.textField}
          value={this.state.surename}
          onChange={this.handleChange('surename')}
          type="surename"
          name="surename"
          autoComplete="surename"
          margin="normal"
          variant="outlined"
        />
        
        <Button variant="contained" color='secondary' className={classes.menu}
            onClick=''
        >
          Submit
        </Button>

      </form>
      <div>
        <Facebook />
      </div>
      </div>

      
      
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
