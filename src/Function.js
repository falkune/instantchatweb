export default function fetchData(url){
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getConnectedUser(id, token){
	const URL = 'http://instantchat.com/Api/connected/'+id+'/'+token;
	return fetch(URL)
    .then((response) => response.json().PromiseValue.data)
    .catch((error) => console.error(error))
}

export const EMOJIS = [
'😂','😀','😁','😍','😘','🤭','🤫','😬','😔','😪','😷','😎','☹','🙈','💋','💘','❤️','👋','🤚','👌','✌','👈','👉','👍','👎','👊','👏','🤝','🙏','💪','👂','👃','🧠','🦷','👀','👁','🤦','🤦‍♂️','🤰','🏃','🏋️‍♂️','🏋️‍♀️','🚴','🗣','🥰','😛','😋','🥺','🐵','🐰','🕊','🐬','🐸','🍉','🍊','🍍','🍌','🍎','🍑','🥝','🍆','🌽','🥕','🌶','🥒','🥜','🍞','🥐','🥖','🥯','🍖','🍗','🥩','🍔','🍟','🌮','🍼','☕','🍾','🍷','🍸','🍺','🥂','🍽','🏥','🏦','🏨','🏫','🏭','🕌','⛪','🕋','🚖','🏍','🛴','🛹'
];