const repositoryReflections = require('../repository/reflections')

const controllerReflections = {
    createReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.create(req.body, req.user.id)
         if(!dataReflections) {
            return res.status(400).json("create data reflections failed")
        }
        return res.status(201).json(dataReflections)
    },
    updateReflections : async (req, res) => {
        repositoryReflections.update({}, req.params.id, req.user.id)
    },
    selectByIdReflections : async (req, res) => {

    },
    selectAllReflections : async (req, res) => {

    },
    deleteReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.delete(req.params.id, req.user.id)
        if(!dataReflections) {
            return res.status(400).json("delete data reflections failed")
        }
        return res.status(200).json("dalete refelctions success")
    },

}

module.exports = controllerReflections