// Your Solution goes here
// iteration 1 .........................................
let personObj = {
  firstName: "Daniela",
  lastName: "Romero",
  age: 24,
};
function fullName(person) {
  console.log(person.firstName + "  " + person.lastName);
}
fullName(personObj);
console.log("Index.js load successfull");

// iteration 2 ...........................................
console.log("iteration 2 ............................")
let statusUser = [ {
  username: 'Dani', 
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Greg', 
  status: 'online',
  lastActivity: 4320
}];

const result = {
  online: [],
  offline: [],
  afk: [],
};

function getStatusofUsers(users) {
  statusUser.forEach((user) => {
    if (user.status === "online" && user.lastActivity <= 600) {
      result.online.push(user.username);
    } else if (user.status === "online" && user.lastActivity > 600) {
      result.afk.push(user.username);
    }else{
      result.offline.push(user.username);
    }

  });
  Object.keys(result).forEach((key) => {
    if (result[key].length === 0) {
      delete result[key];
    }
  });


  return result;
}

console.log(getStatusofUsers(statusUser));


// iteration 3 ..........................................................
//Object.keys(Object)

let yourComputer = { 
    cpu : 25,
    gpu : 45,
    motherBase : 15,
    dvdDriver : 25,
    rom : 5,
    ram : 10,
  }
  let maxTemperatures = { 
    cpu : 33,
    gpu : 42,
    motherBase : 20,
    dvdDriver : 20,
    rom : 10,
    ram : 20,
  }


  function isOverheating(yourComputer, maxTemperatures) {
    const newObj = {};
  
     Object.keys(yourComputer).forEach(component => {
      //// Asignar una clave utilizando corchetes
        // objeto["clave"] = "valor";
      newObj[component] = yourComputer[component] < maxTemperatures[component] ? true : false;
    });
  
    return newObj;
  }
console.log(isOverheating(yourComputer,maxTemperatures));