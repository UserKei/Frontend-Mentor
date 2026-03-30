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
  const list = document.createElement('ol');
  list.classList = 'comment__list';

  comments.forEach((comment) => {
    list.appendChild(createCommentElement(comment, { currentUser: data.currentUser }));
  });

  container.appendChild(list);
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

  const score__container = document.createElement('div');
  score__container.className = 'score__container';
  // score.textContent = comment.score;

  const score__plus = document.createElement('span');
  score__plus.className = 'score__plus';
  score__plus.textContent = '+';

  const score = document.createElement('span');
  score.className = 'score';
  score.textContent = comment.score;

  const score__minus = document.createElement('span');
  score__minus.className = 'score__minus';
  score__minus.textContent = '-';

  score__container.appendChild(score__plus);
  score__container.appendChild(score);
  score__container.appendChild(score__minus);

  const main = document.createElement('div');
  main.className = 'comment__main';

  const header = document.createElement('div');
  header.className = 'comment__header';

  const usermeta = document.createElement('div');
  usermeta.className = 'usermeta';

  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = comment.user.image.png;

  const username = document.createElement('span');
  username.className = 'username';
  username.textContent = comment.user.username;

  usermeta.appendChild(avatar);
  usermeta.appendChild(username);
  if (isCurrentUser) {
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

  const content__container = document.createElement('p');
  content__container.className = 'content__container';
  const content = document.createElement('span');
  content.textContent = comment.content;

  main.appendChild(header);
  if (isReply) {
    // content.textContent = `@${comment.replyingTo} ${comment.content}`;
    const replyingTo = document.createElement('span');
    replyingTo.textContent = `@${comment.replyingTo}`;
    replyingTo.className = 'replying-to';
    content__container.appendChild(replyingTo)
  }
  // main.appendChild(content);
  content__container.appendChild(content)
  main.appendChild(content__container)

  card.append(score__container);
  card.append(main);

  item.appendChild(card);

  if (comment.hasOwnProperty('replies') && comment.replies.length) {
    item.appendChild(createRepliesElement(comment.replies));
  }

  return item;
}

function createRepliesElement(replies) {
  const item = document.createElement('ol');
  item.className = 'replies';

  replies.forEach((reply) => {
    item.appendChild(createCommentElement(reply, { currentUser: data.currentUser, isReply: true }));
  });

  return item;
}

async function init() {
  await getInitialData();
  renderComments(data.comments);
}

init();
