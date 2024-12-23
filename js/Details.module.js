import { Ui } from "./ui.module.js";

export class Details {
  constructor() {

    // let clos = document.getElementById("btnclose");
         document.getElementById("btnclose").addEventListener("click", () => {
           document.getElementById("details").classList.add("d-none");
           document.getElementById("games").classList.remove("d-none");
       
         });
          
          this.loading = document.querySelector(".loading");
     
}

  async getDetails(id) {
    const optionss = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c0c5f05affmsh4e99cd0942ebaf4p19837cjsn6f8b4794507b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
      };
    let ress = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      optionss
    );
    let reqq = await ress.json();
      // console.log(reqq);

    const display =new Ui()
          display.displayDetails(reqq);
    this.loading.classList.add("d-none");
    
  }
  
}


