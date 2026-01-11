import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';

const LoveLetterWordSearch = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [daysLeft, setDaysLeft] = useState(0);
  const [selectedCells, setSelectedCells] = useState([]);
  const [loveMeter, setLoveMeter] = useState(0);
  const [cluesShown, setCluesShown] = useState(0);
  const [wordRevealed, setWordRevealed] = useState(false);
  const [wordFound, setWordFound] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('😍');
  const [kisses, setKisses] = useState([]);
  const [correctLettersCount, setCorrectLettersCount] = useState(0);
  const [celebrationKisses, setCelebrationKisses] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [audio, setAudio] = useState(null);

  // Daily letters from Jan 10 to Feb 1
  const dailyLetters = {
    '2025-01-10': {
      word: 'HUMMUS',
      clues: [
        'Something that you said was a favourite condiment to be eaten with anything',
        'It still sits untouched in our dairy section',
        'You infamously said Hum ghar pe bhi bana sakte hain aur roti ke saath bhi kha sakte hain'
      ],
      letter: `
for the past few weeks it has been really tough for me to find happiness in things
that I used to do and I often questioned myself for it. How is it so different now
that the definition of happiness changed for me?

kisne bola tujse itna kushi dene ko? 🤬 
You don’t even have to try. Just effortlessly and just by existing near me you used to make bright piercing sun turn into soft soothing sun everyday. 

Even in your most toughest times with your job, you still made me happy and at peace by doing the most biggest of things like starting the day with me in bed with loads of kisses and giggles. Looking over me with the most loving eyes while I’m making coffee for you. Just trying to spend as much time as possible with me in our home while you stalled your own wars for the day.

I can’t go back to the state where I was ‘me’ happy, there would be some happiness sure but with you I experienced the peak of that state. It became regular to me like some drug that now I’m having a grand withdrawal. You changed how I perceived happiness my moon.

With you, even ordinary days seem worth remembering.

To look back on it and smile. That is my dosage now. Hopefully we will have our ordinary days coming back real soon. For me to admire, adore and love you more and more every day.

Forever yours in every little universe we built
Your Paapuu
`,
letterPictureCaption: 'you changed how I perceived happiness',
letterSalutation: 'Enn Ammukutty',
      polaroid1: '/images/p1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/p2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'muuuuuuuu',
      polaroid2Caption: 'i wouwww uuu',
      letterImage: '/images/l1.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Voh dekhnay Mein - Ali Zafar',
          subtitle: 'Haan ye gana tere liye bana hain',
          image: '/images/1.jpeg',
          audioUrl: '/songs/dekhnay.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Cherry Wine - Hozier',
          subtitle: 'yep you are my cherry wine',
          image: '/images/2.jpeg',
          audioUrl: '/songs/cherry-wine.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Que Sera, Sera - Doris Day',
          subtitle: 'was feeling too much when you were singing it',
          image: '/images/3.jpeg',
          audioUrl: '/songs/que-sara.mp3' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-11': {
      word: 'JASMINE',
      clues: [
        'You introduced me to creating a smell of home',
        'A fragrant flower you chose because you like it',
        'An aromatic white flower often used in perfumes'
      ],
      letter: `My Beautiful Soulmate,

The scent of jasmine fills our home, and with it, the essence of you. You taught me that home isn't just a place—it's a feeling, a fragrance, a memory of warmth and love. Every time that scent reaches me, I close my eyes and feel you near.

You have this incredible gift of turning ordinary moments into something magical. A simple flower choice became our signature, our story, our way of saying "I'm home" even when we're apart.

Forever inhaling the memories of you,
Your Love 🌸`,
      polaroid1: '🌸',
      polaroid2: '🌺',
      letterImage: '🌸',
      songs: [
        {
          title: 'Jasmine Dreams',
          subtitle: 'Reminds me of your essence',
          image: '🌸',
          audioUrl: ''
        },
        {
          title: 'Home With You',
          subtitle: 'Wherever you are is home',
          image: '🏡',
          audioUrl: ''
        },
        {
          title: 'Sweet Memories',
          subtitle: 'Our favorite moments together',
          image: '✨',
          audioUrl: ''
        }
      ]
    },
    '2025-01-12': {
      word: 'SUNRISE',
      clues: [
        'The moment when the world wakes up',
        'How you brighten my mornings',
        'The daily rebirth of light and hope'
      ],
      letter: `My Sunshine,

Every morning when the sun rises, I think of you. You are my sunrise—the light that breaks through my darkness, the warmth that starts my day, the hope that keeps me going. Without you here, mornings feel incomplete, like watching a sunrise through a closed window.

But I know that soon, I'll wake up to your smile again, and that will be the most beautiful sunrise of all.

Counting down to our dawn together,
Your Love ☀️`,
      polaroid1: '☀️',
      polaroid2: '🌅',
      letterImage: '☀️',
      songs: [
        {
          title: 'Morning Light',
          subtitle: 'You are my sunrise',
          image: '☀️',
          audioUrl: ''
        },
        {
          title: 'New Day With You',
          subtitle: 'Every morning I think of you',
          image: '🌅',
          audioUrl: ''
        },
        {
          title: 'Golden Hour',
          subtitle: 'Our perfect moments',
          image: '✨',
          audioUrl: ''
        }
      ]
    }
  };

  const wrongEmojis = ['💩', '🐼', '😠', '😢', '😰', '😭'];
  const loveEmojis = ['😍', '🥰', '💕', '😘', '❤️', '💝', '🌟', '✨', '💖', '💗'];

  useEffect(() => {
    calculateDaysLeft();
  }, []);

  const calculateDaysLeft = () => {
    const targetDate = new Date('2025-02-01');
    const startDate = new Date('2025-01-11');
    startDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  };

  const getTodayDate = () => {
    return '2025-01-10'; // For demo, you can change this to get current date
  };

  const todayData = dailyLetters[getTodayDate()] || dailyLetters['2025-01-10'];
  const gridSize = 8;

  const generateGrid = () => {
    const grid = Array(gridSize).fill(null).map(() => 
      Array(gridSize).fill('').map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    const word = todayData.word;
    const directions = [
      { dx: 0, dy: 1 },  // horizontal
      { dx: 1, dy: 0 },  // vertical
      { dx: 1, dy: 1 }   // diagonal
    ];
    
    const direction = directions[Math.floor(Math.random() * directions.length)];
    let startRow = Math.floor(Math.random() * (gridSize - word.length * Math.abs(direction.dx)));
    let startCol = Math.floor(Math.random() * (gridSize - word.length * Math.abs(direction.dy)));

    for (let i = 0; i < word.length; i++) {
      grid[startRow + i * direction.dx][startCol + i * direction.dy] = word[i];
    }

    return grid;
  };

  const [grid] = useState(generateGrid());

  const getCorrectCellsInSelection = (cells) => {
    const wordCells = [];
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const cellKey = `${r}-${c}`;
        if (cells.includes(cellKey)) {
          const letter = grid[r][c];
          if (todayData.word.includes(letter)) {
            wordCells.push(cellKey);
          }
        }
      }
    }
    return wordCells.length;
  };

  const handleCellClick = (row, col) => {
    if (wordFound) return;

    const cellKey = `${row}-${col}`;
    let newSelected = [...selectedCells];
    
    if (newSelected.includes(cellKey)) {
      newSelected = newSelected.filter(c => c !== cellKey);
    } else {
      newSelected.push(cellKey);
    }
    
    setSelectedCells(newSelected);
    
    const correctCount = getCorrectCellsInSelection(newSelected);
    const letter = grid[row][col];
    
    if (todayData.word.includes(letter) && !selectedCells.includes(cellKey)) {
      // Correct letter selected
      setCorrectLettersCount(correctCount);
      const newMeter = Math.min(10, Math.floor((correctCount / todayData.word.length) * 10));
      setLoveMeter(newMeter);
      setCurrentEmoji(loveEmojis[Math.floor(Math.random() * loveEmojis.length)]);
    } else if (!todayData.word.includes(letter) && !selectedCells.includes(cellKey)) {
      // Wrong letter selected
      const randomWrongEmoji = wrongEmojis[Math.floor(Math.random() * wrongEmojis.length)];
      setCurrentEmoji(randomWrongEmoji);
      setTimeout(() => {
        setCurrentEmoji(loveEmojis[Math.floor(Math.random() * loveEmojis.length)]);
      }, 1500);
    }
    
    checkForWord(newSelected);
  };

  const checkForWord = (cells) => {
    const selectedLetters = cells
      .sort((a, b) => {
        const [r1, c1] = a.split('-').map(Number);
        const [r2, c2] = b.split('-').map(Number);
        return r1 - r2 || c1 - c2;
      })
      .map(cell => {
        const [r, c] = cell.split('-').map(Number);
        return grid[r][c];
      })
      .join('');

    if (selectedLetters === todayData.word) {
      setWordFound(true);
      setLoveMeter('∞');
      setCurrentEmoji('😍');
      
      // Create celebration kisses
      const allKisses = [];
      for (let i = 0; i < 50; i++) {
        allKisses.push({
          id: Date.now() + i,
          x: Math.random() * 100,
          delay: Math.random() * 2
        });
      }
      setCelebrationKisses(allKisses);
      
      setTimeout(() => {
        setCurrentPage('letter');
        setCelebrationKisses([]);
      }, 3000);
    }
  };

  const handleShowClue = () => {
    const randomWrongEmoji = wrongEmojis[Math.floor(Math.random() * wrongEmojis.length)];
    setCurrentEmoji(randomWrongEmoji);
    
    setTimeout(() => {
      setCurrentEmoji(loveEmojis[Math.floor(Math.random() * loveEmojis.length)]);
    }, 1500);

    if (cluesShown < 2) {
      setCluesShown(cluesShown + 1);
    } else if (cluesShown === 2 && !wordRevealed) {
      setWordRevealed(true);
    }
  };

  const sendKisses = () => {
    const newKisses = Array(30).fill(null).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5
    }));
    setKisses(newKisses);
    setTimeout(() => setKisses([]), 3000);
  };

  const resetGame = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setCurrentPage('home');
    setSelectedCells([]);
    setLoveMeter(0);
    setCluesShown(0);
    setWordRevealed(false);
    setWordFound(false);
    setCurrentEmoji('😍');
    setKisses([]);
    setCorrectLettersCount(0);
    setCelebrationKisses([]);
    setSelectedSong(null);
    setAudio(null);
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  const handleContinueToGame = () => {
    if (selectedSong && selectedSong.audioUrl) {
      const newAudio = new Audio(selectedSong.audioUrl);
      newAudio.loop = true;
      newAudio.play().catch(err => console.log('Audio play failed:', err));
      setAudio(newAudio);
    }
    setCurrentPage('game');
  };

  const getLoveMeterText = () => {
    if (loveMeter === '∞') return 'me everything forever 💖';
    const texts = [
      "word dhoond! 🔍",
      "me appi 💩",
      "chundrumannnniiiiiiii 💫",
      "me thangamkudam 🤩",
      "me sweet potato 🍠",
      "Getting warmer 🌡️",
      "me sunshine ☀️",
      "me darling 💝",
      "me angel 👼",
      "me treasure 💎",
      "me gorgeous 💫",
      "me moon 🌙"
    ];
    return texts[Math.min(loveMeter, texts.length - 1)];
  };

  // Home Page
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Polaroid Photos */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white p-4 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-48 h-48 flex items-center justify-center overflow-hidden">
                <img src={todayData.polaroid1} alt="Memory 1" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-sm">{todayData.polaroid1Caption}</p>
            </div>
            <div className="bg-white p-4 shadow-xl transform rotate-6 hover:rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-48 h-48 flex items-center justify-center overflow-hidden">
                <img src={todayData.polaroid2} alt="Memory 2" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-sm">{todayData.polaroid2Caption}</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto text-pink-500 animate-pulse" />
            <h1 className="text-4xl font-bold text-gray-800">Hello Bootiful! 💕</h1>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6">
              <p className="text-gray-700 text-lg mb-2">Days until February 1st:</p>
              <p className="text-6xl font-bold text-purple-600">{daysLeft}</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye 
              <br />
              Find the word to unlock today's letter.
            </p>
            <button
              onClick={() => setCurrentPage('songs')}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Shuru kare aaj ka? ✨
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Songs Selection Page
  if (currentPage === 'songs') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8 animate-fade-in">
            <Sparkles className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h2 className="text-4xl font-bold text-pink-600 mb-2">Pehle mood set kare?</h2>
            <p className="text-gray-600 text-lg">You walked into my life with a ton of good songs</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl p-8 shadow-2xl mb-6">
            <p className="text-center text-pink-600 font-medium mb-6">Choose a track to start vibing while you solve the puzzle ✨</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {todayData.songs.map((song, index) => (
                <button
                  key={index}
                  onClick={() => handleSongSelect(song)}
                  className={`group bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedSong?.title === song.title
                      ? 'ring-4 ring-pink-400 scale-105'
                      : 'hover:shadow-xl'
                  }`}
                >
                  <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl aspect-square flex items-center justify-center mb-3 overflow-hidden">
                    <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{song.title}</h3>
                  <p className="text-sm text-gray-600">{song.subtitle}</p>
                  {selectedSong?.title === song.title && (
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-75"></span>
                      <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-150"></span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleContinueToGame}
              disabled={!selectedSong}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg ${
                selectedSong
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Next ✨
            </button>
          </div>
        </div>

        <style jsx>{`
          .delay-75 {
            animation-delay: 0.075s;
          }
          .delay-150 {
            animation-delay: 0.15s;
          }
        `}</style>
      </div>
    );
  }

  // Game Page
  if (currentPage === 'game') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 relative overflow-hidden">
        {/* Celebration Kisses */}
        {celebrationKisses.map(kiss => (
          <span
            key={kiss.id}
            className="absolute text-4xl animate-rain pointer-events-none z-50"
            style={{
              left: `${kiss.x}%`,
              top: '-10%',
              animationDelay: `${kiss.delay}s`
            }}
          >
            💖
          </span>
        ))}

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Woh word dhoond, Thoda dimag ka isthimal kar 💝
            </h2>
            
            {/* Hints Section */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Hints:</h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm">1. {todayData.clues[0]}</p>
                {cluesShown >= 1 && (
                  <p className="text-gray-700 text-sm">2. {todayData.clues[1]}</p>
                )}
                {cluesShown >= 2 && (
                  <p className="text-gray-700 text-sm">3. {todayData.clues[2]}</p>
                )}
              </div>
              <button
                onClick={handleShowClue}
                disabled={wordRevealed}
                className={`mt-3 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  wordRevealed
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                {cluesShown < 2 ? 'Show Next Clue' : wordRevealed ? 'Word Revealed' : 'Show Word'}
              </button>
              {wordRevealed && (
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-600 mb-1">Find this word:</p>
                  <p className="text-2xl font-bold text-purple-600">{todayData.word}</p>
                </div>
              )}
            </div>

            {/* Word Search Grid */}
            <div className="flex justify-center mb-6">
              <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
                {grid.map((row, rowIdx) =>
                  row.map((letter, colIdx) => {
                    const cellKey = `${rowIdx}-${colIdx}`;
                    const isSelected = selectedCells.includes(cellKey);
                    return (
                      <button
                        key={cellKey}
                        onClick={() => handleCellClick(rowIdx, colIdx)}
                        disabled={wordFound}
                        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg sm:text-xl rounded transition-all ${
                          isSelected
                            ? 'bg-pink-400 text-white scale-110 shadow-lg'
                            : wordFound
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-gray-700 hover:bg-purple-200'
                        }`}
                      >
                        {letter}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Love Meter */}
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl transition-all duration-300">
                  {currentEmoji}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Love Meter</span>
                    <span className="text-2xl font-bold text-pink-600">
                      {loveMeter === '∞' ? '∞' : `${loveMeter}/10`}
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-full transition-all duration-500"
                      style={{ width: loveMeter === '∞' ? '100%' : `${(loveMeter / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-center mt-2 text-purple-700 font-medium">
                    {getLoveMeterText()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes rain {
            0% { 
              transform: translateY(0) rotate(0deg); 
              opacity: 1; 
            }
            100% { 
              transform: translateY(120vh) rotate(360deg); 
              opacity: 0.5; 
            }
          }
          .animate-rain {
            animation: rain 3s linear forwards;
          }
        `}</style>
      </div>
    );
  }

  // Letter Page
  if (currentPage === 'letter') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
        {kisses.map(kiss => (
          <span
            key={kiss.id}
            className="absolute text-4xl animate-float pointer-events-none"
            style={{
              left: `${kiss.x}%`,
              top: `${kiss.y}%`,
              animationDelay: `${kiss.delay}s`
            }}
          >
            💋
          </span>
        ))}

        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
          <Sparkles className="w-12 h-12 mx-auto text-yellow-500" />
          
          {/* Main Polaroid with Letter Image */}
          <div className="bg-white p-4 shadow-lg mx-auto max-w-sm transform rotate-2">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 aspect-square flex items-center justify-center overflow-hidden">
                <img src={todayData.letterImage} alt="Our Love" className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-2 text-gray-600 italic text-sm">{todayData.letterPictureCaption}</p>
          </div>

          <div className="prose prose-pink max-w-none">
            <p className="text-2xl font-bold text-gray-800 mb-4">{todayData.letterSalutation},</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {todayData.letter}
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <button
              onClick={sendKisses}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-4 px-6 rounded-full hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Virtual Kisses 💋
            </button>
            <a
              href="https://wa.me/918139839442?text=Me%20Paapu"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-full hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-center"
            >
              Respond to the Love Letter 💬
            </a>
            <button
              onClick={resetGame}
              className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold py-4 px-6 rounded-full hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Love Letter
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-100px) rotate(180deg); opacity: 0.5; }
          }
          .animate-float {
            animation: float 2s ease-in-out forwards;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </div>
    );
  }
};

export default LoveLetterWordSearch;