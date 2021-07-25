exports.isItFriday = function isItFriday(today: string): string {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
};

