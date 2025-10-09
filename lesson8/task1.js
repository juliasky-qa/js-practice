const calculator = {
  lastResult: null,
  operationsCount: 0,

  add(a, b) {
    const result = a + b;
    this.lastResult = result;
    this.operationsCount++;
    return result;
  },

  subtract(a, b) {
    const result = a - b;
    this.lastResult = result;
    this.operationsCount++;
    return result;
  },

  multiply(a, b) {
    const result = a * b;
    this.lastResult = result;
    this.operationsCount++;
    return result;
  },

  divide(a, b) {
    if (b === 0) {
      console.log("Помилка: ділення на нуль!");
      return "Помилка: ділення на нуль!";
    }
    const result = a / b;
    this.lastResult = result;
    this.operationsCount++;
    return result;
  },

  reset() {
    this.lastResult = null;
    this.operationsCount = 0;
    console.log("Калькулятор скинуто до початкових значень.");
  }
};

console.log("Додавання:", calculator.add(9, 5));           
console.log("Віднімання:", calculator.subtract(10, 8));     
console.log("Множення:", calculator.multiply(5, 5));
console.log("Ділення:", calculator.divide(16, 4));
console.log("Ділення на нуль:", calculator.divide(10, 0));