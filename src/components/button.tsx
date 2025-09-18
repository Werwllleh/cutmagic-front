import React from 'react';

interface ButtonProps {
    type?: string;
    size?: string;
    cls?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({type, size, cls, onClick, children} : ButtonProps) => {
    return (
        <button className={`btn ${type} ${size} ${cls}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
