export const toRoman = (num) => {
  let position = 8;
  let remainingNum = num;
  let output = "";

  for (let i = 1000; i >= 1; i/= 10) {
    const multipleOfI = Math.floor(remainingNum / i);

    output += toRomanIndiv(UNITS[position], UNITS[position -= 1], UNITS[position -= 1], multipleOfI);

    remainingNum -= multipleOfI * i;
  }

  return output;
};

const toRomanIndiv = (ten, five, one, num) => {
  switch (num) {
    case 1: {
      return `${one}`;
    }
    case 2: {
      return `${one}${one}`;
    }
    case 3: {
      return `${one}${one}${one}`;
    }
    case 4: {
      return `${one}${five}`;
    }
    case 5: {
      return `${five}`;
    }
    case 6: {
      return `${five}${one}`;
    }
    case 7: {
      return `${five}${one}${one}`;
    }
    case 8: {
      return `${five}${one}${one}${one}`
    }
    case 9: {
      return `${one}${ten}`
    }
    default: {
      return "";
    }
  }
};

const UNITS = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];