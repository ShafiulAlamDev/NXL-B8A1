
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

    if (!Number.isFinite(latitude)) {
        throw new Error("Invalid latitude");
    }

    if (!Number.isFinite(longitude)) {
        throw new Error("Invalid longitude");
    }

    if (typeof locationName !== "string" || locationName.trim() === "") {
        throw new Error("Invalid location name");
    }

    if (latitude < -90 || latitude > 90) {
        throw new Error("Latitude must be between -90 and 90");
    }

    if (longitude < -180 || longitude > 180) {
        throw new Error("Longitude must be between -180 and 180");
    }

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
