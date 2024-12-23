import { Ui } from "./ui.module.js";

import { Details } from "./Details.module.js";

let activate = document.querySelectorAll(".nav-link");
export class Home {
  constructor() {
   this.detail = new Details();
    this.ui = new Ui();
    // this.details = new Details();
    this.loading = document.querySelector(".loading");
    
    //==========================
    //for activate li
    //==========================
    for (let i = 0; i < activate.length; i++) {
      activate[i].addEventListener("click", (e) => {
        document
          .querySelector(".navbar-nav .active")
          .classList.remove("active");
        activate[i].classList.add("active");
        const category = activate[i].getAttribute("data-category");
        this.getCategorygame(category);
      });
      //   this.ui.displaygames(req);
    }
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");
    //for first time
    this.getCategorygame("mmorpg");
  }
    
  //for api and category of games
  async getCategorygame(categ) {
    this.loading.classList.remove("d-none")
        
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c0c5f05affmsh4e99cd0942ebaf4p19837cjsn6f8b4794507b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let res = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`,
      options
    );
    let req = await res.json();
    this.loading.classList.add("d-none");
    console.log(req);
    this.ui.displaygames(req);
 
    let speceficCard = document.querySelectorAll(".cardy");

    for (let i = 0; i < speceficCard.length; i++) {
     
      speceficCard[i].addEventListener("click", (e) => {
        // console.log(e);
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
     
         this.detail.getDetails(speceficCard[i].dataset.id);
      })    // console.log(speceficCard);//node list of cards
      }
  }
}
