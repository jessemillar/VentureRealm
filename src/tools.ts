function random(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
}

function probability(percent: number): boolean {
    if (Math.random() * 100 < percent) {
        return true
    }

    return false
}

// Prepend a message to the text area
function log(message: string) {
    (<HTMLInputElement>document.getElementById("game_output")).value = message + "\n\n" + (<HTMLInputElement>document.getElementById("game_output")).value;
}

function combineBools(a: boolean, b: boolean): boolean {
    if (a || b) {
        return true;
    } else {
        return false;
    }
}

function isVowel(character: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) !== -1
}

function asciiBar(current: number, max = 100): string {
    let bar = "";
    let barLength = 15;
    let fill = Math.ceil(current / max * barLength);

    for (let i = 0; i < barLength; i++) {
        if (i < fill) {
            bar += characters.black;
        } else {
            bar += "-";
        }
    }

    return bar
}

function changeBackground(image: string) {
    document.body.style.backgroundImage = "url('images/" + image + ".png')";
}

function getFromURL(url: string, callback: any): any {
    $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            if (callback) {
                callback(result);
            }
        }
    });
}

function sendToURL(url: string, ajaxType: string, data: any, callback: any): any {
    $.ajax({
        url: url,
        type: ajaxType,
        processData: false,
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(data),
        success: function(result) {
            if (callback) {
                callback(result);
            }
        }
    });
};

function save() {
    let payload = {
        player: player,
        map: {
            paths: map.paths,
            grid: map.grid
        }
    };

    sendToURL("/user", "PUT", payload, function(result: any) {
        console.log(result);
        log("Progress saved!");
    });
}

function logout() {
	window.open("/logout", "_self");
}
