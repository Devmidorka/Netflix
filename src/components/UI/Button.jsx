import React from 'react';

const Button = ({className, children, ...props}) => {
    return (
        <button {...props} className={`bg-red-600 px-6 py-2 text-white rounded cursor-pointer ${className}`}>{children}</button>

    );
};

export default Button;