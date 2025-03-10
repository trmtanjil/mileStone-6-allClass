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

const putbutton=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}