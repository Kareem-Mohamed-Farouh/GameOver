let gemedata = document.getElementById("gameData");
import { Details } from "./Details.module.js";
let details = new Details();
export class Ui {
  constructor() {}

  displaygames(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
        <div  data-id="${data[i].id}"  class=" cardy  col-md-6 col-sm-12 col-lg-4 col-xl-3  px-3 ">
            <div class="card col-12  h-100 bg-transparent text-white position-relative">
        <div class="p-1 d-flex flex-column  h-100 ">
            <div class="card-body   ">
            <img src="${data[i].thumbnail}"
           class="card-img-top " alt="...">
            <div class="d-flex pt-2 justify-content-between ">
            <h5 class="game-title fw-normal ">${data[i].title}</h5>
            <h5 class="game-free btn btn-primary px-2 py-1">Free</h5>
            </div>
            <p class="game-info  pt-2 pb-0 text-center">${data[i].short_description}</p>
        </div>
        <div class="card-footer  d-flex justify-content-between">
            <small class=" bg-success  px-2  h rounded-3 d-inline-block ">${data[i].genre}</small>
            <small class=" bg-danger   px-2 h   rounded-3 d-inline-block ">${data[i].platform}</small>
        </div>
        </div>

    </div>
            </div>

        `;
    }
    gemedata.innerHTML = cartona;
  }

  displayDetails(data) {
    const cartonaeldetails = `
        <div class="col-md-4">
            <div class="img-detail">
                <img src="${data.thumbnail}" class="w-100 rounded-1" alt="thumbnail">
            </div>
        </div>
        <div class="col-md-8">
            <div>
             <h3 class="h2">Title: ${data.title}</h3>
             <p>Category: <span class="smalll bg-success p-1 rounded-2">${data.genre}</span></p>
             <p>Platform: <span class="smalll bg-info p-1 rounded-2" >${data.platform}</span></p>
             <p>Status:  <span class="smalll bg-danger p-1 rounded-2">${data.status}</span></p>

             <p class="game-details">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href= "${data.game_url}">Show Game</a>

        </div>
        </div>
   `;
      document.getElementById("detal").innerHTML = cartonaeldetails;
    
     
    }
}

