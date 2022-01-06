import axios from 'axios'

const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_HOSTNAME

axiosClient.interceptors.response.use((response) => {
    return response.data
})

export async function getCatelogies() {
    return axiosClient.get('/api/catelogies')
}

export async function getPosts(params = {}) {
    return axiosClient.get('/api/posts', {params})
}

export async function createPost(data) {
    return axiosClient.post('/api/posts', data)
}
