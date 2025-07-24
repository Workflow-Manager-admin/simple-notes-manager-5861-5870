//
// NotesService: In-memory notes storage with CRUD operations
//

let notes = [];
let nextId = 1;

// PUBLIC_INTERFACE
class NotesService {
  /**
   * Create a new note.
   * @param {Object} data
   * @param {string} data.title
   * @param {string} data.content
   * @returns {Object} note object
   */
  createNote(data) {
    const note = {
      id: nextId++,
      title: data.title || '',
      content: data.content || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    notes.push(note);
    return note;
  }

  /**
   * Get all notes.
   * @returns {Array<Object>} list of notes
   */
  getAllNotes() {
    return notes;
  }

  /**
   * Get a note by its id.
   * @param {number|string} id
   * @returns {Object|null} note or null
   */
  getNoteById(id) {
    return notes.find(note => note.id === Number(id)) || null;
  }

  /**
   * Update a note by its id.
   * @param {number|string} id
   * @param {Object} data
   * @returns {Object|null} updated note or null
   */
  updateNote(id, data) {
    const note = notes.find(note => note.id === Number(id));
    if (!note) return null;
    note.title = typeof data.title !== 'undefined' ? data.title : note.title;
    note.content = typeof data.content !== 'undefined' ? data.content : note.content;
    note.updatedAt = new Date().toISOString();
    return note;
  }

  /**
   * Delete a note by its id.
   * @param {number|string} id
   * @returns {boolean} true if deleted, false if not found
   */
  deleteNote(id) {
    const idx = notes.findIndex(note => note.id === Number(id));
    if (idx === -1) return false;
    notes.splice(idx, 1);
    return true;
  }

  /**
   * Reset notes (for testing or restart).
   */
  reset() {
    notes = [];
    nextId = 1;
  }
}

module.exports = new NotesService();
