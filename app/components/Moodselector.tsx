import React from 'react';

type MoodSelectorProps = {
  selectedMood: string;
  setSelectedMood: (mood: string) => void;
};

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, setSelectedMood }) => {
  const moods = ['Happy😃', 'Sad😢', 'Excited🤩', 'Bored😴', 'Angry🤬', 'Horny🤤', 'Anxious😟', 'Calm😌', 'Frustrated😤', 'Confident😎', 'Nostalgic🥺', 'Cold💀'
];

  return (
    <div className="mb-6">
      <h2 className="font-hand text-2xl mb-2">Select your mood:</h2>
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
        className="p-2 rounded-lg shadow-md border border-gray-300 w-full text-lg bg-white bg-opacity-50 backdrop-blur-lg"
      >
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
