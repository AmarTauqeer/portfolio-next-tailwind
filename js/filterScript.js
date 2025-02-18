console.log('filter script');
const filterButtons = document.querySelectorAll(".filterButtons button");
const filterableCards = document.querySelectorAll(".filterableCards .grid .card");
console.log(filterButtons);

const filterCards=e=>{
    console.log(e.target);
    filterableCards.forEach(card=>{
        card.classList.add("hide");
        if (card.dataset.name===e.target.dataset.name || e.target.dataset.name==='all') {
            card.classList.remove("hide");
        }
    })
}
filterButtons.forEach(button=>button.addEventListener('click',filterCards))