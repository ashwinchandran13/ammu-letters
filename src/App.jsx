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
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [showSpecialContent, setShowSpecialContent] = useState(false);
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  console.log('selectedDate', selectedDate);
  // Special dates that skip song selection and game
  const specialDates = ['2025-01-23', '2025-01-24']; // Add more dates as needed

  // Daily letters from Jan 10 to Feb 1
  const dailyLetters = {
    '2025-01-11': {
      title: 'Helloww me lovvee🌸',
      word: 'HUMMUS',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
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
      polaroid1: '/images/11/polaroids/p1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/11/polaroids/p2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'muuuuuuuu',
      polaroid2Caption: 'i wouwww uuu',
      letterImage: '/images/11/letterpic/l1.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Voh dekhnay Mein - Ali Zafar',
          subtitle: 'Haan ye gana tere liye bana hain',
          image: '/images/11/songcover/1.jpeg',
          audioUrl: '/songs/11/1.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Cherry Wine - Hozier',
          subtitle: 'yep you are my cherry wine',
          image: '/images/11/songcover/2.jpeg',
          audioUrl: '/songs/11/2.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Que Sera, Sera - Doris Day',
          subtitle: 'was feeling too much when you were singing it',
          image: '/images/11/songcover/3.jpeg',
          audioUrl: '/songs/11/3.mp3' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-12': {
      title: 'Ello Chundrumani! 💕',
      word: 'JASMINE',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
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
      polaroid1: '/images/12/polaroids/p3.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/12/polaroids/p4.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'first train ride!',
      polaroid2Caption: 'back at our first mcd!',
      letterImage: '/images/12/letterpic/l2.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'You make me feel so young - Frank Sinatra',
          subtitle: 'bachpana aagya saaheb',
          image: '/images/12/songcover/4.jpeg',
          audioUrl: '/songs/12/1.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Lover - Taylor Swift',
          subtitle: 'teri tay tay ki gaane kaise miss karoo. also proud to call you me lover',
          image: '/images/12/songcover/5.jpeg',
          audioUrl: '/songs/12/2.mp3' // Add your .mp3 file URL here
        },
        {
          title: 'Uff Teri Ada - Shankar Mahadevan',
          subtitle: 'ada aisi ki kabhi vishwas nahi hoti tu kaise mujhe mil gyiiii',
          image: '/images/12/songcover/6.jpeg',
          audioUrl: '/songs/12/3.mp3' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-13': {
      title: 'ello mumu 🎀',
      word: 'ENCANTO',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
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
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 I always wondered this word was, just thought it was a name',
        '🏠 but it means so much for you for many years, that you keep it as a key for all devices',
        '✨ You said it is hope that you kept along with you all these years'
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
    },
    '2025-01-15': {
      title: 'Hi me Moooon 🥰',
      word: 'HOME',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 I thought it was just a place but the true meaning was defined by you',
        '🥰 It awaits your return though and so do I eagerly',
        '✨ For you to return and make it whole again and call it our...'
      ],
      letter: `this letter is for the first home we built together

      Never in centuries I would've thought I would be with someone choosing decor, arranging furniture, decorating the walls, arranging groceries in fridge, setting up kitchen counters, hanging up photos, cleaning the house, cooking every single day, making coffee and having it cozly in bed before the day starts, having a place to play around, to have a place to make love, to cry, shout, laugh, sing, scream, dance, drink, and everything in between.

      You made this oppurtunity for me to live a life I never thought I would live. Within a month of meeting you, we had moved into our first home together. And as I look back on how we built this home together and compare the current state of me alone in this house, makes me realise it was never about making a house livable but it's about the people who I live with which makes it a home.

      You Mu, you held it all together and made it a home. Currently it might be a real pristine house but that's it. No noise, no scented candles, no dead skins under table, no balls of hair in bathroom or floors, no music, no movies, no laughter, no calling paaputiii from the bedroom as you come in running inside the kitchen with loud and heavy footsteps to hug me from behind. No more of those.

      I'm happy crying looking all around the house and thinking of how we built this home together. All those memories eventhough we were juggling a load of stress and struggles, we still managed to make it a home. Now I imagine what we can do when we actually build something of our own together.

      Aaj ghar clean karne ka yehi maksath tha so that you can see the best of it and compare it to how we began.

      So me moon

      All I need to see you when I wake up and before the day comes to an end - that's what I'll call home.

      I love you so much Ammu. Thanks for letting me crash your place😛 and making me part of it. As you said you never expected me to join in but I knew you were the One and all I wanted to do was walk every step with you through death.

      Awaiting your return to make me and this house whole again to call it our home,

      Your Paapuu
      `,
      letterPictureCaption: 'we built this home together',
letterSalutation: 'Me world🌍',
      polaroid1: '/images/15/polaroids/1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/15/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'waiting for you to come🙈',
      polaroid2Caption: 'to make it whole again❤️',
      letterImage: '/images/15/letterpic/l.mp4', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Night Changes - One Direction',
          subtitle: 'for the memories we both had',
          image: '/images/15/songcover/1.jpeg',
          audioUrl: '/songs/15/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Tere Bina - A R Rahman',
          subtitle: 'to the person I call my ooru',
          image: '/images/15/songcover/2.mp4',
          audioUrl: '/songs/15/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Pal Pal Dilke Pass - Kishore Kumar ',
          subtitle: 'For all the love you brought home with you',
          image: '/images/15/songcover/3.jpeg',
          audioUrl: '/songs/15/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-16': {
      title: 'elloo boo🥰',
      word: 'AMMINI',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 she helped me see you every day from the very beginning',
        '🥰 she helped us cover distances which she has never travelled before',
        '✨ she litterally saw us cry, fight, laugh, sing, love and grow together'
      ],
      letter: `sometimes I think the one big factor that helped us to form a strong bond in a really short amount of time was the travels we took together.

      Yes, travels pushed us to great limits. We faced a lot of obstacles, a lot of uncomfortable decisions, a buttload of uncertainties but still we managed to push it through and grow together due to all that.

      Your job made me also see the places that I've never seen before. It pushed me to be better with my job and having time to spent with you too. I also learned a lot about myself and my capabilities and limitations.

      But wo sab chod, tune mujhe wo oppurtunity dia tere saath travel karne. Tere liye muje jo kuch bhi karna chahtha tha, uske liye tune mujhe help karne ke liye allow kiya. I know that I'm not that easy to be with and that too while you were on you job but still took me with you.

      Haan maine thoda easy banaya cheeze by being your chauffeur which is quite literally true; You said that to a school 😭 jinhone driver ko chay pilaya. But at the end of the day, me waiting on you at the school with a big ishmile on my face and seeing you coming out of the school with a big ishmile on your face made me feel like I was the luckiest man on earth for me my lady is walking right towards me after a tiring day at work. The only thing that I wanted to keep with me was foood to feed you and see you more happy and relaxed.
      
      Because of these travels mujhe tere itne saare passindida cheezo ke baare pata chala which you were also discovering yourself. Phir kuch humare routines bhi bane. Ghee podi idli from social kitchen and karikku peena became the thing to do in Palakkad if you remember.

      I know not everything was changi se but koiii naaa cuz travelling is supposed to be the best teacher. The more we travel together, the more we learn about each other and the more we grow together.
      
      Your job made me meet you my love. Your job also made path for us to grow together by throwing the mighty obstacle of distances to be covered.

      Haan jab tu jaathi thi mere bina bhi, Ammini and Kinkini both do their part for me to say goobye when you leave for your job.

      Humne ghanto bithaye hain Amini main and also Kinkini(remember Palakkad ride which was soooo epic😵‍💫) and unhi travels main bohot paisa aur energy udaya hain but looking back to it for me it was allllll worth it.

      Humne Pahade dekhe, beaches dekhe, temples gaye and at last it became a median for my proposal. Ammini kept your b'day gifts, our ring, our adventure box allll safely. Ammini witnessed you kissing me on my cheeks for the first time. Ammini saw golden hour sunset with us in the beach of Alappuzha. She will be a part of our life for ages to come.

      Thank you for all oppurtunities that you gave me to see you in distant places and different situations. Thank you for all the memories that we have made in these travels. Thank you for all the patience and love that you showed me through all these travels. 

      So me amore
      Me Mumu

      We carried our home together to every distant place we went to.

      I'm waiting for you to come back to me and to continue our travels together.

      your fellow companion traveller for life,
      Your Paapuu
      `,
      letterPictureCaption: 'ammini witnessed how events unfold in life',
letterSalutation: 'Mumuuuuuuuuu🌸',
      polaroid1: '/images/16/polaroids/1.mp4', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/16/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'First Road Trip for Days!!🙈',
      polaroid2Caption: 'to sunsets we witnessed❤️',
      letterImage: '/images/16/letterpic/l.mp4', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Wo Ladki Hain Kahan - Dil Chahta Hai',
          subtitle: 'me fellow traveller always keeps it with her harkathes',
          image: '/images/16/songcover/1.mp4',
          audioUrl: '/songs/16/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Aao Naa - Udit Narayan',
          subtitle: 'interestingly the twirl and the tongue comes out as a standard from the very beginning',
          image: '/images/16/songcover/2.mp4',
          audioUrl: '/songs/16/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Rude - MAGIC!',
          subtitle: 'song I have to sing to your pappaji to marry yo rude ass',
          image: '/images/16/songcover/3.mp4',
          audioUrl: '/songs/16/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-17': {
      title: 'Greatings me strong, bold, and fierce goddess🙇🏽',
      word: 'ROSE',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 you gave me something really important within our first few weeks together',
        '🥰 I used to smell it everyday and it made me feel close to you and made me feel like I was with you',
        '✨ Between us, you were the first one to give me a flower'
      ],
      letter: `
      ye letter main tere kuch tareef karoonga but I know those won't be enough to describe your qualities.

      I knew you were different from the very start due to the convictions and boundaries you held. The way you stood for yourself unapologetically and the way you spoke your mind without giving two shits about what others think. I saw how you had become this person who was constantly put to test and became molded int a person who started to inspire me and pushed myself to be a better person.

      I did go through your old diaries with you to see how you were practicing rules to impose on yourself while trying grow compassion and control the emotion you felt. Eventhough you will never discuss this with me but I knew this is what you had to do to become the person you are today.

      But through the time as we were continuing our journey, it became quite evident that this strong, brave, fierce and independent women was getting irritated by the small things that I did for her which was something that was hers to do. So generally tu poochne laggi, tum kyun kar rahe ho ye?. You didn't understand the concept of me helping you without thinking what's in it for me.

      As I made you realize that you don't have to do everything for youself and it is okay to let me help you, you started to accept it and even though you still didn't like it, you didn't stop me from doing it.

      I still see this strong, fierce and independent women most of the time but she started to become a princess with Sass and Grace when she started to accept my providing mindset. I felt you were taking things easy on yourself while letting your guard down slowly through time for me to become your knight in not so shining armour.

      Tune mere decisions apne decisions banane laggi and we had a fight about it. You regretted on many occasions listening to me on many things but still you went thought it. You started comprimising youself so much for me which was something you had rarely done before. For me you started convincing yourself with decisions you didn't fully like. You started considering me as a factor for all major decisions you made.

      Being considerate is the biggest form of love and I know you did it for me. I'm really thankful for that. For believing in me and giving me the oppurtunities when at times I'm wrong.

      The same did happened with me really in short amount of time of meeting you that I could break the boundaries and commitment I had made for myself to become the person that can aspire to be the best version of myself for you. I was cold, wasn't really welcoming(as you can see how many friends I have), kept to myself, never pleased anyone at my own cost, sticked to the decision with strong mind and then you came in. I saw me in you and I knew what I had to do to as that I always wished someone to be there for me to help me break those rules and restrictions I had imposed on myself to become the person I'm today.

      For that one person in the world for a lifetime, which is you. 

      It will always be you first for me. Because after my sister, you are the women I saw I have to be better for and there can't be no excuses.

      I know this might be a boring letter, but tune jiss tareeke se mujhe mera character main sudhaar laye, I'm in debt for that. I have a long way to go but I know you will be there for me.

      Eternally grateful,
      Your Paapuu
      `,
      letterPictureCaption: 'A woman to whom I look up to',
letterSalutation: 'Me Queen here you dropped this👑',
      polaroid1: '/images/17/polaroids/1.jpg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/17/polaroids/2.mp4', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'one to give me a flower first🙈',
      polaroid2Caption: 'me better half❤️',
      letterImage: '/images/17/letterpic/l.jpg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Kasoor - Prateek Kuhad',
          subtitle: 'our first concert!',
          image: '/images/17/songcover/1.mp4',
          audioUrl: '/songs/17/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Shut Up and Dance - Walk the Moon',
          subtitle: 'I beat youu in bowling heheeeee',
          image: '/images/17/songcover/2.mp4',
          audioUrl: '/songs/17/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'The 1 - Taylor Swift',
          subtitle: 'pretty much from start I knew',
          image: '/images/17/songcover/3.mp4',
          audioUrl: '/songs/17/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-18': {
      title: 'Ello Meri Mumu🌸',
      word: 'AMMU',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 the name I will call out on happieness, sickness and everything in between',
        '🥰 the name I will call out on my last breath',
        '✨ to the name I will start and end all my days with'
      ],
      letter: `
      To the most beautiful women I have laid my eyes on, thank you for accepting  my love.

      I have written poems about your eyes, your lips, your hair etc but no words can describe the beauty you possess.

      My closed eyes prove no match to the vision I see in my mind of you. Your lips which smiles to the end which forms the corner of your cheeks, your nose with ths most cute and subtle round shape which houses your pretty pin, cheeks which blush with the most innocent pink shade, spots that make me go mad on kissing you on your cheek bone, beauty spots below your lips where I run my lips through, your temple which kiss softly to assure you are the most important person in my life, to the hair I felt peace and calmness when hugging you and yet scared to run my fingers through hoping I won't hurt you, the two beauty spots above your belly in a line which I kiss to admire the beauty of it, to the curves of your body I feel sacred, the body of a goddess which I cradle in my arms with deep devotion and respect, the feet I often touch as a gratitude and undying admiration to the person your are, to the ears that choose to hear the most beautiful words I could ever say to you and to the eyes that I'll forever worship that chose me to be the one to love you.

      Your soul that shines through you made me face a mirror so I can love myself in ways I couldn't ever. The beauty you see in me is a reflection of you. You have a soul that proves the goodness in one shall command goodness in others.

      On 14th June 2025, the first time you caught my eye
      it was not love at first sight
      Instead a quiet curiosity was
      planted in my chest and I knew
      it was only a matter of time before
      you sunk beneath my bones and
      nurtured this deep seated familiarity
      into a love so fierce that I would question
      if I had even been in love with anything before
      
      So me sundari kutty, I love you more than I can express in words.

      eternally at awe by the beauty of you,
      Your Paapuu
      `,
      letterPictureCaption: 'devoted to the beautiful person I fell in love with',
letterSalutation: 'Ende Ammu🌸',
      polaroid1: '/images/18/polaroids/1.mp4', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/18/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'she came in unexpectedly🙈',
      polaroid2Caption: 'so I will follow her for life❤️',
      letterImage: '/images/18/letterpic/l.png', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Maul Mere Maula - Anwar',
          subtitle: 'to the eyes I keep getting lost in, to the eyes where I saw my first love',
          image: '/images/18/songcover/1.png',
          audioUrl: '/songs/18/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Just the way you are - Bruno Mars',
          subtitle: 'to the smile that races my heart, the words you spoke that soothes my soul',
          image: '/images/18/songcover/2.png',
          audioUrl: '/songs/18/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Tu Bin Bataye - Rang De Basanti',
          subtitle: 'to the hair that cover my face makes me feel like Im in the safest place in the world',
          image: '/images/18/songcover/3.png',
          audioUrl: '/songs/18/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-19': {
      title: 'Meri Jeevansathi🌸',
      word: 'PANDA',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 you love it and get excited to tell me how many things you have of it',
        '🥰 the first soft toy I ever bought for you',
        '✨ abhi bhi samaj nahi aya to tere chamach se leke tere night dress pe tak hain'
      ],
      letter: `
      To the future we will build together. I'm excited to see you in it!!!!!

      Sapne aate hain us-together acheiving things in life. Marrying you is just the keep on recurring theme of my dreams but I don't want to draw a vision of it through my mind. That is something you might have already envisioned and the right for it lies to you.

      Buying our first car who is going to be our Ammini 2 which can fit our family(sapno main hum do hi hain don't worry), going on trips to far off lands experiencing food, culture and nature unbothered, building our own home together with you taking the lead on what should go to interiors, hosting your(our) friends for drinks and dinner, you inducing pottyyy by sitting on a big round bamboo matt while I work, you reading books while I play video games, us eating in silence in our dinner table with music in the background, us cooking in our kitchen with occasional kisses and hugs, wakng up to you every morning finding myself sticking to your side while you are on edge of your bed, us taking care of each other while we both are sick and down with fever, under one blanket in a couch just watching movies with hot popcorn in big bowls, just co existing peacefully and too much in love with each other.
      
      Sapne aise which I can feel, sometimes wakes me up in the middle of the night with a smile on my face but to find you not here with me. It hurts. But I remember the time when I used wake from such dreams I would softly kiss your forehead and going back to sleep with a smile on my face.

      I hope the future is kind to us and we are able to acheive all these things together. I just want to stop dreaming and start living it. Start growing old with you as I recognize my new age of life has begun. Everything now is either before you or after you coming into my life.

      I know it would be filled with ups and downs but I know we both will surf through it to make a good jump in our lives.

      hoping you would kiss me good night even when I lose all my teeth while you remain timelessly beautiful,
      Your Paapuu
      `,
      letterPictureCaption: 'the world we will build together',
  letterSalutation: 'Ende shutumani🌸',
      polaroid1: '/images/19/polaroids/1.mp4', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/19/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'expression👌',
      polaroid2Caption: 'me thangakudam❤️',
      letterImage: '/images/19/letterpic/l.png', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Ilahi - YJHD',
          subtitle: 'to the places we are going to see together',
          image: '/images/19/songcover/1.png',
          audioUrl: '/songs/19/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Ti Amo - Dum Maaro Dum',
          subtitle: 'humari gadi ?',
          image: '/images/19/songcover/2.png',
          audioUrl: '/songs/19/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Tere Bina Zindagi Se Koi Shikwa To Nahi - Lata Mangeshkar',
          subtitle: 'existing in our own worlds together',
          image: '/images/19/songcover/3.png',
          audioUrl: '/songs/19/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-20': {
      title: 'Meri priye baby🌸',
      word: 'RING',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 the first thing I made with my hands for you',
        '🥰 I mastered it and envisioned it and gave you the real deal on my happiest day yet',
        '✨ I made you many of those, it holds a special place in my heart as that paved way to everything I made for you including these letters'
      ],
      letter: `
      distance became our greatest enemy in many of the occasions from the beginning of us.

      It pissed me off and I was reluctant to sit idle and do nothing for you even if you were miles apart. I diverted all the missing feelings and thoughts into making something for you. Thus gifting handmade things for you became my defense mechanism to keep myself busy and distracted from the pain of missing you. But I knew even though I won't admit it at that time as I didn't recognize the feeling, I was just expressing my love for you.

      We couldn't keep each other away for long as soon as we had met in person. The small distances and time you had to spend away became a usual act but not a familiar feeling. I always felt terrible and walked around wih a heavy heart.

      Each time we said our good byes, I always pretended to be strong and happy while a tear drops from the corner of my eyes. You trained me in the arts of saying goodbye, you just increase the difficulty of it as of now with this huge time frame. This is the longest we have been away from each other. And I know this won't be the last time we will be away from each other.

      From leaving you at Ivy Nest at the end of the day, from saying goodbye after leaving you in school for work, from saying goodbye after boarding the train and from saying goodbye at the airport check in gate all lead back to the moment where I know you will be coming back to me with open arms and excitement.

      Separation has taught me a lot about myself and how I feel about you. Separation is never good though, it's a misery I have to endure. A teacher who is an ass.

      so me mu
      me chundrumani
      me thangakudam
      BAS AA MERE PAAS, MUJHE KAHIN NA JAANE DE TERE SE DOOR
      HUMARI DUNIYA RUKHI HUI HAIN TERE INTAZAAR MAIN
      KI TU AAYE AUR HUME GHUMAYE TERI CHARO AUR

      waiting for you to come running into my arms,
      Your Paapuu

      PS: my phone gallery sits still this month. It hasn't been like that even for a week since you met me
      `,
      letterPictureCaption: 'rewatched a million times, on that dreaded day when we made that decision for you to leave',
  letterSalutation: 'My love 🌸',
      polaroid1: '/images/20/polaroids/1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/20/polaroids/2.mp4', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'your first gift 🌸',
      polaroid2Caption: 'distant things I could do😭',
      letterImage: '/images/20/letterpic/l.mp4', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Aint No Sunshine - Bill Withers',
          subtitle: 'goodbye never will be easy',
          image: '/images/20/songcover/1.jpeg',
          audioUrl: '/songs/20/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Kahin To Hogi Woh - Jaane Tu Ya Jaane Na',
          subtitle: 'pretend to smile but tears would eventually fall',
          image: '/images/20/songcover/2.jpeg',
          audioUrl: '/songs/20/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Abhi Na Jao Chod Kar - Mohammed Rafi Asha Bosle',
          subtitle: 'the last pic I took when you left',
          image: '/images/20/songcover/3.jpeg',
          audioUrl: '/songs/20/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-21': {
      title: 'Me appii💩',
      word: 'KOLISU',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 not an english word, first time you wished for something and I bought it for you',
        '🥰 I wanted to see it on you more than you, first piece of real jewellery I bought for you',
        '✨ I sometimes have goosebumps when hearing any sound remotely close to it as it feels like you are here with me'
      ],
      letter: `
      I didn't necessarily considered your rose slide as a gift but a way to keep you close to me when you away from me.

      I did have a moment with the gifts you gave me for my birthday. A music box with one of the songs I never would've thought I'll sing with someone. A moon globe which was soft for our eyes. Your first hot wheels for meeee. It was all special and unique to me.

      I do admit I was a bit thrown off jab tu Delhi se mere liye apne dostho ke saath Hello Kitty ka shirt leke aayi. But I do look good with anything so I went with it😎. Repeated patterns with the hello kitty diary but still something special about it.

      I can go on and on with everything that you gave me. But this is not what the letter is about. It's about my greatest gift you gave me.

      The gift of love. With conflicts, arguing, misunderstandings, overthinking, overreacting, self doubt, insecurity and the often questioning of am I good enough for you, a bit harshly but you spoke what I needed to hear. Earful.

      Your love made me walk on a path of knowing myself more and discovering the person I am. I was easy going with my loved ones I thought, but then it hit me that you were actually showing me the reflection of myself for all my actions with your abundance of love, patience and care. You accepted and acknowledged the person I am, made me realize how can I be more better everyday.

      You stood your ground and kept pulled me back from the darkness with those big beautiful eyes. I know the love you have for me is unwavering and unbreakable. You might scold me, get extremely angry at me but I know you will always have that love in you for me. You holding my hands in bed to resolve all the stupid conflicts we had or stupid things I said to you; eye on eye ending with hugs, tears and kisses just expressing the love by forgiving the situation or mostly me.

      You made me realize I was worthy of love. That changed me, on how I saw myself and how I loved my own family. Always I say one thing to you:

      Your affect on me is the greater that I could comprehend.

      Thank you for the love you gave me. I hope I can reciprocate it to you in the best way I can.

      to loving you more than I can express in words eternally,
      Your Paapuu
      `,
      letterPictureCaption: 'gifts are important; to remember the love we have for anyone',
  letterSalutation: 'Mumuuuuu 🌸',
      polaroid1: '/images/21/polaroids/1.jpeg', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/21/polaroids/2.mp4', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'something to remember by 🌸',
      polaroid2Caption: 'me greatest gift 🙈',
      letterImage: '/images/21/letterpic/l.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Hedwigs Theme - Harry Potter',
          subtitle: 'your first hp gift!',
          image: '/images/21/songcover/1.jpeg',
          audioUrl: '/songs/21/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Something Stupid - Frank Sinatra',
          subtitle: 'a good amount of stupid is always great',
          image: '/images/21/songcover/2.jpeg',
          audioUrl: '/songs/21/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Cant Help Falling in Love - Elvis Presley',
          subtitle: 'will keep on singing always',
          image: '/images/21/songcover/3.jpeg',
          audioUrl: '/songs/21/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-22': {
      title: 'elooo gandiniiiiii 𖫪',
      word: 'MOON',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 you told me you used gaze at it to get some respite, you admired it for its white spotted beauty',
        '🥰 you went as far to engrave it on yourself, I couldnt be more sure how important was it to you',
        '✨ It does change its shape on every night, but the shape you chose was of crescent'
      ],
      letter: `
      I said a lot of times that things that happened in my life are now termed as before you and after you. So I thought this was the last phase of life when you start loving and being with someone now for rest of the life, but hell I was wrong.

      Up until now, I saw three phases of our love itself. Ye honeymoon phase, lovey dovery etc bakchodi nahi but phases of humara pyar towards each other.

      Start main thoda mushkil tha mujhe tera pyar read karna when we were talking and seeing each every evenings after work. You clearly had this way of expressing words with strictness but still soft and caring. Majakiya tu thi, gande joke marna ofcourse, a bit disapointed but glad to see me at the end of the evening when I was running late, saying good night, rarely chatting/calling etc. I knew you were the one eventually, that's when I started giving myself in completely. You literraly held me through every decision and made me feel comfortable with you. But haan you started to literally hold my reigns to me heart. 

      Second phase was when we started living together. I had fever and stuff on the first days, you had to handle kitchen and look after me too. I saw you did stuff for me you might've never did, you cooked like a true bachelor because of which I had became better quickly as I got my good rest. We were mostly surviving on breads and scrambled eggs and khana proper nahi tha with we eating from the same plate. Tere pyaar jo tha from what you were trying to achieve and you did flawlessly inspired me to take lead on many things like one of them being the kitchen. Responsibility ke saath humara pyaar aur badne laga ek doosre ke liye so we both were looked after for. We took care of each other while our worst were thrown at our faces but we battled it out together. 

      Third phase was more of I would say you started becoming flimsy as hell, had to feed you from time to time, physical affections were at all time high(thode rough bhi hone lage but naam to mera hi ayega na), and because of all that I had this thought of taking care of my baby(quite literally🤣) all the time. You became more silly and childish and me? more in love. Problems had new outlook as we knew we had each other's back.

      Things that were common across all the phases from you: strict, ka ka ka laughing, words spoken makes insanity a trait, gundi, bullying me, grabing my ass(1st phase main nahi tha but I saw where your eyes went), kissing me, hugging me, taking a ride on me, domination stuff, seducing me in the most random places(there is a mark still behind main door wall), making me do stuff that I never would do(I meant dancing, singing, composing), eating in silence, deep eye to eye looks yada yada yada...

      I know these phases won't end here and I know this is going to be one hell of a ride. Will keep up with you 👊🏽

      So me ponnuu, me chundrumani, me gundumanii, me moooooon

      On all these phases
      In case you ever foolishly forget: I am never not thinking of you

      to love you through all the phases until I become sweet worm food,
      Your Paapuu
      `,
      letterPictureCaption: 'later did I know, you became my moon for me to seek respite',
  letterSalutation: 'Mon Coeur 🌸',
      polaroid1: '/images/22/polaroids/1.mp4', // Replace with image URL: 'https://example.com/photo1.jpg'
      polaroid2: '/images/22/polaroids/2.jpeg', // Replace with image URL: 'https://example.com/photo2.jpg'
      polaroid1Caption: 'budape main bhi twirl hoga🌸',
      polaroid2Caption: 'bas popcorn yaad na dilana🙈',
      letterImage: '/images/22/letterpic/l.jpeg', // Replace with image URL: 'https://example.com/main-photo.jpg'
      songs: [
        {
          title: 'Aap ki Ankhon Mein Kuch - Kishore Kumar',
          subtitle: 'first phase☕️',
          image: '/images/22/songcover/1.jpeg',
          audioUrl: '/songs/22/1.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Tune Kahan - Prateek Kuhad',
          subtitle: 'second phase🍷',
          image: '/images/22/songcover/2.jpeg',
          audioUrl: '/songs/22/2.webm' // Add your .mp3 file URL here
        },
        {
          title: 'Love Story - Tay Tay',
          subtitle: 'third phase 🍼',
          image: '/images/22/songcover/3.jpeg',
          audioUrl: '/songs/22/3.webm' // Add your .mp3 file URL here
        }
      ]
    },
    '2025-01-23': {
      title: 'Ende Ammu🥰',
      word: 'MOON',
      daysMessage: "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter.",
      clues: [
        '🤔 you told me you used gaze at it to get some respite, you admired it for its white spotted beauty',
        '🥰 you went as far to engrave it on yourself, I couldnt be more sure how important was it to you',
        '✨ It does change its shape on every night, but the shape you chose was of crescent'
      ],
      letter: `
      so me moon,

      you must be proud about yourself for all the hardwork you have put into your passion but with the great help of the people around you now in this journey.

      I hope you appreciate and love your company of your Hamsini gang.

      Have loads of fun and enjoy the journey.

      All the best for your performances and I hope you convey my regards to everyone there.

      Bon voyage me love

      as the days are approaching my excitement is going over the top,
      please apna khayal rakhna

      in love with you for my time here,
      Your Paapuu
      `,
      letterPictureCaption: 'later did I know, you became my moon for me to seek respite',
      letterSalutation: 'click on any video to unmute me moon 🌸',
      polaroid1: '/images/23/polaroids/1.JPG',
      polaroid2: '/images/23/polaroids/2.jpg',
      polaroid1Caption: '🌸',
      polaroid2Caption: '❤️',
      letterImage: '/images/22/letterpic/l.jpeg',
      songs: [
        {
          title: 'Aap ki Ankhon Mein Kuch - Kishore Kumar',
          subtitle: 'first phase☕️',
          image: '/images/22/songcover/1.jpeg',
          audioUrl: '/songs/22/1.webm'
        },
        {
          title: 'Tune Kahan - Prateek Kuhad',
          subtitle: 'second phase🍷',
          image: '/images/22/songcover/2.jpeg',
          audioUrl: '/songs/22/2.webm'
        },
        {
          title: 'Love Story - Tay Tay',
          subtitle: 'third phase 🍼',
          image: '/images/22/songcover/3.jpeg',
          audioUrl: '/songs/22/3.webm'
        }
      ],
      // Special content for dates that skip song/game
      specialMessage: 'aaj koi gaana ya game nahi hain as...',
      specialTitle: 'Today is about your love for dance', // Separate title for special letter page
      specialTopVideo: '/images/23/letterpic/title.mp4', // Video at top - small height, half width, no frame
      specialBottomVideo: '/images/23/letterpic/end-title.mp4', // Video at bottom - small height, half width, no frame
      specialContent: [
        {
          media: '/images/23/letterpic/1.jpg',
          text: 'from my perspective, I see how expressive and joyful you are when you are practising your art. You showed me your Arengettom first and thus began my journey to see this great artform through you.',
          caption: 'My favorite one have to say 🌸'
        },
        {
          media: '/images/23/letterpic/2.mp4',
          text: 'you told me how you were able to manage everything including work to prepare. You said you were exhausted but still managed to give it all your best. ',
          caption: 'with such grace you practiced 🙈'
        },
        {
          media: '/images/23/letterpic/3.jpg',
          text: 'you made everyone feel proud that you were doing something you really loved and that too with great dedication. You showed me you dancing as little krishna along with your didi which I think was your first recorded performance. I felt so proud seeing it and I hope that little krishna has always been proud of you',
          caption: 'yamu is so proud of her ammu chittaa 🙈'
        },
        {
          media: '/images/23/letterpic/4.jpg',
          text: 'but as I see its not just about your love for dance. I saw you found love and joy around your dance which kept you going through everything despite you had to tackle so much things.',
          caption: 'reminds me of what I see when I hug you 😂'
        },
        {
          media: '/images/23/letterpic/5.jpg',
          text: 'it was your Hamsini gang. Poeple who I thought you just learnt and trained with but boy I was wrong.',
          caption: 'ye guse main kyun hain 😤'
        },
        {
          media: '/images/23/letterpic/6.mp4',
          text: 'a guru and his students bonding over the silly mistakes they commit',
          caption: 'well you do confuse other people too 😛'
        },
        {
          media: '/images/23/letterpic/7.jpg',
          text: 'you sharing your exhaustion together with everyone. I would say a shoulder to lean on but from this pic its more of thighs to put head on',
          caption: 'human pankha bana rkha hain '
        },
        {
          media: '/images/23/letterpic/8.mp4',
          text: 'people to bully. raises so many question but Im guessing yamraj sawari kar rha hain to chill?',
          caption: 'pavam bhaya, kya kya sehte hain🥲'
        },
        {
          media: '/images/23/letterpic/9.mp4',
          text: 'people to loose sleep with. Purre raath khi khi khi hota tha kya???',
          caption: 'bhavshya dekha to mera kuch ata pata mila?😚'
        },
        {
          media: '/images/23/letterpic/10.jpg',
          text: 'people to travel with. A thing you are embarking to do now. Have fun me chundrumani',
          caption: '🙉🙈🙊'
        },
        {
          media: '/images/23/letterpic/11.mp4',
          text: 'people to be silly with. Well you are an agent of chaos and inducing laughter at any situation',
          caption: 'Mami sunathi rehti hogi na tum dono ko🤣'
        },
        {
          media: '/images/23/letterpic/12.mp4',
          text: 'people to celebrate occasions with. This video seems fun but chances of getting hit with dandiya seems high',
          caption: 'its clear to me between everything, you did get some time to have some real fun 🥰'
        },
        {
          media: '/images/23/letterpic/13.jpg',
          text: 'people you felt your best with. Im glad you told me about everyone, I would love to meet everyone someday',
          caption: 'the support and care you had through your practice and your performances is what I have to thank them for'
        },
        {
          media: '/images/23/letterpic/14.mp4',
          text: 'above all that I see this girl who kept to her vision through hardword and dedication, I see a girl who achieved what she wanted to and excelled in it by surrounding herself with the people she wanted to grow with',
          caption: 'Im guessing this video is pretty old but I see me ammu kutty manifesting 🤣'
        },
      ]
    },
    '2025-01-24': {
      title: 'Me mumu in Poland today!! 🥰',
      word: 'MOON',
      daysMessage: "Ma'am since the final week is approaching, we start a series of letters which we can reopen at different states of our journey",
      clues: [
        '🤔 you told me you used gaze at it to get some respite, you admired it for its white spotted beauty',
        '🥰 you went as far to engrave it on yourself, I couldnt be more sure how important was it to you',
        '✨ It does change its shape on every night, but the shape you chose was of crescent'
      ],
      letter: `
      ende ammu koche,

      I remember most of the details about your life even when I'm not with you just because you let me in with all the stories.

      I will continue to keep your stories within me and cherish them as if they are my own. As I think that would be the best form of love I can give you, by keeping pieces of your adventures within me

      I hope you won't ever stop with it because I won't ever not a give an ear to it.
  
      to all the time we have to share our stories with each other,
      Your Paapuu
      `,
      letterPictureCaption: 'later did I know, you became my moon for me to seek respite',
      letterSalutation: 'click on any video to unmute me moon 🌸',
      polaroid1: '/images/24/polaroids/1.jpeg',
      polaroid2: '/images/24/polaroids/2.jpeg',
      polaroid1Caption: '🌸',
      polaroid2Caption: '❤️',
      letterImage: '/images/22/letterpic/l.jpeg',
      songs: [
        {
          title: 'Aap ki Ankhon Mein Kuch - Kishore Kumar',
          subtitle: 'first phase☕️',
          image: '/images/22/songcover/1.jpeg',
          audioUrl: '/songs/22/1.webm'
        },
        {
          title: 'Tune Kahan - Prateek Kuhad',
          subtitle: 'second phase🍷',
          image: '/images/22/songcover/2.jpeg',
          audioUrl: '/songs/22/2.webm'
        },
        {
          title: 'Love Story - Tay Tay',
          subtitle: 'third phase 🍼',
          image: '/images/22/songcover/3.jpeg',
          audioUrl: '/songs/22/3.webm'
        }
      ],
      // Special content for dates that skip song/game
      specialMessage: 'I will read this letter when...',
      specialTitle: 'to not be sad when we are at a distance as you will still share your day with me', // Separate title for special letter page
      // specialTopVideo: '/images/24/letterpic/title.jpeg', // Video at top - small height, half width, no frame
      // specialBottomVideo: '/images/23/letterpic/end-title.mp4', // Video at bottom - small height, half width, no frame
      specialContent: [
        {
          media: '/images/24/letterpic/1.jpeg',
          text: 'lets start from the top. You asked me an opinion on getting a tattoo onto days of knowing me when you had to go to TN. Thats when I learnt how meaningful moon and stars was for you.',
          caption: '18th June 2025: you gotta tattooo 🥰'
        },
        {
          media: '/images/24/letterpic/2.jpeg',
          text: 'your occasional selfies when you were away before going to school made my day everytime I saw it',
          caption: '6th July 2025: ende chudrikutiiiiii 🙈'
        },
        {
          media: '/images/24/letterpic/3.mp4',
          text: 'when you went to Banglore to celebrate Yamu\'s b\'day. Do you remember usse pehle we were not able to buy anything for her from here?',
          caption: '10th July 2025: kithii cuteee hainnn like her chittaaaa 🙈'
        },
        {
          media: '/images/24/letterpic/4.jpeg',
          text: 'and to celebrate Snicks b\'day. You told me how much time it\'s been since you met her.',
          caption: '12th July 2025: an awaited reunion 🥰'
        },
        {
          media: '/images/24/letterpic/5.jpeg',
          text: 'your first short return to Delhi. You met your friends and spend your time with your fam. You went to Shayu\'s place too!',
          caption: '4th September 2025: I wrote poems for you till your return😍'
        },
        {
          media: '/images/24/letterpic/6.jpeg',
          text: 'not really a distance thing but I travelled from Thrissur after attending my friends wedding to Aishu\'s place after you guys where coming back from not so Onam celeb just for me to see you for some time in saree 🙈 phir hum nikle Palakkad ke liye',
          caption: '15th September 2025: my jaws dropped when you sent me this pic in the morning 😍 '
        },
        {
          media: '/images/24/letterpic/7.jpeg',
          text: 'you went to your Ammayis place to celebrate Diwali while I was at my home. I really wanted to celebrate it together and uske liye main patake liye the but thought we would delay it to new years and well',
          caption: '20th October 2025: it rained the whole day still thoda time mila patake phodane ke liye 🙈'
        },
        {
          media: '/images/24/letterpic/8.mp4',
          text: 'you went to Banglore for housewarming. Decor dekke tujhe humare ghar main thoda decor or placement change karne ka idea aya.',
          caption: '1st November 2025: you captured Yamu\'s chaos well 🙉🙈'
        },
        {
          media: '/images/24/letterpic/9.jpeg',
          text: 'your Chennai trip to meet your dance society friends. Rupak ka dedication btw🫡. Also you did pottery!!',
          caption: '9th December 2025: this was your last working week btw 😊'
        },
        {
          media: '/images/24/letterpic/10.mp4',
          text: 'Rupak ke licorice abhi bhi fridge main betha hain waiting for you to come.',
          caption: '11th December 2025: 🌼'
        },
        {
          media: '/images/24/letterpic/11.jpeg',
          text: 'And thus began our longest time apart. But you did a lot over this time. You met your peeps!!',
          caption: '29th December 2025: Mc\'d trip with your boondi ke ladoos ❤️'
        },
        {
          media: '/images/24/letterpic/12.jpeg',
          text: 'you played video games with me 😍. We started playing Stardew Valley in new years. From doing thing like chores in the morning in game to going to sleep together in game was the best way to emulate what we actually wanted to do.',
          caption: '1st January 2025: ab kab khelenge 😭'
        },
        {
          media: '/images/24/letterpic/13.mp4',
          text: 'you met Ananya and had lunch at dhaba and had a drink. Shopping ke liye gye but I don\'t think you bought much.',
          caption: '2nd January 2025: 🤣😘'
        },
        {
          media: '/images/24/letterpic/14.mp4',
          text: 'in between all the meetups, seeing your juniors, going to dance class everyday you helped me know how you were living your life away from me and that gave me a sense of belonging and comfort.',
          caption: '19th January 2025: 🤣'
        },
        {
          media: '/images/24/letterpic/15.jpeg',
          text: 'I wanted to see you before you took off and thanks for letting me know always up until just right now to tell me what\'s going on with you',
          caption: '24th January 2025: 🤣'
        },
      ]
    }
  };

  // Initialize todayData with the default letter data
  const [todayData, setTodayData] = useState(dailyLetters['2025-01-24']);

  const wrongEmojis = ['💩', '🐼', '😠', '😢', '😰', '😭'];
  const loveEmojis = ['😍', '🥰', '💕', '😘', '❤️', '💝', '🌟', '✨', '💖', '💗'];

  useEffect(() => {
    calculateDaysLeft();
  }, []);

  const calculateDaysLeft = () => {
    const targetDate = new Date('2025-02-01');
    const startDate = new Date('2025-01-24');
    startDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  };

  const getTodayData = () => {
    console.log('Getting today data for selectedDate:', selectedDate);
    if (selectedDate) return dailyLetters[selectedDate];
    // return dailyLetters[new Date().toISOString().split('T')[0]]; // For production, use current date
    return dailyLetters['2025-01-24']; // For demo, you can change this to get current date
  };

  const isSpecialDate = (dateStr) => {
    return specialDates.includes(dateStr);
  };

  // Update todayData on mount and whenever selectedDate changes
  useEffect(() => {
    const data = getTodayData();
    console.log('Setting todayData:', data);
    setTodayData(data);
    // Reset special content states when date changes
    setShowSpecialMessage(false);
    setShowSpecialContent(false);
    setUnmutedVideoId(null);
  }, [selectedDate]); // Runs on mount (when selectedDate is null) and whenever selectedDate changes

  // Handle special date message fade in/out
  useEffect(() => {
    const currentDate = selectedDate || '2025-01-24';
    if (currentPage === 'songs' && todayData && todayData.specialContent && isSpecialDate(currentDate)) {
      // Reset states first
      setShowSpecialMessage(false);
      setShowSpecialContent(false);
      
      // Show message after a brief delay
      const timer1 = setTimeout(() => {
        setShowSpecialMessage(true);
      }, 500);

      // Hide message and show content after fade out
      const timer2 = setTimeout(() => {
        setShowSpecialMessage(false);
        setTimeout(() => {
          setShowSpecialContent(true);
        }, 1000); // Wait for fade out to complete
      }, 4000); // Show message for 4 seconds

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Reset if not special date
      setShowSpecialMessage(false);
      setShowSpecialContent(false);
    }
  }, [currentPage, todayData, selectedDate]);
  const gridSize = 8;

  const generateGrid = () => {
    const grid = Array(gridSize).fill(null).map(() => 
      Array(gridSize).fill('').map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    const word = todayData.word;
    console.log('word', word);
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

  const [grid, setGrid] = useState(generateGrid());

  // Regenerate grid whenever todayData changes
  useEffect(() => {
    if (todayData) {
      console.log('Regenerating grid for new date with word:', todayData.word);
      setGrid(generateGrid());
      // Reset game state when date changes
      setSelectedCells([]);
      setLoveMeter(0);
      setCluesShown(0);
      setWordRevealed(false);
      setWordFound(false);
      setCorrectLettersCount(0);
    }
  }, [todayData]);

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
    setUnmutedVideoId(null);
    setShowSpecialMessage(false);
    setShowSpecialContent(false);
  };

  const getAvailableDates = () => {
    const startDate = new Date('2025-01-10');
    const endDate = new Date('2025-02-01');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dates = [];
    const current = new Date(startDate);
    
    while (current <= endDate) {
      const dateStr = current.toISOString().split('T')[0];
      // Only include dates up to today or all dates if you want to see future ones
      // Change to `current <= endDate` to show all dates regardless of today
      if (current <= today && dailyLetters[dateStr]) {
        dates.push({
          date: new Date(current),
          dateStr: dateStr,
          available: true
        });
      } else if (dailyLetters[dateStr]) {
        dates.push({
          date: new Date(current),
          dateStr: dateStr,
          available: false // Future dates
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const handleDateSelect = (dateStr) => {
    console.log('dateStr', dateStr);
    setSelectedDate(dateStr);
    setShowCalendar(false);
    // Don't auto-navigate - let user click "Shuru kare aaj ka?" button
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

  // Helper function to check if a file is a video
  const isVideoFile = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Helper component to render either image or video
  const MediaElement = ({ src, alt, className, videoId, unmutedVideoId, onVideoClick, allowUnmute = false }) => {
    if (isVideoFile(src)) {
      // Only allow unmute if explicitly enabled (for special letter page)
      const isUnmuted = allowUnmute && videoId === unmutedVideoId;
      return (
        <video 
          src={src} 
          alt={alt}
          className={className}
          autoPlay
          loop
          muted={!isUnmuted}
          playsInline
          onClick={allowUnmute ? onVideoClick : undefined}
          style={allowUnmute ? { cursor: 'pointer' } : {}}
        />
      );
    }
    return <img src={src} alt={alt} className={className} />;
  };

  // Home Page
  if (currentPage === 'home') {
    const availableDates = getAvailableDates();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
        {showCalendar && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-pink-600">Choose a Date</h3>
                  <button 
                    onClick={() => setShowCalendar(false)}
                    className="text-gray-500 hover:text-gray-700 text-3xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-6 text-sm md:text-base">Select a date to replay that day's game</p>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {availableDates.map((item) => {
                    const day = item.date.getDate();
                    const month = monthNames[item.date.getMonth()];
                    console.log('item.dateStr', item.dateStr);
                    console.log('item.available', item.available);
                    return (
                      <button
                        key={item.dateStr}
                        onClick={() => item.available && handleDateSelect(item.dateStr)}
                        disabled={!item.available}
                        className={`p-4 md:p-6 rounded-2xl transition-all ${
                          item.available
                            ? 'bg-gradient-to-br from-pink-200 to-purple-200 hover:from-pink-300 hover:to-purple-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105'
                            : 'bg-gray-100 cursor-not-allowed opacity-50'
                        } ${selectedDate === item.dateStr ? 'ring-4 ring-pink-500' : ''}`}
                      >
                        <div className="text-center">
                          <div className="text-2xl md:text-4xl font-bold text-gray-800">{day}</div>
                          <div className="text-xs md:text-sm text-gray-600 font-medium">{month}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* Polaroid Photos */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white p-4 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-48 h-48 flex items-center justify-center overflow-hidden">
                <MediaElement src={todayData.polaroid1} alt="Memory 1" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-sm">{todayData.polaroid1Caption}</p>
            </div>
            <div className="bg-white p-4 shadow-xl transform rotate-6 hover:rotate-3 transition-transform">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-48 h-48 flex items-center justify-center overflow-hidden">
                <MediaElement src={todayData.polaroid2} alt="Memory 2" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 text-gray-600 italic text-sm">{todayData.polaroid2Caption}</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto text-pink-500 animate-pulse" />
            <h1 className="text-4xl font-bold text-gray-800">{todayData.title}</h1>
            <button
              onClick={() => setShowCalendar(true)}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md text-sm md:text-base mb-4"
            >
              📅 {selectedDate ? `Selected: ${new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}` : 'Ab tak ke sare letters yahan'}
            </button>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6">
              <p className="text-gray-700 text-lg mb-2">Days until February 1st:</p>
              <p className="text-6xl font-bold text-purple-600">{daysLeft}</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {todayData.daysMessage || "Ma'am, aapke ke liye ek kath likhi hain but pehle ek puzzle complete karo wo dekne ke liye Find the word to unlock today's letter."}
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
    const currentDate = selectedDate || '2025-01-24';
    const isSpecial = isSpecialDate(currentDate);

    // Special date view - skip song selection
    if (isSpecial && todayData.specialContent) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4 md:p-8 overflow-x-hidden">
          <div className="max-w-6xl w-full">
            {/* Empty letter area */}
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 min-h-[600px] flex items-center justify-center relative overflow-hidden md:overflow-visible">
              {/* Fade message */}
              {showSpecialMessage && (
                <div className="absolute inset-0 flex items-center justify-center animate-fade-message">
                  <p className="text-2xl md:text-3xl font-semibold text-pink-600 text-center px-4 animate-pulse-slow">
                    {todayData.specialMessage || 'there is no song or game today because...'}
                  </p>
                </div>
              )}

              {/* Special content with alternating photos/videos and text */}
              {showSpecialContent && (
                <div className={`w-full animate-fade-in-slow flex flex-col items-center`}>
                  {/* Top video - small height, half width, no frame */}
                  {todayData.specialTopVideo && (
                    <div className="mb-8 animate-fade-in-slow flex justify-center">
                      <div className="w-full">
                        <video
                          src={todayData.specialTopVideo}
                          className="w-full h-48 md:h-96 object-cover rounded-lg shadow-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  )}

                  {/* Special title below video */}
                  <div className="text-center mb-12 animate-slide-down" style={{ animationDelay: '0.3s' }}>
                    <Sparkles className="w-12 h-12 mx-auto text-pink-500 mb-4" />
                    <h2 className="text-3xl font-bold text-pink-600 mb-2">
                      {todayData.specialTitle || todayData.title}
                    </h2>
                    {todayData.letterSalutation && (
                      <p className="text-xl font-semibold text-gray-800 mb-4">{todayData.letterSalutation},</p>
                    )}
                  </div>

                  {/* Letter content area with alternating photos/videos and text - wider container */}
                  <div className="w-full max-w-full space-y-24 px-4 md:px-0 md:-mx-8 lg:-mx-12">
                    {todayData.specialContent.map((item, index) => {
                      const isLeft = index % 2 === 0;
                      const videoId = `video-${index}`;
                      const isVideo = isVideoFile(item.media);
                      
                      // Alternate rotation: left items rotate slightly right, right items rotate slightly left (only on desktop)
                      const rotationClass = isLeft ? 'md:rotate-2' : 'md:-rotate-2';
                      
                      const handleVideoClick = () => {
                        if (isVideo) {
                          if (unmutedVideoId === videoId) {
                            // If clicking the same video, mute it
                            setUnmutedVideoId(null);
                          } else {
                            // Unmute this video and mute others
                            setUnmutedVideoId(videoId);
                          }
                        }
                      };

                      return (
                        <div
                          key={index}
                          className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 justify-center items-center md:items-center ${isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {/* Media on left or right with polaroid border and tilt - larger size */}
                          <div className={`flex justify-center w-full md:flex-shrink-0 md:w-[450px] lg:w-[500px] ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
                            <div className={`bg-white p-4 md:p-6 shadow-xl transform hover:scale-105 transition-transform w-full max-w-sm md:max-w-none ${rotationClass}`}>
                              <div className="bg-gradient-to-br from-pink-200 to-purple-200 aspect-square flex items-center justify-center overflow-hidden">
                                <MediaElement
                                  src={item.media}
                                  alt={`Memory ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  videoId={isVideo ? videoId : null}
                                  unmutedVideoId={unmutedVideoId}
                                  onVideoClick={handleVideoClick}
                                  allowUnmute={true}
                                />
                              </div>
                              {/* Caption below media */}
                              {item.caption && (
                                <p className="text-center mt-3 text-gray-600 italic text-sm md:text-base">
                                  {item.caption}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Text on opposite side - centered on mobile, with padding on desktop */}
                          <div className={`flex justify-center w-full md:flex-1 ${isLeft ? 'md:text-left md:pr-8 lg:pr-12' : 'md:text-right md:pl-8 lg:pl-12'} animate-fade-in-text`} style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                            <div className={`prose prose-pink max-w-none text-center md:text-left ${isLeft ? 'md:text-left' : 'md:text-right'} w-full max-w-lg md:max-w-none`}>
                              <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Letter closing if exists */}
                  {todayData.letter && todayData.letter.trim() && (
                    <div className="mt-8 pt-8 border-t border-pink-200">
                      <div className="prose prose-pink max-w-none text-center">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {todayData.letter}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom video - small height, half width, no frame */}
                  {todayData.specialBottomVideo && (
                    <div className="mt-12 mb-8 animate-fade-in-slow flex justify-center">
                      <div className="w-full">
                        <video
                          src={todayData.specialBottomVideo}
                          className="w-full h-48 md:h-96 object-cover rounded-lg shadow-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="space-y-3 pt-6">
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
              )}
            </div>
          </div>

          <style>{`
            @keyframes fade-message {
              0% { opacity: 0; transform: scale(0.95); }
              20% { opacity: 1; transform: scale(1); }
              80% { opacity: 1; transform: scale(1); }
              100% { opacity: 0; transform: scale(0.95); }
            }
            .animate-fade-message {
              animation: fade-message 4s ease-in-out forwards;
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }
            .animate-pulse-slow {
              animation: pulse-slow 2s ease-in-out infinite;
            }
            @keyframes fade-in-slow {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-fade-in-slow {
              animation: fade-in-slow 1.5s ease-out forwards;
            }
            @keyframes slide-down {
              0% { opacity: 0; transform: translateY(-30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-down {
              animation: slide-down 1s ease-out forwards;
            }
            @keyframes slide-in-left {
              0% { opacity: 0; transform: translateX(-50px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes slide-in-right {
              0% { opacity: 0; transform: translateX(50px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out forwards;
              opacity: 0;
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out forwards;
              opacity: 0;
            }
            @keyframes fade-in-text {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-fade-in-text {
              animation: fade-in-text 1s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </div>
      );
    }

    // Regular song selection view
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
              {todayData.songs && todayData.songs.map((song, index) => (
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
                    <MediaElement src={song.image} alt={song.title} className="w-full h-full object-cover" />
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

        <style>{`
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
              Can you please find the word me Amore? 🙇🏽
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

        <style>{`
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
                <MediaElement src={todayData.letterImage} alt="Our Love" className="w-full h-full object-cover" />
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

        <style>{`
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