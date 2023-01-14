import modalHtml from './render-modal.html?raw';
import './render-modal.css';
let modal, form;

//TODO: Load user from id
export const showModal = () => {
    if (!modal) return
    modal.classList.remove('hide-modal')

}

//TODO: reset form
export const hideModal = () => {
    if (!modal) return
    modal.classList.add('hide-modal')
    form?.reset()
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
        const userLike = {}
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