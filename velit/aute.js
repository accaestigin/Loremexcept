class ExampleClass {
    constructor() {
        this._targets = [1, 2, 3, 4, 5]; // Assigning an array to _targets
    }

    someMethod() {
        const a = this._targets; // Assigning _targets to a constant a
        console.log(a); // Output: [1, 2, 3, 4, 5]

        // You can perform further operations with 'a' here
    }
}

// Creating an instance of ExampleClass
const exampleInstance = new ExampleClass();
exampleInstance.someMethod(); // This will trigger the console.log inside someMethod
