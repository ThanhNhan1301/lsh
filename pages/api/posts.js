import mongoseDBConnect from '../../mongoseDb/connectDB'
import {modelPost} from '../../mongoseDb/models'

mongoseDBConnect()

export default async function Catelogies(req, res) {
    const {method, query, body} = req
    switch (method) {
        case 'GET':
            try {
                const result = await modelPost.find({...query})
                res.status(200).json({posts: result, error: null})
            } catch (error) {
                res.status(400).json({posts: [], error})
            }
            break
        case 'POST':
            try {
                const result = await modelPost.create({...body})
                res.status(200).json({post: result, error: null})
            } catch (error) {
                res.status(400).json({post: [], error})
            }
            break
        default:
            res.status(500).json({error: 'Internal Server Error'})
            break
    }
}
