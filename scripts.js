function searchMonster() {
    const grabName = document.getElementById("search").value;
    const req = new Request('https://pokeapi.co/api/v2/pokemon/' + grabName);

    fetch(req).then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Check your API, and work again.');
        }
    }).then(response => {
        let name = response.name;
        let types = response.types;
        let type1 = types[0].type.name;
        let type2;
        if (types[1]) {
             return type2 = types[1].type.name;
        }

        console.log(
            name,
            type1,
            type2
        );




    })
}