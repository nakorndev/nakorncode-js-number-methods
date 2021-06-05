const num = 1290000

console.log(num)
console.log(num.toLocaleString())
console.log(num.toLocaleString('th-TH'))
console.log(num.toLocaleString('th-TH-u-nu-thai'))

console.log(num.toLocaleString('th-TH', { style: 'currency', currency: 'USD' }))
console.log(num.toLocaleString('th-TH', { style: 'currency', currency: 'EUR' }))
console.log(num.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }))

console.log(num.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
    currencyDisplay: 'name'
}))

console.log(num.toLocaleString('th-TH', {
    style: 'unit',
    unit: 'centimeter',
    unitDisplay: 'long'
}))
