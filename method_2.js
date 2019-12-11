const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('End'), 2000)
})

console.log('Begin')

/* método 1 */
promise.then(data => console.log(data))

/* método 2 */
promise.then(console.log)

/* método 3 */
promise.then(data => console.log(data)).catch(err => console.log('oops', err))

/* método 4 */
promise.then(
	res => {
		console.log(res)
	},
	rej => {
		console.log('oops', rej)
	}
)

/* método 5 */
promise.then(res => {
	console.log(res)
})

/* método 6 */
promise.catch(rej => {
	console.log('oops', rej)
})
