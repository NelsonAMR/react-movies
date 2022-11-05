const API = 'https://api.themoviedb.org/3';

function get(path){
    return fetch(API + path, {
        headers: {
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQwYmNkOTZlODVkYzYwNGVmYzQwMjZkZTE5M2FlNCIsInN1YiI6IjYzNjQ2NjM3ZDhkMzI5MDA4MjcxNGM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m5S02-GTf2YT4kiSeowqEeJ7NxCuNljUFjQYnvVSeP8',
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(result => result.json());
}

export default get;