//typewriter
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['software developer', 'programmer',  'designer'],
    autoStart: true,
    loop: true,
  });

  //text sphere

  const myTags = [
    'JavaScript', 'CSS', 'HTML', 'C++','Java', 'git','Node.js', 'MySQL', 'jQuery', 'Gimp','Figma','Php','Mongodb'
];
  
var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

}); 

document.getElementById("myButton").onclick = function () {
  location.href = "https://drive.google.com/file/d/1Y0GQ0OV0Xgie5GYfEAEbnUQX3NX_JmmY/view?usp=sharing";
};

document.getElementById("myButton2").onclick = function () {
  document.getElementById('contactID').scrollIntoView();
};
