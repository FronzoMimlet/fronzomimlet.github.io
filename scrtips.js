
window.addEventListener("load", (event) => {
  // Used for waiting until contentToLoad has loaded until its displayed
  try{
    console.log("content loaded");
    document.getElementById("loadingIndicator").style.display="none";
    document.getElementById("contentToLoad").style.display="block";
  }catch{
    console.log("No loadable content to wait on, skipping...")
  }
  
});