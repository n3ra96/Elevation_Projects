
class CityApi{
    getCity(name){
        return $.get(`/Weathers/${name}`).then()
    }

    getAllCities(){
        return $.get(`/Weathers`).then()
    }
    
    postCity(data){
        
        return $.post('/Weathers', data ,function (response) {
            console.log(response)
        })
    }

    deleteCity(name){
        return $.ajax({
            url: '/Weathers/'+name ,
            type: 'DELETE',
            success: function(result) {
                console.log("DELETE complete")
            }
        });
    }

}

