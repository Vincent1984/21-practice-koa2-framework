document.getElementById('jwtlogin').addEventListener('click', () => {
	var user = {}
	user.username=document.getElementById('username').value;
	user.password=document.getElementById('password').value;

	fetch('/loginJwt', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(!data.user) {
        	console.log(data);
        } else {

            sessionStorage.setItem("token", data.token);
        	console.log('value : '+sessionStorage.getItem('token'));
        	window.location.href="/app.html";
        }
    })
})


document.getElementById('cleartoken').addEventListener('click', () => {
	sessionStorage.removeItem('token')
})


