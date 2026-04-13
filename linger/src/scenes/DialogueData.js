// Characters data
export const storyData = {
    intro: [
        { speaker: 'narrator', text: "They say each day brings something to look forward to, that new moments line up quietly, waiting for us when tomorrow comes. Tomorrow will be better, brighter, gentler, no matter how heavy the day before felt." },
        { speaker: 'narrator', text: "But what about today? What did you notice today? How did you breathe today?" },
        { speaker: 'narrator', text: "How does your heart feel in this moment, right now? Are you living fully in the small, fleeting pieces of today?" },
        { speaker: 'narrator', text: "Or do certain moments pull you backward: a scent, a sound, a familiar corner, and suddenly you’re standing in an old memory, forgetting the present unfolding around you." },
        { speaker: 'narrator', text: "Or maybe your thoughts drift forward instead, wondering if you’re doing enough, preparing enough, becoming enough for the future you hope to reach." },
        { speaker: 'narrator', text: "And in all that drifting - backward, forward - the present slips away. The moment you’re living. The breath you’re taking. The quiet thing you’re doing right now." }
],

    wakeup: [
        { speaker: 'rem', text: "(Wake up)\nOh, that dream again… I wonder whose voice that is." },
        { speaker: 'rem', text: "Lately, I haven't been getting enough sleep, and every time I'm about to wake up, I hear this voice in my dreams." },
        { speaker: 'rem', text: "What time is it? I have a tarot reading appointment with a friend today. I need to get out of bed and grab something to eat." },
        { speaker: 'rem', text: "Hmm, why isn't Dot yapping this morning? It's so quiet. Hello, Dot!" },
        { speaker: 'rem', text: "Dot is probably in the living room sunbathing. Let's go find her and feed her." }
    ],

    dotDiscovery: [
        { speaker: 'rem', text: "Good morning, Dot. How are you?" },
        { speaker: 'dot', text: "Meow… meow… " },
        { speaker: 'rem', text: "Okay, I get it. You are hungry now. Let’s eat." },
        { speaker: 'rem', text: "(Rem notices Dot is lying on something familiar)\nHey Dot, what is lying under you? Why are my tarot cards here?" },
        { speaker: 'rem', text: "Oh no, Dot… Did you scatter my tarot deck?" },
        { speaker: 'dot', text: "Meow?" },
        { speaker: 'rem', text: "Let’s see. I have 1, 2, 3, 4, 5, 6, 7,...\nOh no, I’m missing 12 cards." },
        { speaker: 'rem', text: "Where did you hide them, Dot? I need to find them before the appointment." },
        { speaker: 'rem', text: "Go on and eat, Dot. I’ll search for the cards afterward. I could never scold you anyway… you’re far too adorable." },
        { speaker: 'dot', text: "Meowwww!" }
    ],

    ending: [
        { speaker: 'narrator', text: "The last object settles in your hands, its memory finally at rest. The room grows still, as if the morning itself is holding its breath." },
        { speaker: 'rem', text: "That’s all of them. Dot, you really made me work for this. Is this my morning workout?" },
        { speaker: 'narrator', text: "A gentle warmth spreads through the space - not from any one object, but from the quiet understanding they’ve left behind." },
        { speaker: 'narrator', text: "You’ve walked through beginnings and endings, through shadows and light, through the pieces of yourself you once hid away." },
        { speaker: 'narrator', text: "Each card revealed something small, something true, something you were finally ready to see." },
        { speaker: 'rem', text: "I didn’t expect a morning like this… but maybe I needed it." },
        { speaker: 'narrator', text: "Nothing outside this room has changed. The world is still waiting - bright, warm, full of possibility." },
        { speaker: 'narrator', text: "But you have changed, even if only a little." },
        { speaker: 'dot', text: "Meow." },
        { speaker: 'rem', text: "Alright, Dot. I'm ready to go. I'll see you after. I'm heading to the main door now." },
    ]

};

