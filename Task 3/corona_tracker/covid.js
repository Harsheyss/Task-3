// SEARCHBAR
$(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

async function getCoviddata(index)
{
    await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "500175fb82mshd0597cbdc08e3bcp14ca66jsnf219133e088c"
	}
})
.then(response => {
	return(response.json());
})
.then(data => {
    
   console.log(data);
   let output= '';

   data.countries_stat.forEach( country => {
       output+=`
       <tbody id ="myTable">
        <tr>
          <td>
            ${country.country_name}
          </td>
          <td class="text-danger">
            ${country.cases}
          </td>
          <td class="text-success">
            ${country.total_recovered}
          </td>
          <td>
            ${country.deaths}
          </td>
          <td style="color: rgb(56, 95, 221);">
            ${country.active_cases}
          </td>
          <td>
            ${country.new_cases}
          </td>
          <td>
            ${country.new_deaths}
          </td>
        </tr>
      </tbody>
       `
   })
   const table = document.getElementById('tblval');
   tblval.innerHTML+=output;
//    WORLD OUTPUT
   document.getElementById('active_cases').innerHTML = data.world_total.active_cases;
   document.getElementById('new_cases').innerHTML = data.world_total.new_cases;
   document.getElementById('new_deaths').innerHTML = data.world_total.new_deaths;
   document.getElementById('total_cases').innerHTML = data.world_total.total_cases;
   document.getElementById('total_recovered').innerHTML = data.world_total.total_recovered;
   document.getElementById('total_deaths').innerHTML = data.world_total.total_deaths;




})
.catch(err => {
	console.log(err);
});
    
}
getCoviddata(2);





