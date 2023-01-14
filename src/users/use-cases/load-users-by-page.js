import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
/**
 * Loads users from the localhost API
 * @param {Number} page number of the page to load
 * @returns {Promise<User[]>} a promise that resolves to an array of Users
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    const res = await fetch(url);
    const data = await res.json();
    const users = data.map(userLike => localhostUserToModel(userLike))
    return users
}