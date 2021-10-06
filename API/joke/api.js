const val=document.getElementById('joke');
const newJoke=document.getElementById('get_joke');
const getJoke = async () => {
        //call the URL
        const url = await (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
        console.log(url.value);
        //set the new joke
        val.innerHTML=url.value;
    }
    getJoke();
    newJoke.addEventListener('click',getJoke);

   








