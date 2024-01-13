const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=828ed5756417ef0e2dbe62f2fed38b7d`
            const response = await fetch(url); 
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;

            if (tempStatus == "Sunny") {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: rgb(220, 220, 13);"></i>';
            }
            else if (tempStatus == "clouds") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: rgb(236, 240, 241);"></i>'
            }
            else if (tempStatus == "Rainy") {
                temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color: rgb(236, 240, 241);"></i>'
            }
            else {
                temp_status.innerHTML = '<i class="fas fa-smog" style="color: rgb(236, 240, 241);"></i>'
            }

            datahide.classList.remove('data_hide');

        } catch{
            city_name.innerText = `Plz enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getinfo);