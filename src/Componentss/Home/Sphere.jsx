import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const Sphere = () => {
  const sphereRef = useRef();

  // ...

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("scene-container").appendChild(renderer.domElement);

    // Create a sphere made of small random colored squares
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const color = new THREE.Color();
    const side = 30; // Adjust the size of the squares
    const numSquares = 1000;

    for (let i = 0; i < numSquares; i++) {
      const vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2 - 1;
      vertex.y = Math.random() * 2 - 1;
      vertex.z = Math.random() * 2 - 1;
      vertex.normalize().multiplyScalar(10);

      vertices.push(vertex.x, vertex.y, vertex.z);

      color.setRGB(Math.random(), Math.random(), Math.random());
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true, // Enable transparency
      opacity: 1.0, // Set the initial opacity
    });
      const sphere = new THREE.Points(geometry, material);
    sphereRef.current = sphere;
      scene.add(sphere);
      

    // Set camera position
    camera.position.z = 20;

    // Add orbit controls without zoom
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Mouse variables
    let mouseX = 0;
    let mouseY = 0;
      let isMouseDown = false;

    // Mousemove event listener
    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 + 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Mousedown event listener
    document.addEventListener("mousedown", () => {
      isMouseDown = true;
    });
      
      
       
      

    // Mouseup event listener
    document.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere around its own axis
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;

      // Move the sphere in response to mouse movement
      sphere.rotation.x += mouseY * 0.05;
      sphere.rotation.y += mouseX * 0.05;

      // Rotate the sphere on mousedown
      if (isMouseDown) {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      }
        
       

      renderer.render(scene, camera);
    };

    // GSAP animation
    gsap.to(sphere.rotation, {
      duration: 15,
      y: Math.PI * 2,
      repeat: -0.5,
      ease: "power1.inOut",
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

    // Clean up
    return () => {
     
       const sceneContainer = document.getElementById("scene-container");
       if (sceneContainer && sceneContainer.contains(renderer.domElement)) {
         sceneContainer.removeChild(renderer.domElement);
       }
    
    };
  }, []);

  // ...

    return (
      <>
        <div
          id="scene-container"
          style={{
            width: "100%",
            display: "flex",
            //   position: "absolute",
            marginRight: "100px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "996px", // Set the height to your desired size
            overflow: "hidden",
          }}
        />
         
        
      </>
    );
};

export default Sphere;
