export function range(min, max){
    return Array.from({length : max - min + 1}, (v, i) => min + i)
}

export function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}