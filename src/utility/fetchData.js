
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c904c93ed8msh4794354027c0195p1f7bfbjsnd4e14358af4f',
        // 'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA' ,
        // 'X-Api-Key':'n8dVAyJaFjHr51EJlan2K39K4JVlLwWBoRmtCnjG',
        // 'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com'
        // 'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'


    }
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c904c93ed8msh4794354027c0195p1f7bfbjsnd4e14358af4f',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}