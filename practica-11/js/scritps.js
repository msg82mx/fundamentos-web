//El siguiente codido se copio de  aqui 
//https://rapidapi.com/jakash1997/api/superhero-search


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://superhero-search.p.rapidapi.com/api/heroes",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "9f4d61d421msh6a92b1f9e40dfc3p1bd0dbjsna2611f447d30",
		"X-RapidAPI-Host": "superhero-search.p.rapidapi.com"
	},
    dataType:'JSON',
};

$.ajax(settings).done(function (data) {

    data.forEach(element => {
        console.log(element);

        let registro = '<div class="card col-3" style="width: 18rem;">' +
        '<img src="'+element.images.sm+'" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
          '<h5 class="card-title">'+ element.name +'</h5>' +
          '<p class="card-text">'+element.biography.aliases+'</p>' +
          '<a href="#" class="btn btn-primary">Go somewhere</a>' +
        '</div>' +
    '</div>'

    $('#content-card').append(registro);
    
    })

    
});


