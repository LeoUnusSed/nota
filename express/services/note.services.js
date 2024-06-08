// ./services/NoteService.js
const path = require('path');
console.log('--------------Current directory:', __dirname);
console.log('--------------Resolved path:', path.join(__dirname, '../models/Note'));
const Note = require(path.join(__dirname, '../models/Note'));


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
        const newNote = new Note({ content, userId, timestamp });
        const savedNote = await newNote.save();
        return savedNote;
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};


// router.post('/notes', (request, response) => {
//     const body = request.body

//     if (body.content === undefined) {
//         return response.status(400).json({ error: 'content missing' })
//     }

//     const note = new Note({
//         userid: body.userid,
//         timestamp: body.timestamp,
//         content: body.content,
//     })

//     note.save().then(savedNote => {
//         response.json(savedNote)
//     })
// })



// exports.allNotes = async (reqBody) => {
//   // const { email, password } = reqBody;
//   UserModel.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         if (user.password === password) {
//           res.json({ status: "Success", userId: user._id })
//         } else {
//           res.json("The password is incorrect")
//         }
//       } else {
//         res.json("No record existed")
//       }
//     })

//   return await User.findById(id);
// };




// router.get('/notes', (request, response) => {
//     Note.find({}).then(notes => {
//         response.json(notes)
//     })
// })

// router.post('/notes', (request, response) => {
//     const body = request.body

//     if (body.content === undefined) {
//         return response.status(400).json({ error: 'content missing' })
//     }

//     const note = new Note({
//         userid: body.userid,
//         timestamp: body.timestamp,
//         content: body.content,
//     })

//     note.save().then(savedNote => {
//         response.json(savedNote)
//     })
// })

// router.get('/notes/:id', (request, response, next) => {
//     Note.findById(request.params.id)
//         .then(note => {
//             if (note) {
//                 response.json(note)
//             } else {
//                 response.status(404).end()
//             }
//         })
//         .catch(error => next(error))
// })

// router.delete('/notes/:id', (request, response, next) => {
//     Note.findByIdAndDelete(request.params.id)
//         .then(result => {            response.status(204).end()        })
//         .catch(error => next(error))
// })

// router.put('/notes/:id', (request, response, next) => {
//     const body = request.body

//     const note = {
//         content: body.content,
//         important: body.important,
//     }

//     Note.findByIdAndUpdate(request.params.id, note, { new: true })
//         .then(updatedNote => {
//             response.json(updatedNote)
//         })
//         .catch(error => next(error))
// })

// module.exports = router;












// router.get('/notes', (request, response) => {
//   Note.find({}).then(notes => {
//       response.json(notes)
//   })
// })

// router.post('/notes', (request, response) => {
//   const body = request.body

//   if (body.content === undefined) {
//       return response.status(400).json({ error: 'content missing' })
//   }

//   const note = new Note({
//       userid: body.userid,
//       timestamp: body.timestamp,
//       content: body.content,
//   })

//   note.save().then(savedNote => {
//       response.json(savedNote)
//   })
// })

// router.get('/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//       .then(note => {
//           if (note) {
//               response.json(note)
//           } else {
//               response.status(404).end()
//           }
//       })
//       .catch(error => next(error))
// })

// router.delete('/notes/:id', (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//       .then(result => {            response.status(204).end()        })
//       .catch(error => next(error))
// })

// router.put('/notes/:id', (request, response, next) => {
//   const body = request.body

//   const note = {
//       content: body.content,
//       important: body.important,
//   }

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//       .then(updatedNote => {
//           response.json(updatedNote)
//       })
//       .catch(error => next(error))
// })
