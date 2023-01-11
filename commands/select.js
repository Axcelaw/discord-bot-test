const { ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder, EmbedBuilder, ComponentType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
		.setName('select')
		.setDescription('Renders a select menu.'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder('Nothing selected')
          .addOptions(
            {
              label: 'Select me',
              description: 'This is a description',
              value: 'first_option',
            },
            {
              label: 'You can select me too',
              description: 'This is also a description',
              value: 'second_option',
            },
          ),
      );
    
    const message = await interaction.reply({ content: 'Pong!', ephemeral: true, components: [row] });

    const collector = message.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 15000 });

    collector.on('collect', i => {
      if (i.user.id === interaction.user.id) {
        i.reply(`${i.user} clicked on ${i.customId}: ${i.values[0]}`);
      } else {
        i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
      }
    });

    collector.on('end', collected => {
      console.log(`Collected ${collected.size} interactions.`);
    });
  }
};
