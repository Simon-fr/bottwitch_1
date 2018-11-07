var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "kakoooo",
        password: "oauth:jd9cyzau8146nisn84m10zgeg1sbce"
    },
    channels: ["SquerlyTV"]
};

var client = new tmi.client(options);
client.connect();

//TWITTER

client.on('chat', function(channel, user, message, self) {
    if(message === "!twitter") {
        client.action("SquerlyTV", "📌 Suis nos actualitées sur Twitter: twitter.com/Squerly_TV")
        ;
    }
});

//YOUTUBE

client.on('chat', function(channel, user, message, self) {
    if(message === "!youtube") {
        client.action("SquerlyTV", "📌 Abonnes toi au youtube de Squerly TV: https://goo.gl/qf8nVA")
        ;
    }
});

//SUB

client.on('chat', function(channel, user, message, self) {
    if(message === "!sub") {
        client.action("SquerlyTV", "📌 Si tu souhaites t'abonner à la chaîne c'est par ici: https://goo.gl/jYr3Lk")
        ;
    }
});

//DISCORD

client.on('chat', function(channel, user, message, self) {
    if(message === "!discord") {
        client.action("SquerlyTV", "📌 Rejoins le Discord de Squerly TV: https://discord.gg/9z4a88b")
        ;
    }
});

//DONS

client.on('chat', function(channel, user, message, self) {
    if(message === "!don") {
        client.action("SquerlyTV", "📌 Si tu souhaites soutenir la Squerly TV: https://streamlabs.com/squerlytv")
        ;
    }
});

//SHOP

client.on('chat', function(channel, user, message, self) {
    if(message === "!shop") {
        client.action("SquerlyTV", "👚 Boutique du jour: https://fnbr.co/shop")
        ;
    }
});

//DRUMMER

client.on('chat', function(channel, user, message, self) {
    if(message === "!drummer") {
        client.action("SquerlyTV", "Twitter: https://twitter.com/adrienpeze")
        ;
    }
});

//BONE

client.on('chat', function(channel, user, message, self) {
    if(message === "!bone") {
        client.action("SquerlyTV", "Twitter: https://twitter.com/bone_tlc")
        ;
    }
});




