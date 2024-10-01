import React from 'react';

type NoteInputProps = {
  note: string;
  setNote: (note: string) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ note, setNote }) => {
  return (
    <div className="mb-6">
      <h2 className=" text-2xl font-extrabold mb-2">Write your note:</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
        className="p-4 rounded-lg shadow-md border border-gray-300 w-full text-lg bg-pink-100 bg-opacity-50 backdrop-blur-lg"
        placeholder="What's on your mind?"
      />
    </div>
  );
};

export default NoteInput;
