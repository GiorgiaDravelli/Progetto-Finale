const { Router } = require('express');
const usersController = require('../controllers/usersControllers');
const router = Router();
// const auth = require('../auth');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
// router.get('/user', auth, usersController.get_user);

module.exports = router;