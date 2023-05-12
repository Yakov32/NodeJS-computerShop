const router = require('express').Router();

const {item, itemCreate, itemCreateForm} = require('./../controllers/itemController');

const {itemName, itemPrice, itemCategory, itemCompany} = require('./../validators/item/rules');
const errorHandler = require('../validators/item/errorHandler');
const {validate} = require('./../validators');
const multer = require('multer');
const {checkUser, checkAdmin} = require('./../middleware/authorization');

const FILE_TYPE_MAP = {
    'image/png' : 'png',
    'image/jpeg' : 'jpeg',
    'image/jpg' : 'jpg',
    'image/wepb' : 'wepb'
};

const storage = multer.diskStorage({
    destination (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];

        let fileUploadError = new Error('Неподдерживаемое разрешение отправленной картинки');

         if(isValid) {
             fileUploadError = null;
         }
        
        cb(fileUploadError, 'public/uploads/items')
    },
    filename (req, file, cb) {
        const filename = file.originalname.replace(' ', '');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${filename}-${Date.now()}.${extension}`);

    }
})

const uploadOptions = multer({storage: storage});


router.get('/get/:id', item);

router.get('/create', checkAdmin, itemCreateForm);

router.post('/create', checkAdmin, uploadOptions.single('image'), [[itemName, itemPrice, itemCategory, itemCompany], validate, errorHandler], itemCreate);

module.exports = router;