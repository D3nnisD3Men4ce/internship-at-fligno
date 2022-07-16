const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(
            (entry) => {
                // console.log(entry)
                    entry.target.classList.toggle(
                    'transform', entry.isIntersecting
                )
            }
        )
    }
)


const elements = document.querySelectorAll('.card')
elements.forEach(
    (element) => {
        observer.observe(element)
    }
)


const lastCardObserver = new IntersectionObserver(
    (entries) => {
        const lastCard = entries[0]

        if(!lastCard.isIntersecting) {
            return
        }
        
        document.getElementById('add').style.display = 'block'
        lastCardObserver.unobserve(lastCard.target)

        const newLastCard = document.querySelector('.card:last-child')
        lastCardObserver.observe(newLastCard)
    }
)

const lastChildElement = document.querySelector('.card:last-child')
lastCardObserver.observe(lastChildElement)


function addMoreCards(e) {
    loadNewCards();
    e.target.style.display = 'none';
    showPopUp();
}

const cardContainer = document.querySelector('.container')
function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div')
        card.textContent = 'New card'
        card.classList.add('card')
        cardContainer.append(card)
        observer.observe(card)
    }

}



function showPopUp() {
    const imageContainer = document.querySelector('.image-container')
            imageContainer.classList.add('show-container')
}


function closePopUp() {
    const imageContainer = document.querySelector('.image-container')
    imageContainer.classList.remove('show-container');
}

const targetObserver = new IntersectionObserver(
    (entries) => {
        const target = entries[0]
        if(!target.isIntersecting) {
            return
            }
            showPopUp();
        }
)

const targetContainer = document.getElementById('target-card')
targetObserver.observe(targetContainer)


