const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
      let list = document.getElementById("ul");
      for (i = 0; i < myArray.length; ++i) {
         var li = document.createElement('li');
         li.innerText = myArray[i];
         list.appendChild(li);
      }