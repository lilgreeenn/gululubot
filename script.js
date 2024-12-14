
function fetchWeather() {
    const apiKey = 'b8ad82a205f5c3a131a654973df8ff8c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp; 
            const weatherDescription = data.weather[0].description; 
            const weatherContainer = document.getElementById('weather');
            weatherContainer.innerHTML = `NY Weather: ${temp}°C <br> ${weatherDescription}`;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = 'Weather data not available';
        });
}


document.addEventListener('DOMContentLoaded', fetchWeather);



function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
     
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
   
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const weatherDiv = document.getElementById('weather');
    dragElement(weatherDiv);
});



//movie
function fetchRandomMovie() {
    const apiKey = '6df422f2c7cf4b0937257e719cde3af4'; 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            const movie = movies[randomIndex];
            const movieContainer = document.getElementById('movie');
            movieContainer.innerHTML = `
                <strong id="movie-title">${movie.title} (${movie.vote_average}/10)</strong><br>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" id="movie-poster">
            `;

       
            document.getElementById('movie-title').addEventListener('click', function() {
                window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank');
            });

    
            document.getElementById('movie-poster').addEventListener('click', function() {
                fetchRandomMovie(); 
            });
        })
        .catch(error => {
            document.getElementById('movie').textContent = 'Failed to load movie data';
        });

}


function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchRandomMovie();
    dragElement(document.getElementById('movie-container'));
});











