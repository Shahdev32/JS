// let url = "https://icanhazdadjoke.com/";

// fetch(url, {
//     headers: {
//         Accept: "application/json"
//     }
// })
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("Joke 1:", data.joke);
//     return fetch(url, {
//         headers: {
//             Accept: "application/json"
//         }
//     });
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Joke 2:", data2.joke);
// })
// .catch((err) => {
//     console.log("Error:", err);
// });

// console.log("I am happy");



// let url = "https://icanhazdadjoke.com/";

// async function getFacts() {
//     try {
//         let res = await fetch(url, {
//             headers: {
//                 Accept: "application/json"
//             }
//         });

//         let data = await res.json();
//         console.log(data.joke);

//     } catch (err) {
//         console.log("error:", err);
//     }
// }

// getFacts();





// axios


// let btn = document.querySelector("button");
// let p = document.querySelector("#result");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     p.innerText = fact;
// });

// let url = "https://icanhazdadjoke.com/";

// async function getFacts() {
//     try {
//         let res = await axios.get(url, {
//             headers: {
//                 Accept: "application/json"
//             }
//         });

//         return res.data.joke; //  return joke
//     } catch (err) {
//         console.log("error:", err);
//         return "No joke found";
//     }
// }
     


// we can send header in axios
// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {
//             headers: {
//                 Accept: "application/json"
//             }
//         };

//         let res = await axios.get(url, config);
//         console.log(res.data.joke); // ✅ print joke
//     } catch (err) {
//         console.log(err);
//     }
// }

// getJokes();
    




// activity using query string 
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log("Searching for:", country);

//     let colArr = await getColleges(country);
//     show(colArr);
// });

// // This is the function that was missing from the screenshot
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (e) {
//         console.log("Error:", e);
//         return [];
//     }
// }

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = ""; // Clears previous results
    
//     for (let col of colArr) {
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

