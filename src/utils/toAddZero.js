export function toAddZero(dat){
    let result = dat.toString()
    return result.length < 2 ? "0"+result : result
}