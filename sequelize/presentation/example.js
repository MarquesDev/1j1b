user
  .findAll({
    where: {
      age: {
        $gte: 18 //plus grand ou égal à 18
      }
    }
  })
  .then(function(users){
    console.log(users)
  /*
    [{
      id: 1,
      name: "Kevin",
      age: 23
    },{
      id: 2,
      name: "Marc",
      age: 45
    }]
  */
  });
