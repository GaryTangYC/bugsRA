// Get all items in database
const button1 = document.getElementById('button1');
button1.addEventListener('click', funcGenerateForm);

function funcGenerateForm() {
  console.log('button works');
  // axios.get('/bugs')
  // .then((response) => {

  const createProblemElement = document.createElement('input');
  createProblemElement.setAttribute('type', 'text');
  createProblemElement.setAttribute('name', 'problem');
  createProblemElement.setAttribute('label', 'problem');
  document.body.appendChild(createProblemElement);

  const button2 = document.createElement('button');
  button2.innerText = 'Submit';
  document.body.appendChild(button2);

  // createInputElement.setAttribute("name", "text")
  // })
}

// function funcPostBug() {
//   axios
//     .post('/bugs') {
//       problem
//     }
//     .then((response) => {
//       console.log(response);

//       // console.log('response', response.data.items[0].name);
//       for (let i = 0; i < response.data.items.length; i += 1) {
//         // console.log(response.data.items[i].name);
//         const createPName = document.createElement('p');
//         const createPDesc = document.createElement('p');
//         createPName.innerHTML = response.data.items[i].name;
//         createPDesc.innerHTML = response.data.items[i].description;
//         document.body.appendChild(createPName);
//         document.body.appendChild(createPDesc);
//       }

//       // document.createElement('')
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
