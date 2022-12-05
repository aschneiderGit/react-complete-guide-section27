import {useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
	const [todos, setTodos] = useState([
		new Todo('Learn React'),
		new Todo('Learn TypeScript'),
	]);
	const addTodoHandler = (todoText: string) => {
		setTodos((prevState) => prevState.concat(new Todo(todoText)));
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;
