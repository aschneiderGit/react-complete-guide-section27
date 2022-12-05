import React, {useContext} from 'react';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import {TodosContext} from '../store/todos-context';

const Todos: React.FC = (props) => {
	const ctxTodo = useContext(TodosContext);
	return (
		<ul className={classes.todos}>
			{ctxTodo.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={ctxTodo.removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
