import express from 'express';
const router=express.Router();
import auth from '../middlewares/auth.js'
import admin from '../middlewares/admin.js'

import {
    homepage,
    getroomslists,
    getrooombyid,
    addroom,
    updateroom,
    deleteroom,
} from '../Controller/roomController.js';
import{
    signup,
    login,
} from '../Controller/userController.js'

router.get('/',homepage);
router.get('/roomslist',auth,admin,getroomslists);
//router.route('/roomslist/:id',getrooombyid).put(auth);
router.post('/roomslist',addroom);
router.put('/roomslist/:id',updateroom);
router.delete('/roomslist/:id',deleteroom);
router.post('/register',signup);
router.post('/loginform',login);


export default router;