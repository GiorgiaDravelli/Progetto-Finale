const { Router } = require('express');
const itemController = require('../controllers/itemControllers');
const router = Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "server/uploads/")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

router.get('/items', itemController.get_items);
router.post('/items', upload.any(), itemController.post_item);
// router.post('/items', itemController.post_item);
router.put('/items/:id', itemController.update_item);
router.delete('/items/:id', itemController.delete_item);

module.exports = router;