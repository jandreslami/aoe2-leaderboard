let URL = "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=20"
//devuelve 20 primeros jugadores


fetch("URL", {
  method: "GET",
  headers: {
    'User-Agent': 'https://github.com/jandreslami/ - learning JS project'
  },})

  .then(response => console.log(response))
  
  .catch(error => 
    console.log(error)
  )

//   console.log("cargando")
