//
// NotesController: Handles REST API endpoints for notes
//

const notesService = require('../services/notes');

class NotesController {
  // PUBLIC_INTERFACE
  /**
   * Create a note.
   */
  create(req, res) {
    /**
     * #swagger.summary = 'Create a new note'
     * #swagger.tags = ['Notes']
     */
    const { title, content } = req.body;
    if (typeof title !== 'string' || typeof content !== 'string') {
      return res.status(400).json({ error: 'Title and content must be strings.' });
    }
    const note = notesService.createNote({ title, content });
    return res.status(201).json(note);
  }

  // PUBLIC_INTERFACE
  /**
   * Get all notes.
   */
  getAll(req, res) {
    /**
     * #swagger.summary = 'Get all notes'
     * #swagger.tags = ['Notes']
     */
    return res.json(notesService.getAllNotes());
  }

  // PUBLIC_INTERFACE
  /**
   * Get a note by id.
   */
  getById(req, res) {
    /**
     * #swagger.summary = 'Get a note by id'
     * #swagger.tags = ['Notes']
     */
    const note = notesService.getNoteById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found.' });
    return res.json(note);
  }

  // PUBLIC_INTERFACE
  /**
   * Update a note by id.
   */
  update(req, res) {
    /**
     * #swagger.summary = 'Update a note by id'
     * #swagger.tags = ['Notes']
     */
    const updated = notesService.updateNote(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Note not found.' });
    return res.json(updated);
  }

  // PUBLIC_INTERFACE
  /**
   * Delete a note by id.
   */
  delete(req, res) {
    /**
     * #swagger.summary = 'Delete a note by id'
     * #swagger.tags = ['Notes']
     */
    const ok = notesService.deleteNote(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Note not found.' });
    return res.status(204).send();
  }
}

module.exports = new NotesController();
