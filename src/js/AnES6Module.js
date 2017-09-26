class AnES6Module {
	constructor(name) {
		this.name = name;
		this.hello(this.name);
	}
	hello(name) {
		console.log(`Hello ${name}`);
	}
}

export default AnES6Module;
