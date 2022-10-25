let audioElement = new Audio("./songs/1.mp3"); ''
// audioElement.play();
let mainSongIndex = 0;
let totalSongs = 7;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gifImage = document.getElementById('gifImage');
let secondColImage = document.getElementById('secondColImage');
let musicName = document.getElementById('musicName');
let songs = [
    { songIndex: 0, songName: "Ek Tarfa Reprise", filePath: "./songs/1.mp3", coverPath: "./covers/1.png", timeDuration: "03:56" },
    { songIndex: 1, songName: "Ek Vari Aa", filePath: "./songs/2.mp3", coverPath: "./covers/2.png", timeDuration: "04:34" },
    { songIndex: 2, songName: "Phir Wahi", filePath: "./songs/3.mp3", coverPath: "./covers/3.png", timeDuration: "04:13" },
    { songIndex: 3, songName: "Qaafirana", filePath: "./songs/4.mp3", coverPath: "./covers/4.png", timeDuration: "05:41" },
    { songIndex: 4, songName: "Sau Aasman", filePath: "./songs/5.mp3", coverPath: "./covers/5.png", timeDuration: "03:54" },
    { songIndex: 5, songName: "Tenu Na Bol Pawaan", filePath: "./songs/6.mp3", coverPath: "./covers/6.png", timeDuration: "04:55" },
    { songIndex: 6, songName: "Mere Liye Tum Kafi Ho", filePath: "./songs/7.mp3", coverPath: "./covers/7.png", timeDuration: "02:12" },
]

// MIDDLE CONTAINER FUNCTIONALITY 
let songsList = document.querySelector('.songsList');
songs.forEach((song) => {
    songsList.innerHTML += `   <div class="songInfo">
    <div class="songsName">${song.songName}</div>
    <div class="durationPlay">
        <div class="songDuration">${song.timeDuration}</div>
        <i class=" songPlay fa-regular fa-circle-play" id=${song.songIndex}></i>
    </div>
</div>`
})

let songPlay = document.querySelectorAll('.songPlay');
const makeAllPlay = () => {
    songPlay.forEach((e) => {
        e.classList.remove("fa-circle-pause");
        e.classList.add("fa-circle-play");
    })
}
let lock = -1;
songPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList.contains("fa-circle-pause")) {
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            audioElement.pause();
            lock = e.target.id;
            gifImage.src = "playing2.png";

        }
        else {
            if (lock == e.target.id) {
                audioElement.play();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                gifImage.src = "playing.gif";
            }
            else {
                makeAllPlay();
                mainSongIndex = parseInt(e.target.id);
                // console.log(songId);
                audioElement.src = songs[mainSongIndex].filePath;
                secondColImage.src = songs[mainSongIndex].coverPath;
                musicName.innerText = songs[mainSongIndex].songName;
                e.target.classList.remove("fa-circle-play");
                e.target.classList.add("fa-circle-pause");
                audioElement.play();
                gifImage.src = "playing.gif";
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                mainSongIndex = songId;

                lock = 0;
            }
        }

    })
})

// NEXT BUTTON 
let forwardButton = document.getElementById('forwardButton');
forwardButton.addEventListener('click', (e) => {
    let previousIndex = mainSongIndex;
    if (mainSongIndex < totalSongs - 1)
        mainSongIndex += 1;
    else
        mainSongIndex = 0;
    audioElement.src = songs[mainSongIndex].filePath;
    audioElement.play();
    secondColImage.src = songs[mainSongIndex].coverPath;
    document.getElementById(previousIndex).classList.remove('fa-circle-pause');
    document.getElementById(previousIndex).classList.add('fa-circle-play');
    document.getElementById(mainSongIndex).classList.remove('fa-circle-play');
    document.getElementById(mainSongIndex).classList.add('fa-circle-pause');
})

// PREVIOUS BUTTON 
let previousButton = document.getElementById('backwardButton');
previousButton.addEventListener('click', (e) => {
    let previousIndex = mainSongIndex;
    if (mainSongIndex == 0)
        mainSongIndex = totalSongs - 1;
    else
        mainSongIndex -= 1;

    audioElement.src = songs[mainSongIndex].filePath;
    audioElement.play();
    secondColImage.src = songs[mainSongIndex].coverPath;
    document.getElementById(previousIndex).classList.remove('fa-circle-pause');
    document.getElementById(previousIndex).classList.add('fa-circle-play');
    document.getElementById(mainSongIndex).classList.remove('fa-circle-play');
    document.getElementById(mainSongIndex).classList.add('fa-circle-pause');
})


// BOTTOM DIV FUNCTIONALITY 

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById(mainSongIndex).classList.remove('fa-circle-play');
        document.getElementById(mainSongIndex).classList.add('fa-circle-pause');
        gifImage.src = "playing.gif";
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        document.getElementById(mainSongIndex).classList.remove('fa-circle-pause');
        document.getElementById(mainSongIndex).classList.add('fa-circle-play');
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

