//create mapa
const map = L.map("mapid").setView([-23.695809, -46.4988786], 13)

//create and add tytleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [49, 58],
  iconAnchor: [19, 62],
  popupAnchor: [170, 2],
})

//passo 5 = adiciona os marcadores aos mapas

//exemplo de destructuring dentro dos parametros da function
function addMarker({id, name, lat, lng}) {

  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name} <a href="/orphanage?id=${id}"><image src="/images/arrow-white.svg"</a>'`)

  //create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup)
}


//passo 4 = pega os spans, os dados, e executa a funcao de adicionar marcador

//pega todos os spans utlizando seletor de classe + nome da tag
const orphanagesSpan = document.querySelectorAll('.orphanages span')

//pega os dados data-set de cada span, dataset tem que ser escrito sem '-' nesse caso
orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})