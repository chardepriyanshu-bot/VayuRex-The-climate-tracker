

let btn = document.getElementById('btn');
let input = document.getElementById('input');
let temp=document.getElementById('temp')
let city=document.getElementById('city')
let day=document.getElementById('day')
let heading=document.getElementById('heading')
let cityName;

function getCordinates(){
    
    navigator.geolocation.getCurrentPosition((pos)=>{
       fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
       .then(res=>res.json())
       .then(data => {
         setCity(data.city)
       })
    })
}

getCordinates()

function setCity(name){
    cityName = name;
    input.value = cityName;
    btn.click();
}
  let time=new Date();
btn.addEventListener('click', () => {

    fetch(`https://api.weatherapi.com/v1/current.json?key=2247fea50f3a4540966121641252111&q=${input.value}&aqi=yes`)
        .then((res) => res.json())
        .then((data) =>
           {
            console.log(data),
            document.getElementById('temp').innerText=`${data.current.temp_c} \u00B0C`,
            document.getElementById('city').innerText=data.location.name
            document.getElementById('weather').innerText=data.current.condition.text
            document.getElementById('day').innerText=data.location.localtime
            let video=document.getElementById('video')
        
            if(data.current.condition.text=="Mist"){

                video.src="https://www.pexels.com/download/video/5950042/"
                video.onload();
            }
             else if(data.current.condition.text=="Heavy rain"){
                 
                video.src="https://www.pexels.com/download/video/1484703/"
                video.onload();
             }
             else if(data.current.condition.text=="Partly cloudy"){
             
                video.src="https://www.pexels.com/download/video/5403821/"
                video.onload();
             }
            else if(data.current.condition.text=="Cloudy" ||data.current.condition.text=="Overcast" || data.current.condition.text=="Light rain"){
            
                video.src="https://www.pexels.com/download/video/20144591/"
                video.onload();
            }
            else if(data.current.condition.text=="Moderate rain"){
                
                video.src="https://www.pexels.com/download/video/13395797/"
                video.onload();
            }
             else if(data.current.condition.text=="Fog"){
                
                video.src=" https://www.pexels.com/download/video/6234318/"
                video.onload();
            }
            else if(data.current.condition.text=="Thunderstorm"){
              
                video.src="https://www.pexels.com/download/video/854541/"
                video.onload();  
            }
           
             else if(data.current.condition.text=="Snow"){
                
                video.src="https://www.pexels.com/download/video/853996/"
                video.onload();  
            }
             else if(data.current.condition.text=="Windy"){

                video.src="https://www.pexels.com/download/video/1575721/"
                video.onload();
            }
            else{
                
                video.src="https://www.pexels.com/download/video/4979585/"
                video.onload();
            }
           }
        )
        
        .catch((err)=>console.log(err))
})

setInterval(()=>{
     new Date();
 },1000)