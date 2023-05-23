const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Message } = require('discord.js');

const dotenv = require('dotenv').config();
console.log(process.env)

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions
    ] 
});

// client.commands = new Collection();
// const foldersPath = path.join(__dirname, 'commands');
// const commandFolders = fs.readdirSync(foldersPath);

// for (const folder of commandFolders) {
// 	const commandsPath = path.join(foldersPath, folder);
// 	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
// 	for (const file of commandFiles) {
// 		const filePath = path.join(commandsPath, file);
// 		const command = require(filePath);
// 		// Set a new item in the Collection with the key as the command name and the value as the exported module
// 		if ('data' in command && 'execute' in command) {
// 			client.commands.set(command.data.name, command);
// 		} else {
// 			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
// 		}
// 	}
// }



// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, () => {
	console.log(`Ready! Logged in`);
});



// Slash Commands
// client.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;
// 	console.log(interaction);

//     const command = interaction.client.commands.get(interaction.commandName);

// 	if (!command) {
// 		console.error(`No command matching ${interaction.commandName} was found.`);
// 		return;
// 	}

// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		if (interaction.replied || interaction.deferred) {
// 			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
// 		} else {
// 			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
// 		}
// 	}
// });


// Reactions
client.on('messageCreate', async message => {
    // if(!interaction.isChatInputCommand()) return;
    
    // const { commandName } = interaction;

    if  ( message.content.includes('Trainingszeit')){
        try{
            const message = await interaction.reply({ content: 'Trainingszeit Reaktionen: ', fetchReply: true});
            await message.react('<:DorcaKomrade:947317312149655552>');
            await message.react('<:DorcaLurk:597873265939054595>');            
            await message.react('<:DorcaMad:597873266094243954>');
        }catch{
            await message.reply('Reactions did not work...');
        }
    }

    // Reaktionen auf "Wingabstimmung" mit: 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 
    if (message.content.includes('Wingabstimmung')){
        try{
            await message.react('1️⃣');
            await message.react('2️⃣');
            await message.react('3️⃣');
            await message.react('4️⃣');
            await message.react('5️⃣');
            await message.react('6️⃣');
            await message.react('7️⃣');
        }catch{
            await message.reply('reactions did not work...')
        }
    }

    // Reaktionen auf "Gildenabend" mit: <:aurene:857654245801459782> <:DorcaLurk:597873265939054595> <:DorcaMad:597873266094243954>
    if  (message.content.includes('Gildenabend')){
        try{
            await message.react('<:aurene:857654245801459782>');
            await message.react('<:DorcaLurk:597873265939054595>');            
            await message.react('<:DorcaMad:597873266094243954>');
        }catch{
            await message.reply('Reactions did not work...');
        }
    }


    // Reaktionen auf "Raidtag" mit: <:AureneHappy:857654884135075841> <:DorcaHeal:597873273212239898> <:DorcaLurk:597873265939054595> <:DorcaLoop:672804546673901569> <:DorcaMad:597873266094243954>
    if  (message.content.includes('Raidtag')){
        try{
            await message.react('<:AureneHappy:857654884135075841>');
            await message.react('<:DorcaHeal:597873273212239898>');            
            await message.react('<:DorcaLurk:597873265939054595>');            
            await message.react('<:DorcaLoop:672804546673901569>');            
            await message.react('<:DorcaMad:597873266094243954>');
        }catch{
            await message.reply('Reactions did not work...');
        }
    }

    // if  (message.content === '!Clearchannel'){
    //     if(message.author.username === 'Cleara'){
    //         message.channel.bulkDelete(100, true).catch(err => {
    //             console.error(err);
    //             message.channel.send('All Messages are older than two weeks. You have to delete them by yourself ;-)')
    //         });
    //     }
    // }

    if  (message.content === '!ping'){
        try{
            await message.react('🇵');
            await message.react('🇴');
            await message.react('🇳');
            await message.react('🇬');
        }
        catch{
            console.log('Well, that did not work -_-')
            await message.reply('Reaction does not compute...')
        }
    }

    // if  (message.content === '!button'){
    //     try{
    //         await message.reply('Here comes a Button');
    //     }
    //     catch{
    //         console.log('Well, that did not work -_-')
    //         await message.reply('Reaction does not compute...')
    //     }
    // }
});



client.login(process.env.DISCORD_TOKEN);
