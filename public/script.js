// Get all items in database
const button1 = document.getElementById('button1');
button1.addEventListener('click', funcGenerateForm);

function funcGenerateForm() {
  console.log('button works');
  axios.get('/')
    .then((response) => {
      // Generate label for forms in array
      const formArr = ['Problem', 'ErrorText', 'Commit'];

      // Create Div & Id
      const createDiv = document.createElement('div');
      createDiv.id = 'formDiv';

      // Create Title of form
      const createPTag = document.createElement('p');
      createPTag.innerHTML = 'Bug Report Form';
      createDiv.appendChild(createPTag);

      // Create inputs + label and append to div
      for (let i = 0; i < formArr.length; i += 1) {
        const createProblemElement = document.createElement('input');
        const createLabelElement = document.createElement('label');
        const createBr = document.createElement('br');
        createProblemElement.setAttribute('type', 'text');
        createProblemElement.setAttribute('id', `${formArr[i]}`);
        createProblemElement.setAttribute('name', `${formArr[i]}`);
        createLabelElement.innerHTML = `${formArr[i]}`;
        createDiv.appendChild(createLabelElement);
        createDiv.appendChild(createProblemElement);
        createDiv.appendChild(createBr);
      }

      // Create submit button and append to div
      const button2 = document.createElement('button');
      button2.setAttribute('id', 'SubmitBugButton');
      button2.innerText = 'Submit Bug';
      createDiv.appendChild(button2);

      // Append div to body
      document.body.appendChild(createDiv);

      const bugSubmit = document.getElementById('SubmitBugButton');
      bugSubmit.addEventListener('click', funcSubmitBug);
    })
    .catch((error) => {
      console.log(error);
    });
}

function funcSubmitBug() {
  console.log('submit Button Click');

  // get inputs from form
  console.log(document.getElementsByName('Problem')[0].value);
  console.log(document.getElementsByName('ErrorText')[0].value);
  console.log(document.getElementsByName('Commit')[0].value);

  // submit inputs as create in sequelize syntax
  axios.post('/create-bug', {
    problem: document.getElementsByName('Problem')[0].value,
    error_text: document.getElementsByName('ErrorText')[0].value,
    commit: document.getElementsByName('Commit')[0].value,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  // clear form once submitted
  document.getElementById('Problem').value = '';
  document.getElementById('ErrorText').value = '';
  document.getElementById('Commit').value = '';
}
