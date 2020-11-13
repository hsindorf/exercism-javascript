export const score = (x, y) => {
  const position = Math.sqrt(Math.abs(x) ** 2 + Math.abs(y) ** 2);

  switch(true) {
    case position > 5 && position <= 10: {
      return 1;
    }

    case position > 1 && position <= 5: {
      return 5;
    }

    case position <= 1: {
      return 10;
    }
  }

  return 0;
};
