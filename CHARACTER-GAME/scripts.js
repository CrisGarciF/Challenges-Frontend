const screens = document.querySelectorAll('.screen');
const choose_character_btns = document.querySelectorAll('.choose-character-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_character = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_character_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_character = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createCharacter, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createCharacter() {
    const character = document.createElement('div')
    character.classList.add('character')
    const { x, y } = getRandomLocation()
    character.style.top = `${y}px`
    character.style.left = `${x}px`
    character.innerHTML = `<img src="${selected_character.src}" alt="${selected_character.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    character.addEventListener('click', catchCharacter)

    game_container.appendChild(character)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchCharacter() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 200)
    addCharacter()
}

function addCharacter(){
    setTimeout(createCharacter, 1000)
    setTimeout(createCharacter, 1500)
}

function increaseScore() {
    score++
    if(score > 20){
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}