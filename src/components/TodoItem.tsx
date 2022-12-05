const TodoItem: React.FC<{text: String}> = (props) => {
	return <li>{props.text}</li>;
};

export default TodoItem;
