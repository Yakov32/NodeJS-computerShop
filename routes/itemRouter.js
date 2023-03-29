const router = require('express').Router();

const {items, item, itemCreate, itemCreateForm} = require('./../controllers/itemController');

const rules = require('./../validators/item/rules');
const itemErrorRender = require('./../validators/item/errorRender');
const {validate} = require('./../validators');
const multer = require('multer');


router.get('/get/:id', item);
router.get('/create', itemCreateForm);


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

router.post('/create', uploadOptions.single('image'), [rules(), validate, itemErrorRender], itemCreate);

//router.get('/', items)
module.exports = router;