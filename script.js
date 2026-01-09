console.log("Welcome to Spotify");

// Initialize the variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Badri Ki Dulhania", filePath:"songs\\1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Tumhari Kasam", filePath:"songs\\2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Na Jaana", filePath:"songs\\3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Dil Diyan Gallan", filePath:"songs\\4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Love me Like You Do", filePath:"songs\\5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Let Me Love You", filePath:"songs\\6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Lut Gaye", filePath:"songs\\7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Pachtaoge", filePath:"songs\\8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Kahani Suno", filePath:"songs\\9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Maan Meri Jaan", filePath:"songs\\10.mp3", coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})