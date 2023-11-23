import multer from 'multer';
import path from 'path';


const storageMenu = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/menu/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});
const uploadMenu = multer({ storage: storageMenu });



const storageTestimoni = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/testimoni/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});

const uploadTestimoni = multer({ storage: storageTestimoni });


export {
    uploadMenu,
    uploadTestimoni
}