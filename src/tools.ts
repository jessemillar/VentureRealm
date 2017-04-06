function random(array: any[]) {
    return Math.floor(Math.random() * array.length)
}

function probability(percent: number) {
    if (Math.random() * 100 < percent) {
        return true
    }

    return false
}

// Prepend a message to the text area
function log(message: string) {
    (<HTMLInputElement>document.getElementById("game_output")).value = message + "\n\n" + (<HTMLInputElement>document.getElementById("game_output")).value;
}

function combineBools(a: boolean, b: boolean) {
    if (a || b) {
        return true;
    } else {
        return false;
    }
}

function isVowel(character: string) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) !== -1
}

function asciiBar(current: number, max = 10) {
    let bar = "";
    let barLength = 9;
    let fill = Math.ceil(current / max * barLength);

    for (var i = 0; i < barLength; i++) {
        if (i < fill) {
            bar += characters.black;
        } else {
            bar += characters.gray;
        }
    }

    return bar
}

function changeBackground(image: string) {
    document.body.style.backgroundImage = "url('/images/" + image + ".png')";
}
