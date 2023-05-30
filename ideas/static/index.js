const mainDiv = document.querySelector("#ideas");
const addbtn = document.querySelector(".addingbutton");

const getIdeas = async () => {
  const res = await fetch("allideas");
  const data = await res.json();
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  let data = await getIdeas();
  // console.log(data)
  data.forEach((i) => {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 col-sm-12";
    div.innerHTML = `
    <div class="idea-card mb-3">
    <div class="card-body" id="id${i.pk}">
    <h5 class="card-title">${i.fields.title}</h5>
    <p class="card-text">${i.fields.description}</p>
    <p class="card-created card-link">${i.fields.created_at.slice(0, 10)}</p>
      <p class="card-user card-link">${i.fields.user}</p>
      </div>
      </div>`;
    mainDiv.appendChild(div);
  });
  data.forEach((j) => {
    let deletebutton = document.createElement("button");
    deletebutton.className = "deletebutton";
    deletebutton.innerHTML = "X";
    let ideaid = document.querySelector(`#id${j.pk} h5`);
    deletebutton.className += ` id${j.pk}`;
    ideaid.appendChild(deletebutton);
  });
});

addbtn.addEventListener("click", () => {
  // let div = document.createElement("div");
  let formdiv = document.querySelector(".addform");
  formdiv.style.display = "flex"
  let form = document.querySelector("#addideaform");
  let hidediv = document.querySelector(".hidediv")
  // div.className = "addform";
  form.style.display = "flex";
  hidediv.innerHTML = `<div id="formdiv"
    <div class="mb-3">
    <label for="ideatitle" class="form-label">Idea Title</label>
    <input type="text" name="title" class="form-control" id="ideatitle" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
    <label for="ideadesc" class="form-label">Idea Description</label>
    <textarea type="text" name="description" class="form-control" id="ideadesc"></textarea>
    </div>
    <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
  </div>`;
  // form.appendChild(div);
  formdiv.addEventListener("click", (event) => {
    if (event.target.tagName == "DIV") {
      formdiv.style.display = "none";
    }
  });
});
