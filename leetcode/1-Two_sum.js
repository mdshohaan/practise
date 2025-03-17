// Hash Map
var twoSum = function (nums, target) {
  const d = new Map(); // HashMap তৈরি করা হলো
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]; // বর্তমান উপাদান
    const y = target - x; // দরকারি সংখ্যা (complement)

    if (d.has(y)) {
      return [d.get(y), i]; // প্রয়োজনীয় জোড়া পেয়ে গেলে return করব   [0,1]
    }

    d.set(x, i); // HashMap-এ বর্তমান উপাদান সংরক্ষণ করব
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

const Prices = new Map();

// Add items with their prices
Prices.set("apple", 1.5);
Prices.set("banana", 0.8);
Prices.set("orange", 1.2);

// Retrieve prices
console.log(Prices.get("apple"));

// Check if an item exists
console.log(Prices.has("grapes"));

// Remove an item
Prices.delete("banana");

// Check the size after deletion
console.log(Prices.size);

// Separate Chaining: In separate chaining, each slot in the hash table's array contains a linked list (or another data structure that can hold multiple items). When a collision occurs, the new key-value pair is added to the end of the linked list at the corresponding index.
class HashMap {
  constructor() {
    this.table = new Array(100).fill(null).map(() => []);
  }

  put(key, value) {
    const index = this.hash(key);
    const chain = this.table[index];
    const existingPair = chain.find(([existingKey]) => existingKey === key);

    if (existingPair) {
      existingPair[1] = value;
    } else {
      chain.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const chain = this.table[index];
    const pair = chain.find(([existingKey]) => existingKey === key);

    if (pair) {
      return pair[1];
    }

    return null;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}
