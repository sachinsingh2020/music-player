let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3"); ''
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gifImage = document.getElementById('gifImage');
let songs = [
    { songName: "Ek Tarfa Reprise", filePath: "./songs/1.mp3", coverPath: "./covers/1.png", timeDuration: "03:56" },
    { songName: "Ek Vari Aa", filePath: "./songs/2.mp3", coverPath: "./covers/2.png", timeDuration: "04:34" },
    { songName: "Phir Wahi", filePath: "./songs/3.mp3", coverPath: "./covers/3.png", timeDuration: "04:13" },
    { songName: "Qaafirana", filePath: "./songs/4.mp3", coverPath: "./covers/4.png", timeDuration: "05:41" },
    { songName: "Sau Aasman", filePath: "./songs/5.mp3", coverPath: "./covers/5.png", timeDuration: "03:54" },
    { songName: "Tenu Na Bol Pawaan", filePath: "./songs/6.mp3", coverPath: "./covers/6.png", timeDuration: "04:55" },
    { songName: "Mere Liye Tum Kafi Ho", filePath: "./songs/7.mp3", coverPath: "./covers/7.png", timeDuration: "02:12" },
]

// MIDDLE CONTAINER FUNCTIONALITY 
















// BOTTOM DIV FUNCTIONALITY 

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gifImage.src = "playing.gif";
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gifImage.src = "playing2.png";

    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log(parseInt(audioElement.currentTime));
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})