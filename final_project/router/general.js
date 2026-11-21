import { Router } from "express";
import axios from "axios";
import * as authControllers from "../../controllers/auth.js";
import * as bookControllers from "../../controllers/book.js";
import * as reviewControllers from "../../controllers/review.js";

const router = Router();
const BASE_URL = process.env.PUBLIC_API_URL
    || `http://localhost:${process.env.PORT || 5000}/api/v1`;

router.post("/register", authControllers.register);
router.get("/", bookControllers.getAllBooks);
router.get("/isbn/:isbn", async (req, res, next) => {
    req.body = { ISBN: req.params.isbn };
    return bookControllers.getBooksByISBN(req, res, next);
});
router.get("/author/:author", async (req, res, next) => {
    req.body = { author: req.params.author };
    return bookControllers.getBooksByAuthor(req, res, next);
});
router.get("/title/:title", async (req, res, next) => {
    req.body = { title: req.params.title };
    return bookControllers.getBooksByTitle(req, res, next);
});
router.get("/review/:isbn", reviewControllers.getReviewByISBN);

export function getAllBooksWithPromise() {
    return axios.get(`${BASE_URL}/`)
        .then((response) => response.data);
}

export async function getBookByISBN(isbn) {
    const response = await axios.get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`);
    return response.data;
}

export async function getBooksByAuthor(author) {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return response.data;
}

export async function getBooksByTitle(title) {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
}

export const publicUsers = router;
export default router;
