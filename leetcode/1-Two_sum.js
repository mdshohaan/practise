var twoSum = function (nums, target) {
  const d = new Map(); // HashMap তৈরি করা হলো
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]; // বর্তমান উপাদান
    const y = target - x; // দরকারি সংখ্যা (complement)

    if (d.has(y)) {
      return [d.get(y), i]; // প্রয়োজনীয় জোড়া পেয়ে গেলে return করব
    }

    d.set(x, i); // HashMap-এ বর্তমান উপাদান সংরক্ষণ করব
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