// Interactable objects quest data
export const questData = [
    {
        name: "Scarf - The Fool",
        tarotKey: 'tarot-0',
        preLine: ["Ah, I usually saw Dot lying on my scarf as well. Maybe I should check it first.", "I forgot to hang my scarf last night, it should be on the shoe cabinet."],
        objectLines: ["Dot… did you hide something in this scarf?", "Here we go, I didn’t expect to find The Fool as the first card."],
        narratorLine: [
            "The fabric warms in your hands, as if remembering the courage of a first step.",
            "Every beginning asks for a little courage. You may not know where the path leads, but choosing to step forward is already an act of hope.",
            "The Fool reminds you that you don’t need a perfect plan, just a willingness to try."
        ],
        postLine: ["…I guess I’ve always been afraid of starting things. But maybe beginnings don’t have to be perfect. Maybe choosing to move at all is enough."]
    },
    {
        name: "Keyboard - The Chariot",
        tarotKey: 'tarot-1', // Mapping index 1 to Chariot
        preLine: ["Dot also likes walking on my keyboard to make some funny sounds. I need to check it too."],
        objectLines: ["Really, Dot, how did you tuck a card in here?"],
        narratorLine: [
            "The metal hums faintly, like footsteps taken without purpose, hums with the memory of motion without meaning.",
            "There were times when you moved without knowing why, pulled by old habits or old fears.",
            "The Chariot remembers those moments—when you pushed ahead but felt no true direction. Yet even wandering teaches you something."
        ],
        postLine: ["I remember those days… pushing myself forward just to avoid standing still. Maybe I wasn’t lost, maybe I was learning."]
    },
    {
        name: "Bookshelf - Wheel of Fortune",
        tarotKey: 'tarot-2',
        preLine: ["I haven’t played any song for a while. Should I play something today?", "There are some music sheets I composed on my bookshelf... I can find some cards there, too."],
        objectLines: ["Huh… Dot really hid something here, between my music books? You’re full of surprises."],
        narratorLine: [
            "The pages flutter softly, as if caught in a turning wind.",
            "Life turns in quiet circles, shifting when you least expect it. The Wheel reminds you that nothing stays still—not joy, not sorrow, not you.",
            "Trust that the turning is part of your story."
        ],
        postLine: ["I think I’ve always been scared of change… but maybe it’s just another way of moving forward.", 
            "My last song Head in the Clouds is about some moments I went through in the past, maybe I was trying to tell myself that change is not always bad.",
            "Maybe I just need to trust the turning of the wheel."]
    },
    {
        name: "Mug - The Sun",
        tarotKey: 'tarot-3',
        preLine: ["Hang on, I forgot to have some coffee. I need caffeine to have more energy with this hunt."],
        objectLines: ["There is another card next to my mug. Dot really knows all of my usual stuff."],
        narratorLine: [
            "A warm glow rises from the ceramic, gentle as morning light.",
            "There are days when the light finally reaches you, warm and honest. The Sun reminds you that you’ve grown more than you realize.",
            "Success doesn’t always arrive loudly—sometimes it’s a soft glow that follows you into the morning."
        ],
        postLine: ["The Sun... I wish I could always enjoy the sunlight every morning like today. Maybe I really have come farther than I thought."]
    },
    {
        name: "Fridge Magnet - The Lovers",
        tarotKey: 'tarot-4',
        preLine: ["Wait, is that something on the fridge?"],
        objectLines: ["This is a postcard magnet from my hometown… and a card was tuck behind it.", 
                    "I have no idea how Dot could do this with the magnet, did she jump on the counter and put this card here?"],
        narratorLine: [
            "The image softens, like a memory warming in your hands.",
            "The Lovers honor your connections—to your past, your home, and the person you are becoming.",
            "Moving forward doesn’t mean forgetting. It means making space for harmony between who you were and who you are now."
        ],
        postLine: ["Ah, the good old days. I miss who I was… but I’m learning to like who I’m becoming, too."]
    },
    {
        name: "Bathroom Mirror - The Magician", // Replaced Page of Wands
        tarotKey: 'tarot-5',
        preLine: ["I'm still sleepy. I should probably splash some water on my face to wake up. Let's check the bathroom."],
        objectLines: ["Wait, there's something stuck to the corner of the mirror...", "The Magician. I wasn't expecting to see it reflecting back at me."],
        narratorLine: [
        "A restless spark flickers at your fingertips as you touch the glass.",
        "The Magician knows the sparks inside you that never quite became flames—the dreams you postponed for 'later.'",
        "The tools to create are already in your hands. It only takes a single moment of focus to catch fire again."
        ],
        postLine: ["I used to have so many big plans... I guess I don't have to wait for the 'perfect' time to start. I have what I need right now."]
    },
    {
        name: "Letter - High Priestess", // Replaced 3 of Swords
        tarotKey: 'tarot-6',
        preLine: ["I just remember I need to get the watch from my desk drawer to go out."],
        objectLines: ["Hmm… there's an envelope next to the watch. Is this my water bill this month?",
                    "Oh, I remember I was organizing the drawer and put it here last night. This letter… is from my old friend. When did we last talk to each other?"],
        narratorLine: [
            "A quiet ache pulses from the paper, tender and honest.",
            "The High Priestess understands the things we keep hidden in the dark. Grief and memories change shape over time.",
            "You are allowed to acknowledge the space they held and heal at your own pace."
        ],
        postLine: ["…I thought I was done hurting. Maybe healing just takes longer than I hoped. I hope she is doing well."]
    },
    {
        name: "Cat Bed - Strength", // Replaced 9 of Swords
        tarotKey: 'tarot-7',
        preLine: ["I also need to look for the cards in Dot’s favourite spot."],
        objectLines: ["Yeah, I was right. She hid a card in her bed."],
        narratorLine: [
            "A shadow clings to the object, familiar but fading.",
            "Strength isn't just about force; it's about the internal courage to face the shadows.",
            "You survived the nights when thoughts felt heavy. You are learning how to breathe through them."
        ],
        postLine: ["I remember those nights... Dot helped me a lot. I’m still learning how to breathe through the heavy times."]
    },
    {
        name: "Washing Machine - The Hermit", // Replaced Ace of Pentacles
        tarotKey: 'tarot-8',
        preLine: ["I should go to another favourite place of Dot, the laundry room!"],
        objectLines: ["Wow! Look at this card here, lying in front of the washer."],
        narratorLine: [
            "A small, steady promise rests in your palm.",
            "The Hermit reminds you that solitude is not being lost. Sometimes you must go within to find the light.",
            "What felt like a missed opportunity was actually space being made for a path that fits who you are now."
        ],
        postLine: ["Maybe the things I missed weren’t meant for me. I worry about my career, but maybe I just need to find my own light."]
    },
    {
        name: "Plant Pot - The Empress", // Replaced Queen of Pentacles
        tarotKey: 'tarot-9',
        preLine: ["There are three cards left. Where didn’t I look? Oh, the washroom."],
        objectLines: ["Correct! Dot put another card in the plant pot."],
        narratorLine: [
            "A grounded, nurturing energy surrounds the object.",
            "The Empress honors the life you've built, but whispers that your heart needs tending too.",
            "You worked so hard until you were exhausted. Remember that nurturing yourself is as important as your responsibilities."
        ],
        postLine: ["I really forgot to take care of myself before. But I'll try my best on the interview next week and take it one step at a time."]
    },
    {
        name: "Planner - The Tower",
        tarotKey: 'tarot-10',
        preLine: ["Then, where should I go for the next card? Oh, the storage room! Dot likes to hide things there."],
        objectLines: ["Here we go, Dot slipped a card under a cardboard box.", "Oops, The Tower?! Why did Dot pick the most dramatic one..."],
        narratorLine: [
            "A quiet shift trembles beneath the surface, not destructive, just honest.",
            "The Tower reminds you that some structures fall not to ruin you, but to free you.",
            "Sometimes life removes what was holding you back to make room for something true to grow."
        ],
        postLine: ["Well, I guess some things needed to fall apart so I could finally breathe. It made space for something better."]
    },
    {
        name: "Camera - The Star", // Replaced 3 of Cups
        tarotKey: 'tarot-11',
        preLine: ["Okay, only one left. I remember there was something next to my camera in the living room."],
        objectLines: ["Yay, finally! The last piece of the tarot deck. It was on the coffee table!"],
        narratorLine: [
            "A warm, joyful hum rises from the object.",
            "The Star represents hope and the connection that guides you through the dark.",
            "You haven’t walked your path alone. Connection is magic, and joy grows when it is shared."
        ],
        postLine: ["I always have my beloved people who support me. I’m lucky to have them. Time to get ready and go to see my friends!"]
    }
];

// Total: 12 cards
// I had to change some cards from the original version because I only have 12 Major Arcane cards for now.