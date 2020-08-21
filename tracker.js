
let requestURL = 'https://api.covidtracking.com/v1/us/current.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {

    if (request.status >= 200 && request.status < 400) {
        const stats = request.response;
        displayData(stats)
        
    } else {
        console.log('Error.')
    }

}


function displayData(data) {
    let stats = data;
    document.getElementById('number').textContent = "" + stats['0']['death'];
};
