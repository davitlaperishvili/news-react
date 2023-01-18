import {API_KEY, BASE_URL} from "./vars"
export default async function getPosts(filterPrase: string = "", serachWhere: string = "everything") {
    const response = await fetch(`${BASE_URL}${serachWhere}?q=${filterPrase}&pageSize=10`, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })
    const data = await response.json()
    return data
}