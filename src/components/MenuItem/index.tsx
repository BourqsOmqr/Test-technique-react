import React, { useState } from 'react';
import { NavLink as Link } from "react-router-dom";
import './index.css'
import PropTypes from 'prop-types';

type Props = {
    name: string,
    path: string
  };

const MenuItem = ({name, path}: Props) => {
    return(
        <Link to={path} >{name}</Link>
    )
}

export default MenuItem