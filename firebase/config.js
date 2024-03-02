const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./bytebeatbrigade-bc30b076bbd6.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports = db
