// ───────────────────────────────────────────────────────
// 1) YOUR QUESTIONS: paste your 50 question‐objects BELOW
//    (make sure each object is comma-separated, no extra semicolons)

const QUESTIONS = [
  {
    prompt: "Example: Name something you bring to the beach",
    answers: [
      { text: "Towel",     points: 32 },
      { text: "Sunscreen", points: 28 },
      { text: "Umbrella",  points: 18 },
      { text: "Cooler",    points: 12 },
      { text: "Hat",       points: 10 }
    ]
  },
  {
    prompt: "Example: Name a popular pizza topping",
    answers: [
      { text: "Pepperoni",   points: 45 },
      { text: "Mushrooms",   points: 20 },
      { text: "Onions",      points: 15 },
      { text: "Sausage",     points: 12 },
      { text: "Extra cheese",points:  8 }
    ]
  },
  {
    prompt: "Name something you bring to the beach",
    answers: [
      { text: "Towel",     points: 32 },
      { text: "Sunscreen", points: 28 },
      { text: "Umbrella",  points: 18 },
      { text: "Cooler",    points: 12 },
      { text: "Hat",       points: 10 }
    ]
  },
  {
    prompt: "Name a popular pizza topping",
    answers: [
      { text: "Pepperoni",   points: 45 },
      { text: "Mushrooms",   points: 20 },
      { text: "Onions",      points: 15 },
      { text: "Sausage",     points: 12 },
      { text: "Extra cheese",points:  8 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri",     points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji",  points: 15 },
      { text: "Vada pav",    points: 10 },
      { text: "Bhel Puri",       points: 8 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket",     points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi",  points: 15 },
      { text: "Badminton",    points: 10 },
      { text: "Hockey",    points: 8 },
      { text: "Wrestling",       points: 5 }
    ]
  },
  {
    prompt: "What is something you do first thing in the morning?",
    answers: [
      { text: "Brush teeth", points: 35 },
      { text: "Take a bath", points: 20 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Read newspaper", points: 10 },
      { text: "Pray", points: 8 },
      { text: "Check phone", points: 7 },
      { text: "Exercise", points: 5 }
    ]
  },
  {
    prompt: "Name a popular Indian festival.",
    answers: [
      { text: "Diwali", points: 40 },
      { text: "Holi", points: 25 },
      { text: "Navratri", points: 15 },
      { text: "Eid", points: 10 },
      { text: "Christmas", points: 5 },
      { text: "Pongal", points: 3 },
      { text: "Raksha Bandhan", points: 2 }
    ]
  },
  {
    prompt: "What is something you always find in an Indian kitchen?",
    answers: [
      { text: "Spices", points: 30 },
      { text: "Rice", points: 20 },
      { text: "Dal", points: 15 },
      { text: "Pressure cooker", points: 12 },
      { text: "Tea leaves", points: 10 },
      { text: "Ghee", points: 8 },
      { text: "Chakla-Belan", points: 5 }
    ]
  },
  {
    prompt: "Name a Bollywood actor everyone knows.",
    answers: [
      { text: "Shah Rukh Khan", points: 35 },
      { text: "Salman Khan", points: 25 },
      { text: "Amitabh Bachchan", points: 15 },
      { text: "Akshay Kumar", points: 10 },
      { text: "Ranbir Kapoor", points: 8 },
      { text: "Hrithik Roshan", points: 5 },
      { text: "Rajinikanth", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents expect their kids to become?",
    answers: [
      { text: "Doctor", points: 35 },
      { text: "Engineer", points: 25 },
      { text: "Government officer", points: 15 },
      { text: "Lawyer", points: 10 },
      { text: "MBA", points: 8 },
      { text: "Chartered Accountant", points: 5 },
      { text: "Teacher", points: 2 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri", points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji", points: 15 },
      { text: "Vada Pav", points: 12 },
      { text: "Chole Bhature", points: 10 },
      { text: "Bhel Puri", points: 8 },
      { text: "Momos", points: 5 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket", points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi", points: 15 },
      { text: "Badminton", points: 10 },
      { text: "Hockey", points: 8 },
      { text: "Wrestling", points: 5 }
    ]
  },
  {
    prompt: "What do Indians give as gifts on festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Dry fruits", points: 25 },
      { text: "Money", points: 15 },
      { text: "Clothes", points: 10 },
      { text: "Jewelry", points: 8 },
      { text: "Silver items", points: 5 },
      { text: "Chocolates", points: 2 }
    ]
  },
  {
    prompt: "Name a thing that is always found in an Indian wedding.",
    answers: [
      { text: "Big fat crowd", points: 30 },
      { text: "Loud music/DJ", points: 25 },
      { text: "Food buffet", points: 15 },
      { text: "Bride’s lehenga", points: 12 },
      { text: "Baraat", points: 10 },
      { text: "Fireworks", points: 5 },
      { text: "Dance performances", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "What is something you do first thing in the morning?",
    answers: [
      { text: "Brush teeth", points: 35 },
      { text: "Take a bath", points: 20 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Read newspaper", points: 10 },
      { text: "Pray", points: 8 },
      { text: "Check phone", points: 7 },
      { text: "Exercise", points: 5 }
    ]
  },
  {
    prompt: "Name a popular Indian festival.",
    answers: [
      { text: "Diwali", points: 40 },
      { text: "Holi", points: 25 },
      { text: "Navratri", points: 15 },
      { text: "Eid", points: 10 },
      { text: "Christmas", points: 5 },
      { text: "Pongal", points: 3 },
      { text: "Raksha Bandhan", points: 2 }
    ]
  },
  {
    prompt: "What is something you always find in an Indian kitchen?",
    answers: [
      { text: "Spices", points: 30 },
      { text: "Rice", points: 20 },
      { text: "Dal", points: 15 },
      { text: "Pressure cooker", points: 12 },
      { text: "Tea leaves", points: 10 },
      { text: "Ghee", points: 8 },
      { text: "Chakla-Belan", points: 5 }
    ]
  },
  {
    prompt: "Name a Bollywood actor everyone knows.",
    answers: [
      { text: "Shah Rukh Khan", points: 35 },
      { text: "Salman Khan", points: 25 },
      { text: "Amitabh Bachchan", points: 15 },
      { text: "Akshay Kumar", points: 10 },
      { text: "Ranbir Kapoor", points: 8 },
      { text: "Hrithik Roshan", points: 5 },
      { text: "Rajinikanth", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents expect their kids to become?",
    answers: [
      { text: "Doctor", points: 35 },
      { text: "Engineer", points: 25 },
      { text: "Government officer", points: 15 },
      { text: "Lawyer", points: 10 },
      { text: "MBA", points: 8 },
      { text: "Chartered Accountant", points: 5 },
      { text: "Teacher", points: 2 }
    ]
  },
  {
    prompt: "Name a street food famous in India.",
    answers: [
      { text: "Pani Puri", points: 30 },
      { text: "Samosa", points: 20 },
      { text: "Pav Bhaji", points: 15 },
      { text: "Vada Pav", points: 12 },
      { text: "Chole Bhature", points: 10 },
      { text: "Bhel Puri", points: 8 },
      { text: "Momos", points: 5 }
    ]
  },
  {
    prompt: "Name a sport India loves.",
    answers: [
      { text: "Cricket", points: 50 },
      { text: "Football", points: 20 },
      { text: "Kabaddi", points: 15 },
      { text: "Badminton", points: 10 },
      { text: "Hockey", points: 8 },
      { text: "Wrestling", points: 5 }
    ]
  },
  {
    prompt: "What do Indians give as gifts on festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Dry fruits", points: 25 },
      { text: "Money", points: 15 },
      { text: "Clothes", points: 10 },
      { text: "Jewelry", points: 8 },
      { text: "Silver items", points: 5 },
      { text: "Chocolates", points: 2 }
    ]
  },
  {
    prompt: "Name a thing that is always found in an Indian wedding.",
    answers: [
      { text: "Big fat crowd", points: 30 },
      { text: "Loud music/DJ", points: 25 },
      { text: "Food buffet", points: 15 },
      { text: "Bride’s lehenga", points: 12 },
      { text: "Baraat", points: 10 },
      { text: "Fireworks", points: 5 },
      { text: "Dance performances", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "Name a famous Indian tourist destination.",
    answers: [
      { text: "Taj Mahal", points: 35 },
      { text: "Goa", points: 25 },
      { text: "Jaipur", points: 15 },
      { text: "Kerala", points: 12 },
      { text: "Manali", points: 10 },
      { text: "Rishikesh", points: 5 },
      { text: "Andaman & Nicobar", points: 3 }
    ]
  },
  {
    prompt: "What do people do when there is a power cut?",
    answers: [
      { text: "Complain", points: 35 },
      { text: "Use candle/emergency light", points: 25 },
      { text: "Go outside", points: 15 },
      { text: "Fan themselves", points: 10 },
      { text: "Check phone", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Call the electricity board", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do after dinner?",
    answers: [
      { text: "Eat sweets", points: 30 },
      { text: "Drink water", points: 25 },
      { text: "Talk with family", points: 15 },
      { text: "Watch TV", points: 10 },
      { text: "Take a walk", points: 8 },
      { text: "Check phone", points: 5 },
      { text: "Sleep", points: 2 }
    ]
  },
  {
    prompt: "What do Indian moms say the most?",
    answers: [
      { text: "Khaana kha liya?", points: 35 },
      { text: "Padhai ki?", points: 25 },
      { text: "Light band kar do", points: 15 },
      { text: "Main sab jaanati hoon", points: 10 },
      { text: "Pani pi lo", points: 8 },
      { text: "Phone chhodo", points: 5 },
      { text: "Main bol rahi hoon na!", points: 2 }
    ]
  },
  {
    prompt: "What is something people do at Indian weddings?",
    answers: [
      { text: "Eat food", points: 35 },
      { text: "Dance", points: 25 },
      { text: "Click selfies", points: 15 },
      { text: "Gossip", points: 12 },
      { text: "Compliment the bride", points: 10 },
      { text: "Compare weddings", points: 5 },
      { text: "Flirt", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians touch for good luck?",
    answers: [
      { text: "Feet of elders", points: 40 },
      { text: "Gods' idols", points: 30 },
      { text: "Religious books", points: 15 },
      { text: "Gold", points: 10 },
      { text: "New car", points: 5 },
      { text: "Sacred thread", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do while watching cricket?",
    answers: [
      { text: "Scream and cheer", points: 35 },
      { text: "Eat snacks", points: 25 },
      { text: "Pray", points: 15 },
      { text: "Abuse the umpire", points: 10 },
      { text: "Check stats on phone", points: 8 },
      { text: "Call friends", points: 5 },
      { text: "Discuss match strategies", points: 2 }
    ]
  },
  {
    prompt: "Name a common way Indians save money.",
    answers: [
      { text: "Fixed deposits", points: 30 },
      { text: "Buying gold", points: 25 },
      { text: "Piggy bank", points: 15 },
      { text: "Recurring deposits", points: 12 },
      { text: "Property investment", points: 10 },
      { text: "Hiding cash at home", points: 5 },
      { text: "Borrowing from friends", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians take as prasad?",
    answers: [
      { text: "Laddoo", points: 35 },
      { text: "Coconut", points: 25 },
      { text: "Jalebi", points: 15 },
      { text: "Fruits", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do when visiting someone’s home?",
    answers: [
      { text: "Remove shoes", points: 35 },
      { text: "Touch elders’ feet", points: 25 },
      { text: "Bring sweets", points: 15 },
      { text: "Drink chai", points: 12 },
      { text: "Compliment house decor", points: 10 },
      { text: "Gossip", points: 5 },
      { text: "Ask for WiFi password", points: 3 }
    ]
  },
  {
    prompt: "What do Indians love to eat with tea?",
    answers: [
      { text: "Biscuits", points: 35 },
      { text: "Pakoras", points: 25 },
      { text: "Samosa", points: 15 },
      { text: "Rusk", points: 12 },
      { text: "Mathri", points: 10 },
      { text: "Namkeen", points: 5 },
      { text: "Cake", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on trains?",
    answers: [
      { text: "Eat homemade food", points: 30 },
      { text: "Make friends with co-passengers", points: 25 },
      { text: "Look outside the window", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Sleep", points: 10 },
      { text: "Play cards", points: 5 },
      { text: "Charge phone", points: 3 }
    ]
  },
  {
    prompt: "Name a place where Indians remove their shoes.",
    answers: [
      { text: "Temple", points: 40 },
      { text: "Home", points: 25 },
      { text: "Gurudwara", points: 15 },
      { text: "Someone else’s home", points: 10 },
      { text: "Mosque", points: 8 },
      { text: "Yoga class", points: 5 },
      { text: "Schools", points: 2 }
    ]
  },
  {
    prompt: "What is something people do in a traffic jam?",
    answers: [
      { text: "Honk unnecessarily", points: 35 },
      { text: "Complain", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Listen to music", points: 12 },
      { text: "Abuse other drivers", points: 10 },
      { text: "Look at surroundings", points: 5 },
      { text: "Call someone", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians buy during Diwali?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Clothes", points: 25 },
      { text: "Firecrackers", points: 15 },
      { text: "Gold", points: 10 },
      { text: "Diyas", points: 8 },
      { text: "Electronics", points: 5 },
      { text: "Silver coins", points: 2 }
    ]
  },
  {
    prompt: "What is something Indian kids do when guests come over?",
    answers: [
      { text: "Touch elders’ feet", points: 30 },
      { text: "Serve water", points: 25 },
      { text: "Hide in their room", points: 15 },
      { text: "Bring chairs", points: 12 },
      { text: "Show their report card", points: 10 },
      { text: "Play mobile games", points: 5 },
      { text: "Get extra pocket money", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always carry in their wallets?",
    answers: [
      { text: "Cash", points: 35 },
      { text: "Aadhaar card", points: 25 },
      { text: "Credit/debit cards", points: 15 },
      { text: "Photos of family", points: 10 },
      { text: "Temple prasad", points: 8 },
      { text: "Business cards", points: 5 },
      { text: "Shopping bills", points: 2 }
    ]
  },
  {
    prompt: "What is a common excuse for being late in India?",
    answers: [
      { text: "Traffic jam", points: 40 },
      { text: "Car/bike breakdown", points: 25 },
      { text: "Alarm didn’t ring", points: 15 },
      { text: "No auto/rickshaw available", points: 10 },
      { text: "Weather was bad", points: 5 },
      { text: "Family emergency", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do on weekends?",
    answers: [
      { text: "Watch movies", points: 30 },
      { text: "Sleep", points: 25 },
      { text: "Go out with friends", points: 15 },
      { text: "Visit relatives", points: 12 },
      { text: "Eat out", points: 10 },
      { text: "Go shopping", points: 5 },
      { text: "Clean the house", points: 3 }
    ]
  },
  {
    prompt: "What do Indian parents do when they see kids on the phone?",
    answers: [
      { text: "Ask 'Kisse baat kar rahe ho?'", points: 35 },
      { text: "Say 'Kitni der se phone pe ho?'", points: 25 },
      { text: "Snatch the phone", points: 15 },
      { text: "Check WhatsApp messages", points: 12 },
      { text: "Reduce WiFi speed", points: 10 },
      { text: "Complain about eyesight", points: 5 },
      { text: "Compare with their childhood", points: 3 }
    ]
  },
  {
    prompt: "What is something found in every Indian grandmother’s home?",
    answers: [
      { text: "Homemade pickles", points: 35 },
      { text: "Knitting needles", points: 25 },
      { text: "Ayurvedic medicines", points: 15 },
      { text: "Old photographs", points: 12 },
      { text: "Swing/charpai", points: 10 },
      { text: "Religious books", points: 5 },
      { text: "An old radio", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during a power cut?",
    answers: [
      { text: "Light candles", points: 35 },
      { text: "Complain about electricity board", points: 25 },
      { text: "Go to the terrace", points: 15 },
      { text: "Use mobile torch", points: 12 },
      { text: "Chat with family", points: 10 },
      { text: "Sleep early", points: 5 },
      { text: "Sing songs", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians always buy in bulk?",
    answers: [
      { text: "Rice", points: 35 },
      { text: "Wheat flour", points: 25 },
      { text: "Sugar", points: 15 },
      { text: "Spices", points: 12 },
      { text: "Oil", points: 10 },
      { text: "Soap", points: 5 },
      { text: "Tea leaves", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians never leave home without?",
    answers: [
      { text: "Mobile phone", points: 40 },
      { text: "Wallet", points: 25 },
      { text: "House keys", points: 15 },
      { text: "Handkerchief", points: 10 },
      { text: "ID card", points: 5 },
      { text: "Watch", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always ask auto drivers?",
    answers: [
      { text: "'Meter se chalaoge?'", points: 35 },
      { text: "'Station chaloge?'", points: 25 },
      { text: "'Thoda kam kar lo'", points: 15 },
      { text: "'Traffic milega kya?'", points: 12 },
      { text: "'Kitna time lagega?'", points: 10 },
      { text: "'Bhaiya jaldi chalo'", points: 5 },
      { text: "'Change hai kya?'", points: 3 }
    ]
  },
  {
    prompt: "What do Indian students do before exams?",
    answers: [
      { text: "Pray", points: 35 },
      { text: "Pull an all-nighter", points: 25 },
      { text: "Drink tea/coffee", points: 15 },
      { text: "Revise notes", points: 12 },
      { text: "Ask friends for help", points: 10 },
      { text: "Panic", points: 5 },
      { text: "Make cheat sheets", points: 3 }
    ]
  },
  {
    prompt: "What is something people do at an Indian temple?",
    answers: [
      { text: "Offer prayers", points: 40 },
      { text: "Ring the bell", points: 25 },
      { text: "Take prasad", points: 15 },
      { text: "Touch feet of idols", points: 10 },
      { text: "Donate money", points: 8 },
      { text: "Walk barefoot", points: 5 },
      { text: "Apply tilak", points: 2 }
    ]
  },
  {
    prompt: "What do Indians eat for breakfast?",
    answers: [
      { text: "Paratha", points: 35 },
      { text: "Idli/Dosa", points: 25 },
      { text: "Poha", points: 15 },
      { text: "Upma", points: 12 },
      { text: "Bread and butter", points: 10 },
      { text: "Chai and biscuits", points: 5 },
      { text: "Eggs", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on New Year's Eve?",
    answers: [
      { text: "Party with friends", points: 35 },
      { text: "Go to a temple", points: 25 },
      { text: "Watch TV countdown", points: 15 },
      { text: "Eat sweets", points: 10 },
      { text: "Make resolutions", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Firecrackers", points: 2 }
    ]
  },
  {
    prompt: "What is something found in every Indian home?",
    answers: [
      { text: "Pressure cooker", points: 35 },
      { text: "Masala box", points: 25 },
      { text: "Agarbatti", points: 15 },
      { text: "Plastic containers", points: 12 },
      { text: "Ceiling fans", points: 10 },
      { text: "Extra mattresses", points: 5 },
      { text: "Old newspapers", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do before leaving the house?",
    answers: [
      { text: "Touch elders’ feet", points: 35 },
      { text: "Look in the mirror", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Lock the door", points: 12 },
      { text: "Take their wallet", points: 10 },
      { text: "Wear footwear", points: 5 },
      { text: "Apply perfume", points: 3 }
    ]
  },
  {
    prompt: "What do Indians take for a train journey?",
    answers: [
      { text: "Home-cooked food", points: 35 },
      { text: "Extra luggage", points: 25 },
      { text: "Water bottle", points: 15 },
      { text: "Playing cards", points: 12 },
      { text: "A pillow", points: 10 },
      { text: "Newspaper", points: 5 },
      { text: "Charger", points: 3 }
    ]
  },
  {
    prompt: "What is something Indian parents compare their kids to?",
    answers: [
      { text: "Sharma Ji’s son/daughter", points: 40 },
      { text: "Their own childhood", points: 25 },
      { text: "Toppers in school", points: 15 },
      { text: "Relatives' kids", points: 10 },
      { text: "Bollywood actors", points: 8 },
      { text: "Engineers and doctors", points: 5 },
      { text: "Successful businesspeople", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do at railway stations?",
    answers: [
      { text: "Look for the train", points: 35 },
      { text: "Buy tea", points: 25 },
      { text: "Check PNR status", points: 15 },
      { text: "Stand in long queues", points: 12 },
      { text: "Read newspaper", points: 10 },
      { text: "Talk to strangers", points: 5 },
      { text: "Eat snacks", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do when they get a government job?",
    answers: [
      { text: "Throw a party", points: 35 },
      { text: "Tell relatives", points: 25 },
      { text: "Buy sweets", points: 15 },
      { text: "Take elders' blessings", points: 12 },
      { text: "Post on social media", points: 10 },
      { text: "Plan marriage", points: 5 },
      { text: "Celebrate in a temple", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do when they find a rupee coin on the road?",
    answers: [
      { text: "Pick it up", points: 35 },
      { text: "Touch it to forehead", points: 25 },
      { text: "Consider it lucky", points: 15 },
      { text: "Give it to a beggar", points: 12 },
      { text: "Ignore it", points: 10 },
      { text: "Flip it for luck", points: 5 },
      { text: "Show it to friends", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do on New Year's Eve?",
    answers: [
      { text: "Party with friends", points: 35 },
      { text: "Go to a temple", points: 25 },
      { text: "Watch TV countdown", points: 15 },
      { text: "Eat sweets", points: 10 },
      { text: "Make resolutions", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Firecrackers", points: 2 }
    ]
  },
  {
    prompt: "Name a place where Indians remove their shoes.",
    answers: [
      { text: "Temple", points: 40 },
      { text: "Home", points: 25 },
      { text: "Gurudwara", points: 15 },
      { text: "Someone else’s home", points: 10 },
      { text: "Mosque", points: 8 },
      { text: "Yoga class", points: 5 },
      { text: "Schools", points: 2 }
    ]
  },
  {
    prompt: "What do Indians eat for breakfast?",
    answers: [
      { text: "Paratha", points: 35 },
      { text: "Idli/Dosa", points: 25 },
      { text: "Poha", points: 15 },
      { text: "Upma", points: 12 },
      { text: "Bread and butter", points: 10 },
      { text: "Chai and biscuits", points: 5 },
      { text: "Eggs", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always buy during festivals?",
    answers: [
      { text: "Sweets", points: 35 },
      { text: "Clothes", points: 25 },
      { text: "Firecrackers", points: 15 },
      { text: "Gold", points: 10 },
      { text: "Diyas", points: 8 },
      { text: "Electronics", points: 5 },
      { text: "Silver coins", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something found in every Indian grandmother’s home?",
    answers: [
      { text: "Homemade pickles", points: 35 },
      { text: "Knitting needles", points: 25 },
      { text: "Ayurvedic medicines", points: 15 },
      { text: "Old photographs", points: 12 },
      { text: "Swing/charpai", points: 10 },
      { text: "Religious books", points: 5 },
      { text: "An old radio", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians love to eat with tea?",
    answers: [
      { text: "Biscuits", points: 35 },
      { text: "Pakoras", points: 25 },
      { text: "Samosa", points: 15 },
      { text: "Rusk", points: 12 },
      { text: "Mathri", points: 10 },
      { text: "Namkeen", points: 5 },
      { text: "Cake", points: 3 }
    ]
  },
  {
    prompt: "What is something people do in a traffic jam?",
    answers: [
      { text: "Honk unnecessarily", points: 35 },
      { text: "Complain", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Listen to music", points: 12 },
      { text: "Abuse other drivers", points: 10 },
      { text: "Look at surroundings", points: 5 },
      { text: "Call someone", points: 3 }
    ]
  },
  {
    prompt: "What do Indians eat for festivals?",
    answers: [
      { text: "Laddoos", points: 40 },
      { text: "Dry fruits", points: 25 },
      { text: "Halwa", points: 15 },
      { text: "Jalebi", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians do at the airport?",
    answers: [
      { text: "Take selfies", points: 35 },
      { text: "Look for a trolley", points: 25 },
      { text: "Shop at duty-free", points: 15 },
      { text: "Eat at food court", points: 10 },
      { text: "Sleep on chairs", points: 8 },
      { text: "Complain about high prices", points: 5 },
      { text: "Watch flights land", points: 2 }
    ]
  },
  {
    prompt: "Name a profession that earns a lot of money in India.",
    answers: [
      { text: "Doctor", points: 30 },
      { text: "Actor", points: 25 },
      { text: "Businessman", points: 20 },
      { text: "Cricketer", points: 15 },
      { text: "Software Engineer", points: 10 },
      { text: "Politician", points: 5 },
      { text: "Lawyer", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do on trains?",
    answers: [
      { text: "Eat homemade food", points: 30 },
      { text: "Make friends with co-passengers", points: 25 },
      { text: "Look outside the window", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Sleep", points: 10 },
      { text: "Play cards", points: 5 },
      { text: "Charge phone", points: 3 }
    ]
  },
  {
    prompt: "What is something Indian kids do when guests come over?",
    answers: [
      { text: "Touch elders’ feet", points: 30 },
      { text: "Serve water", points: 25 },
      { text: "Hide in their room", points: 15 },
      { text: "Bring chairs", points: 12 },
      { text: "Show their report card", points: 10 },
      { text: "Play mobile games", points: 5 },
      { text: "Get extra pocket money", points: 3 }
    ]
  },
  {
    prompt: "What is something Indians always buy in bulk?",
    answers: [
      { text: "Rice", points: 35 },
      { text: "Wheat flour", points: 25 },
      { text: "Sugar", points: 15 },
      { text: "Spices", points: 12 },
      { text: "Oil", points: 10 },
      { text: "Soap", points: 5 },
      { text: "Tea leaves", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do when they get a government job?",
    answers: [
      { text: "Throw a party", points: 35 },
      { text: "Tell relatives", points: 25 },
      { text: "Buy sweets", points: 15 },
      { text: "Take elders' blessings", points: 12 },
      { text: "Post on social media", points: 10 },
      { text: "Plan marriage", points: 5 },
      { text: "Celebrate in a temple", points: 3 }
    ]
  },
  {
    prompt: "What do Indians always ask auto drivers?",
    answers: [
      { text: "'Meter se chalaoge?'", points: 35 },
      { text: "'Station chaloge?'", points: 25 },
      { text: "'Thoda kam kar lo'", points: 15 },
      { text: "'Traffic milega kya?'", points: 12 },
      { text: "'Kitna time lagega?'", points: 10 },
      { text: "'Bhaiya jaldi chalo'", points: 5 },
      { text: "'Change hai kya?'", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do at railway stations?",
    answers: [
      { text: "Look for the train", points: 35 },
      { text: "Buy tea", points: 25 },
      { text: "Check PNR status", points: 15 },
      { text: "Stand in long queues", points: 12 },
      { text: "Read newspaper", points: 10 },
      { text: "Talk to strangers", points: 5 },
      { text: "Eat snacks", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do after dinner?",
    answers: [
      { text: "Eat sweets", points: 30 },
      { text: "Drink water", points: 25 },
      { text: "Talk with family", points: 15 },
      { text: "Watch TV", points: 10 },
      { text: "Take a walk", points: 8 },
      { text: "Check phone", points: 5 },
      { text: "Sleep", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before starting a new business?",
    answers: [
      { text: "Perform pooja", points: 40 },
      { text: "Take elders’ blessings", points: 25 },
      { text: "Check horoscope", points: 15 },
      { text: "Consult a pandit", points: 10 },
      { text: "Buy new clothes", points: 5 },
      { text: "Make an offering", points: 3 }
    ]
  },
  {
    prompt: "What is something people do at an Indian temple?",
    answers: [
      { text: "Offer prayers", points: 40 },
      { text: "Ring the bell", points: 25 },
      { text: "Take prasad", points: 15 },
      { text: "Touch feet of idols", points: 10 },
      { text: "Donate money", points: 8 },
      { text: "Walk barefoot", points: 5 },
      { text: "Apply tilak", points: 2 }
    ]
  },
  {
    prompt: "What do people do when there is a power cut?",
    answers: [
      { text: "Complain", points: 35 },
      { text: "Use candle/emergency light", points: 25 },
      { text: "Go outside", points: 15 },
      { text: "Fan themselves", points: 10 },
      { text: "Check phone", points: 8 },
      { text: "Sleep early", points: 5 },
      { text: "Call the electricity board", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians take as prasad?",
    answers: [
      { text: "Laddoo", points: 35 },
      { text: "Coconut", points: 25 },
      { text: "Jalebi", points: 15 },
      { text: "Fruits", points: 10 },
      { text: "Tulsi leaves", points: 8 },
      { text: "Khichdi", points: 5 },
      { text: "Panchamrit", points: 2 }
    ]
  },
  {
    prompt: "What do Indian parents compare their kids to?",
    answers: [
      { text: "Sharma Ji’s son/daughter", points: 40 },
      { text: "Their own childhood", points: 25 },
      { text: "Toppers in school", points: 15 },
      { text: "Relatives' kids", points: 10 },
      { text: "Bollywood actors", points: 8 },
      { text: "Engineers and doctors", points: 5 },
      { text: "Successful businesspeople", points: 2 }
    ]
  },
  {
    prompt: "What do Indians do at a railway station?",
    answers: [
      { text: "Buy tea/coffee", points: 30 },
      { text: "Look for seat", points: 25 },
      { text: "Buy snacks", points: 15 },
      { text: "Read newspaper", points: 12 },
      { text: "Talk to strangers", points: 10 },
      { text: "Complain about train delay", points: 5 },
      { text: "Take selfies", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do while watching cricket?",
    answers: [
      { text: "Scream and cheer", points: 35 },
      { text: "Eat snacks", points: 25 },
      { text: "Pray", points: 15 },
      { text: "Abuse the umpire", points: 10 },
      { text: "Check stats on phone", points: 8 },
      { text: "Call friends", points: 5 },
      { text: "Discuss match strategies", points: 2 }
    ]
  },
  {
    prompt: "What is something Indians do before leaving the house?",
    answers: [
      { text: "Touch elders’ feet", points: 35 },
      { text: "Look in the mirror", points: 25 },
      { text: "Check phone", points: 15 },
      { text: "Lock the door", points: 12 },
      { text: "Take their wallet", points: 10 },
      { text: "Wear footwear", points: 5 },
      { text: "Apply perfume", points: 3 }
    ]
  },
  {
    prompt: "What do Indians do during monsoon season?",
    answers: [
      { text: "Eat pakoras", points: 35 },
      { text: "Drink chai", points: 25 },
      { text: "Play in the rain", points: 15 },
      { text: "Use umbrellas", points: 12 },
      { text: "Complain about potholes", points: 10 },
      { text: "Get stuck in traffic", points: 5 },
      { text: "Dry clothes indoors", points: 3 }
    ]
  },
  {
    prompt: "What do Indians take for a train journey?",
    answers: [
      { text: "Home-cooked food", points: 35 },
      { text: "Extra luggage", points: 25 },
      { text: "Water bottle", points: 15 },
      { text: "Playing cards", points: 12 },
      { text: "A pillow", points: 10 },
      { text: "Newspaper", points: 5 },
      { text: "Charger", points: 3 }
    ]
  }
];  // ← **THIS** closing bracket and semicolon must be here, exactly once!

// ───────────────────────────────────────────────────────
// 2) APPLICATION LOGIC (leave this exactly as‐is):

let questions  = shuffle([...QUESTIONS]);
let current    = 0;
let crossCount = 0;   // tracks cycle 1→2→3→1…

// These will be set on DOMContentLoaded:
let ding, buzz, cross;

document.addEventListener('DOMContentLoaded', () => {
  // grab audio & overlay
  ding  = document.getElementById('ding-sound');
  buzz  = document.getElementById('buzz-sound');
  cross = document.getElementById('cross-overlay');

  // Next Question button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = false;
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % questions.length;
    renderQuestion();
  });

  // Buzzer button
  document.getElementById('buzzer-btn').addEventListener('click', () => {
    // cycle 1→2→3→1…
    crossCount = (crossCount % 3) + 1;
    // show that many ❌
    cross.innerText = '❌'.repeat(crossCount);

    buzz.currentTime = 0;
    buzz.play();
    cross.classList.add('show');
    setTimeout(() => cross.classList.remove('show'), 1000);
  });

  // initial render
  renderQuestion();
});

// 3) Fisher–Yates shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 4) Render question & reveal animation
function renderQuestion() {
  const promptEl = document.getElementById('prompt');
  const board    = document.getElementById('board');
  const q        = questions[current];

  promptEl.textContent = q.prompt;
  board.innerHTML = ''; // clear old tiles

  q.answers.forEach(ans => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `
      <div class="answer"><span>${ans.text}</span> — <span>${ans.points}</span></div>
      <div class="cover"></div>
    `;
    const coverEl = tile.querySelector('.cover');
    coverEl.addEventListener('click', () => {
      tile.classList.add('flipped');
      ding.currentTime = 0;
      ding.play();
    });
    board.appendChild(tile);
  });
}