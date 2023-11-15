const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (siteData) => {
    const response = await fetch(`${baseUrl}/sites`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(siteData)
    })
    const result = await response.json()
    return result
}