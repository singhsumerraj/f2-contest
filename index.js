/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((employee) => {
      if(employee.profession ==="developer"){
        console.log(employee);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if(employee.profession ==="developer"){
        console.log(employee);
      }
    })
  }
  
  function addData() {
    let add = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(add);
    console.log(arr);
  }
  
  function removeAdmin() {
    updatedArray = arr.filter((employee) => {
      return employee.profession !== "admin" 
    });
    console.log(updatedArray);
  }
  
  function concatenateArray() {
    let new_arr = [
      { id: 4, name: "sumer", age: "25", profession: "developer" },
      { id: 5, name: "arvind", age: "22", profession: "intern" },
      { id: 6, name: "aaditya", age: "24", profession: "admin" },
    ];
    let newArr = arr.concat(new_arr);
     console.log(newArr);
  }
  