import React from 'react';

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <div className="nav">
                    <div className="search-container">
                        <input/>
                        <button id="search-btn">Search</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default Navbar;