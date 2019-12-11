const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets'
const readFileAsync = promisify(fs.readFile)

/* método 1 */
function read(index) {
	return readFileAsync(path.resolve(basePath, `data${index}.txt`), {
		encoding: 'utf-8'
	})
}

console.log('Begin')
const promiseArray = []
for (let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)

Promise.all(promiseArray).then(arr => console.log(arr.join('\n\n')))

console.log('End')

/* método 2 */
const coinFlip = n =>
	new Promise((resolve, reject) => (n > 0.5 ? resolve('OK') : reject('Oops')))

console.log('Begin')
const promiseArray2 = []
for (let i = 1; i <= 4; i++) promiseArray2[i - 1] = coinFlip(Math.random())

console.log(promiseArray2)

console.log('End')
