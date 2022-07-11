'use strict';
import fs from 'fs';

const mails_post = (req, res, next) => {
    try {
        const data = JSON.stringify(req.body);
        fs.writeFileSync('./data/mails.json', data);
        return res.json({"done": true})
    } catch (err) {
        console.log('error', err)
        return res.json({"done": false})
    }
}
  
const mails_get = (req, res) => {
    const mailsBuffer = fs.readFileSync('./data/mails.json');
    return res.json(JSON.parse(mailsBuffer).mails);
};

export { mails_get, mails_post };