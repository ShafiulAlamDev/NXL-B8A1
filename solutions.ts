const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    multiplier = 2;
  }
  const result = value * multiplier;
  return result;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    const result = value * 10;
    return result;
  }
  if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  }
  throw new Error("Unsupported input type");
};

const formatCoordinate = (
  coordinate: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  if (typeof latitude !== "number" || !Number.isFinite(latitude)) {
    throw new Error("Latitude must be a finite number");
  }
  if (typeof longitude !== "number" || !Number.isFinite(longitude)) {
    throw new Error("Longitude must be a finite number");
  }
  if (typeof locationName !== "string" || locationName.trim() === "") {
    throw new Error("Location name cannot be empty");
  }
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  arrays.map((array) => {
    array.map((item) => {
      result.push(item);
    });
  });
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  courses: readonly Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected _name: string,
    protected _baseSalary: number,
  ) {
    if (this._baseSalary <= 0) {
      throw new Error("Salary cannot be negative value");
    }
  }
  get baseSalary(): number {
    return this._baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this._name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    _name: string,
    _baseSalary: number,
    private _department: string,
  ) {
    super(_name, _baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this._department}: ${this._name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};
