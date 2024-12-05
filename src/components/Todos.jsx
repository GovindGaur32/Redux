import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updatetodo } from '../features/todo/todoSlice';
import { FaPen, FaTrash } from "react-icons/fa";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleUpdate = (id, text) => {
        // You can add logic here to open a form or modal to update the todo text
        const newText = prompt("Update todo text:", text);
        if (newText) {
            dispatch(updatetodo({
                id,
                text: newText
            }));
        }
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => handleUpdate(todo.id, todo.text)}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <FaPen />
                        </button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
