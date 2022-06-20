import React from "react";

const todos = 
    [
        { title: "todo1",
            desc: "todo1 Des",},
            { title: "todo1",
            desc: "todo1 Des",},
            { title: "todo1",
            desc: "todo1 Des",},
            { title: "todo1",
            desc: "todo1 Des",},
            { title: "todo1",
            desc: "todo1 Des",},
            { title: "todo1",
            desc: "todo1 Des",},
    ];

    const List=()=>{
        return <div>
            {todos.map((todo)=>{
                return <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
                </div>
            })}
        </div>;
    };

    export default List;