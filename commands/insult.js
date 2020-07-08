//This command contains the "insult" command along with the logic down bellow
module.exports = {
	name: 'insult',
	description: 'This will insult user',
	execute(message, args) {
		message.channel.send('You\'re dumb');
	},
};