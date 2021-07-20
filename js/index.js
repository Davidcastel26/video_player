 const $video = document.querySelector('#video');
 const $play = document.querySelector('#play');
 const $pause = document.querySelector('#pause');
 const $backward = document.querySelector('#backward');
 const $forward = document.querySelector('#forward');

 $play.addEventListener('click', handlePlay );
 $pause.addEventListener('click', handlePause );

 function handlePlay() 
 { 
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('done');
 }
 function handlePause() 
 { 
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('pause');
 }

 
$backward.addEventListener('click', handleBackward)

function handleBackward(){
   // $video.currentTime = $video.currentTime - 10;
   $video.currentTime -= 10;
   console.log('para atras 10 sec',$video.currentTime);
}


$forward.addEventListener('click',handleForward)

function handleForward() {
   // $video.currentTime = $video.currentTime + 10;
   $video.currentTime += 10;
   console.log('para delante 10 sec', $video.currentTime);
}

const $progress = document.querySelector("#range");

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handletimeupdate);

function handleLoaded(){
   $progress.max = $video.duration;
   console.log('ha cargado mi video', $video.duration);
}
function handletimeupdate(){
   $progress.value = $video.currentTime;
   console.log('holi', $video.currentTime);
}

$progress.addEventListener('input', handleinput);

function handleinput() {
   $video.currentTime = $progress.value;
   console.log("estoy ", $progress.value);
}