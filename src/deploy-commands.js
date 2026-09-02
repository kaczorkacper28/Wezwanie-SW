require("dotenv").config();

const { REST, Routes } = require("discord.js");
const commands = require("./commands");

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
  console.error("❌ Uzupełnij TOKEN, CLIENT_ID i GUILD_ID w pliku .env");
  process.exit(1);
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("⏳ Rejestrowanie komend...");

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands.map(command => command.toJSON()) }
    );

    console.log("✅ Komenda /wezwanie została zarejestrowana.");
  } catch (error) {
    console.error("❌ Nie udało się zarejestrować komendy:", error);
  }
})();
