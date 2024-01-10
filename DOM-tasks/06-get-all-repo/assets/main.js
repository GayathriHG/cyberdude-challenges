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

// interns.forEach(username => {
//     // console.log(name);

//     const api=`https://api.github.com/users/${username}/repos`;
//     console.log(api);

// });

// const imageEl=document.querySelector("#image");
// document

interns.forEach((name) => {
  const api = `https://api.github.com/users/${name}`;
  // console.log(api);

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const spanEl = document.createElement("div");
      spanEl.innerHTML = `<div class="border p-6  rounded">
<img src="${data.avatar_url}" alt="profile image" class="w-24 h-24 rounded-full" id="image">
<h4 class="mt-2" id="name">${data.name}</h4>
<button class="bg-white hover:bg-slate-300 cursor-pointer rounded px-2 py-1 mt-2" id="button"><a href="${data.repos_url}"> View Repositories</a></button>
</div>`;
      gitEl.append(spanEl);
    });
});