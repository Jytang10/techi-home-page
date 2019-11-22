
const name_url = 'https://techi.envivent.com/names.json';
const description_url = 'https://techi.envivent.com/description.json';
const images_url = 'https://techi.envivent.com/images.json';

let employeeArr;
let foundEmployee;

fetch(name_url)
  .then(res => res.json())
  .then((res) => {
    employeeArr = res.employees;
  })
  .then((res) => {
    foundEmployee = findByID(1, employeeArr)
    console.log('Found this person', foundEmployee)
  })
  .catch(err => { throw err });

function findByID(id, data){
  return data.filter(
    function(data){
      return data.id == id;
    }
  )
}