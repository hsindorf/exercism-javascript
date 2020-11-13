export const toRoman = (num) => {
  let unitIndex = 0;
  let output = "";

  for (let i = 1; i <= 1000; i *= 10) {
    const placeValue = Math.floor(num / i % 10);
    output = `${toRomanIndiv(UNITS[unitIndex], UNITS[unitIndex += 1], UNITS[unitIndex += 1], placeValue)}${output}`;
  }

  return output;
};

const toRomanIndiv = (one, five, ten, num) => {
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