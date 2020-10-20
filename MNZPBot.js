const Discord = require('discord.js');
const Watcher = require('feed-watcher');
const client = new Discord.Client();
const MessageEmbed = Discord.MessageEmbed;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// client.login('');

const mnzpWatcher = new Watcher('https://reddit.com/r/modelnzparliament.rss', 30);
const mnzpVoteWatcher = new Watcher('https://reddit.com/r/modelnzmp.rss', 30);
const mnzpPressWatcher = new Watcher('https://reddit.com/r/modelnzpressgallery.rss', 30);
const mnzpMetaWatcher = new Watcher('https://reddit.com/r/modelnzmeta.rss', 30);
const mnzpBEWatcher = new Watcher('https://reddit.com/r/mnzbyelection.rss', 30);
const mnzpCampaignWatcher = new Watcher('https://reddit.com/r/modelnzcampaigning.rss', 30);

mnzpWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/ModelNZParliament', '', 'https://reddit.com/r/modelnzparliament')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '399809646044512256'); // 399809646044512256
        clerkChannel.send(embed);
    });
});

mnzpVoteWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/ModelNZMP', '', 'https://reddit.com/r/modelnzmp')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '399809646044512256'); // 399809646044512256
        clerkChannel.send(embed);
    });
});

mnzpPressWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/ModelNZPressGallery', '', 'https://reddit.com/r/modelnzpressgallery')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '432658677464563732'); // 432658677464563732
        clerkChannel.send(embed);
    });
});

mnzpMetaWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/ModelNZMeta', '', 'https://reddit.com/r/modelnzmeta')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '392137549927284738'); // 392137549927284738
        clerkChannel.send(embed);
    });
});

mnzpBEWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/MNZByElection', '', 'https://reddit.com/r/mnzbyelection')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '530287397863292928'); // 530287397863292928
        clerkChannel.send(embed);
    });
});

mnzpCampaignWatcher.on('new entries', function (entries) {
    entries.forEach(function (entry) {
        const embed = new MessageEmbed()
            .setTitle(entry.title)
            .setURL(entry.link)
            .setAuthor('New post on /r/ModelNZCampaigning', '', 'https://reddit.com/r/modelnzcampaigning')
            .addField('Post Author', entry.author)
            .setColor(0x006b3e)
        const mnzp = client.guilds.cache.find(guild => guild.id === '392136320320798720'); // 392136320320798720
        const clerkChannel = mnzp.channels.cache.find(channel => channel.id === '530287397863292928'); // 530287397863292928
        clerkChannel.send(embed);
    });
});

mnzpWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })
	
mnzpBEWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })

mnzpPressWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })

mnzpMetaWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })
	
mnzpVoteWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })

mnzpCampaignWatcher.start()
    .then(function (entries) {})
    .catch(function (error) { console.error(error) })