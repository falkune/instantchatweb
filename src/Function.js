export default function fetchData(url){
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getConnectedUser(id, token){
	const URL = 'http://instantchat.com/Api/Users/'+id+'/'+token;
	return fetchData(URL).data
}

export const EMOJIS = [
'😂','😀','😁','😍','😘','🤭','🤫','😬','😔','😪','😷','😎','☹','🙈','💋','💘','❤️','👋','🤚','👌','✌','👈','👉','👍','👎','👊','👏','🤝','🙏','💪','👂','👃','🧠','🦷','👀','👁','🤦','🤦‍♂️','🤰','🏃','🏋️‍♂️','🏋️‍♀️','🚴','🗣','🥰','😛','😋','🥺','🐵','🐰','🕊','🐬','🐸','🍉','🍊','🍍','🍌','🍎','🍑','🥝','🍆','🌽','🥕','🌶','🥒','🥜','🍞','🥐','🥖','🥯','🍖','🍗','🥩','🍔','🍟','🌮','🍼','☕','🍾','🍷','🍸','🍺','🥂','🍽','🏥','🏦','🏨','🏫','🏭','🕌','⛪','🕋','🚖','🏍','🛴','🛹'
];