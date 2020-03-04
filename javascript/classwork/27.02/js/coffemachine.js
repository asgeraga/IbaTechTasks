/* C O F F E E   M A C H I N E
*
* Necessary functionality:
*   - Coffee Machine should extend following fields from Machine: name, owner, madeDate, type, turnOff(), turnOn();
*   - support an array of created drinks;
*   - store its own supplies amount: water, coffee, milk, tea;
*   - create any of supported drinks after createDrink() method call;
*   - no any cash inside, just creation of drinks
*
* Stages of creation:
*  1) Decide how many constructors do you need to create;
*  2) Implement the smallest constructor, then go for the next on and on until all constructors are implemented;
* */
function Drink(name, water, coffee, tea, milk) {
    this.name = name;
    this.water = water;
    this.coffee = coffee;
    this.tea = tea;
    this.milk = milk;
  
  }
  
  function Supply(name, amout) {
    this.name = name;
    this.amout = amout;
  }
  
  Supply.prototype.remove = function (machine) {
    if (machine.supplies[this.nuame] instanceof Supply) {
      delete machine.supplies[this.name]
    } else {
      throw new TypeError("Something wrong with your supply");
    }
  };
  
  function Machine(name, type, owner, madeDate, turnOn, turnOff) {
    this.name = name;
    this.type = type;
    this.owner = owner;
    this.madeDate = madeDate;
    this.turnedOn = false;
    this.turnOn = turnOn;
    this.turnOff = turnOff;
  }
  
  Machine.prototype.goHome = function () {
    console.log('home is near')
  };
  
  function CoffeeMachine(name,
                         supplies,
                         drinks,
                         type,
                         owner,
                         madeDate,
                         turnOn,
                         turnOff) {
    Machine.call(this, name, type, owner, madeDate, turnOn, turnOff); //for call the machine constructor in a context of CoffeeMachine object
    this.supplies = supplies;
    this.drinks = drinks;
    this.elements = {
      container: document.createElement('div'),
      drinkInput: document.createElement('input'),
      okBtn: document.createElement('button'),
      message: document.createElement('span')
    };
  
    this.render();
  }
  
  CoffeeMachine.prototype = Object.create(Machine.prototype); //to inherit the prototype and its methods
  CoffeeMachine.prototype.render = function () {
      const {container , drinkInput, okBtn, message}=this.elements;
      okBtn.classList.add("coffe-container");
      container.classList.add("choose-")
    
    };
  CoffeeMachine.prototype.createDrink = function (drinkName) {
    const drinkToCreate = this.drinks.find(
      drink => drink.name === drinkName && drink instanceof Drink
    );
  
    let isEnoughSupplies = true;
  
    for (let item in this.supplies) {
      if (drinkToCreate[item] >= this.supplies[item].amout) {
        isEnoughSupplies = false;
        throw new Error("Not enough supplies");
      }
    }
  
    for (let singleSupply in this.supplies) {
      this.supplies[singleSupply].amout -= drinkToCreate[singleSupply];
    }
  
    return `here is your ${drinkName}, filthy javascript lover`;
  };
  
  
  const gogiCoffee = new CoffeeMachine(
    'GogiCoffee',
    {
      milk: new Supply('milk', 10),
      coffee: new Supply('coffee', 50),
      water: new Supply('water', 20),
      tea: new Supply('tea', 6)
    },
    [
      new Drink('espresso', 1, 3, 0, 0),
      new Drink('americano', 2, 2, 0, 0),
      new Drink('americano_milk', 2, 2, 0, 1),
      new Drink('cappuccino', 0, 3, 0, 5),
      new Drink('latte', 0, 3, 0, 6)
    ],
    'COFFEE_MACHINE',
    'Gogi Doe',
    '2020-02-12',
    function () {
      return this.turnedOn = true
    },
    function () {
      return this.turnedOn = false
    }
  );
  
  console.log(gogiCoffee.supplies);
  gogiCoffee.createDrink('latte');
  
  
  
  
  
  