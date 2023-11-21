import * as request from "../lib/requester";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    })
    return result
}