import { Client } from 'discord.js';
const bot = new Client();

const token = "OTIyMjI0MjExNzEwMzI4ODY1.Yb-WOg.4gcsSWk4nenYRma4QolOeAguNjg";

bot.on("ready", function(){
    console.log(`$(bot.user.username) está online!`);
});

bot.login(process.env.token);