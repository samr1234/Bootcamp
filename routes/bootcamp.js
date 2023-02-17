const express = require('express')
const bootcampRouter= express.Router();

// all the bootcamps routes
const {
    createBootcamp,
    getBootcamps,
    getBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require("../controllers/bootcamp")


bootcampRouter.route("/").post(createBootcamp)
                        .get(getBootcamps)

bootcampRouter.route("/:id").get(getBootcamp)
                         .put(updateBootcamp)
                         .delete(deleteBootcamp)


                    


module.exports=bootcampRouter