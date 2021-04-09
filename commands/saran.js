module.exports.config = {
    cooldown: '1',
    usage: 'ping <member> <reason>',
    description: "saran"
}

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send('saran');
}
