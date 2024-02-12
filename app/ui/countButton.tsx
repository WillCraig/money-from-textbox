
import React from 'react';

interface Props {
    onClick: () => void;
}

const CountButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

export default CountButton;
