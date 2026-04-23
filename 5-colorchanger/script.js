const randomcolor = function(){


  let color = "#"
  const hex = "0123456789ABCDEF"
  for(let i = 0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
};
  let interval;
  const startchangingcolor = function(){
    interval = setInterval(getinterval,1000)
    function getinterval(){
      document.body.style.backgroundColor = randomcolor();
    }
  }
  const stopchangingcolor = function(){
    clearInterval(interval);
  }
  document.querySelector('#start').addEventListener('click',function(){
    startchangingcolor()
  })
  document.querySelector('#stop').addEventListener('click',function(){
    stopchangingcolor()
  })