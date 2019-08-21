const Discord = require('discord.js');

const prefix = "=";

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ridley online!');
})

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case 'help':
            break;
        case 'wiki':
            if (!args[2]) {
                const wiki = new Discord.RichEmbed()
                .addField('https://enterthegungeon.gamepedia.com/' + args[1])
                .setFooter('Wiki di Enter the gungeon');
                message.channel.send(wiki);
            } else {
                const wiki = new Discord.RichEmbed()
                .addField('https://enterthegungeon.gamepedia.com/' + args[1] + '_' + args[2])
                .setFooter('Wiki di Enter the gungeon');
                message.channel.send(wiki);
            }
            break;
    }
})

client.login(process.env.token);
