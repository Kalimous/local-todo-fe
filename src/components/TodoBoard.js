import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList = [], deleteItem, toggleComplete }) => {
    return (
        <div>
            <h2>Todo List</h2>
            {todoList.length > 0 ? (
                todoList.map((item, index) => (
                    <TodoItem
                        item={item}
                        key={index}
                        deleteItem={deleteItem}
                        toggleComplete={toggleComplete}
                    />
                ))
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
};

export default TodoBoard;
