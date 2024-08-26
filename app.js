
function getAll(chooseCity){
    let params =  {
        country : "EG" , 
        city :  chooseCity ,
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params : params
    })
    .then(function (response) {
    
        // Change The  Timings :---
        const timings = response.data.data.timings
        document.getElementById("fajr").innerHTML = timings.Fajr ;
        document.getElementById("shrouk").innerHTML = timings.Sunrise ;
        document.getElementById("dhuhr").innerHTML = timings.Dhuhr ;
        document.getElementById("asr").innerHTML = timings.Asr ;
        document.getElementById("mghrab").innerHTML = timings.Maghrib ;
        document.getElementById("isha").innerHTML = timings.Isha ;
    
        // Change The Date Melady :---
        document.getElementById("dateMelady").innerHTML = response.data.data.date.readable
        //  Change The Day  :---
        document.getElementById("day").innerHTML = response.data.data.date.hijri.weekday.ar
        //  Change The Date Higry :---
        document.getElementById("dateHagry").innerHTML = 
        response.data.data.date.hijri.day 
        + " / " + response.data.data.date.hijri.month.ar 
        + " / " +  response.data.data.date.hijri.year
    
    })
    .catch(function (error) {
        console.log(error);
    })
}
getAll(  "C" )


// Seletct The City :---
let cities = [
    {
        arbicName : "القاهرة" ,
        englishName : "C",
    },
    {
        arbicName : "الجيزة" ,
        englishName : "GZ",
    },
    {
        arbicName : "الاسكندرية" ,
        englishName : "ALX",
    },
    {
        arbicName : "بورسعيد" ,
        englishName : "PTS",
    },
    {
        arbicName : "السويس" ,
        englishName : "SUZ",
    },
    {
        arbicName : "المنيا" ,
        englishName : "MN",
    },
    {
        arbicName : "اسوان" ,
        englishName : "ASN",
    }

    // PTS
]
for ( city of cities ){
    let contant = `<option>${city.arbicName}</option>`
    document.getElementById("citiesName").innerHTML += contant
}


// Change the Current City :---
let selectCity =  document.getElementById("citiesName")
selectCity.addEventListener( "change" , () => {
    document.getElementById("city").innerHTML = selectCity.value

    let emptyCity = ""
    for ( city of cities ){
        if ( city.arbicName ==  selectCity.value){
            emptyCity = city.englishName
        }
    }
    getAll( emptyCity )
})











































































































