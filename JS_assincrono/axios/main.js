axios.get('https://swapi.dev/api/people/4/')
    .then(function(response) {
        console.log(response.data.name);
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });