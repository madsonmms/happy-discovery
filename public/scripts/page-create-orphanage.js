//create mapa
const map = L.map("mapid").setView([-23.695809, -46.4988786], 13);

//create and add tytleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [49, 58],
  iconAnchor: [19, 62],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // remove last icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map)
})



// adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o input está vazio, se estiver não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        //não executa o restante do código
        alert('Por favor, preencha todas as fotos para inserir uma nova')
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    //ver console.log(newField.Container.children) para ver que o campo é o input
    input.value = ""

    // adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    // deletar o campo
    span.parentNode.remove()

}


//troca do sim e não
function toggleSelect(event) {
    //remove class .active
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    })

    //salva o botao clicado
    const button = event.currentTarget

    //coloca a class active
    button.classList.add('active')
    

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    //colocar o valor dentro do input, dataset vai setar o valor do data do botao no input
    input.value = button.dataset.value
}

function validate(event) {

    const lat = document.querySelector('input[name=lat]').value
    const lng = document.querySelector('input[name=lng]').value

    if(lat == '' || lng == '') {
        event.preventDefault()
        return alert('Selecione uma localidade para continuar')   
    }
}