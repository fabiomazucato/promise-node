const coinFlip = new Promise((resolve, reject) =>
	Math.random() > 0.5 ? resolve('OK') : reject('Oops')
)

/* método 2 */
coinFlip
	.then(data => console.log(data, '1'))
	.then(() => console.log('End 1'))
	.catch(err => console.log('Erro 1'))

/* método 2 */
const p = Promise.resolve('resolve').then(coinFlip)
p.then(console.log).catch(() => console.log('error'))
