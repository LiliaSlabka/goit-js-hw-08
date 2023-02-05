import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player')


const player = new Player(iframe);

videoTimer() 

player.on('timeupdate', throttle(onPlay,1000))

function onPlay (event) {
    console.log(event.seconds)
    localStorage.setItem('videoplayer-current-time', event.seconds);
}
 
function videoTimer() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
       player.setCurrentTime(savedTime)
    }
}
