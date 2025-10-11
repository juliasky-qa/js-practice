import { Gadget } from "./Gadget.js";

export class Smartphone extends Gadget {
  constructor(brand, model, year, OS) {
    super(brand, model, year);
    this.operatingSystem = OS;
  }

  get operatingSystem() {
    return this._operatingSystem;
  }

  set operatingSystem(value) {
    const allowedOS = ["iOS", "Android", "HarmonyOS"];
    if (allowedOS.includes(value)) {
      this._operatingSystem = value;
    } else {
      this._operatingSystem = "Error: invalid OS";
      console.log("Error: Invalid OS");
    }
  }

  getInfo() {
    return `Smartphone: ${this.brand} ${this.model}, released in ${this.year}, runs on ${this._operatingSystem}.`;
  }
}

