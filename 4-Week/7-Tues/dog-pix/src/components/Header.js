import React from 'react';

const Header = (props) => {
    return (
        <>
            <h1>My Dog Website</h1>
            {/* 
                todo
                    2 span elements with onClick
                        1 -> dog breed page
                        2 -> random dog pic page
            */}
            <nav>
                <span onClick={() => props.setView('list')}>All Dog Breeds</span>
                <span onClick={() => props.setView('random')}>Random Dog Pic</span>
            </nav>
        </>
    )
}

export default Header;