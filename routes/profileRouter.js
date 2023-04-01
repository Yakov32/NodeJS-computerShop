'use strict';

const router = require('express').Router();
const {checkUser} = require('./../middleware/authorization');
const {getProfile, changeAvatar} = require('./../controllers/ProfileController');
const multer = require('multer');
const config = require('./../config/config');


router.get('/', checkUser, getProfile);

//router.get('/change-avatar', checkUser, changeAvatar);

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'public/uploads/users')
    },
    filename (req, file, cb) {
        const filename = file.originalname.replace(' ', '');
        const extension = config.imgFormats[file.mimetype];
        cb(null, `${filename}-${Date.now()}.${extension}`);

    },
})

const uploadOptions = multer({storage, fileFilter(req, file, cb) {

    if(config.imgFormats[file.mimetype]) {
        return cb(null, true);
    }
    cb(new Error('Неподдержимый формат картинки'));
}});


router.post('/change-avatar', checkUser, uploadOptions.single('avatar'), changeAvatar);

module.exports = router;