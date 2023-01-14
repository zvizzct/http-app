import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
/**
 * Loads users from the localhost API
 * @param {String|Number} id number of id to load
 * @returns {Promise<User>} a promise that resolves to a user 
 */
export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    const res = await fetch(url);
    const data = await res.json();
    const user = localhostUserToModel(data)
    // console.log(user);
    return user
}