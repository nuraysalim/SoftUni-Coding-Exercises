window.addEventListener("load", solve);

function solve() {
 document.getElementById('publish-btn').addEventListener('click', createPost);
 document.getElementById("clear-btn").addEventListener('click', clearPost);
 let title = document.getElementById("post-title");
 let category = document.getElementById("post-category");
 let content = document.getElementById("post-content");
 let reviewSection = document.getElementById("review-list");
 let approvedSection = document.getElementById("published-list");

  function createPost() {
   let titleValue = title.value;
   let categoryValue = category.value;
   let contentValue = content.value;

    if(!titleValue || !categoryValue || !contentValue) {
    return;
    }

    createDOMElements(titleValue, categoryValue, contentValue);
    clearFormField();
  }

  function clearFormField() {
    title.value = '';
    category.value = '';
    content.value = '';
  }

  function createDOMElements(titleValue, categoryValue, contentValue) {
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = createArticle(titleValue, categoryValue, contentValue);

    let editButton = document.createElement('button');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editPost);


    let approveButton = document.createElement('button');
    approveButton.classList.add('action-btn');
    approveButton.classList.add('approve');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click', approvePost);

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);
    reviewSection.appendChild(li);
  }


  function createArticle(titleValue, categoryValue, contentValue) {
    let article = document.createElement('article');
    let h = document.createElement('h4');
    h.textContent = titleValue;

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryValue}`;

    let contentP = document.createElement('p');
    contentP.textContent = `Content: ${contentValue}`;

    article.appendChild(h);
    article.appendChild(categoryP);
    article.appendChild(contentP);

    return article;
  }

  function editPost(e) {
    let currentPost = e.target.parentElement;
    let article = currentPost.getElementsByTagName('article')[0].children;

    let titleValue = article[0].textContent;
    let categoryValue = article[1].textContent;
    let contentValue = article[2].textContent;

    title.value = titleValue;
    category.value = categoryValue.split(': ')[1];
    content.value = contentValue.split(': ')[1];
    currentPost.remove();
  }


  function approvePost(e) {
    let currentPost = e.target.parentElement;
    Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove());
    approvedSection.appendChild(currentPost);

  }

  function clearPost() {
    Array.from(approvedSection.children).forEach(li => li.remove());
  }
}
