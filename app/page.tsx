'use client'; // Voeg dit bovenaan toe

import { useEffect, useState } from 'react';
import MoodSelector from './components/Moodselector';
import DiaryList from './components/DiaryList';
import NoteInput from './components/NoteInput';
import './globals.css';

const Home = () => {
  const [selectedMood, setSelectedMood] = useState<string>('Happy');
  const [note, setNote] = useState<string>('');
  const [entries, setEntries] = useState<{ mood: string; note: string; date: string }[]>([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = () => {
    const newEntry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString(),
    };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    setNote('');
  };

  const deleteEntry = (index: number) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="container">
      <h1 className="font-hand">My Mood Tracker</h1>

      <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
      <NoteInput note={note} setNote={setNote} />

      <button onClick={saveEntry} className="btn">
        Save Entry
      </button>

      <DiaryList entries={entries} deleteEntry={deleteEntry} />
    </div>
  );
};

export default Home;