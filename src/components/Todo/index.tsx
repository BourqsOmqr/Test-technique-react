import React, { useState } from 'react';

type Props = {
    title: string,
    content: string,
    handler: any,
    idx: number,
    show: boolean
  };

const Todo = ({ title, content, handler, idx, show }: Props): JSX.Element => {
    return(
        <li onClick={()=>handler(idx)}>
            <div className="form-check"> 
                <label className="form-check-label">  
                    {title} <i className="input-helper"></i>
                </label> 
                {show && 
                    <React.Fragment>
                        <br/>
                        <label className="form-check-label">  
                            {content} <i className="input-helper"></i>
                        </label>
                    </React.Fragment>
                }
            </div> 
        </li>
    )
}

export default Todo