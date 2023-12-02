import multer from 'multer';
import path from 'path';

// ini untuk upload di imgBB
const storageImage = multer.memoryStorage();

const uploadImage = multer({
    storage: storageImage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'));
        }
    }
}).single('image');





// ini untuk upload di local jangan di hapus

// const storageMenu = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/menu/');
//     },
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         cb(null, Date.now() + ext);
//     },
// });
// const uploadMenu = multer({ storage: storageMenu });


// const storageTestimoni = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/testimoni/');
//     },
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         cb(null, Date.now() + ext);
//     },
// });
// const uploadTestimoni = multer({ storage: storageTestimoni });


export {
    // uploadMenu,
    // uploadTestimoni,
    uploadImage
}