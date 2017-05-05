import React, { PropTypes }  from 'react';

const Popup = ({children}) => {
    return(
        <div>
            <h1>Popup</h1>
            {children}
        </div>
    );
};

Popup.propTypes = {
    children: PropTypes.object
};

export default Popup;
