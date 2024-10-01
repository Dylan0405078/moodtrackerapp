import React from 'react';

type DiaryEntryProps = {
  mood: string;
  note: string;
  dateTime: string;
  deleteEntry: (id: string) => void; // Wijzig naar id
  id: string; // Ontvang de id als prop
};

const DiaryEntry: React.FC<DiaryEntryProps> = ({ mood, note, dateTime, deleteEntry, id }) => {
  return (
    <div className="bg-white bg-opacity-70 border-2 border-gray-200 p-4 rounded-lg shadow-lg relative">
      <p className="font-hand text-lg"><strong>Mood:</strong> {mood}</p>
      <p className="font-hand text-md"><strong>Note:</strong> {note}</p>
      <p className="font-hand text-sm text-right italic mt-2">{dateTime}</p>
      <button
        onClick={() => deleteEntry(id)} // Verwijder op ID
        className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 w-full"
      >
        Delete Entry
      </button>
    </div>
  );
};

export default DiaryEntry;
