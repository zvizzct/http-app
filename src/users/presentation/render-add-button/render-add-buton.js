import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element) => {

    const fabButton = document.createElement('button');
    fabButton.innerHTML = '+';
    fabButton.classList.add('fab-button');
    element.append(fabButton);
    fabButton.addEventListener('click', () => {
        throw new Error('Not implemented')
    })
}