import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
    position: 'absolute',
    top: 'calc(50% - 1rem)',
    left: 'calc(50% - 1rem)'
};

const Spinner = () => {

    return (
        <div>
            <Loader
                style={spinnerStyle}
                animation='border'
                variant='primary'
            />
        </div>
    )
};

export default Spinner;