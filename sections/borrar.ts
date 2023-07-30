const list = [
                [1, 2, 3, 4, 5,6,7],
                [1, 2, 3, 4, 5,6,7],
                [1, 2, 3, 4, 5,6,7],
                [1, 2, 3, 4, 5,6,7],
                [1, 2, 3, 4, 5,6,7],
                [1, 2, 3, 4, 5,6,7]]


for (let j = 1; j < list.length; j++) {
    let row = ''
    for (let i = 1; i < list.length; i++) {
        row += ` ${j * i}`
    }
    console.log(row);
}



const max = (...list) =>  [...list].sort(function(a, b){return b - a})[0]
console.log(max(1000,2,3,4,3000000,6,7,8,90,66545,342456537,84543235)
)


console.log(Math.min(9999,4,5,8121209));


const names = ['jesus', 'hittler']

const lengthOfNames = (names) => {
    const list = names.map((name)=> name.length)
    return list.sort(function(a, b){return b - a})[0]
}
console.log(lengthOfNames(names));
