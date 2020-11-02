
const cardSection = document.querySelector('.first')
const newDivButton = document.querySelector('#newDivButton')
const inputDivText = document.querySelector('#newDivText')

newDivButton.addEventListener("click", () => { createNewDiv(cardSection, inputDivText) } )

function createNewDiv(mainSection, inputText) {
    if(inputText.value){
        const contentNewDiv = inputText.value
        const div = document.createElement('div')
        const h2Text = document.createElement('h2')
        const paragraph = document.createElement('p')

        div.classList.add('card')
        paragraph.innerHTML = contentNewDiv

        mainSection.appendChild(div)
        div.appendChild(h2Text)
        h2Text.appendChild(paragraph)

        inputText.value = ''
    }
}
