import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#FF8A20',
            dark: '#eb7f1d'
        },
  },      
});

export default class NavButton extends Component {    
    render(){
        return(
            <div>
                <ThemeProvider theme={theme}>
                    <Button 
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        component={Link}
                        to={this.props.link}
                    >{this.props.title}</Button>
                </ThemeProvider>  
            </div>
        );
    }
}