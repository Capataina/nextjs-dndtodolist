import { create } from 'zustand';

type Note = {
  id: string;
  title: string;
  description: string;
  tag: 'Planning' | 'Working' | 'Done';
};

interface NoteStore {
  notes: Note[];
  addNote: (title: string, description: string, tag: 'Planning' | 'Working' | 'Done') => void;
  updateNoteTag: (noteId: string, newTag: 'Planning' | 'Working' | 'Done') => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (title, description, tag: 'Planning' | 'Working' | 'Done') =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: `${Date.now()}`, // Using timestamp as a simple unique ID for the note
          title,
          description,
          tag,
        },
      ],
    })),
  updateNoteTag: (noteId: string, newTag: 'Planning' | 'Working' | 'Done') =>
    set((state: NoteStore) => ({
      notes: state.notes.map((note) =>
        note.id === noteId ? { ...note, tag: newTag } : note
      ),
    })),
}));

export default useNoteStore;
