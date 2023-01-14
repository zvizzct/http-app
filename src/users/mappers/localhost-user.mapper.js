import { User } from "../models/user"

/**
 * Converts a user from the localhost API to a User model
 * @param {Like<User>} localhostUser like a User, but with different property names
 * @returns {User} // a User
 */
export const localhostUserToModel = (localhostUser) => {
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    })
}