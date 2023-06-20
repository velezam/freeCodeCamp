function rot13(str) {
  let result = str.split("");

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      const charIndex = alphabet.findIndex((letter) => letter === str[i]);
      result[i] = alphabet[(charIndex + 13) % alphabet.length];
    }
  }

  return result.join("");
}

rot13("SERR PBQR PNZC");
