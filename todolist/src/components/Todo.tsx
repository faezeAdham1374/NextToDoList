"use client"

import { useState } from "react";

interface todo {
    id: number;
    title: string;
    completed: boolean;
}

function Todo() {
    const [todos, setodos] = useState<todo[]>([])
    const [todoTitle, setTodoTitle] = useState<string>("")

    const addTodos = () => {
        const newTodo = {
            id: Math.random(),
            title: todoTitle,
            completed: false
        }
        setodos([...todos , newTodo])
        setTodoTitle("")
    }

    const changeTitle = (value: string) => {
        setTodoTitle(value)
    }

    return (
        <div className="mt-10 ml-10 mr-10 flex-auto">
            <form className="flex justify-center w-full">
                <div className="w-8/12">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                    <input onChange={(e) => changeTitle(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                </div>
                <button onClick={addTodos} className="cursor-pointer ml-8 rounded-sm text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800" type="button"> Add </button>
            </form>
        </div>
    );
}

export default Todo;