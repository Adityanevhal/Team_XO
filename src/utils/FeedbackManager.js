/* ========================================
   Smart City Planner - Feedback Manager
   ========================================

   Simple in-memory storage for citizen feedback reports.
*/

export class FeedbackManager {
    constructor() {
        this.entries = [];
    }

    add(type, description, x = null, y = null) {
        const entry = { type, description, x, y, timestamp: Date.now() };
        this.entries.push(entry);
        return entry;
    }

    getAll() {
        return [...this.entries];
    }

    clear() {
        this.entries = [];
    }
}
