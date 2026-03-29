let data = null;

async function getInitialData() {
  const local = localStorage.getItem('data');
  if (local) {
    data = JSON.parse(local);
  } else {
    const response = await fetch('./data.json');
    data = await response.json();
    console.log(data);
  }
}

function saveState() {
  localStorage.setItem('data', JSON.stringify(data));
}

function renderComments(comments) {
  const container = document.querySelector('#commets')
}

function renderCurrentUser(user) {}

function createdComment(comment) {
  // const element = document.createElement('li')
  // element.children.push(document.createElement(''))
}

getInitialData();
