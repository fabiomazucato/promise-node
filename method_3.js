const fs = require('fs')
const path = require('path')
const basePath = './assets'
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

/* método 1 */
function readFileAsync_(path, options) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, options, (err, data) => {
			if (err) return reject(err)
			return resolve(data)
		})
	})
}

console.log('Begin')
readFileAsync_(path.resolve(basePath, 'data1.txt'), { encoding: 'utf-8' })
	.then(data => console.log)
	.catch(err => console.error)

console.log('End')

/* método 2 */
console.log('Begin')
readFileAsync(path.resolve(basePath, 'data1.txt'), { encoding: 'utf-8' })
	.then(data => console.log)
	.then(() => console.log('xpto'))
	.catch(err => console.error)

console.log('End')

function read(index) {
	return readFileAsync(path.resolve(basePath, `data${index}.txt`), {
		encoding: 'utf-8'
	})
}

/* método 3 */
function start(index, max) {
	if (index > max) return
	read(index).then(data => {
		console.log(data, '\n')
		start(index + 1, max)
	})
}

start(1, 4)
