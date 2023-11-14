const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça sua playlist'),

  async execute(interection) {
    await interection.reply(
      'https://open.spotify.com/playlist/37i9dQZF1EVKuMoAJjoTIw?si=066fef9370704dac',
    );
  },
};
