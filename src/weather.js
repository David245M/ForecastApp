const weatherApi = {
    root: `https://api.openweathermap.org/data/2.5/forecast?`,
    id: `ed1c9f62943c7e399b215a7abd341289`,
}

const locationApi = {
    root: `https://api.opencagedata.com/geocode/v1/json?`,
    id: `6e14c6c9118a4f8492aec145d9c37124`
}

const lang = navigator.language.slice(0,2)

const geo = new Promise((resolved,rejected) => {
    if(!navigator) {
        rejected('Navigator')
    }
    else {
        navigator.geolocation.getCurrentPosition(
            pos => resolved(pos),
            err => rejected(err)
        )
    }
})

const location =  function(coords) {
    return fetch(`${locationApi.root}q=${coords.latitude}+${coords.longitude}&key=${locationApi.id}`)
}

const weather = function(coords) {
    return fetch(`${weatherApi.root}lat=${coords.lat}&lon=${coords.lng}&appid=${weatherApi.id}&units=metric&lang=${lang}`)
}

const locationSearch = function(string) {
    return fetch(`${locationApi.root}q=${string}&key=${locationApi.id}`)
}

export {geo, location, weather, locationSearch}