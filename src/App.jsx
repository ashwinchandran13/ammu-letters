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
    '2025-01-11': {
      title: 'Helloww me lovvee🌸',
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
      polaroid1: '/images/polaroids/p1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/polaroids/p2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'muuuuuuuu',
      polaroid2Caption: 'i wouwww uuu',
      letterImage: '/images/letterpic/l1.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
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
    '2025-01-12': {
      title: 'Ello Chundrumani! 💕',
      word: 'JASMINE',
      clues: [
        'You introduced me to creating a smell of home, you made the decision for it',
        'A flower you chose because you like it',
        'Wished to help you wear it but couldnt do so yet😔'
      ],
      letter: `pyaar kaise karte hain ? 🤔

      Meesa didn’t know. Meesa was stupid. Stupid enough to not read emotions or have one either. Matlab gaya guzra. I used to feel for people but couldn’t understand the emotions behind it. Rona hain to rona chahiye the Tak nahi pata tha.Maybe that’s why I used to cry a lot in front of you. Just by loosing myself into your eyes and usher of thoughts of how grateful I’m for this women to make me feel emotions. Kis tareeqe se tune much cheese sikhaya just by being a mirror for my own emotions, much dikhaya ki tu ye feel Kar Raha hain and it’s valid! Bas!.
      Me became more human? Yes. And then started the thought of how blind I was to the other side of communication which was the emotion itself. Started carrying my actions and conversations based on it too. But bhai, main huggta hun frequently. And I guess that’s human. Human enough to know I will make mistakes. You made me realise that.(but huggna band karoonga promish)
      
      Tune kabhi bhi apne emotions mujse chupake nahi rakhi which became one of the foundations of us. However it is hurting, however it is wholesome, you’ll speak that out. You tell me to use my words to communicate made me become more realise how you yourself communicate with keeping my emotions in your mind as the biggest stake. You took care of me in the moments of hurt caused by me!
      
      Muuu meri Jaan☺️
      
      It changed my relationship with everyone around me and the biggest flex you can have is that my sis was at awe on how I was able to process emotions better than her!(yea she said that). I gave the credit to you. But she got annoyed cuz she says I give you credit for everything and nothing. But I know the truth and it will remain so.
      
      Any emotions I show in this lifetime will have me on the driver seat of it. I can control it now, understand it. I can’t think of a day where I won’t ever share those emotions with you. You me bacchi, you did all those things.
      
      The beauty you see in me is a reflection of you 🌸
      
      So keep adding on to that gorgeous beauty you have so I can follow you through that.
      
      Eternally in your debt 
      Your paapuu`,
letterPictureCaption: 'feelings se emotion dikha na seekh liya',
letterSalutation: 'Me Mumu',
      polaroid1: '/images/polaroids/p3.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/polaroids/p4.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'first train ride!',
      polaroid2Caption: 'back at our first mcd!',
      letterImage: '/images/letterpic/l2.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'You make me feel so young - Frank Sinatra',
          subtitle: 'bachpana aagya saaheb',
          image: '/images/songs/12/4.jpeg',
          audioUrl: '/songs/1.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Lover - Taylor Swift',
          subtitle: 'teri tay tay ki gaane kaise miss karoo. also proud to call you me lover',
          image: '/images/songs/12/5.jpeg',
          audioUrl: '/songs/2.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Uff Teri Ada - Shankar Mahadevan',
          subtitle: 'ada aisi ki kabhi vishwas nahi hoti tu kaise mujhe mil gyiiii',
          image: '/images/songs/12/6.jpeg',
          audioUrl: '/songs/3.mp3' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-13': {
      title: 'ello mumu 🎀',
      word: 'ENCANTO',
      clues: [
        '🎵 You like and sing songs from it',
        '🏠 A magical family lives together in a special house.',
        '✨ Everyone has a special power — except one girl.'
      ],
      letter: `ye letter thoda explicit hone wala hain due to some 'incidents' of today so beware🔞
      
      we are known to have some heat between us usually in the most mundane situations at home. Let's say I'm cooking or making rotis with me or you looking over the curry together a bit with you leaning on counter, our thoughts sometime stray really easily. It starts with a look which makes me pretty much at the spot. I used get nervous from some of you previous moves like just aggresively grabbing my ass or pulling me close to you by my shorts. After with the gaze you have at the moment, things do start slipping from my hands. Next thing I know you might be on the kitchen counter or the dining chair just having our hands at the right places🌧️

      Just getting close to you was not an option by that point but it became such a strong desire to hold you with all my might and move my hands around slowly through your body and grabbing you by your waist and hips just to feel your heat and breath on my skin and lips. We were unravelling ourselves to each other; first through our eyes then through some words and we end with our bodies doing nastyy stuff to each other. We bare ourselves in the most vulnerable way to each other. Even with the most vile acts we do, the love we have gets pretty evident in our actions and the care we have for each other even when we let go of ourselves towards each other.

      You might blame it on your upcoming period but I know it's more than that. I wish I could have a reason for me to admire you on any mundane moments possible but I think you lead it well and in the most unexpected most raw, most sweaty and most intense way possible.

      Above all I knew what we were doing and how well I was stripped through my mind and my acts to reveal what I really wanted from you and how much I really needed you. I gathered the courage to open myself up in ways I couldn't image.

      My true vulnerability was revealed to me the night we first spent together. I felt like I was being stripped of my skin and my mind was being exposed to you. I felt like I was being taken to a place where I was not myself and I was not sure if I was ready for it. All this while you gazing through me with your hips on mine. I knew well before that point in time through the weeks we were together, I want to love this women with all my heart and soul and I am safe with you through all my vulnerabilities and desires. I gave into to you gradually something that I thought I could never do with any human being. That is for me to act upon my love.

      In a world that demanded obedience from me, choosing you feels dangerously honest.

      Kissing you was my first disobedience to the world and my first disobedience to myself. Your soft and warm lips on mine with your slow breaths on my face and the heat from your firm breasts on my chest felt like the most natural thing in the world. I felt like I was home and I was safe with you. But yeah aroused as hell🫣
      
      So me hottie, me baddie, me aphrodite, me goddess.. I can't wait for you to come back to me to continue exploring the depths of our vulnerabilities and desires. And yes it might involve me getting down on you with your legs shaking💋

      Your eternal admirer and devotee,
      Your Paapuu
      `,
      letterPictureCaption: 'mera saara khulasa kardiya tune',
letterSalutation: 'Me saaxy aurat 💃🏽',
      polaroid1: '/images/13/polaroids/1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/13/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'first wedding!',
      polaroid2Caption: 'first mcfloat(fanta float😕)',
      letterImage: '/images/13/letterpic/l.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Too Sweet - Hozier',
          subtitle: 'song that catches your personality',
          image: '/images/13/songcover/1.jpeg',
          audioUrl: '/songs/13/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Kauaʻi ʻōʻō - Parvaaz',
          subtitle: 'you went on a loop with this one',
          image: '/images/13/songcover/2.jpeg',
          audioUrl: '/songs/13/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Tum Tak - A.R. Rahman, Javed Ali',
          subtitle: 'will keep chasing for your happiness',
          image: '/images/13/songcover/3.jpeg',
          audioUrl: '/songs/13/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-14': {
      title: 'ende ammu kochee 🥰',
      word: 'AMAL',
      clues: [
        '🤔 I always wondered this word was, just thought it was a name',
        '🏠 but it means so much for you for many years, that you keep it as a key for all devices',
        '✨ You said it the hope you kept along with you all these years'
      ],
      letter: `ye letter tere saare ages of life ke liye hain
      har age jisko maine apna dil se pyaar aur usko apna hi hissa samaj liya. Bachpan se leke abhi tak tune jo faisale liye wo sab muj tak pohunchaya sahi salamat mere haatho. Main unn saare ammuo ke harr situations and struggles samajna chahoonga, aur unn sabse ek hi cheez kahoonga thank you for being so strong, fierce and brave.

      Tu saare struggles ko face karke yahan tak pohunchi hain. Mujhe pata hain ki tere dosth tere life ke sabse bade support system rahe hain. I'm in debt for life to all of them. Tujhe bas dilasaa dene ke liye nahi, but tere saath teri harr problem pe tere saath rukhe and they all put effort to make you happy.

      I might know only a portion of your stories on how me Ammu came to be a such amazing person with so many traits and value that I admire and uphold with pride.

      You healed through all your bruises and scars to become the Ammu as I know you to be. Eventhough I would've fallen love with any of the Ammu's versions, I know you are the best version of yourself right now. I take that as a debt for me to love you more and more every day.

      So me moon, I know I have a long way to go to become the best version of myself. Please take the kid inside me along with you on this journey of life for all ages.

      Time may bruise us, fate may mock us, yet my devotion does not learn how to leave

      I imagine us as kids walking through our paths holding hands and playing together, laughing together, crying together, growing together, learning together, and loving together.

      I will always love you with all my innocence and purity that I had as a child and will keep it with me for all ages.

      Always yours in all the ages we will share together,
      Your Paapuu
      `,
      letterPictureCaption: 'iss bachi ko zindagi bhar pyaar karoonga',
letterSalutation: 'Ende Ammu kochinu🙋🏼‍♀️',
      polaroid1: '/images/14/polaroids/1.jpg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/14/polaroids/2.png', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'ende ammu koch🙈',
      polaroid2Caption: 'ende memdi koch😤',
      letterImage: '/images/14/letterpic/l.jpg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Photograph - Ed Sheeran',
          subtitle: 'song through all your ages',
          image: '/images/14/songcover/1.jpg',
          audioUrl: '/songs/14/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Ente Kannil Ninakkaai - Banglore Days',
          subtitle: 'to the kid in you I love so much',
          image: '/images/14/songcover/2.png',
          audioUrl: '/songs/14/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Fly Me To The Moon - Frank Sinatra ',
          subtitle: 'Will love you through all the ages',
          image: '/images/14/songcover/3.png',
          audioUrl: '/songs/14/3.mp4' // Add your .mp3 file URL here
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
    const startDate = new Date('2025-01-14');
    startDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  };

  const getTodayDate = () => {
    // return new Date().toISOString().split('T')[0]; // For demo, you can change this to get current date
    return '2025-01-14'; // For demo, you can change this to get current date
  };

  const todayData = dailyLetters[getTodayDate()];
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
            <h1 className="text-4xl font-bold text-gray-800">{todayData.title}</h1>
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
            <p className="text-gray-600 text-lg">You walked into my life with a ton of great songs</p>
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
              Can you please find the word me goddess? 🙇🏽
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