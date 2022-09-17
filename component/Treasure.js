// Registering component in Treasure.js

AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        const id = `coin${i}`;
  
        //position variables     
        const posX = Math.random() * 100 + -50;      
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
  
        const position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    },
  
    createCoins: function (id, position) { 
      
      const treasureEntity = document.querySelector("#treasureCoins");
  
      var coinEL = document.createElement("a-entity");
  
      coinEL.setAttribute("id", id);
      birdEL.setAttribute("position", position);
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });  

      //animated models 
      coinEL.setAttribute("animation", { property: "rotation", to: "0 360 0", loop: "true", dur: 1000 });
      
      coinEL.setAttribute("static-body", { shape: "sphere", sphereRadius: 2 });
      coinEL.setAttribute("game-play", {elementId: `#${id}`});

      treasureEntity.appendChild(coinEL);
    }
  });
  
  