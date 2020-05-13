var userInfo = {
	connectedUser : undefined,
	token : undefined,
	name : undefined,
	page : 'login'
}


export default function getConnected(login, password){

	const URL = 'http://instantchat.com/Api/login/'+login+'/'+password;
		fetchData(URL)
		.then(data => {
			if(data.status === 'ok' || data.status === 'active'){
				userInfo.connectedUser = data.id;
				userInfo.page = 'accueil';
				userInfo.name = data.name;
				userInfo.token = data.token;
			}
			else{
        if(data.message === "the email is not correct"){
          const TEXT = document.createElement("span");
          let content = document.createTextNode('This email is no exist get regisred...');
          TEXT.appendChild(content);
          document.getElementById('passwordError').appendChild(TEXT);
        }
        else{
          const TEXT = document.createElement("span");
          let content = document.createTextNode('the passwor is not correct...');
          TEXT.appendChild(content);
          document.getElementById('passwordError').appendChild(TEXT);
        }
      }
		});
}

function fetchData(url){
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}