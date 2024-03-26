const gitHubApi = "https://api.github.com/users/";
const username = "siva3712";
var url = gitHubApi + username;
console.log(url);

async function getUserDetails() {
    const search = document.getElementById("search").value;
    if(search)
    {
        url = gitHubApi + search;
    }
   try {
       const response = await fetch(url);
       const data = await response.json();
       if(data)
       {
           createUserCard(data);
       }
   } catch(error) {
       console.log(error);
   } 
}

function createUserCard(data) {
    return document.getElementById("user-details").innerHTML = `
    <div class="card w-50 mx-auto mt-5">
    <img src="${data.avatar_url}" class="card-img-top rounded-circle" alt="${data.name}">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.bio}</p>
    </div>
  </div>`;
}

getUserDetails();