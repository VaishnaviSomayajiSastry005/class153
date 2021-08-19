//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRoation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

//Plane Rotation
AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 } ,
    speedOfAscent:{type:"number", default:0 }   
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRoation=this.el.getAttribute("rotation")
      this.data.speedOfAscent=this.el.getAttribute("position")
      var planeRotation=this.data.speedOfRoation
      var planePosition=this.data.speedOfAscent
      if (e.key === "ArrowRight") {
        if (planeRoation.x < 10) {
            planeRoation.x += 0.5;
            this.el.setAttribute("rotation",planeRotation)
        }
      }
      
      if (e.key === "ArrowLeft") {
        if (planeRoation.x >-10) {
            planeRoation.x -= 0.5;
            this.el.setAttribute("rotation",planeRotation)
        }

      }
      if (e.key === "ArrowUp") {
        if (planeRoation.z <20) {
            planeRoation.z += 0.5;
            this.el.setAttribute("rotation",planeRotation)
        }

        if (planePosition.y <2){
          planePosition.y +=0.01
          this.el.setAttribute("position",planePosition)
        }      
      }

      if (e.key === "ArrowDown") {
        if (planeRoation.z >-10) {
            planeRoation.z -= -0.5;
            this.el.setAttribute("rotation",planeRotation)
        }

        if (planePosition.y >-2){
          planePosition.y -=0.01
          this.el.setAttribute("position",planePosition)
        } 
      }     
    });

  },
  
});



