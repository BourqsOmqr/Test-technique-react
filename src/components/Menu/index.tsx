import React, { useState } from 'react';
import MenuItem from 'components/MenuItem'
import './index.css'

const Menu = () => {
    const menu=[
        {name: "home", path: "/home"},
        {name: "todos", path: "/todos"}
    ]
    return(
        <div className="topnav">
            {menu.map(x=> <MenuItem name={x.name} path={x.path} />)}
        </div>
    )
}

export default Menu