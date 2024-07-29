const content = document.querySelectorAll('.content')
const listItem = document.querySelectorAll('nav ul li')

listItem.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContent()
        hideAllItem()

        item.classList.add('active')
        content[idx].classList.add('show')
    })
})

function hideAllContent() {
    content.forEach(content => content.classList.remove('show'))
}

function hideAllItem() {
    listItem.forEach(item => item.classList.remove('active'))
}