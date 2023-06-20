function telephoneCheck(str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[-.\s]?\d{3}[-.\s]?\d{4}$/
  return regex.test(str);
}

// Valid phone numbers
// console.log(`555-555-5555 is ${telephoneCheck("555-555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`(555)555-5555 is ${telephoneCheck("(555)555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`(555) 555-5555 is ${telephoneCheck("(555) 555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`555 555 5555 is ${telephoneCheck("555 555 5555") ? "valid" : "invalid"}`); // valid
// console.log(`5555555555 is ${telephoneCheck("5555555555") ? "valid" : "invalid"}`); // valid
// console.log(`1 555-555-5555 is ${telephoneCheck("1 555-555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`1 (555) 555-5555 is ${telephoneCheck("1 (555) 555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`1(555)555-5555 is ${telephoneCheck("1(555)555-5555") ? "valid" : "invalid"}`); // valid
// console.log(`1 555 555 5555 is ${telephoneCheck("1 555 555 5555") ? "valid" : "invalid"}`); // valid

// Invalid phone numbers
// console.log(`555-5555 is ${telephoneCheck("555-5555") ? "valid" : "invalid"}`); // invalid
// console.log(`5555555 is ${telephoneCheck("5555555") ? "valid" : "invalid"}`); // invalid
// console.log(`1 555)555-5555 is ${telephoneCheck("1 555)555-5555") ? "valid" : "invalid"}`); // invalid
// console.log(`123**&!!asdf# is ${telephoneCheck("123**&!!asdf#") ? "valid" : "invalid"}`); // invalid
// console.log(`55555555 is ${telephoneCheck("55555555") ? "valid" : "invalid"}`); // invalid
// console.log(`(555)5(55?)-5555 is ${telephoneCheck("(555)5(55?)-5555") ? "valid" : "invalid"}`); // invalid
// console.log(`2 (757) 622-7382 is ${telephoneCheck("2 (757) 622-7382") ? "valid" : "invalid"}`); // invalid
// console.log(`0 (757) 622-7382 is ${telephoneCheck("0 (757) 622-7382") ? "valid" : "invalid"}`); // invalid
// console.log(`-1 (757) 622-7382 is ${telephoneCheck("-1 (757) 622-7382") ? "valid" : "invalid"}`); // invalid
// console.log(`2 757 622-7382 is ${telephoneCheck("2 757 622-7382") ? "valid" : "invalid"}`); // invalid
// console.log(`10 (757) 622-7382 is ${telephoneCheck("10 (757) 622-7382") ? "valid" : "invalid"}`); // invalid
// console.log(`27576227382 is ${telephoneCheck("27576227382") ? "valid" : "invalid"}`); // invalid

