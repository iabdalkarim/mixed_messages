const messageParts = {
    destinies: {
        prefix: "Your destiny is ",
        messages: ["a dancing frog.", "a flying taco.", "a mysterious sock.", "a magical pickle.", "a talking lamp."],
    },
    predictions: {
        prefix: "",
        messages: [
            "You will soon meet a dancing pancake.",
            "A donut will appear in your dreams.",
            "The spaghetti in your pocket will give you wisdom.",
            "Beware of the jellyfish on a skateboard.",
            "Your shoes will become sentient and start walking on their own.",
        ],
    },
    quests: {
        prefix: "Your next quest is to ",
        messages: [
            "talk to the cheese, it knows everything.",
            "high-five a cactus.",
            "whisper to the moon.",
            "chase after a flying spaghetti monster.",
            "hug a pizza for good luck.",
        ],
    },
};

class MixedMessage {
    constructor(messageParts) {
        this.messageParts = messageParts;
    }
    getRandMessage() {
        const msgArr = [];
        for (const key in this.messageParts) {
            const rand = this.getRandomNum(this.messageParts[key].messages.length);
            msgArr.push(`${this.messageParts[key].prefix}${this.messageParts[key].messages[rand]}`);
        }
        return msgArr.join("\n");
    }
    getRandomNum(len) {
        return Math.floor(Math.random() * len);
    }
    print() {
        console.log(this.getRandMessage());
    }
}

const mixedMessage = new MixedMessage(messageParts);
mixedMessage.print();
