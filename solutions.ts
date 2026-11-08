
const multiplyValue = (value: number, multiplier?: number): number => {

    if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new Error("Value must be a valid finite number");
    }

    if (multiplier === undefined) {
        multiplier = 2;
    } else if (typeof multiplier !== "number" || !Number.isFinite(multiplier)) {
        throw new Error("Multiplier must be a valid finite number");
    }

    const result = value * multiplier;

    if (!Number.isFinite(result)) {
        throw new Error("Multiplication result is out of range");
    }

    return result;
};



const processInput = (value: string | number | boolean): string | number => {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    if (typeof value === "number") {

        if (!Number.isFinite(value)) {
            throw new RangeError("Input must be a finite number");
        }

        const result = value * 10;

        if (!Number.isFinite(result)) {
            throw new RangeError("Result exceeds the supported numeric range");
        }

        return result;
    }

    if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }

    throw new TypeError("Unsupported input type");
};



type GeoTuple = readonly [latitude: number, longitude: number, locationName: string];
const formatCoordinate = (
    coordinate: GeoTuple
): string => {

    if (!Array.isArray(coordinate) || coordinate.length !== 3) {
        throw new Error("Input must contain exactly 3 elements");
    }

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

    if (latitude < -90 || latitude > 90) {
        throw new Error("Latitude must be between -90 and 90");
    }

    if (longitude < -180 || longitude > 180) {
        throw new Error("Longitude must be between -180 and 180");
    }

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: readonly Course[],
  minStudents: number
): Array<Course> => {

  // Validate null and undefined
  if (courses == null) {
    throw new Error("Courses cannot be null or undefined");
  }

  if (minStudents == null) {
    throw new Error("minStudents cannot be null or undefined");
  }

  // Validate array
  if (!Array.isArray(courses)) {
    throw new TypeError("Courses must be an array");
  }

  // Validate minStudents
  if (
    typeof minStudents !== "number" ||
    !Number.isFinite(minStudents) ||
    minStudents < 0
  ) {
    throw new TypeError(
      "minStudents must be a non-negative finite number"
    );
  }

  // Validate individual courses
  for (const course of courses) {
    if (
      course === null ||
      typeof course !== "object" ||
      Array.isArray(course)
    ) {
      throw new TypeError("Invalid course object");
    }

    if (typeof course.title !== "string") {
      throw new TypeError("Course title must be a string");
    }

    if (
      typeof course.students !== "number" ||
      !Number.isFinite(course.students) ||
      course.students < 0
    ) {
      throw new TypeError(
        "Course students must be a non-negative finite number"
      );
    }

    if (typeof course.isPublished !== "boolean") {
      throw new TypeError(
        "isPublished must be a boolean"
      );
    }
  }

  // Filter published courses
  return courses.filter(
    (course) =>
      course.isPublished === true &&
      course.students >= minStudents
  );
};

const courses: Course[] = [
  {
    title: "TypeScript",
    students: 150,
    isPublished: true,
  },
  {
    title: "React",
    students: 80,
    isPublished: true,
  },
  {
    title: "Laravel",
    students: 200,
    isPublished: false,
  },
  {
    title: "Node.js",
    students: 120,
    isPublished: true,
  },
];

const result = getPopularCourses(courses, 100);

console.log(result);