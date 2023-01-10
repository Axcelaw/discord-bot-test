const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isChatInputCommand()) {
      console.log('ENTROU NO IF DO CHATINPUT');
      const command = interaction.client.commands.get(interaction.commandName);
    
      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
      }
    
      try {
        await command.execute(interaction);
      }
      catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
    else if (interaction.isAnySelectMenu()) {
      console.log('ENTROU NO IF DO SELECTMENU');
      const command = interaction.client.selectCommands.get(interaction.customId);
    
      if (!command) {
        console.error(`SELECT ERROR: No command matching ${interaction.commandName} was found.`);
        return;
      }
    
      try {
        await command.execute(interaction);
      }
      catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
    else
      return;
  }
}
