const tmi = require('tmi.js');
const robot = require('robotjs');
require('dotenv').config()

// Configuration du bot
const options = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  channels: ['diarapak'],
};

const client = new tmi.Client(options);

// Fonction pour envoyer un message toutes les 5 minutes
function sendPeriodicMessage() {
  client.say('diarapak', "Bienvenue sur Pokémon Version Éclat Pourpre ! Vous pouvez diriger le jeu avec les commandes 'up', 'down', 'left', 'right', 'a', 'b', ainsi que 'haut', 'bas', 'gauche', 'droite'. Pour plus d'astuces, consultez : https://www.pokemontrash.com/club/vos-fangames-et-projets/(gba)-pokemon-version-eclat-pourpre/");
  setTimeout(sendPeriodicMessage, 300000); // Relance la fonction toutes les 5 minutes (300000 ms)
}

// Connecter le bot
client.connect().then(() => {
  console.log('Bot connecté avec succès !');
  client.say('diarapak', 'BotPokebyDiarapak est bien connecté ! Utilisez les commandes up, down, left, right, a, b, ainsi que haut, bas, gauche, droite pour interagir avec le jeu.');
  sendPeriodicMessage(); // Lance la fonction pour envoyer des messages périodiques
}).catch(console.error);

// Réagir à un message dans le chat
client.on('message', (channel, tags, message, self) => {
  if(self) return; // Ignore les messages du bot lui-même

  // Simuler les touches en fonction des messages (anglais et français)
  const lowerMessage = message.toLowerCase();

  if(lowerMessage === 'up' || lowerMessage === 'haut') {
    console.log(`${tags.username} a dit '${message}'`);
    robot.keyTap('up'); // Simule la touche "haut"
  }
  
  if(lowerMessage === 'down' || lowerMessage === 'bas') {
    console.log(`${tags.username} a dit '${message}'`);
    robot.keyTap('down'); // Simule la touche "bas"
  }

  if(lowerMessage === 'left' || lowerMessage === 'gauche') {
    console.log(`${tags.username} a dit '${message}'`);
    robot.keyTap('left'); // Simule la touche "gauche"
  }

  if(lowerMessage === 'right' || lowerMessage === 'droite') {
    console.log(`${tags.username} a dit '${message}'`);
    robot.keyTap('right'); // Simule la touche "droite"
  }

  if(lowerMessage === 'a') {
    console.log(`${tags.username} a dit 'a'`);
    robot.keyTap('a'); // Simule la touche "A"
  }

  if(lowerMessage === 'b') {
    console.log(`${tags.username} a dit 'b'`);
    robot.keyTap('b'); // Simule la touche "B"
  }

  if(lowerMessage === 'enter' || lowerMessage === 'entrée') {
    console.log(`${tags.username} a dit '${message}'`);
    robot.keyTap('enter'); // Simule la touche "Entrée"
  }
});
