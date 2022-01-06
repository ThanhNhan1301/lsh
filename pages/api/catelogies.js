import mongoseDBConnect from '../../mongoseDb/connectDB'
import {modelCatelogies} from '../../mongoseDb/models'

mongoseDBConnect()

export default async function Catelogies(req, res) {
    const {method, query} = req
    switch (method) {
        case 'GET':
            try {
                const result = await modelCatelogies.find({...query})
                res.status(200).json({catelogies: result, error: null})
                break
            } catch (error) {
                res.status(400).json({catelogies: [], error})
                break
            }
        default:
            res.status(500).json({error: 'Internal Server Error'})
            break
    }
}
