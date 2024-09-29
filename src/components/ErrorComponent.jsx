import React from 'react';

const ErrorComponent = ({ message }) => (
    <div style={{ color: 'red', backgroundColor: 'lightpink', padding: '10px', borderRadius: '8px' }}>
        {message}
    </div>
);

export default ErrorComponent;
