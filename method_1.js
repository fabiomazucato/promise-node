const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

/* Passo 1 */
const content = fs.readFileSync(path.resolve(basePath, 'data1.txt'))
console.log(content.toString())

/* Passo 2  */
const files = fs.readdirSync(path.resolve(basePath))

const setences = files.filter(file => /data[1-4].txt/gi.test(file))

for (const setence of setences) {
	const text = fs.readFileSync(path.resolve(basePath, setence)).toString()
	console.log(text, '\n')
}

/* Passo 3  */
const cb1 = (err, data) => {
	if (err) throw err
	console.log(data)
}

fs.readFile(path.resolve(basePath, 'data1.txt'), { encoding: 'utf-8' }, cb1)

/* Passo 4 */
const cb2 = (err, data) => {
	if (err) throw err
	console.log(data)
}

const files = fs.readdirSync(path.resolve(basePath))

const sentences = files.filter(file => /data[1-4].txt/gi.test(file))

for (const file of sentences) {
	fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb2)
}

/* Passo 5 */
const cb3 = (err, data, index, max) => {
	if (err) throw err
	console.log(data)
	return start(index + 1, max)
}

start(1, 4)

function start(index, max) {
	if (index > max) return

	fs.readFile(
		path.resolve(basePath, `data${index}.txt`),
		{ encoding: 'utf-8' },
		(err, data) => cb3(err, data, index, max)
	)
}

console.log('End')
