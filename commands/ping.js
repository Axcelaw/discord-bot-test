const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
    // Confirms to Discord that an interaction was received successfully and gives a 15-minute 
    // timeframe to complete the tasks before responding
    // await interaction.deferReply();
    // await wait(3000);
		await interaction.reply('Pong!');
    // const message = await interaction.fetchReply();
    await interaction.followUp('[FFTCG](https://fftcg.square-enix-games.com/na/card-browser)');
    // await interaction.deleteReply();
    // Ephemeral makes the message visible only for the user who executed the command
    // await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    // await wait(3000);
    // Edit bot response
    // Required for deferReply()
		// await interaction.editReply('Pong again!');
	},
};
