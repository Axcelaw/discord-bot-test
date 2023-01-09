const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Creates a button'),
  async execute(interaction) {
    await interaction.reply({ content: 'I think you should,', components: [row] });
  },
};
