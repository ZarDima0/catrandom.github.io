const url = "http://aws.random.cat//meow";
const images = document.querySelector('img')
const button = document.querySelector('button')

async function fetchHandler () {
    try {
        const response = await fetch(url)
        const data = await response.json()
        images.src = data.file
    } catch (error) {
        console.log(error)
    }
}


button.addEventListener('click',() => {
    const loadCheck = images.complete;
    if (loadCheck) {
        fetchHandler();
    }
})
