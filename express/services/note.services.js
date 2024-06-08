// ./services/NoteService.js
const path = require('path');
console.log('--------------Current directory:', __dirname);
console.log('--------------Resolved path:', path.join(__dirname, '../models/Note'));
const NoteModel = require(path.join(__dirname, '../models/Note'));
// const Note = require('../models/Note.js');

exports.getNotes = async () => {
    try {
        const notes = await Note.find({});
        return notes;
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};

exports.createNote = async (noteData) => {
    const { content, userId, timestamp } = noteData; // Destructure for clarity

    try {
        const newNote = new NoteModel({ content, userId, timestamp });
        const savedNote = await newNote.save();
        return savedNote;
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};

