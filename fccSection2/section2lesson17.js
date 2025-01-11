const nums = [1,2,3,4,5]

const squares = nums.map(num => num * num)

console.log(squares)

const names = ['alice','bob','charlie','danielle']

const caps = names.map( name => name[0].toUpperCase() + name.slice(1))

console.log(caps)

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']

const pokemonP = pokemon.map( name => `<p>${name}</p>` )

console.log(pokemonP)