// scenes/DialogueData.js

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
        { speaker: 'dot', text: "Meow…meow…" },
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

export const questData = [
    {
        name: "The Entryway Shoes - The Fool",
        preLine: ["I should probably start at the beginning. Where did I leave my walking shoes?"],
        objectLines: ["Dot, you didn't chew on the laces again, did you?", "Ah... there's a card tucked right inside the heel."],
        tarotKey: 'tarot-0', 
        narratorLine: [
            "The Fool: A leap into the unknown.",
            "Every step you took was a risk, and every risk brought you to this very room.",
            "The Fool reminds you that starting over isn't failing; it is simply stepping forward."
        ],
        postLine: ["The Fool... I guess every path has to start somewhere."],
    },

    {
        name: "The Sketchbook - The Magician",
        preLine: ["My desk is a mess. I wonder if Dot knocked something over by my sketchbook."],
        objectLines: ["Just a bunch of half-finished doodles.", "Wait, there's a card wedged beneath the back cover."],
        tarotKey: 'tarot-1', 
        narratorLine: [
            "The Magician: The power of creation.",
            "You hold the tools to build your own reality, even when the canvas feels too blank.",
            "The Magician speaks to the quiet spark inside you that turns nothing into something."
        ],
        postLine: ["The Magician. It is easy to forget what I am capable of building."],
    },

    {
        name: "The Hallway Mirror - The High Priestess",
        preLine: ["There's a strange reflection catching the light near the hallway mirror."],
        objectLines: ["Dot, are you staring at your own reflection again?", "No... there's a card slipped neatly into the frame."],
        tarotKey: 'tarot-2', 
        narratorLine: [
            "The High Priestess: Trusting your inner voice.",
            "The answers were always quiet, waiting patiently beneath the surface.",
            "She reminds you to listen to the feeling in your chest before the noise of the world."
        ],
        postLine: ["The High Priestess. I need to trust myself a bit more."],
    },

    {
        name: "The Window Plant - The Empress",
        preLine: ["I need to water the pothos anyway. Maybe there's a clue there."],
        objectLines: ["The soil is dry, but look at this...", "A card hidden right under the leaves. Taking care of things always grounded me."],
        tarotKey: 'tarot-3', 
        narratorLine: [
            "The Empress: Growth, patience, and nurturing.",
            "You cultivated life around you, even when you felt entirely barren yourself.",
            "The Empress reflects the quiet beauty of letting things bloom in their own time."
        ],
        postLine: ["The Empress... some things just need time and water."],
    },

    {
        name: "The Heavy Bookshelf - The Emperor",
        preLine: ["Those old textbooks on the bottom shelf... Dot loves hiding behind them."],
        objectLines: ["Dusty. But there's a card slipping out from a heavy binder.", "I relied on these rules for structure when everything else felt chaotic."],
        tarotKey: 'tarot-4', 
        narratorLine: [
            "The Emperor: Stability and foundation.",
            "You built walls to feel safe, but walls can also trap you if you forget to build doors.",
            "He asks you to examine the rules you laid down for yourself."
        ],
        postLine: ["The Emperor. Structure is good, but I don't want to be trapped by it."],
    },

    {
        name: "The Mantel Clock - The Hierophant",
        preLine: ["The clock has been ticking louder than usual today. Let's take a look."],
        objectLines: ["Right behind the pendulum. Good hiding spot, Dot.", "Time just keeps moving, following the exact same rhythm."],
        tarotKey: 'tarot-5', 
        narratorLine: [
            "The Hierophant: Tradition and shared belief.",
            "You sought meaning in the ways things have always been done by others.",
            "But the Hierophant wonders if those old routines still serve the person you are becoming."
        ],
        postLine: ["The Hierophant. Maybe it's okay to break the routine."],
    },

    {
        name: "The Mismatched Mugs - The Lovers",
        preLine: ["I left a pair of mugs on the coffee table. Let's see if Dot knocked them over."],
        objectLines: ["Still here. And look, a card resting right between them.", "Connection... it's always been the hardest part to figure out."],
        tarotKey: 'tarot-6', 
        narratorLine: [
            "The Lovers: Harmony and deep choices.",
            "It is about more than romance; it is about choosing what aligns with your soul.",
            "The Lovers remind you that every connection shapes the world you live in."
        ],
        postLine: ["The Lovers. It's all about who and what I choose to keep close."],
    },
    {
        name: "The Piano keyboard - The Chariot",
        preLine: ["Dot also likes walking on my keyboard to make some funny sounds. I need to check it too."],
        objectLines: [
            "Really, Dot, how did you tuck a card in here?", 
            "I remember those days… pushing myself forward just to avoid standing still."
        ],
        tarotKey: 'tarot-7', 
        narratorLine: [
            "The Chariot: The past, lack of direction.",
            "There were times when you moved without knowing why, pulled by old habits or old fears.",
            "The Chariot remembers those moments - when you pushed ahead but felt no true direction.",
            "Yet even wandering teaches you something. You learned what didn’t feel right, and that is its own kind of guidance."
        ],
        postLine: ["The Chariot... Maybe I wasn’t lost, maybe I was learning."],
    }
];