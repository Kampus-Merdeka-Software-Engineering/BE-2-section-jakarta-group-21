import testimoniService from "../service/testimoni-service.js";

const createTestimoni = async (req, res, next) => {
    try {
        const imgBBImage = await testimoniService.uploadImageToImgBB(req.file)
        const result = await testimoniService.createTestimoni(req.body, imgBBImage);
        res.status(201).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const testimoni = async (req, res, next) => {
    try {
        const result = await testimoniService.testimoni();
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const testimoniDelete = async (req, res, next) => {
    try {
        const testimoniId = parseInt(req.params.testimoniId);
        await testimoniService.deleteTestimoni(testimoniId);
        res.status(200).json({
            data: "Delete Success"
        });
    } catch (error) {
        next(error)
    }
}

const testimoniUpdate = async (req, res, next) => {
    try {
        const { testimoniId } = req.params;
        const imgBBImage = await testimoniService.uploadImageToImgBB(req.file)
        const result = await testimoniService.updateTestimoni(req.body, testimoniId, imgBBImage);
        res.status(201).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createTestimoni,
    testimoni,
    testimoniDelete,
    testimoniUpdate
}