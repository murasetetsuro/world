function top(){
 var y = document.body.scrollTop || document.documentElement.scrollTop;
 var speed = 1;
 if(y > 0){
  y = y / 1.1;
  window.scrollTo(0,y);
  setTimeout("top()",speed);
  }//yが0になるまで繰り返す
};

