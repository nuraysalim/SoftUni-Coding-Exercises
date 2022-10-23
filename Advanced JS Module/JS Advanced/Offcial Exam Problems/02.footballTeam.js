class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (const player of footballPlayers) {
            let [name, age, value] = player.split('/');
            let playerExists = false;

            if(this.invitedPlayers.length === 0) {
                this.invitedPlayers.push({
                    'name': name,
                    'age': age,
                    'playerValue': value,
                });
                continue;
            }

            for (const player of this.invitedPlayers) {
                if(player.name === name) {
                    playerExists = true;

                    let oldValue = player.playerValue;
                    if(oldValue < value) {
                        player.playerValue = value;
                    }
                }
            };

            if(!playerExists) {
                this.invitedPlayers.push({
                    'name': name,
                    'age': age,
                    'playerValue': value,
                });
            };
        }

        let buffWithNames = [];
        for (const player of this.invitedPlayers) {
            buffWithNames.push(player.name);
        };

        return `You successfully invite ${buffWithNames.join(', ')}.`
    };

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        let playerIsInvited = false;

        for (const player of this.invitedPlayers) {
            if(player.name === name) {
                playerIsInvited = true;

                if(offer < player.playerValue) {
                    let priceDifference = Number(player.playerValue) - Number(offer);
                    throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
                }
            };
        };

        if(!playerIsInvited) {
            throw new Error (`${name} is not invited to the selection list!`);
        };

        for(let player of this.invitedPlayers) {
            if(player.name === name) {
                player.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
            }
        }


    };

    ageLimit(name, age) {
        let playerIsInvited = false;

        for (const player of this.invitedPlayers) {
            if(player.name === name) {
                playerIsInvited = true;

                if(player.age < age){
                    let ageDiff = Math.abs(Number(player.age) - age);

                    if(ageDiff < 5) {
                        return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
                    }

                    if(ageDiff > 5) {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                    }
                } else {
                    return `${name} is above age limit!`;
                }
            };
        };

        if(!playerIsInvited) {
            throw new Error (`${name} is not invited to the selection list!`);
        };

    };

    transferWindowResult() {
        let buff = `Players list:\n`;

        let sorted = this.invitedPlayers.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        
        let indexes = sorted.length - 1;
        
        for (let i = 0; i <= indexes; i++) {
            let player = this.invitedPlayers[i];
            buff += (i !== indexes) ? `Player ${player.name}-${player.playerValue}\n` : `Player ${player.name}-${player.playerValue}`;
        };

        return buff;
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());