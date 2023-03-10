const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
      // Ensure the text will fit in an embed description, if the user chooses that option
      .setMaxLength(2000)
      .setRequired(true))
  .addChannelOption(option =>
    option.setName('channel')
      .setDescription('The channel to echo into')
      // Ensure the user can only select a TextChannel for output
			.addChannelTypes(ChannelType.GuildText))
  .addBooleanOption(option =>
    option.setName('ephemeral')
      .setDescription('Whether or not the echo should be ephemeral')),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
