// What should e.g. black-brown return? 1?

export const decodedValue = (resistorColors) => {
  return COLORS.indexOf(resistorColors[0]) * 10 + COLORS.indexOf(resistorColors[1]);
};

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];