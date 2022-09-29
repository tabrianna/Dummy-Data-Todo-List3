    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
    {
        "userId": ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        "id": 3,
        "title": "clear",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        // console.log('title', arrayOfTodos[0].title)
        //loop over the arrayofTodos
        for (let i = 0; i < arrayOfTodos.length; i++) {
             console.log('heres a todo!', arrayOfTodos[i].title);
        //for each Todo, create an LI element, //createElement to make a new LI
        // Create element:
            const list = document.createElement("li");
            //Now append the text to the new element
            list.innerHTML = arrayOfTodos[i].title;

       //append the LI to the OL //grab OL by ID, //Then append the element to the ol element.
            document.getElementById("todo-list").appendChild(list); 
          }


          const clearTodos = () => {
            console.log(arrayOfTodos)
            for (let i = 0; i < 10; i++) {
          }
    }