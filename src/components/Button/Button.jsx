import React from 'react';
import s from './button.module.css'

const Button = (children, props) => {
    return (
        <button className={s.btn}  {...props}>
            {children}
        </button>
    );
};

export default Button;