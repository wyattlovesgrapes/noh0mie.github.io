let inputImg;
let img;
let counter = 1;
let winWidth = 1280;
let winHeight = 720;
let numColor = 255;

function setup() {
  //Create canvas
  background(255);
  createCanvas(winWidth, winHeight);
  //Setup image input button
  inputImg = createFileInput(handleFile);
  inputImg.position(200, 0);
  
  //Set app title
  textSize(10);
  fill(0);
  text("happy little counter :) ", 10, 34);
}

function draw() {
  //Make buttons 
  fill(237, 146, 26);
  rect(0, 0, 100, 20);
  rect(100, 0, 100, 20);
  //Make button text
  textSize(10);
  fill(255);
  text("load/redraw", 10, 12); 
  text("switch color", 110, 12);
  
 
}

function handleFile(file) {
  print(file);
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
  } else {
    img = null;
  }
}

function mouseClicked() {
  if (mouseY > 20) {
    textSize(20);
    fill(numColor);
    text(counter, mouseX, mouseY);
    counter++;
    console.log(counter);
  }
  if (mouseY < 20 && mouseX < 100) {
    drawImage();
    counter = 1;
    console.log("button01 clicked");
  }
  if (mouseY < 20 && mouseX < 200 && mouseX > 100) {
     console.log("button02 clicked");
    if (numColor == 255) {
      numColor = 0;
      console.log(numColor);
    } else if (numColor == 0){
      numColor = 255;
      console.log(numColor);
    }
  }
}

function drawImage() {
  background(255);
  textSize(10);
  fill(0);
  text("happy little counter :) ", 10, 34);
  if (img) {
    if (img.height > 648 || img.width > 1152) {
      constructImg(img.width * 0.85, img.height * 0.85);
      state = 0;
    } else {
      constructImg(img.width, img.height);
      state = 0;
    }
  }
}

function constructImg(imgW, imgH) {
  image(
    img,
    winWidth / 2 - imgW / 2,
    winHeight / 2 - imgH / 2 + 20,
    imgW,
    imgH
  );
}
