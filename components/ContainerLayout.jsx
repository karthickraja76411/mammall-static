import React from 'react';

const ContainerLayout = ({ children }) => {
    return (
        <div className="container-xl">
            {children}
        </div>
    )
}

export default ContainerLayout