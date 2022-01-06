import mongoose from 'mongoose'
import slug from 'mongoose-slug-plugin'

const SchemaPost = new mongoose.Schema(
    {
        title: {type: String, required: true},
        catelogry: {type: String, required: true},
        blocks: {type: Object, required: true},
        slug: {type: String, required: true},
    },
    {
        timestamps: true,
    }
)

SchemaPost.plugin(slug, {tmpl: '<%=title%>'})

const SchemaCatelogies = new mongoose.Schema(
    {
        title: {type: String, required: true},
        q: {type: String, required: true},
    },
    {
        timestamps: true,
    }
)

export const modelCatelogies =
    mongoose.models.catelogies || mongoose.model('catelogies', SchemaCatelogies)

export const modelPost =
    mongoose.models.posts || mongoose.model('posts', SchemaPost)
