import React from 'react';

const Header = ({name}) => {
    return (
        <div className="App">
            {
                name.map(({first, last}) => (

                    <h1>{first} {last} </h1>
                ))
            }
        </div>
    )
}

export default Header
