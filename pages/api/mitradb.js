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
            message: JSON.parse(JSON.stringify(mitra)),
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
        await db.collection('mitra').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Mitra Telah di Tambahkan',
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

async function deleteMitra(req, res) {
    var ObjectId = require('mongodb').ObjectId;
    const { _id } = req.body;
    const { namaVenue } = req.body;
    const convertedObjectId = new ObjectId(_id);
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();
        // Deleting the post
        await db.collection('favorit').deleteMany({
            'namaVenue': namaVenue
        });
        await db.collection('mitra').deleteOne({
            '_id': convertedObjectId
        });
        // returning a message
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        // returning an error
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