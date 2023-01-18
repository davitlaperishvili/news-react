import {API_KEY, BASE_URL} from "./vars"
export default async function getPosts(action: string = "", paramsObj: BodyInit) {
    const response = await fetch(`${BASE_URL}${action}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: paramsObj
    })
    
    const data = await response.json()
    return data
}