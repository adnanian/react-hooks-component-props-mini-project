import React from "react";

const coffeeDuration = {
    intervalInMinutes: 5,
    emoji: '☕️'
}

const bentoDuration = {
    intervalInMinutes: 10,
    emoji: '🍱'
};

const COFFEE_DURATION_LIMIT = 30;

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {

    function displayTimeInEmojis(emojiDurationObject) {
        let emojiString = "";
        const emojisToAdd = Math.ceil(minutes / emojiDurationObject.intervalInMinutes);
        for (let counter = 1; counter <= emojisToAdd; counter++) {
            emojiString += emojiDurationObject.emoji;
        }
        return emojiString;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutes < COFFEE_DURATION_LIMIT ? displayTimeInEmojis(coffeeDuration) : displayTimeInEmojis(bentoDuration)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
};

export default Article;