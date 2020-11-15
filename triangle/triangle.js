export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    return (
      this.isValid() && this.sideA == this.sideB && this.sideB == this.sideC
    );
  }

  isIsosceles() {
    return (
      this.isValid() &&
      (this.sideA == this.sideB ||
        this.sideB == this.sideC ||
        this.sideC == this.sideA)
    );
  }

  isScalene() {
    return (
      this.isValid() &&
      this.sideA !== this.sideB &&
      this.sideB !== this.sideC &&
      this.sideC !== this.sideA
    );
  }

  // this is in its own function vs. the constructor because of how the tests are written
  isValid() {
    return (
      this.sideA !== 0 &&
      this.sideB !== 0 &&
      this.sideC !== 0 &&
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  }
}
