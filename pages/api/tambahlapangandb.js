const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection Tambahlapangandb
async function getTambahlapangandb(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let tambahlapangandb = await db
            .collection('tambahlapangandb')
            .find({})
            .sort({ idTambahlapangandb: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(tambahlapangandb)),
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
// menambah data kedalam collection Tambahlapangandb
async function addTambahlapangandb(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('Tambahlapangandb').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data Tambahlapangandb Telah di Tambahkan',
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
            return getTambahlapangandb(req, res);
        }
        case 'POST': {
            return addTambahlapangandb(req, res);
        }
        case 'PUT': {
            return updateTambahlapangandb(req, res);
        }
        case 'DELETE': {
            return deleteTambahlapangandb(req, res);
        }
    }
}