/* leaflt */

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//armazenar o dataset dos spans pra setar a posição e colocar o marcador
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create mapa
const map = L.map('mapid', options).setView([lat, lng], 13)

//create and add tytleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [49, 58],
    iconAnchor: [19, 62],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([lat, lng], { icon })
    .addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget
    /* --- remover todas as classes .active --- */

    //cria um nodelist com todos os buttons
    const buttons = document.querySelectorAll(".images button")

    //remove o active
    //passando funcao anonima como argumento (arrow function) dentro do forEach, vai executar pra cada item da lista
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    /* -- selecionar a imagem clicada -- */

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details >img')

    //atualizar o container de imagem
    imageContainer.src = image.src



    //adicionar de volta a classe .active
    button.classList.add('active')
}