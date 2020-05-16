export default function fetchData(url){
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getConnectedUser(id, token){
	const URL = 'http://instantchat.com/Api/Users/'+id+'/'+token;
	.then(data => {
		if(data.status === 'ok'){
			return data.data
		}
	});
}

export const EMOJIS = [
'😂','😀','😁','😍','😘','🤭','🤫','😬','😔','😪','😷','😎','☹','🙈','💋','💘','❤️','👋','🤚','👌','✌','👈','👉','👍','👎','👊','👏','🤝','🙏','💪','👂','👃','🧠','🦷','👀','👁','🤦','🤦‍♂️','🤰','🏃','🏋️‍♂️','🏋️‍♀️','🚴','🗣','🥰','😛','😋','🥺','🐵','🐰','🕊','🐬','🐸','🍉','🍊','🍍','🍌','🍎','🍑','🥝','🍆','🌽','🥕','🌶','🥒','🥜','🍞','🥐','🥖','🥯','🍖','🍗','🥩','🍔','🍟','🌮','🍼','☕','🍾','🍷','🍸','🍺','🥂','🍽','🏥','🏦','🏨','🏫','🏭','🕌','⛪','🕋','🚖','🏍','🛴','🛹'
];