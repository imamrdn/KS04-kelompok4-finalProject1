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
        let dataReflections =  await repositoryReflections.update(req.body, req.params.id, req.user.id)
        console.log(dataReflections)
         if(!dataReflections) {
            return res.status(400).json("create data reflections failed")
        }
        return res.status(201).json(dataReflections)
    },
    selectAllReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.selectAll(req.user.id)
        return res.status(200).json(dataReflections)

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