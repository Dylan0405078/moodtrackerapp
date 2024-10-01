import React from 'react';

interface DiaryEntry {
  mood: string;
  note: string;
  date: string;
}

interface DiaryListProps {
  entries: DiaryEntry[];
  deleteEntry: (index: number) => void;
}

const DiaryList: React.FC<DiaryListProps> = ({ entries, deleteEntry }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {entries.map((entry, index) => (
        <div key={index} className="diary-entry flex flex-col justify-between p-4">
          <div>
            <h2 className="font-bold text-lg">{entry.mood}</h2>
            <p>message: {entry.note}</p>
            <p className="text-sm text-gray-600">{entry.date}</p>
          </div>
          <button
            onClick={() => deleteEntry(index)}
            className="mt-2 btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
