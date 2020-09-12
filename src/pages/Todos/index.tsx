import React, { useState } from 'react';
import Page from 'components/Page';
import Todo from 'components/Todo'
import data from '../../components/data/todo.json'
import './index.css'

const Todos = () => {
    //initial array with false, array length depending on todos file
    const [show, show_content] = useState(Array(data.length).fill(false));

    //change the value of the index clicked on todo
    const show_hide_content= (idx: number) => {
        let new_show = show.map((x, y)=> y == idx ? !x: x)
        show_content(new_show)
    }

    return(
        <Page className="todos">
            <div className="card px-3">
                <div className="card-body">
    <h4 className="card-title"><button  className="btn btn-danger btn-block btn-lg" onClick={() => show_content(Array(data.length).fill(false))}>Counter {show.reduce((sum , y)=> y? sum + 1: sum , 0)}</button></h4>
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list">
                            {data.map(({title, content}, idx)=> <Todo title={title} content={content} handler={show_hide_content} idx={idx} show={show[idx]} /> ) }
                        </ul>
                    </div>
                </div>
            </div>
        </Page>
    )
};

export default Todos;
