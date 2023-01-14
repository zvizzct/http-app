import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';
let modal, form;
let loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 * @returns 
 */
export const showModal = async (id) => {
    modal.classList.remove('hide-modal')
    loadedUser = {}

    if (!id) return
    const user = await getUserById(id)
    setFormValues(user)

}
export const hideModal = () => {
    if (!modal) return
    modal.classList.add('hide-modal')
    form?.reset()
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    loadedUser = user
    const firstNameInput = form.querySelector('[name="firstName"]')
    firstNameInput.value = user.firstName

    const lastNameInput = form.querySelector('[name="lastName"]')
    lastNameInput.value = user.lastName

    const balanceInput = form.querySelector('[name="balance"]')
    balanceInput.value = user.balance

    const isActiveInput = form.querySelector('[name="isActive"]')
    user.isActive ? isActiveInput.setAttribute('checked', true) : isActiveInput.removeAttribute('checked')
}


/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
    if (modal) return
    modal = document.createElement('div');
    modal.innerHTML = modalHtml
    modal.className = 'modal-container hide-modal'
    form = modal.querySelector('form')

    element.append(modal)

    form.addEventListener('submit', async (e) => {

        e.preventDefault()
        const formData = new FormData(form)
        const userLike = { ...loadedUser }
        for (const [key, value] of formData) {
            userLike[key] = value

            if (key === "balance") {
                userLike[key] = + value
                continue
            }
            if (key === "isActive") {
                userLike[key] = (value === "on") ? true : false
                continue
            }
            userLike[key] = value
        }
        await callback(userLike);
        hideModal()
    })
    modal.addEventListener('click', (e) => {
        if (e.target.className !== "modal-container") return
        hideModal()

    })
}