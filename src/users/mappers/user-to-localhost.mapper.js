import { User } from "../models/user"

/**
 * Converts a user from the localhost API to a User model
 * @param {User} user like a User, but with different property names
 */
export const userModelToLocalhost = (user) => {
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user
    console.log(avatar, balance, firstName, lastName);

    return ({
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    })
}