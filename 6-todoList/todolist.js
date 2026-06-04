const todolist = []
let todolistHTML = ''
rendertodolist()
function rendertodolist(){
    todolistHTML = ''
    todolist.forEach(function(todoobject, i){
        const {name,duedate} = todoobject
        const html = `
        <div class="todo-item">
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                todolist.splice(${i},1);
                rendertodolist();
            " class="delbtn">Delete</button>
        </div>
        `;
        todolistHTML+=html
        console.log(todolistHTML);
    })
    // for(let i = 0;i<todolist.length;i++){
    //     const todoobject = todolist[i]
    //     // const name = todoobject.name
    //     // const duedate = todoobject.duedate
    //     const {name,duedate} = todoobject
    //     const html = `
    //     <div class="todo-item">
    //         <div>${name}</div>
    //         <div>${duedate}</div>
    //         <button onclick="
    //             todolist.splice(${i},1);
    //             rendertodolist();
    //         " class="delbtn">Delete</button>
    //     </div>
    //     `;
    //     todolistHTML+=html
    //     console.log(todolistHTML);
        
    // }
    document.querySelector('.todolist').innerHTML = todolistHTML
} 
function addtodo(button){

    createBubbles(button);

    const input = document.querySelector('.jsinput');
    const date = document.querySelector('.jsduedate');

    if(input.value === '') return;

    todolist.push({
        name: input.value,
        duedate: date.value
    });

    input.value = '';
    date.value = '';

    rendertodolist();
}
function createBubbles(button){

    for(let i=0;i<18;i++){

        const bubble = document.createElement('span');
        bubble.classList.add('bubble');

        const size = Math.random()*18 + 8;

        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';

        bubble.style.background =
            `hsl(${Math.random()*360},100%,70%)`;

        bubble.style.left = '50%';
        bubble.style.top = '50%';

        bubble.style.setProperty('--x', `${(Math.random()-0.5)*300}px`);
        bubble.style.setProperty('--y', `${(Math.random()-0.5)*300}px`);

        button.appendChild(bubble);

        setTimeout(()=>bubble.remove(),1000);
    }
}

