const handlpost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(selt => selt.json())
    .then(data =>{
        // console.log(data);
        subtractFung(data);
    })
}

const subtractFung = (getPosts)=>{
    const postDisplayy=   document.getElementById('postDisplay')
    for(let getPost of getPosts){
     console.log(getPost.body);
    const div = document.createElement('div');
    div.classList.add('card');
     div.innerHTML=`
     <h1>${getPost.title}</h1>
     <p>${getPost.body}</p>
    <button>Details</button>
     `;
     postDisplayy.appendChild(div)
    }
}
handlpost()