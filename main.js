
const name_url = 'https://techi.envivent.com/names.json';
const description_url = 'https://techi.envivent.com/description.json';
const images_url = 'https://techi.envivent.com/images.json';

let employeeData;
let foundEmployee;
let first_name;
let last_name;
let title;
let description;
let images_folder_url;
let employee_image_url;

function findByID(id, data){
  return data.filter(
    function(data){
      return data.id == id;
    }
  )
}

fetch(name_url)
  .then(res => res.json())
  .then((res) => {
    employeeData = res.employees;
  })
  .then((res) => {
    foundEmployee = findByID(1, employeeData);
    first_name = foundEmployee[0].first_name;
    last_name = foundEmployee[0].last_name;
  })
  .catch(err => { throw err });

fetch(description_url)
  .then(res => res.json())
  .then((res) => {
    employeeData = res.employees;
  })
  .then((res) => {
    foundEmployee = findByID(1, employeeData)
    description = foundEmployee[0].description;
    title = foundEmployee[0].title;
  })
  .catch(err => { throw err });


fetch(images_url)
  .then(res => res.json())
  .then((res) => {
    images_folder_url = res['images-folder'];
    employeeData = res.employees;
  })
  .then((res) => {
    foundEmployee = findByID(1, employeeData);
    employee_image_url = foundEmployee[0].full;
  })
  .catch(err => { throw err });