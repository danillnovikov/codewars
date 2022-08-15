// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template) {
    return console.log(`I like ${template.join(', ')}!`);
}

buildString('Cheese', 'Milk', 'Chocolate');
buildString('Cheese', 'Milk');