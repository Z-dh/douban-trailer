// http://api.douban.com/v2/movie/subject/1764796
const rp = require('request-promise-native')

async function fetchMovie(item) {
  const url = `http://api.douban.com/v2/movie/subject/${item}`
  const res = await rp(url)
  return res
}
;(async () => {
  let movies = [{
      doubanId: 27113189,
      title: '柯明斯基理论',
      rate: 8.7,
      poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2536895917.jpg'
    },
    {
      doubanId: 27110296,
      title: '无名之辈',
      rate: 8.3,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2539661066.jpg'
    }]

    movies.map(async movies=>{
      let movieData = await fetchMovie(movies.doubanId)
      try {
        movieData = JSON.parse(movieData)
        console.log(movieData)
        console.log(movieData.tags)
        console.log(movieData.summary)
      }catch (e) {
        console.log(e)
      }
    })
})()