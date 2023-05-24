const obj = {
    name: 'test',
    age: 25,
    etc: {
        uk: 'test',
        countries: [
            'test',
            'test',
            'test',
            {
                key: 'alaki'
            }
        ]
    }
}



function clone(object) {
    let clonedObj =  {};
    for (let key in object) {
      let value = object[key];
      if(value && typeof value === 'object') {
        clonedObj[key] = clone(value);
    } else {
        clonedObj[key] = value;
    }
   }
      return clonedObj;
  }


console.log(clone(obj))





