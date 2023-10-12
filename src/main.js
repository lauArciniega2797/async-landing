const accesKey = 'Fa5eEK4rKfjY-yJqnUlPTDkfTBazCybu7JJMs9h7uiY'
const API = 'https://api.unsplash.com/search/photos'

const fetchApi = async (query) => {
    let response = await fetch(`${API}?query=${query}&client_id=${accesKey}`)
    await response.json()
}