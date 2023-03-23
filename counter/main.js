import './style.css'

const getJokes = async () => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    const myJoke = document.querySelector('#app');
    myJoke.innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", () => {
  getJokes()
})

