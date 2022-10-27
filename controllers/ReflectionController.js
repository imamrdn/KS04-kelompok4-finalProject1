const repositoryReflections = require('../repository/reflections')

const ReflectionController = {
    createReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.create(req.body, req.user.id)
         if(!dataReflections) {
            return res.status(403).json({message : "Failed to create a new reflection"})
        }
        return res.status(201).json(dataReflections)
    },
    updateReflections : async (req, res) => {
        let dataReflections =  await repositoryReflections.update(req.body, req.params.id, req.user.id)
        console.log(dataReflections)
         if(!dataReflections) {
            return res.status(403).json({message : "Failed to update a reflection"})
        }
        return res.status(202).json(dataReflections)
    },
    selectAllReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.selectAll(req.user.id)
        return res.status(200).json(dataReflections)

    },
    deleteReflections : async (req, res) => {
        let dataReflections = await repositoryReflections.delete(req.params.id, req.user.id)
        if(!dataReflections) {
            return res.status(403).json({message : "Failed to delete a reflection"})
        }
        return res.status(202).json({message : "Successfully delete reflection"}) 
    },

}

module.exports = ReflectionController;