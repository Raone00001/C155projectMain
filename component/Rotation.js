//Diver Rotation
  AFRAME.registerComponent("diver-rotation-reader",{
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfMovement: {type: "number", default: 0}   
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation = this.el.getAttribute("rotation")
        this.data.speedOfMovement = this.el.getAttribute("position")
  
        var diver_rotation = this.data.speedOfRotation
        var diver_position = this.data.speedOfMovement
  
        if (e.key === "ArrowRight"){
          if (diver_rotation.y > -360) {
            diver_rotation.x -= 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
          if (diverPosition.x < 20) {
            diverPosition.x += 0.05;
            this.el.setAttribute("position", diver_position);
          }
        }
  
        if (e.key === "ArrowLeft"){
          if (diver_rotation.y < 360) {
            diver_rotation.x += 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
          if (diverPosition.x > -20) {
            diverPosition.x -= 0.05;
            this.el.setAttribute("position", diver_position);
          }
        }
  
        if (e.key === "ArrowUp"){
          if (diver_rotation.z > -10) {
            diver_rotation.z -= 0.1
            this.el.setAttribute("rotation", diver_position)
          };
        }
  
        if (e.key === "ArrowDown"){
          if (diver_rotation.z < 20) {
            diver_rotation.z += 0.1
            this.el.setAttribute("position", diver_position)
          };
        }
  
      })
    }
  })
  
  
  