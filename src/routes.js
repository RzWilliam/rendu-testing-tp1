import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { registerMember, getMember, getAllMembers } from "./controllers/memberController.js";
import { createOrder, getOrder } from "./controllers/orderController.js";

const router = express.Router();

// Définir __dirname pour ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes pour les pages HTML
router.get('/memberRegistration.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'memberRegistration.html'));
});

router.get('/productSelection.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'productSelection.html'));
});

router.get('/orderReview.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'orderReview.html'));
});

router.get('/orderConfirmation.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'orderConfirmation.html'));
});

// Routes pour les membres
router.post("/members", registerMember);
router.get("/members", getAllMembers)
router.get("/members/:id", getMember);

// Routes pour les commandes
router.post("/orders", createOrder);
router.get("/orders/:id", getOrder);

export default router;