//This command contains the "avatar" command along with the logic down bellow
module.exports = {
    // CMD: /avater [@user]
    //=======================================================
	name: 'avatar',
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    // Logic:
    //=======================================================
	execute(message) {
        //If no users ar mention after the CMD: /avatar [@user]
        // This logic will fire off showing your own avatar
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}
        //This logic will fire off showing the avatar of the user you have mentioned.
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});
        //Send message to the channel;
		message.channel.send(avatarList);
	},
};