import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET all properties
router.get('/', (req, res) => {
  db.query('SELECT * FROM properties ORDER BY id ASC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST a new property
router.post('/', (req, res) => {
  const { propertyName, price, priceInUSD, bedrooms, bathrooms, location, imageURL } = req.body;

  const sql = `
    INSERT INTO properties (propertyName, price, priceInUSD, bedrooms, bathrooms, location, imageURL)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [propertyName, price, priceInUSD, bedrooms, bathrooms, location, imageURL], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

export default router;