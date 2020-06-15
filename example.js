const cors = "https://cors-anywhere.herokuapp.com/";

function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }

      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        .map((user) => {
          return `
            <div class="user">
                <p><img src="${user.avatar}" alt="fisrt name"/></p>
                <p>Name: ${user.first_name}  ${user.last_name}</p>
                <p>Email: ${user.email}</p>
            </div>
        `;
        })
        .join("");
      console.log(html);

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();

function postData() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

postData();
