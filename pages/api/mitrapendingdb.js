const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection Transaksi
async function getMitraPending(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let mitraPending = await db
            .collection('mitraPending')
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
async function addMitraPending(req, res) {
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
            return getMitraPending(req, res);
        }
        case 'POST': {
            return addMitraPending(req, res);
        }
        case 'PUT': {
            return updateMitraPending(req, res);
        }
        case 'DELETE': {
            return deleteMitraPending(req, res);
        }
    }
}