export default function fetchData(url){
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getConnectedUser(id, token){
	const URL = 'http://instantchat.com/Api/connected/'+id+'/'+token;
	fetch(URL)
 	.then(function() {
 		
	})
}

export const EMOJIS = [
'😂','😀','😁','😍','😘','🤭','🤫','😬','😔','😪','😷','😎','☹','🙈','💋','💘','❤️','👋','🤚','👌','✌','👈','👉','👍','👎','👊','👏','🤝','🙏','💪','👂','👃','🧠','🦷','👀','👁','🤦','🤦‍♂️','🤰','🏃','🏋️‍♂️','🏋️‍♀️','🚴','🗣','🥰','😛','😋','🥺','🐵','🐰','🕊','🐬','🐸','🍉','🍊','🍍','🍌','🍎','🍑','🥝','🍆','🌽','🥕','🌶','🥒','🥜','🍞','🥐','🥖','🥯','🍖','🍗','🥩','🍔','🍟','🌮','🍼','☕','🍾','🍷','🍸','🍺','🥂','🍽','🏥','🏦','🏨','🏫','🏭','🕌','⛪','🕋','🚖','🏍','🛴','🛹'
];