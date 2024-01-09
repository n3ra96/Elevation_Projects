
class CityApi{
    getCity(name){
        return $.get('/Weathers/'+name)
    }

    getAllCities(){
        return $.get('/Weathers')
    }
    
    postCity(data){
        return $.post('/Weathers', data ,function (response) {
            console.log("POST complete")
        })
    }

    getCity(name){
        return $.get('/Weathers/'+name)
    }

}