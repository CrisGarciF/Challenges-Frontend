const sound = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sound.forEach(sounds => {
    const btn =  document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds

    btn.addEventListener('click', () => {
        stopSong()

        document.getElementById(sounds).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSong() {
    sound.forEach(sounds => {
        const song = document.getElementById(sounds)

        song.pause()
        song.currentTime = 0;
    })
}