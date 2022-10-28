/*----FUNCIÓ PER COMUNICAR AMB API I VEURE PELICULES----*/
const mostrar_Pelicules = async () => {
    let llamadaAPI = await fetch("https://swapi.dev/api/films/");
    let peliculas = await llamadaAPI.json();
    console.log(peliculas.value);
}