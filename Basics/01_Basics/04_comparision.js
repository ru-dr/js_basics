console.log("2" > 1); // true, string '2' becomes a number 2

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

//note: the reason that equality check ( == ) and comparisons ( > < >= <= ) work differently is because comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (4) null > 0 is false.

//> comparison converts null to a number, treating it as 0. That’s why null >= 0 is true and null > 0 is false.

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

// note: undefined becomes NaN after the numeric conversion. And NaN is a special numeric value which returns false for all comparisons.

//> let's see strict comparison, (===) and strict non-equality check (!==)

console.log("2" === 2); // false
console.log("2" !== 2); // true