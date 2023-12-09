class ShapeDimensions {
  public readonly name: string;
  public readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

class Circle extends ShapeDimensions {
  private radius: number;

  constructor(name: string, color: string, radius: number) {
    super(name, color);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends ShapeDimensions {
  public readonly name: string = "Rectangle";
  protected length: number;
  protected width: number;

  constructor(name: string, color: string, length: number, width: number) {
    super(name, color);
    this.length = length;
    this.width = width;
  }

  public calculateArea(): number {
    return this.length * this.width;
  }

  public print(): void {
    console.log(
      `Formula area of ${this.name}: Area = Length * Width S = ${this.length} * ${this.width}`
    );
  }
}

class Square extends ShapeDimensions {
  public readonly name: string = "Square";
  private side: number;

  constructor(name: string, color: string, side: number) {
    super(name, color);
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): void {
    console.log(
      `Formula area of ${this.name}: Area = Side * Side S = ${this.side} * ${this.side}`
    );
  }
}

class Triangle extends ShapeDimensions {
  private base: number;
  private height: number;

  constructor(name: string, color: string, base: number, height: number) {
    super(name, color);
    this.base = base;
    this.height = height;
  }

  public calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
