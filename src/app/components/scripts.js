fetch('./app/data.json')
// make the request for the json file
.then(function(response) {
    // Convert to JSON
    return response.json();
}).then(function(obj) {
    // Yay, `j` is a JavaScript object
    // console.log(obj);
});
