console.log("Welcome to Spotify") 

// Initialize the Variables
let songIndex=0
let audioElement = new Audio('songs/1.mp3')
// console.log(audioElement);
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'));
// console.log(songItems)
let masterSongName=document.getElementById('masterSongName');
// console.log(masterSongName)


let time_of_music=["3:50","2:33","4:33","4:27","3:28","3:40","4:33","3:50","3:34","4:27"];

let songs =[
        {songName: " Music 001", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: " Music 002", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: " Music 003", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: " Music 004", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: " Music 005", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: " Music 006", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: " Music 007", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: " Music 008", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: " Music 009", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
        {songName: " Music 010", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

// songItems.forEach((element,i) =>{
//         console.log(element,i);
//         element.getElementsByTagName("img")[i].src = songs[i].coverPath;
//         // element.getElementsByClassName("songName")[i].innerHTML = songs[i].songName;
// })



// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity =1;
        }
        else{
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity =0;

        }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
        // console.log('timeupdate')
        // update seekbar 
        progress = parseFloat((audioElement.currentTime/audioElement.duration)*100)
        // console.log(progress);
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplays =() =>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                element.classList.remove('fa-pause-circle')
                element.classList.add('fa-play-circle')
                
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.addEventListener('click',(e)=>{
                makeAllplays();
                // console.log(e.target)
                let songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioElement.src= `songs/${songIndex}.mp3`;
                masterSongName.innerText=songs[songIndex-1].songName; 
                // console.log(audioElement)
                audioElement.currentTime=0;
                audioElement.play();
                gif.style.opacity=1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                
                
        })
})

document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>9){
                songIndex = 0;
        }
        else{
                songIndex +=1;
        }
        audioElement.src= `songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<0){
                songIndex = 9;
        }
        else{
                songIndex -=1;
        }
        audioElement.src= `songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})