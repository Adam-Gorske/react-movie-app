let token = '4516d6fea7da12dde375e64d42d33ef335bc2cbb7484e53c'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-movie-app-ct.herokuapp.com/api/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://flask-movie-app-ct.herokuapp.com/api/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://flask-movie-app-ct.herokuapp.com/api/movies/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async (id: string) => {
        const response = await fetch(`https://flask-movie-app-ct.herokuapp.com/api/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}