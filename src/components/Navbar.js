import React from "react";

const Navbar = ({ filteritem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    {
                        menuList.map((curElem) => {
                            return (
                                <li>
                                    <a onClick={() => filteritem(curElem)}>{curElem}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
