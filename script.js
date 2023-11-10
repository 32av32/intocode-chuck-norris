const jokesText = document.querySelector('#jokes')


const getJokes = async () => {
    const dataJokes = await fetch('https://api.chucknorris.io/jokes/random ')
    const response = await dataJokes.json()
    jokesText.innerHTML = response.value
}

document.querySelector('#get-joke').addEventListener('click', getJokes)
getJokes()