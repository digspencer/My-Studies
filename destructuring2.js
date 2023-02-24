const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 9, 8, 7] // Destructuring no array
console.log(n1, n3, n5, n6)