class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = Date.now().toString();
	}
}

export default Todo;
