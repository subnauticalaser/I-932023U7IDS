

function make() {
    const u = document.createElement('audio')
    const k = 'https://github.com/subnauticalaser/I-932023U7IDS/raw/main/fartbumtrumpetpoop-99028.mp3';
    const j = '';
    const t = k + j;
    u.src = t;
    u.id = 'PoopSoundPlayer499';
    u.setAttribute('type', 'audio/mp3')
    document.body.appendChild(u);
}

function play() {
    const player = document.getElementById('PoopSoundPlayer499');
    player.setAttribute('type', 'audio/mp3')
    player.play();
}


function make2() {
    const u = document.createElement('audio')
    const e = 'https://github.com/subnauticalaser/I-932023U7IDS/raw/main/goodresult-82807.mp3';
    const y = '';
    u.src = e;
    u.id = 'GoodSoundPlayer899KR';
    u.setAttribute('type', 'audio/mp3');
    document.body.appendChild(u);
}


function play2() {
    const player = document.getElementById('GoodSoundPlayer899KR')
    player.play();
}



make2()
make()

document.getElementById('submit-answer').addEventListener('click', function() {
    const correct = document.querySelector('.task-body .responses .response.success ');
    const incorrect = document.querySelector('.wrong response');

    ID = setInterval(function(){
        console.log(correct.style.display)
        if (correct.style.display === 'block') {
            play2()
        } else {
            play()
        }
        clearInterval(ID)
    }, 1000)
})
