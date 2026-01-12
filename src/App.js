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
        'It still sits untouched in our dairy section in fridge',
        'You infamously said Hum ghar pe bhi bana sakte hain aur roti ke saath bhi kha sakte hain'
      ],
      letter: `<p>
  Enn Ammukutty,<br><br>

  for the past few weeks it has been really tough for me to find happiness in things
  that I used to do and I often questioned myself for it. How is it so different now
  that the definition of happiness changed for me?<br><br>

  kisne bola tujse itna kushi dene ko? 🤬 You don’t even have to try, just effortlessly,
  just by existing near me you used to make bright piercing sun turn into soft soothing
  sun everyday. Even in your most toughest times with your job, you still made me happy
  and at peace by doing the most biggest of things like starting the day with me in bed
  with loads of kisses and giggles. Looking over me with the most loving eyes while I’m
  making coffee for you. Just trying to spend as much time as possible with me in our
  home while you stalled your own wars for the day.<br><br>

  I can’t go back to the state where I was ‘me’ happy, there would be some happiness
  sure but with you I experienced the peak of that state. It became regular to me like
  some drug that now I’m having a grand withdrawal. You changed how I perceived
  happiness my moon.<br><br>

  With you, even ordinary days seem worth remembering.<br><br>

  To look back on it and smile. That is my dosage now. Hopefully we will have our
  ordinary days coming real soon.<br><br>

  Forever yours in every little universe<br>
  Your paapuu
</p>`,
      polaroid1: '❤️', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '💕', // Replace with image URL: 'https://example.com/photo2.jpg'
      letterImage: '❤️', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Our Song',
          subtitle: 'The one that makes me think of you',
          image: '🎵',
          audioUrl: '/songs/dekhnay.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'When We First Met',
          subtitle: 'Takes me back to that moment',
          image: '💕',
          audioUrl: '' // Add your .mp3 file URL here
        },
        {
          title: 'Missing You',
          subtitle: 'Every night without you',
          image: '🌙',
          audioUrl: '' // Add your .mp3 file URL here
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays > 0 ? diffDays : 0);
  };

  const getTodayDate = () => {
    return '2025-01-11'; // For demo, you can change this to get current date
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
      "Start finding me! 🔍",
      "You're getting there 💫",
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
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Polaroid Photos */}
          <div className="flex justify-center gap-4 md:gap-12 mb-6 md:mb-12">
            <div className="bg-white p-3 md:p-5 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-32 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center overflow-hidden">
                {typeof todayData.polaroid1 === 'string' && todayData.polaroid1.startsWith('http') ? (
                  <img src={todayData.polaroid1} alt="Memory 1" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl md:text-7xl lg:text-8xl">{todayData.polaroid1}</span>
                )}
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-xs md:text-base">Our moment</p>
            </div>
            <div className="bg-white p-3 md:p-5 shadow-xl transform rotate-6 hover:rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-32 h-32 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center overflow-hidden">
                {typeof todayData.polaroid2 === 'string' && todayData.polaroid2.startsWith('http') ? (
                  <img src={todayData.polaroid2} alt="Memory 2" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl md:text-7xl lg:text-8xl">{todayData.polaroid2}</span>
                )}
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-xs md:text-base">Together</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12 text-center space-y-6 animate-fade-in">
            <Heart className="w-12 h-12 md:w-24 md:h-24 mx-auto text-pink-500 animate-pulse" />
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800">Hello Beautiful! 💕</h1>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6 md:p-10">
              <p className="text-gray-700 text-base md:text-2xl mb-2">Days until February 1st:</p>
              <p className="text-5xl md:text-8xl font-bold text-purple-600">{daysLeft}</p>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
              Each day brings a new puzzle and a love letter from my heart to yours. 
              Find the hidden word to unlock today's message.
            </p>
            <button
              onClick={() => setCurrentPage('songs')}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 md:py-5 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-xl"
            >
              Start Today's Puzzle ✨
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Songs Selection Page
  if (currentPage === 'songs') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <Sparkles className="w-10 h-10 md:w-20 md:h-20 mx-auto text-pink-500 mb-4" />
            <h2 className="text-3xl md:text-6xl font-bold text-pink-600 mb-2">A Dedicated Playlist For You</h2>
            <p className="text-gray-600 text-base md:text-2xl">I Hope You'll Like It</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl p-6 md:p-12 shadow-2xl mb-6">
            <p className="text-center text-pink-600 font-medium mb-6 md:mb-10 text-sm md:text-2xl">Choose a track to start vibing ✨</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-10 max-w-5xl mx-auto">
              {todayData.songs.map((song, index) => (
                <button
                  key={index}
                  onClick={() => handleSongSelect(song)}
                  className={`group bg-white rounded-2xl p-5 md:p-8 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedSong?.title === song.title
                      ? 'ring-4 ring-pink-400 scale-105'
                      : 'hover:shadow-xl'
                  }`}
                >
                  <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                    {typeof song.image === 'string' && song.image.startsWith('http') ? (
                      <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl md:text-7xl">{song.image}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-xl">{song.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{song.subtitle}</p>
                  {selectedSong?.title === song.title && (
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 md:w-3 md:h-3 bg-pink-500 rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 md:w-3 md:h-3 bg-pink-500 rounded-full animate-pulse delay-75"></span>
                      <span className="w-2 h-2 md:w-3 md:h-3 bg-pink-500 rounded-full animate-pulse delay-150"></span>
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
              className={`px-10 md:px-16 py-4 md:py-6 rounded-full font-semibold text-base md:text-2xl transition-all duration-300 shadow-lg ${
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 md:p-8 relative overflow-hidden">
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

        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-4 md:p-10 mb-4">
            <h2 className="text-2xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-10">
              Find the Hidden Word 💝
            </h2>
            
            {/* Hints Section */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 md:p-8 mb-6 md:mb-10">
              <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-xl">Hints:</h3>
              <div className="space-y-2 md:space-y-3">
                <p className="text-gray-700 text-xs md:text-lg">1. {todayData.clues[0]}</p>
                {cluesShown >= 1 && (
                  <p className="text-gray-700 text-xs md:text-lg">2. {todayData.clues[1]}</p>
                )}
                {cluesShown >= 2 && (
                  <p className="text-gray-700 text-xs md:text-lg">3. {todayData.clues[2]}</p>
                )}
              </div>
              <button
                onClick={handleShowClue}
                disabled={wordRevealed}
                className={`mt-4 px-5 md:px-8 py-2 md:py-3 rounded-full font-medium text-sm md:text-lg transition-all ${
                  wordRevealed
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                {cluesShown < 2 ? 'Show Next Clue' : wordRevealed ? 'Word Revealed' : 'Show Word'}
              </button>
              {wordRevealed && (
                <div className="mt-4 md:mt-6 text-center">
                  <p className="text-sm md:text-lg text-gray-600 mb-2">Find this word:</p>
                  <p className="text-2xl md:text-5xl font-bold text-purple-600">{todayData.word}</p>
                </div>
              )}
            </div>

            {/* Word Search Grid */}
            <div className="flex justify-center mb-6 md:mb-10">
              <div className="inline-grid gap-1 md:gap-3" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
                {grid.map((row, rowIdx) =>
                  row.map((letter, colIdx) => {
                    const cellKey = `${rowIdx}-${colIdx}`;
                    const isSelected = selectedCells.includes(cellKey);
                    return (
                      <button
                        key={cellKey}
                        onClick={() => handleCellClick(rowIdx, colIdx)}
                        disabled={wordFound}
                        className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center font-bold text-base md:text-3xl rounded transition-all ${
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
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-4 md:p-8">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-4xl md:text-7xl transition-all duration-300">
                  {currentEmoji}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <span className="font-semibold text-gray-700 text-sm md:text-xl">Love Meter</span>
                    <span className="text-xl md:text-4xl font-bold text-pink-600">
                      {loveMeter === '∞' ? '∞' : `${loveMeter}/10`}
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3 md:h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-full transition-all duration-500"
                      style={{ width: loveMeter === '∞' ? '100%' : `${(loveMeter / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-center mt-2 md:mt-3 text-purple-700 font-medium text-xs md:text-lg">
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
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
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

        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6 animate-fade-in">
          <Sparkles className="w-10 h-10 md:w-16 md:h-16 mx-auto text-yellow-500" />
          
          {/* Main Polaroid with Letter Image */}
          <div className="bg-white p-4 md:p-6 shadow-lg mx-auto max-w-sm transform rotate-2">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 aspect-square flex items-center justify-center overflow-hidden">
              {typeof todayData.letterImage === 'string' && todayData.letterImage.startsWith('http') ? (
                <img src={todayData.letterImage} alt="Our Love" className="w-full h-full object-cover" />
              ) : (
                <span className="text-5xl md:text-7xl">{todayData.letterImage}</span>
              )}
            </div>
            <p className="text-center mt-2 text-gray-600 italic text-sm">Us, always</p>
          </div>

          <div className="prose prose-pink max-w-none">
            <p className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Dear {todayData.word === 'HUMMUS' ? 'My Love' : 'My Beautiful One'},</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {todayData.letter}
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <button
              onClick={sendKisses}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-4 px-6 rounded-full hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              Send Virtual Kisses 💋
            </button>
            <a
              href="https://wa.me/1234567890?text=I%20loved%20your%20letter%20%E2%9D%A4%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-full hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-center text-sm md:text-base"
            >
              Respond to the Love Letter 💬
            </a>
            <button
              onClick={resetGame}
              className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold py-4 px-6 rounded-full hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
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