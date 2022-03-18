import axios from "axios"

export default async function fetchGames (url) {
    const response = await axios.get(url)

    return response.data
}