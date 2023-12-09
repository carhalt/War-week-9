var expect = chai.expect;


describe('Deck', function() {
  describe('#shuffle', function() {
    it('should shuffle the cards in the deck', function() {
      const deck = new Deck();
      deck.initializeDeck();

      const initialDeck = [...deck.cards];

      deck.shuffle();

      // Check if the deck is not in the same order as the initial deck
      expect(deck.cards).to.not.equal(initialDeck);
    });
  });
});

