
/**
 * @param{Object} Quote information
 */
const fetchLocation = async () => {
    const random = Math.floor(Math.random() * 20) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/location/${random}`);
    const data = await response.json()
    return data;
}

/**
 * @param{HTMLDivElement} element
 */
export const RickandmortyApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Rick and morty App';
    element.innerHTML = "Loading..."
    // await fetchLocation();
    const locationLabel = document.createElement('h2');
    const typeLabel = document.createElement('h4');
    const nextLocationButton = document.createElement('button');
    nextLocationButton.innerHTML = 'Next location';

    const renderLocation = (data) => {
        locationLabel.innerHTML = data.name;
        typeLabel.innerHTML = data.type;
        element.replaceChildren(locationLabel, typeLabel, nextLocationButton);
    }

    nextLocationButton.addEventListener('click', async () => {
        element.innerHTML = "Loading..."
        const location = await fetchLocation()
        renderLocation(location)


    })
    fetchLocation().then(renderLocation);

}