class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		console.log('call');
		this.text = todoText;
		this.id = Date.now().toString();
		console.log(this.id);
	}
}

export default Todo;
