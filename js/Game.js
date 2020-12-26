AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elemntId) {
      const element = document.querySelector(elemntId);
      element.addEventListener("collide", e => {
        if (elemntId.includes("#coin")) {
          element.setAttribute("visible", false);
          console.log("ring collision");
          
        }
        if(elementId.includes("#fish")){
          console.log("fish collision");
        }         
      });
    }
    
  });
  