function keepCloning(objectpassed) {
  if (objectpassed === null || typeof objectpassed !== "object") {
    return objectpassed;
  }
  // give temporary-storage the original obj's constructor
  var temporarystorage = {};
  for (var key in objectpassed) {
    temporarystorage[key] = keepCloning(objectpassed[key]);
  }
  return temporarystorage;
}
var employeeDetailsOriginal = {
  name: "Manjula",
  age: 25,
  Profession: "Software Engineer",
};
var employeeDetailsDuplicate = keepCloning(employeeDetailsOriginal);
console.log(employeeDetailsDuplicate);
employeeDetailsOriginal.name = "soumak";
console.log(employeeDetailsDuplicate);
