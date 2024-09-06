export const randomByLimit = (limit: number = 1, minimal: number = 0) => {
    return Math.random() * (limit - minimal) + minimal;
}