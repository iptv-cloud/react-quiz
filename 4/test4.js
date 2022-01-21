
import fetch from 'node-fetch';

var server_echo;

var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};

fetch('https://reqres.in/api/users', {
    method: 'post',
    headers: {
     //   'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});

server_echo.forEach(
    element => console.log(element)
)



// body data type must match "Content-Type" header
// When Use encodeURIComponent() on user-entered fields from forms POST'd to the server. This will encode & symbols that may inadvertently be generated during data entry for special HTML entities or other characters that require encoding/decoding.
// json.json == {\&quot;a\&quot;:1,\&quot;b\&quot;:2}
// JSON.stringify(json.json) == "\&quot;{\\&quot;a\\&quot;:1,\\&quot;b\\&quot;:2}\&quot;"
