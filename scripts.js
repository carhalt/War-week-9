
// made 3 classes, Card, Deck, and Player

class Card {
    constructor(number, suit) {
      this.number = number;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
    }
  //learning more about init greatly helped me along with this project. Sooo many terms to learn with js
    initializeDeck() {
      const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
      const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  
      for (const suit of suits) {
        for (const number of numbers) {
          this.cards.push(new Card(number, suit));
        }
      }
    }
//   Probably took me the longest to do. I learned and attempted to use math.random, 
//but i couldn't make it work for the life of me. about an hour later I ended up looking at a 
//few different random algorithms and eventually I found onecalled
// the Fisher-Yates shuffle algorithm and also took inspiration from Edwin's random 
//algoritm he proposed during class.
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard() {
      return this.cards.pop();
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
      this.hand = [];
    }
  }
  
  // once again using init and my handy dandy shuffle algorithm, this is kind of the the initial game logic
  // that the console war goes through
  const deck = new Deck();
  deck.initializeDeck();
  deck.shuffle();
  
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");
  
  // just used .push to make the initial player hands for each player
  for (let i = 0; i < 26; i++) {
    player1.hand.push(deck.dealCard());
    player2.hand.push(deck.dealCard());
  }
  
  // Game turns. Using a for loop with two constants, each constant representing the card in the current turn.
  for (let i = 0; i < 26; i++) {
    const card1 = player1.hand[i];
    const card2 = player2.hand[i];
  
    console.log(`Round ${i + 1}: ${player1.name} plays ${card1.number} of ${card1.suit}, ${player2.name} plays ${card2.number} of ${card2.suit}`);
  
    // game algorithm. if else loop that adds one to the playr score any time a card number is higher then the other
    if (card1.number > card2.number) {
      player1.score++; 
      console.log(`${player1.name} wins the round!\n`);
    } else if (card2.number > card1.number) {
      player2.score++; 
      console.log(`${player2.name} wins the round!\n`);
    } 
  }
  
  // final results, just used if else statements to post results to the console log
  console.log("Player 1 Score:", player1.score);
  console.log("Player 2 Score:", player2.score);
  
  if (player1.score > player2.score) {
    console.log(`${player1.name} wins the game!`);
  } else if (player2.score > player1.score) {
    console.log(`${player2.name} wins the game!`);
  } 
   
  
  