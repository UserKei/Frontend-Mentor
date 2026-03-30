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
  const container = document.querySelector('#comments');
}

function renderCurrentUser(user) {}

function createCommentElement(comment, options = {}) {
  const { currentUser, isReply = false } = options;
  const isCurrentUser = comment.user.username === currentUser.username;

  const item = document.createElement('li');
  item.className = 'comment';
  item.id = comment.id;

  const card = document.createElement('div');
  card.className = 'comment__card';

  const score = document.createElement('div');
  score.className = 'comment_score';
  score.textContent = comment.score;

  const main = document.createElement('div');
  main.className = 'comment__main';

  const header = document.createElement('div');
  header.className = 'comment__header';

  const usermeta = document.createElement('div');
  usermeta.className = 'usermeta';

  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = comment.user.image.webp;

  const username = document.createElement('span');
  username.className = 'username';
  username.textContent = comment.user.username;

  usermeta.appendChild(avatar);
  usermeta.appendChild(username);
  if (currentUser) {
    const badge = document.createElement('span');
    badge.className = 'comment__badge';
    badge.textContent = 'you';
    usermeta.append(badge);
  }

  const createdAt = document.createElement('span');
  createdAt.className = 'comment__created-at';
  createdAt.textContent = comment.createdAt;

  usermeta.appendChild(createdAt);

  const actions = document.createElement('div');
  actions.className = 'commment__actions';

  header.appendChild(usermeta);
  header.appendChild(actions);

  const content = document.createElement('p');
  if (isReply) {
    content.textContent = `@${comment.replyingTo} ${comment.content}`;
  } else {
    content.textContent = comment.content;
  }

  main.appendChild(header);
  main.appendChild(content);

  card.append(score);
  card.append(main);

  item.appendChild(card);

  if (comment.replies.length) {
    item.appendChild(createRepliesElement(comment.replies));
  }

  return item;
}

function createRepliesElement(replies) {
  const item = document.createElement('ol');
  item.className = 'replies';

  replies.forEach((reply) => {
    item.appendChild(createCommentElement(reply, { currentUser, isReply: true }));
  });

  return item;
}

getInitialData();
