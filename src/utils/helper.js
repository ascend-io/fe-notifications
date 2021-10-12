const RANDOM_PARAGRAPHS = [
  'When you have a dream, you’ve got to grab it and never let go.',
  'Nothing is impossible. The word itself says ‘I’m possible!',
  'There is nothing impossible to they who will try.',
  'The bad news is time flies. The good news is you’re the pilot.',
  'Keep your face always toward the sunshine, and shadows will fall behind you.',
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  'You define your own life. Don’t let other people write your script.',
  'Spread love everywhere you go.',
  'You can be everything. You can be the infinite amount of things that people are.',
  'You don’t always need a plan.',
  'Belief creates the actual fact.',
  'It is during our darkest moments that we must focus to see the light.',
  'Believe you can and you’re halfway there.',
  'In a gentle way, you can shake the world.',
  'All you need is the plan, the road map, and the courage to press on to your destination.',
  'I care about decency and humanity and kindness. Kindness today is an act of rebellion.',
  'Try to be a rainbow in someone’s cloud.',
  'Real change, enduring change, happens one step at a time.',
  'Wake up determined, go to bed satisfied.',
  'Nobody built like you, you design yourself.',
  'Live your beliefs and you can turn the world around.',
  'Life is like riding a bicycle. To keep your balance, you must keep moving.',
  'Don’t try to lessen yourself for the world; let the world catch up to you.',
  'Faith is love taking the form of aspiration.',
  'When it comes to luck, you make your own.',
  'We generate fears while we sit. We overcome them by action.'
];

export function generateParagraph() {
  const paraSize = RANDOM_PARAGRAPHS.length;
  return RANDOM_PARAGRAPHS[Math.floor(Math.random() * paraSize)];
}

export function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