const dialogueLibrary = {
    "hello": { response: "Heyy Heyy, This is Gulu!!!! I'm a white Golden Retriever!!", priority: 1 },
    "hey": { response: "Heyy Heyy, This is Gulu!!!! I'm a white Golden Retriever!!", priority: 2 },
    "your day": { response: "TBH I just have some cat food, don't tell anyone please🙏", priority: 50 },
    "age": { response: "I'm 18th month! My mom said I just a big puppy!!", priority: 30 },
    "how old": { response: "I'm 18th month! My mom said I just a big puppy!!", priority: 31 },
    "happy": { response: "I'm super happy! Let's play!", priority: 10 },
    "favorite game": { response: "Hide-and-seek!!! But he just don't like to by himself sometime;(", priority: 40 },
    "walk": { response: "Yes, walk! I love walks! Let's go, let's go!", priority: 5 },
    "hungry": { response: "Oh, yes, food sounds amazing! What's for dinner?", priority: 15 },
    "ball": { response: "Yay, ball! I'm gonna catch it this time!", priority: 20 },
    "weather": { response: "It's perfect! Sun and fun, here I come!", priority: 800 },
    "outside": { response: "Outside? Yes, please! So many smells, so little time!", priority: 25 },
    "sit": { response: "Sitting! See, I can be good when I want to!", priority: 35 },
    "shake": { response: "Here's my paw, now do I get a treat?", priority: 22 },
    "ears": { response: "Okay, but be gentle! Then can we cuddle?", priority: 48 },
   "how are you": { response: "Tell my mom I'm a good boy today!!", priority: 48 },
   "wolf": { response: "WolfWolfWolf!!!", priority: 48 },
    "how's you day": { response: "Everyday always be my best day even!!!!", priority: 48 },
    "favorite snack": { response: "Churu!!!", priority: 4800 },

    "best friend": { response: "Wuqima!!!", priority: 320 },

    "like": { response: "I absolutely love playing fetch with my squeaky red ball and snuggling up with my human after a long day of fun!", priority: 480 },
    "been": { response: "I've been good! Played a lot, ran a lot, now ready for more!", priority: 28 },
    "love": { response: "I love you too!!! I always love you!!", priority: 18 },
    "feeling": { response: "I'm feeling awesome! Ready to play and have fun!", priority: 12 },
    "scared": { response: "I feel better when you're around. Let's stick together!", priority: 33 },
    "best dog": { response: "And you're the best human! We make a great team!", priority: 21 },
    "happy me": { response: "Me too! I'm always happy when we're together!", priority: 13 },
    "wait": { response: "Waiting... but hurry, I'm excited!", priority: 34 },
    "speak": { response: "Woof! Was that loud enough?", priority: 29 },
    "quiet": { response: "Okay, I'll be quiet... but it's hard when I'm this excited!", priority: 24 },
    "lie down": { response: "Down I go... can we get back up and play now?", priority: 36 },
    "come back": { response: "Coming back! Where to next?", priority: 38 },
    "bath": { response: "Bath? But I just got my fur perfect from rolling around!", priority: 26 },
    "vet": { response: "If we must... as long as I get a treat after!", priority: 27 },
    "fur": { response: "Thanks! I've been working on my fluff!", priority: 46 },
    "paws": { response: "Okay, but tickles only please!", priority: 37 },
    "best friend": { response: "Wuqima!!!!!", priority: 490 },
    "medicine": { response: "Yes, I did! Can we do something fun now?", priority: 43 },
    "toy": { response: "Found it and chewed it! Ready for the next one!", priority: 39 },
    "noise": { response: "I did! Should we check it out together?", priority: 47 },
    "bed": { response: "It's so comfy! Perfect for naps after playtime.", priority: 44 },
    "car": { response: "Car ride? Yes! Where are we going?", priority: 41 },
    "training": { response: "It was fun! I love learning new things, especially with you!", priority: 42 },
    "kitten": { response: "We've been chasing each other all morning! So much fun!", priority: 23 },
    "gentle": { response: "I will! We're just playing. The kitten is my best friend!", priority: 19 },
    "cat food": { response: "Yes, please! Cat food is yummy, but I'm ready for my own snack now!", priority: 11 },
    "dog food": { response: "Okay, but maybe just a little bit of cat food too?", priority: 14 },
    "chewing": { response: "They're so crunchy and fun to rip up! But I can play with something else if you want.", priority: 16 },
    "clean": { response: "Can we play a bit more first? I love when we clean up together—it's like a game!", priority: 17 },
    "fetch": { response: "Yes! Throw it and I'll bring it back! Let's play fetch!", priority: 7 },
    "chase": { response: "Chase me, chase me! It's more fun when you're part of the game!", priority: 8 },
    "treat": { response: "Okay, treats are great too! But can it be a tasty one like the cat's food?", priority: 9 },
    "learn": { response: "Ready! Learning is fun with you. What are we learning today?", priority: 6 },
    "spend time": { response: "I love it! You're my favorite person to hang out with!", priority: 3 },
    "really happy": { response: "I am! So many toys, so many games, and so much time with you and the kitten!", priority: 4 },
    "play": { response: "Let's play! What do you want to play today? Fetch, chase, or something new?", priority: 10 },
    "nap": { response: "Nap sounds great! But only after a bit more playing, please!", priority: 30 },
    "sad": { response: "Don't be sad, I'm here! Let's do something fun to cheer up!", priority: 40 },
    "park": { response: "The park? Oh, I love the park! So many smells and friends!", priority: 20 },
    "squirrel": { response: "Squirrel?! Where?! Let's chase it! Or... maybe it'll chase me?", priority: 25 },
    "stick": { response: "A stick! The perfect toy. Throw it for me, please!", priority: 35 },
    "ball": { response: "Ball, ball, ball! I could chase it all day!", priority: 15 },
    "cuddle": { response: "Cuddles are the best! I'm ready when you are!", priority: 45 },
    "roll over": { response: "Rolling over right now! This is fun!", priority: 50 },
    "shake paw": { response: "Shake paw? Sure thing! Look how polite I am!", priority: 55 },
    "bark": { response: "Woof woof! Am I loud enough? Or do you need more barks?", priority: 60 },
    "quiet": { response: "I'll try to be quiet... but it's so hard when I'm this excited!", priority: 65 },
    "good dog": { response: "I'm a good dog? Yes! I try to be the best for you!", priority: 70 },
    "swim": { response: "Swimming? I'm ready! Water is so much fun!", priority: 75 },
    "howl": { response: "Awoooo! Here comes my best howl! Do you want to try howling with me?", priority: 80 },
    "jump": { response: "Jumping high! See how much I can jump? Watch this!", priority: 85 },
    "kiss": { response: "Kisses coming your way! Hope you're ready for some wet dog kisses!", priority: 90 },
    "adventure": { response: "Adventure? I'm ready! Where are we exploring today?", priority: 95 },
    "beach": { response: "Beach day? Can't wait to dig in the sand and splash in the water!", priority: 100 },
    "biscuit": { response: "Did you say biscuit? I love biscuits!", priority: 105 },
    "blanket": { response: "Blanket? Perfect for a snuggle, let's get cozy!", priority: 110 },
    "bone": { response: "A bone! Yummy, that’s my favorite treat!", priority: 115 },
    "bored": { response: "Bored? Not anymore! Let's find something fun to do!", priority: 120 },
    "buddy": { response: "You're my best buddy! We have so much fun together.", priority: 125 },
    "bug": { response: "A bug? Let's chase it! Or eat it?", priority: 130 },
    "cage": { response: "Cage time? I’ll wait patiently for you to come back.", priority: 135 },
    "cake": { response: "Cake smells delicious! But you said it’s not for dogs, right?", priority: 140 },
    "call": { response: "You called? I’m here! What’s up?", priority: 145 },
    "candy": { response: "Candy is sweet, but you're sweeter!", priority: 150 },
    "chicken": { response: "Chicken? My favorite! Is it dinner time yet?", priority: 155 },
    "chill": { response: "Chilling out with you is the best part of my day.", priority: 160 },
    "chip": { response: "Did you drop that chip? Don't worry, I'll clean it up!", priority: 165 },
    "christmas": { response: "Christmas? Oh, the joy of opening presents!", priority: 170 },
    "clean": { response: "Time to clean? I’ll help! By running around and making it fun!", priority: 175 },
    "climb": { response: "Climb that hill? Let’s race to the top!", priority: 180 },
    "cloud": { response: "Look at the clouds! That one looks like a bone!", priority: 185 },
    "coat": { response: "My coat is all fluffy, brushed and ready for cuddles!", priority: 190 },
    "cold": { response: "Brrr, it's cold! Can I have a warm blanket?", priority: 195 },
    "collar": { response: "This collar? It’s my favorite fashion statement!", priority: 200 },
    "come": { response: "Coming right to you! What do we need to do?", priority: 205 },
    "comfort": { response: "Need comfort? I’m here with endless cuddles!", priority: 210 },
    "command": { response: "I love following your commands! What’s next?", priority: 215 },
    "couch": { response: "Couch time? Best time! I'll just sneak right next to you.", priority: 220 },
    "curious": { response: "I'm always curious! What's that smell? What's that sound?", priority: 225 },
    "cute": { response: "Am I cute? Oh, you're making me blush!", priority: 230 },
    "dance": { response: "Dance? Let’s shake and move! Watch my tail go!", priority: 235 },
    "dig": { response: "Let's dig up some fun in the garden! What treasures will we find?", priority: 240 },
    "dinner": { response: "Dinner time is the best time! What are we having?", priority: 245 },
    "dirty": { response: "Got a little dirty? More fun to have a bath together!", priority: 250 },
    "disobey": { response: "I try to obey, but sometimes I just get too excited!", priority: 255 },
    "doctor": { response: "Doctor visit? I’ll be brave, especially if you’re with me.", priority: 260 },
    "dog": { response: "Dog life is the best life, especially with you!", priority: 265 },
    "door": { response: "Someone at the door? I’ll check! Bark to protect!", priority: 270 },
    "dream": { response: "I had a dream about us playing in endless fields!", priority: 275 },
    "teddy bear": { response: "OHH, I wish I have one;((((", priority: 875 },
    
    "drink": { response: "Time for a drink? Water first, then maybe a puppuccino?", priority: 280 },
    "drive": { response: "Driving somewhere fun? I call shotgun!", priority: 285 },
    "drool": { response: "Is it my drooling? Sorry, it’s just that I saw food!", priority: 290 },
    "duck": { response: "Duck in the pond! Can I go say hi?", priority: 295 },
    "dust": { response: "Dusty here? Let’s clean up! My tail can be a great duster!", priority: 300 },
    "ear": { response: "I love it when you scratch behind my ears!", priority: 305 },
    "eat": { response: "Eating time? Let's chow down!", priority: 310 },
    "egg": { response: "Eggs? I heard they're good for my coat, yum!", priority: 315 },
    "excited": { response: "I'm always excited when I'm with you! What’s the plan?", priority: 320 },
    "exercise": { response: "Exercise? Great idea! Let’s start with a quick run.", priority: 325 },
    "explore": { response: "Let’s explore the neighborhood! So many smells, so many sights!", priority: 330 },
    "eye": { response: "Look into my eyes, and you’ll see how much I love you.", priority: 335 },
    "fall": { response: "Fall is here! Let’s play in the leaves!", priority: 340 },
    "family": { response: "Family time? I love our pack!", priority: 345 },
    "fan": { response: "It’s hot, can you turn on the fan? Or maybe an ice cream?", priority: 350 },
    "fear": { response: "No fear when you're near. I feel safe with you.", priority: 355 },
    "fight": { response: "No need to fight when we can play!", priority: 360 },
    "fish": { response: "Fish for dinner? Sounds like a tasty plan!", priority: 365 },
    "fluffy": { response: "Fluffy and proud! Good grooming goes a long way!", priority: 370 },
    "food": { response: "Food? Did someone say food? I’m ready!", priority: 375 },
    "forest": { response: "A walk in the forest? I love adventures with you!", priority: 380 },
    "friend": { response: "Friend coming over? More the merrier! I can’t wait to meet them!", priority: 300 },
    "fright": { response: "Got a fright? I’ll protect you, no matter what!", priority: 390 },
    "frog": { response: "A frog! Can we keep him? He’s kinda funny looking.", priority: 395 },
    "frost": { response: "Frosty morning? Let’s warm up with a quick jog!", priority: 400 },
    "fun": { response: "Fun is my middle name! What’s the game today?", priority: 405 },
    "game": { response: "Game time? I’m always ready to play!", priority: 410 },
    "garden": { response: "In the garden? Let’s dig, plant, and chase!", priority: 415 },
    "gentle": { response: "I’ll be gentle, promise! Just excited to play!", priority: 420 },
    "gift": { response: "A gift for me? You shouldn’t have! But I’m glad you did!", priority: 425 },
    "girl": { response: "Met a nice girl dog today! We had fun chasing each other.", priority: 430 },
    "give": { response: "Give me a task, and I’ll do my best to make you proud!", priority: 435 },
    "grass": { response: "Love rolling in the grass! It tickles!", priority: 440 },
    "greet": { response: "Greeting everyone with wagging tail and happy barks!", priority: 445 },
    "guard": { response: "Guarding our home is my job! No squirrels shall pass!", priority: 450 },
    "guide": { response: "Need a guide? I know all the best spots in the park!", priority: 455 },
    "hair": { response: "My hair gets everywhere, doesn’t it? But it’s part of my charm!", priority: 460 },
    "hand": { response: "Give me your hand, and I’ll give you my paw!", priority: 465 },
    "hard": { response: "Life can be hard, but with you, everything feels easier.", priority: 470 },
   
    "head": { response: "Scratch my head, please? Right behind the ears is the best spot!", priority: 480 },
    "hear": { response: "Did you hear that? Let’s investigate together!", priority: 485 },
    "heart": { response: "You have my heart forever. Best friends for life!", priority: 490 },
    "heat": { response: "It's hot today! Can we play in the shade or have some ice water?", priority: 495 },
    "help": { response: "Need help? I’m here! Let’s do this together!", priority: 500 },
    "hide": { response: "Hide and seek? I’m great at hiding, but I always come out for treats!", priority: 505 },
    "high": { response: "Jump high? Watch me! I can reach really high when I jump!", priority: 510 },
    "hill": { response: "Up the hill? Race you to the top!", priority: 515 },
    "home": { response: "Home is where you are. It’s my favorite place to be!", priority: 520 },
    "jog": { response: "A jog sounds great! Let's get those tails wagging!", priority: 525 },
    "jump": { response: "I love jumping! How high do you think I can go?", priority: 530 },
    "kennel": { response: "My kennel is my safe space, but I'd rather be with you!", priority: 535 },
    "kiss": { response: "Kisses for you! Who doesn't love doggy kisses?", priority: 540 },
    "lake": { response: "A lake day? Can't wait to splash around!", priority: 545 },
    "leaf": { response: "I love chasing leaves! Especially the crunchy ones!", priority: 550 },
    "leash": { response: "Leash means walkies, right? Let's go!", priority: 555 },
    "lick": { response: "I give licks to show my love. Ready for one?", priority: 560 },
    "lie": { response: "Lie down? Okay, but only if there's a belly rub in it for me!", priority: 565 },
    "light": { response: "Chasing lights can be fun! But I prefer tennis balls!", priority: 570 },
    "listen": { response: "I'm all ears! What's up?", priority: 575 },
    "look": { response: "Look at that! What is it? Can we check it out?", priority: 580 },
    "loyal": { response: "I'll always be your loyal friend, no matter what!", priority: 585 },
    "mailman": { response: "Mailman's here! Should I bark or wag?", priority: 590 },
    "meal": { response: "Meal time? My favorite time!", priority: 595 },
    "milk": { response: "Milk? I heard it's tasty, but only a little for me!", priority: 600 },
    "moon": { response: "Howling at the moon can be fun. Want to howl with me?", priority: 605 },
    "morning": { response: "Good morning! Ready for a day full of adventures?", priority: 610 },
    "mud": { response: "Mud is great! It means bath time later, but so worth it!", priority: 615 },
    "night": { response: "Night time? Means cuddles and dreams about chasing things!", priority: 620 },
    "nose": { response: "My nose knows best! Smells like it's time for treats!", priority: 625 },
    "obey": { response: "I try to obey, but sometimes distractions are too fun!", priority: 630 },
    "party": { response: "A party? Can I come? I promise to be the goodest guest!", priority: 635 },
    "pat": { response: "A pat on the head? Yes, please!", priority: 640 },
    "paw": { response: "Paw? Which one do you want? Left or right?", priority: 645 },
    "peace": { response: "I love peaceful moments with you, just relaxing together.", priority: 650 },
    "peek": { response: "Peek-a-boo! I see you! Where'd you go?", priority: 655 },
    "pet": { response: "Pet me, please? I can never get enough!", priority: 660 },
    "pounce": { response: "Pounce on the toy? You bet! Here I come!", priority: 665 },
    "pout": { response: "If I pout cutely, do I get extra treats?", priority: 670 },
    "prance": { response: "Watch me prance! Isn't it just the cutest?", priority: 675 },
    "present": { response: "You got me a present? I hope it's something squeaky!", priority: 680 },
    "proud": { response: "I'm proud to be your buddy! We're a great team!", priority: 685 },
    "puppy": { response: "I'll always be your puppy at heart, even when I'm big!", priority: 690 },
    "race": { response: "Race you to the tree! Ready, set, go!", priority: 695 },
    "rain": { response: "Rainy days mean splashing in puddles! Fun!", priority: 700 },
    "relax": { response: "Relaxing with you is my favorite way to spend the day.", priority: 705 },
    "rest": { response: "Resting? Okay, but next to you so I can keep an eye on you.", priority: 710 },
    "roll": { response: "Rolling around! This is how I show my happiness!", priority: 715 },
    "run": { response: "Running is the best! Faster, faster!", priority: 720 },
    "scratch": { response: "A little scratch behind the ears... Ah, that's the spot!", priority: 725 },
    "shadow": { response: "Chasing my shadow! It's almost as fast as I am!", priority: 730 },
    "shake": { response: "Shake off the water? Get ready for a splash zone!", priority: 735 },
    "shampoo": { response: "Shampoo smells funny, but it makes me so soft!", priority: 740 },
    "shed": { response: "Shedding? It's just my way of sharing the furry love!", priority: 745 },
    "shoe": { response: "Found your shoe! It's safe with me, promise!", priority: 750 },
    "sleep": { response: "Sleeping is nice, but playing with you is nicer!", priority: 755 },
    "slobber": { response: "Oops, did I slobber on you? It's a sign of affection!", priority: 760 },
    "slow": { response: "Slow down? Okay, but only for a little while!", priority: 765 },
    "smell": { response: "Smells like adventure! Let's follow our noses!", priority: 770 },
    "smile": { response: "I smile with my tail! Can you tell?", priority: 775 },
    "snack": { response: "Snack time? My favorite!", priority: 780 },
    "sneeze": { response: "Achoo! That's just me saying 'more pets please!'", priority: 785 },
    "sniff": { response: "Sniffing around. I'm on the trail of something good!", priority: 790 },
    "snore": { response: "Do I snore? It's just me dreaming of our next adventure.", priority: 795 },
    "snuggle": { response: "Snuggles? Yes, please! Let's get cozy!", priority: 800 },
    "soft": { response: "My fur is soft, perfect for petting. Go ahead!", priority: 805 },
    "splash": { response: "Splashing in the water is so refreshing!", priority: 810 },
    "spoil": { response: "Spoil me? You know I can't resist your treats!", priority: 815 },
    "spot": { response: "Got a favorite spot? Let me know, and I'll keep it warm!", priority: 820 },
    "sprint": { response: "Sprinting is so fun! Watch me go!", priority: 825 },
    "squirrel": { response: "Squirrel! I must go, my people need me!", priority: 830 },
    "stay": { response: "Stay? Okay, but make it quick! I love being on the move!", priority: 835 },
    "stick": { response: "A stick! Best toy ever! Throw it, please?", priority: 840 },
    "stinky": { response: "Stinky? Maybe a little. But it's a good stink, right?", priority: 845 },
    "stretch": { response: "Stretching out! Feels good to get all the kinks out!", priority: 850 },
    "sun": { response: "Sunbathing? I'm in! Let's find a sunny spot.", priority: 855 },
    "surprise": { response: "Surprise me? I love surprises! What do you have for me?", priority: 860 },
    "swim": { response: "Swimming? I'm a natural! Watch me paddle!", priority: 865 },
    "tail": { response: "My tail won't stop wagging because I'm so happy to see you!", priority: 870 },
    "taste": { response: "That tastes amazing! Can I have some more?", priority: 875 },
    "teach": { response: "Teach me something new? I'm ready to learn!", priority: 880 },
    "tease": { response: "Teasing me with that toy? Okay, challenge accepted!", priority: 885 },
    "tickle": { response: "Tickles? I love them! They make me wiggle!", priority: 890 },
    "tired": { response: "Tired? A little rest, and I'll be ready to play again soon!", priority: 895 },
    "together": { response: "Together is my favorite place to be. Just you and me.", priority: 900 },
    "tongue": { response: "My tongue's out because I'm hot and happy!", priority: 905 },
    "toy": { response: "A new toy? For me? You're the best!", priority: 910 },
    "treat": { response: "Did someone say treat? I'm all ears!", priority: 915 },
    "tree": { response: "That tree looks interesting. Let's go check it out!", priority: 920 },
    "trip": { response: "A trip? Where to? I'm packed and ready!", priority: 925 },
    "tug": { response: "Tug of war? Let's play! I might let you win... maybe.", priority: 930 },
    "tummy": { response: "Tummy rubs? Don't mind if I do! Right there, that's perfect!", priority: 935 },
    "vacation": { response: "Vacation with you? Sounds like a dream come true!", priority: 940 },
    "vet": { response: "Vet visit? As long as you're there, I'll be brave.", priority: 945 },
    "walk": { response: "A walk? Best part of my day! Let's explore!", priority: 950 },
    "warm": { response: "It's warm here, perfect for a cozy nap together.", priority: 955 },
    "wash": { response: "Washing up? I'll help! I love water!", priority: 960 },
    "water": { response: "Water break? Good idea, staying hydrated is important!", priority: 965 },
    "wave": { response: "Wave at me? I can try waving back with my paw!", priority: 970 },
    "wet": { response: "Wet from the rain? It's okay, we can dry off together.", priority: 975 },
    "whine": { response: "If I whine a little, is it more convincing to get a treat?", priority: 980 },
    "wiggle": { response: "Wiggling just shows how happy I am!", priority: 985 },
    "wind": { response: "The wind in my fur feels amazing! Let's run against it!", priority: 990 },
    "window": { response: "Looking out the window, so much to see!", priority: 995 },
    "wink": { response: "Did I just wink at you? Maybe, or maybe it's a blink!", priority: 1000 },
    "wish": { response: "My wish? To always be by your side.", priority: 1005 },
    "woof": { response: "Woof! That's dog for 'I love you!'", priority: 1010 },
    "yard": { response: "Yard patrol duty! I'll keep us safe from squirrels!", priority: 1015 },
    "yawn": { response: "Yawning? Just prepping for a big day of fun!", priority: 1020 },
    "yogurt": { response: "Yogurt is tasty! Is it okay if I have a little?", priority: 1025 },
    "zoom": { response: "Zoomies? It's time! Watch me go!", priority: 1030 },
   
};

