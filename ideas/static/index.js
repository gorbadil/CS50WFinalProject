const mainDiv = document.querySelector("#ideas");
const addbtn = document.querySelector(".addingbutton");

const getIdeas = async () => {
  const res = await fetch("allideas");
  const data = await res.json();
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  let data = await getIdeas();
  console.log(data);
  data.forEach((i) => {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 col-sm-12";
    div.innerHTML = `
        <div class="card border-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">${i.fields.title}</h5>
                <p class="card-text">${i.fields.description}</p>
                <p class="card-created card-link">${i.fields.created_at.slice(
                  0,
                  10
                )}</p>
                <p class="card-user card-link">${i.fields.user}</p>
            </div>
        </div>`;
    mainDiv.appendChild(div);
  });
});

addbtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "addform";
  div.innerHTML = `<form id="addideaform">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  document.body.appendChild(div);
  div.addEventListener("click", (event) => {
    if (event.target.tagName == "DIV") {
      div.style.display = "none";
    }
  });
});
