const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    const result = value * multiplier;
    return result;
};
const processInput = (value) => {
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
const formatCoordinate = (coordinate) => {
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
const concatenateArrays = (...arrays) => {
    const result = [];
    arrays.map((array) => {
        array.map((item) => {
            result.push(item);
        });
    });
    return result;
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    _name;
    _baseSalary;
    constructor(_name, _baseSalary) {
        this._name = _name;
        this._baseSalary = _baseSalary;
        if (this._baseSalary <= 0) {
            throw new Error("Salary cannot be negative value");
        }
    }
    get baseSalary() {
        return this._baseSalary;
    }
    getDetails() {
        return `Employee: ${this._name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    _department;
    constructor(_name, _baseSalary, _department) {
        super(_name, _baseSalary);
        this._department = _department;
    }
    getRoleInfo() {
        return `Manager of ${this._department}: ${this._name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
};
export {};
