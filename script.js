//your JS code here. If required.
  window.addEventListener("resize" , updateSize);

function updateSize(){
	let width = window.innerWidth;
	let height = window.innerHeight;
	let changeSize= document.getElementById("sizeInfo");
	changeSize.textContent = `Width: ${width} and Height: ${height}`;
}
updateSize();