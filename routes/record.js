const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Lấy tất cả dữ liệu
router.get('/', (req, res) => {
    db.query('SELECT * FROM records', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
        } else {
            res.json({ data: results });
        }
    });
});

// Thêm mới dữ liệu
router.post('/create', (req, res) => {
    const { area, age, processing_method, quantity, volume } = req.body;
    db.query(
        'INSERT INTO records SET ?',
        { area, age, processing_method, quantity, volume },
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Lỗi khi thêm mới dữ liệu' });
            } else {
                res.json({ message: 'Thêm mới dữ liệu thành công', id: result.insertId });
            }
        }
    );
});

// Cập nhật dữ liệu
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { area, age, processing_method, quantity, volume } = req.body;
    db.query(
        'UPDATE records SET area = ?, age = ?, processing_method = ?, quantity = ?, volume = ? WHERE id = ?',
        [area, age, processing_method, quantity, volume, id],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Lỗi khi cập nhật dữ liệu' });
            } else {
                res.json({ message: 'Cập nhật dữ liệu thành công' });
            }
        }
    );
});

// Xóa dữ liệu
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM records WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Lỗi khi xóa dữ liệu' });
        } else {
            res.json({ message: 'Xóa dữ liệu thành công' });
        }
    });
});

module.exports = router;