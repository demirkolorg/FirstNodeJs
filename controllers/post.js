const PostSchema = require('../models/post.js')
const PostString = require('../tools/MagicStrings/post.js')

const getAll = async (req, res) => {
    try {
        const getAll = await PostSchema.find()
        res.status(200).json({
            getAll
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.getAll.getAllGenelHata + ": " + error.message })
    }
}


const getDetail = async (req, res) => {
    try {
        const { id } = req.params
        const getDetail = await PostSchema.findById(id)
        res.status(200).json({
            getDetail
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.getDetail.getDetailGenelHata + ": " + error.message })
    }
}


const Create = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body)
        res.status(201).json({
            newPost
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.Create.createGenelHata + ": " + error.message })
    }
}

const Update = async (req, res) => {
    try {
        const { id } = req.params
        const updateModel = await PostSchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            updateModel
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.Update.updateGenelHata + ": " + error.message })
    }
}

const Delete = async (req, res) => {
    try {
        const { id } = req.params
        await PostSchema.findByIdAndRemove(id)
        res.status(201).json({
            message: "silme başarılı"
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.Delete.deleteGenelHata + ": " + error.message })
    }
}

const Search = async (req, res) => {
    try {
        const { search, tag } = req.query;
        const title = new RegExp(search, "i")
        const posts = await PostSchema.find({ $or: [{ title }], tag: { $in: tag.split(",") } })

        res.status(201).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({ message: PostString.Delete.deleteGenelHata + ": " + error.message })
    }
}

module.exports = {
    getAll,
    getDetail,
    Create,
    Update,
    Delete,
    Search
}