function Sandwich (bread, ingredients, name) {
  this.bread = bread
  this.ingredients = ingredients
  this.name = name
  this.describe = function () {
    console.log('Your ' + this.name + ' includes: ' + this.ingredients.join(', ') + '. Yum!')
  }
}

function Customer (name, tableNumber) {
  this.name = name
  this.tableNumber = tableNumber
}

function serve () {
  if (arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments)
    var last = customers.pop()
    console.log(this.name + ' for ' + customers.join(', ') + ' and ' + last + '. Enjoy!')
  } else {
    console.log(this.name + '. Order up!')
  }
}

function visitTable () {
  console.log('The server is visiting ' + this.name + ' at table number ' + this.tableNumber)
}

var gc = new Sandwich('white', ['cheese'], 'Grilled Cheese')
var pbj = new Sandwich('wheat', ['peanut butter', 'raspberry jam'], 'Peanut Butter & Jelly')
var salad = {
  ingredients: ['croutons', 'romaine hearts', 'steak', 'parmesan', 'caesar dressing'],
  name: 'Steak Caesar'
}

gc.describe()
pbj.describe()
pbj.describe.call(salad)

salad.describe = pbj.describe.bind(salad)
salad.describe()

var sally = new Customer('Sally', '4')
var visitSally = visitTable.bind(sally)
setTimeout(visitSally, 1000)
