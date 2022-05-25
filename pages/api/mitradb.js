const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection Transaksi
async function getMitra(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let mitra = await db
            .collection('mitra')
            .find({})
            .sort({ idMitra: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(mitraPending)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// menambah data kedalam collection Transaksi
async function addMitra(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('mitraPending').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Mitra Pending Telah di Tambahkan',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// CRUD handler
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getMitra(req, res);
        }
        case 'POST': {
            return addMitra(req, res);
        }
        case 'PUT': {
            return updateMitra(req, res);
        }
        case 'DELETE': {
            return deleteMitra(req, res);
        }
    }
}