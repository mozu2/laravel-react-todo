


import React from 'react';
import './ShowTask.css';

const ShowTask = ({ todos }) => {

    if (!todos || todos.length === 0) {
        return <p>タスクがありません</p>;
    }
    return (
        <>

            {todos.map((todo) => (
                <div className="task-list">
                    <table>
                        <thead>
                            <tr>
                                <th className='col-title'>するべきこと</th>
                                <th className='col-date'>いつまで</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td key={todo.id}>{todo.title}</td>
                                <td key={todo.id}>{todo.due_date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}

        </>

    )
}

export default ShowTask;