let x = 51.505
let y = -0.09

let map = L.map('map').setView([x, y], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

const API_URL_ALL = 'https://geo.ipify.org/api/v2/country?apiKey='

const submitBtn = document.querySelector('.input__submit')
const textInput = document.querySelector('.input__text')

const ipElement = document.querySelector('.location-info__ip-address')
const locationElement = document.querySelector('.location-info__location')
const timezoneElement = document.querySelector('.location-info__timezone')
const ispElement = document.querySelector('.location-info__isp')

const API = 'https://geo.ipify.org/api/v2'
const key = 'at_ieLuCAOtfnVf2paN9Bu5C1R01hosF'
const inputText = textInput.value

// function renderLocation() {
//     const API_COUNTRY = API + '/country?' 
//     // const numbers = /^[0-9.,!?]+$/
//     // const letters = /^[a-zA-Z.,!?]+$/
//     // if (letters.test(inputText)) {
//     //     const URL = API_COUNTRY + 'apiKey=' + key + '&domain=' + inputText
//     // } else if (numbers.test(inputText)) {
//     //     const URL = API_COUNTRY + 'apiKey=' + key + '&ipAddres=' + inputText
//     // }
//     console.log(URL)
//     fetch (API_COUNTRY + new URLSearchParams({
//         apiKey: key,
//         domain: inputText,
//         ipAddress: inputText, 
//     })) 
//         .then(res => res.json())
//         .then(json => {
//             console.log(json)
//             ipElement.innerHTML = json.ip
//             locationElement.innerHTML = json.location.country + ', ' + json.location.region
//             timezoneElement.innerHTML = json.location.timezone
//             ispElement.innerHTML = json.isp
//         })
// }

function renderInfo() {
    const API_MAP = API + '/country,city,vpn?'
    fetch (API_MAP + new URLSearchParams({
        apiKey: key,
        domain: inputText,
        ipAddress: inputText, 
    }))
        .then(res => res.json())
        .then(json => {
            console.log(json)
            ipElement.innerHTML = json.ip
            locationElement.innerHTML = json.location.country + ', ' + json.location.region
            timezoneElement.innerHTML = json.location.timezone
            ispElement.innerHTML = json.isp
            x = json.location.lat
            y = json.location.lng
            console.log(json.location.lng + ' ' + json.location.lat)
        })
}

function setMap() {
    const map = L.map('map').setView([x, y], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log('maaap')
}

submitBtn.addEventListener('click', () => {
    renderInfo()
    setMap()
})



