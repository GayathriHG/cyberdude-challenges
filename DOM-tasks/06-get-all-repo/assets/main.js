const gitEl = document.querySelector("#git");
// console.log(gitEl);
const interns = [
  "GayathriHG",
  "Jeya-rosini",
  "kishorekumar-kp",
  "Vk2401",
  "yrd369",
  "muthukumarimoorthi",
  "vedhatech002",
  "Bearcin46",
  "mshajid",
  "sharif-22",
  "Mushkir",
  "MUTHUAKALYA",
  "esakki2104prsnl",
  "SuriyaMassMsd",
  "Riyaz1000",
  "Hema-venkat3",
  "dineshdevelope",
  "danielace1",
  "SwethaDSalvatore",
];




    
interns.forEach((name) => {
    const api = `https://api.github.com/users/${name}`;
    // console.log(api);
  
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const spanEl = document.createElement("span");
        spanEl.innerHTML = `<div class="border p-6  rounded bg-white">
  <img src="${data.avatar_url}" alt="profile image" class="w-12 h-12 rounded-full" id="image">
  <h4 class="mt-2" id="name">${data.name}</h4>
  <button class="bg-red-300 hover:bg-red-400 cursor-pointer rounded px-2 py-1 mt-2" id="button"><a href="${data.repos_url}" target="blank"> View Repositories</a></button>
  <button class="bg-red-300 hover:bg-red-400 cursor-pointer rounded px-2 py-1 mt-2" id="button"><a href="${data.html_url}" target="blank"> View Profile</a></button>

  </div>`;
        gitEl.append(spanEl);
      });
  });

