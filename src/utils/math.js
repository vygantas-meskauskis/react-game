export function range(min, max){
    return Array.from({length : max - min + 1}, (v, i) => min + i)
}