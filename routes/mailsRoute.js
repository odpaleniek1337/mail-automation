'use strict';
import express from 'express';

import { mails_get } from '../controllers/mailController.js';
import { mails_post } from '../controllers/mailController.js';

const router = express.Router();

router.get('/', mails_get);

router.post('/update', mails_post);

export default router;