// for image



function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const userText = inputField.value.trim().toLowerCase();

    if (userText !== "") {
        const userMessage = document.createElement('p');
        userMessage.textContent = userText;
        userMessage.className = 'user-message';
        chatBox.appendChild(userMessage);

        let maxPriority = 0;
        let selectedResponse = "Sorrrrry, I just a puppy;;((( Can you try asking something else please!!!//puppy eyes///";
        
        for (const key in dialogueLibrary) {
            if (userText.includes(key) && dialogueLibrary[key].priority > maxPriority) {
                maxPriority = dialogueLibrary[key].priority;
                selectedResponse = dialogueLibrary[key].response;
            }
        }

        const botReply = document.createElement('p');
        botReply.textContent = selectedResponse;
        botReply.className = 'bot-message';
        chatBox.appendChild(botReply);

        if (userText.includes("hey")) {
            const image = document.createElement('img');
            image.src = 'puppy.png'; 
            image.alt = 'Cute puppy';
            image.style.display = 'block';
            image.style.margin = '10px auto';
            image.style.width = '40%';
            chatBox.appendChild(image); 
        }

        if (userText.includes("dance")) {
            const video = document.createElement('video');  
            video.src = 'result_ad.MP4'; 
            video.alt = 'Dance video'; 
            video.style.display = 'block'; 
            video.style.margin = '10px auto'; 
            video.style.width = '40%';  
            video.controls = true; 
            video.autoplay = true;  
            video.loop = true; 
        
            chatBox.appendChild(video);  
        }
        


        inputField.value = ""; 
    }
    inputField.focus();
}




function enhancedSendMessage() {
    const inputField = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const userText = inputField.value.trim().toLowerCase();

    if (userText !== "") {
        const userMessage = document.createElement('p');
        userMessage.textContent = userText;
        userMessage.className = 'user-message';
        chatBox.appendChild(userMessage);

        let maxPriority = 0;
        let selectedResponse = "Sorry, I just a puppy;;((( Can you try asking something else please!!!//puppy eyes///";


        for (const key in dialogueLibrary) {
            if (userText.includes(key) && dialogueLibrary[key].priority > maxPriority) {
                maxPriority = dialogueLibrary[key].priority;
                selectedResponse = dialogueLibrary[key].response;
            }
        }

       
        if (maxPriority > 0) {
            appendMessage(selectedResponse, 'bot-message');
        } else {
           
            askGPT(userText).then(response => {
                appendMessage(response, 'bot-message');
            });
        }

        inputField.value = ""; 
    }
    inputField.focus(); 
}

function appendMessage(message, className) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = className;
    chatBox.appendChild(messageElement);
}