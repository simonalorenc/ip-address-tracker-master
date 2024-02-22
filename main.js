import { key } from "./api-key.js";

let x
let y

let map = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

const API_URL_ALL = 'https://geo.ipify.org/api/v2/country?apiKey='

const submitBtn = document.querySelector('.input__submit')
const textInput = document.querySelector('.input__text')
const form = document.querySelector('.input')

const ipElement = document.querySelector('.location-info__ip-address')
const locationElement = document.querySelector('.location-info__location')
const timezoneElement = document.querySelector('.location-info__timezone')
const ispElement = document.querySelector('.location-info__isp')

const API = 'https://geo.ipify.org/api/v2'
console.log(key)

function renderInfo() {
    const API_MAP = API + '/country,city?'
    const newInputText = textInput.value
    fetch (API_MAP + new URLSearchParams({
        apiKey: key,
        domain: newInputText,
        ipAddress: newInputText, 
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
            let newView = [x, y]
            map.setView(newView, 13)
        })
}

function getCurrentIP() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const currentIP = data.ip;
        textInput.value = currentIP;
        renderInfo();
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  }

getCurrentIP()

submitBtn.addEventListener('click', () => {
    form.addEventListener('submit', function(event) {
        event.preventDefault()})
    renderInfo()
})



