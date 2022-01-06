import mongoose from 'mongoose'

export default async () => {
    return await mongoose
        .connect(process.env.NEXT_PUBLIC_MONGOSE_URI)
        .then(() => console.log('connected MongoseDB successfully'))
        .catch(() => {
            console.log('connect MongoseDB failure')
        })
}
