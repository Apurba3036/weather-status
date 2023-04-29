// don`t show api key publicly

const api_key=`2f1262f0f2a33cec6a15a9246706641a`

const loadtemp=city=>{
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f1262f0f2a33cec6a15a9246706641a&units=metric`

   fetch(url)
   .then(res=>res.json())
   .then(data=>displaytemp(data))



}




const displaytemp=data=>{
    const temp=document.getElementById('temperature')
    console.log(data)
    temp.innerText=data.main.temp;
    const city=document.getElementById('cityname')
    city.innerText=data.name

    const condition= document.getElementById('condition')
    condition.innerText= data.weather[0].main

}


function search(){

    const search=document.getElementById('search').value;

     loadtemp(search)


}


var input = document.getElementById('search');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('btn').click();
  }
});

loadtemp('dhaka')