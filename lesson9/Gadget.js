export class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
 get year() {
    return this._year;
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (typeof value === "number" && value >= 2000 && value <= currentYear) {
      this._year = value;
    } else {
      this._year = "Error: invalid year";
      console.log("Error: invalid year");
    }
  }
  getInfo() {
    return `Gadget: ${this.brand} ${this.model}, released in ${this.year}.`;
  }
  static getOldestGadget(gadgetsArray) {
    if (!Array.isArray(gadgetsArray) || gadgetsArray.length === 0) {
      console.log("Error: array is empty or invalid");
      return null;
    }

    const oldest = gadgetsArray.reduce((oldestSoFar, current) => {
      if (
        typeof current.year === "number" &&
        (typeof oldestSoFar.year !== "number" || current.year < oldestSoFar.year)
      ) {
        return current;
      }
      return oldestSoFar;
    }, gadgetsArray[0]);

    console.log("Oldest gadget:");
    console.log(oldest.getInfo());
    return oldest;
  }
}