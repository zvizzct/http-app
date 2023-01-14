import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next >';

    const previousButton = document.createElement('button');
    previousButton.innerHTML = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    element.append(previousButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage()
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        renderTable(element)

    })
    previousButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage()
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        renderTable(element)

    })
}

