window.addEventListener("load", solve);

function solve() { 
  let authorInformation = document.querySelectorAll('.inner-wrap label input[type=text]');
  let authorAge = document.getElementById('age');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');
  let previewList = document.getElementById('preview-list');
  
  publishBtn.addEventListener('click', scaryStory);

  function scaryStory() {
  debugger;
  let inputFields = [];
  for (const input of authorInformation) {
    inputFields.push(input.value);
  };


  if(inputFields.some(x => x === '') || story.value === '' || authorAge.value === '') {
    return;
  };

  publishStory();

  function publishStory() {
    debugger;
    let li = document.createElement('li');
    li.classList.add('story-info');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    

    h4.textContent = `Name: ${authorInformation[0].value} ${authorInformation[1].value}`;
    article.appendChild(h4);

    paragraphs(authorAge.value, authorInformation[2].value, genre.value, story.value);

    function paragraphs(age, title, genre, story) {
      let pAge = document.createElement('p');
      let pTitle = document.createElement('p');
      let pGenre = document.createElement('p');
      let pStory = document.createElement('p');
      
      pAge.textContent = `Age: ${age}`;
      pTitle.textContent = `Title: ${title}`;
      pGenre.textContent = `Genre: ${genre}`;
      pStory.textContent = story;

      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStory);
      }

      li.appendChild(article);

      let saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save Story';
      saveBtn.classList.add('save-btn');
      saveBtn.addEventListener('click', saveButton);
      li.appendChild(saveBtn);

      let editBtn = document.createElement('button');
      editBtn.textContent = 'Edit Story';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', editButton)
      li.appendChild(editBtn);

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', deleteButton);
      li.appendChild(deleteBtn);

      clearInputFields();

      function clearInputFields() {
        for (const input of authorInformation) {
          input.value = '';
        };

        authorAge.value = '';
        story.value = '';
      }
      previewList.appendChild(li);
      publishBtn.disabled = true;


      function editButton() {
        debugger;
        let [redundant, firstName, lastName] = document.getElementsByTagName('h4')[0].textContent.split(' ');
        let paragraphs = document.querySelectorAll('article p');
        let [str, age] = paragraphs[0].textContent.split(' ');
        let [smt, title] = paragraphs[1].textContent.split(' ');
        let [kd, genreVa] = paragraphs[2].textContent.split(' ');
        let storyVa = paragraphs[3].textContent;
      
        authorInformation[0].value = firstName;
        authorInformation[1].value = lastName;
        authorInformation[2].value = title;
        authorAge.value = age;
        genre.value = genreVa;
        story.value = storyVa;

        let li = document.getElementsByClassName('story-info')[0];
        li.remove();
      }

      function deleteButton() {
        let li = document.getElementsByClassName('story-info')[0]
        li.remove();
        publishBtn.disabled = false;
      }

      function saveButton() {
        debugger;
        let mainPage = document.getElementById('main');
        let infoPanel = document.getElementsByClassName('form-wrapper')[0];
        let sidePanel = document.getElementById('side-wrapper');

        infoPanel.remove();
        sidePanel.remove();

        let h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        mainPage.appendChild(h1);
    }
    }
  }


  }
