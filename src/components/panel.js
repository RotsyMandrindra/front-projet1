import React from 'react';

export const panel = ({title, children}) => (
    <div className = "panel">
        <h3>
            {title}
        </h3>
        {children}
    </div>
)