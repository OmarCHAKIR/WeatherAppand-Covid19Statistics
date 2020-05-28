import React from 'react';
import Button from '@material-ui/core/Button'

const ButtonUI = (props) => {
    return (
         <Button variant="contained" color="primary" onClick={props.clicked}>
            Search 
        </Button>
    );
}

export default ButtonUI;
