const { ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require('discord.js');

// const row = new ActionRowBuilder()
//   .addComponents(
//     new StringSelectMenuBuilder()
//       .setCustomId('select')
//       .setPlaceholder('Nothing selected')
//       .addOptions(
//         {
//           label: 'Select me',
//           description: 'This is a description',
//           value: 'first_option',
//         },
//         {
//           label: 'You can select me too',
//           description: 'This is also a description',
//           value: 'second_option',
//         },
//       ),
//   );

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setDescription('Some description here');

module.exports = {
  data: new ActionRowBuilder()
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
  ),
  // data: new SlashCommandBuilder()
  //   .setName('select')
  //   .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply({ content: 'Pong!', components: [data] });
    
    if (!interaction.isStringSelectMenu()) {
      console.log('##### inside !interaction.isStringSelectMenu #####/n', interaction);
      return;
    }
    if (interaction.customId === 'select') {
      console.log('##### outside !interaction.isStringSelectMenu #####/n', interaction);
      await interaction.update({ content: 'Something was selected!', components: [] });
    }
  },
};
