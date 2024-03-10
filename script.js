// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=2eee55c4cd1b4683bea1e247fe4b1517&client_secret=11392ad9b1354331b85a80903ed25a0a"



// BQD9KqE4kg9Q_D_jomoH114P9j1AI05Z8XOR01G8sn8XadYO1XMWzkfrnuPveI_lagZBqzlsaChABv-E6AupCE06Q4kViKQrvNmAjpE5S1Rw443QNaQ
let data = async ()=> {
    
    let res = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',{
        headers:{
            "Authorization": "Bearer BQD9KqE4kg9Q_D_jomoH114P9j1AI05Z8XOR01G8sn8XadYO1XMWzkfrnuPveI_lagZBqzlsaChABv-E6AupCE06Q4kViKQrvNmAjpE5S1Rw443QNaQ"
        }
    });
    let data = await res.json();
    const trackData = { _ }
    let data async () => {
        let res = await ..
        let trackData = await res.json()
        console.log()

        return trackData;
    }

    let trackData = await data;

}



 


