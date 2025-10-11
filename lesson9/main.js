import { Gadget } from "./Gadget.js";
import { Smartphone } from "./Smartphone.js";

const gadget1 = new Gadget("Sony", "PS", 2022);
const gadget2 = new Gadget("Canon", "EOS", 2001);

const smartphone1 = new Smartphone("Apple", "iPhone 17", 2025, "iOS");
const smartphone2 = new Smartphone("Samsung", "Galaxy S24", 2024, "Windows");

console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log(smartphone1.getInfo());
console.log(smartphone2.getInfo());

const allGadgets = [gadget1, gadget2, smartphone1, smartphone2];

Gadget.getOldestGadget(allGadgets);