/// This file contains all commands responsible for dice rolls. 

class RollingGuy
{
    RollingGuy(){
        this.rollHistory = [];
    }

    rollDie(amount, maxDice)
    {
        /// This function rolls certain die dat is given as an argument 
        //  ex.(amount = 1, maxDice = 6; roll 1d6 etc.)

        if (amount < 1)
        {
            return  { status: 0,
                    msg: "Error: Amount of dice to roll can not be lower then 1",
                    data: 0
                    };
        }
        
        if (maxDice < 1)
        {
            return  { status: 0,
                    msg: "Error: Dice to roll can not have less then 1 outcome",
                    data: 0
                    };
        }


        var rolls = [];

        for (let i=0; i<amount; i++)
        {
            let number = Math.floor(Math.random() * maxDice) + 1;
            rolls.push(number); 
        }

        return  { status: 1,
                msg: "Rolling dice ended successfully.",
                data: rolls
                }
    }
    showRoll(result)
    {
        let totaal = 0;
        let finalString = "";
        let firstElement = true;
        console.log(result);

        // Create string of all the rolls
        finalString = " (";

        result.data.forEach( function(element, index, array){
            if (firstElement)
            {
                firstElement = false;
            }
            else
            {
                finalString = finalString + ", ";
            }

            finalString = finalString + element;
            totaal += element;
        });

        finalString = finalString + ")";
        finalString = "Rolled: " + totaal + " " + finalString;

        return finalString;
    }

    rollMeSomeStats()
    {
        let totalRolled = 0;
        let superString = "";

        for(let i=0; i<6; i++)
        {
            // Single Roll
            let result = this.rollDie(4, 6);

            // Remove the lowest
            let currLowest = Math.min.apply(null, result.data);
            let toRemove = -1;
            
            result.data.forEach(function(element, index){
                if (element == currLowest)
                {
                    toRemove = index;
                }
            });
            result.data.splice(toRemove, 1);
            
            // Preparing Message
            let resultTotaal = 0;
            let resultString = "";
            let firstElement = true;

            // Create string of all the rolls
            resultString = " (";

            result.data.forEach( function(element, index, array){
                // if (index == toRemove)
                // {
                //     return;
                // }
                
                if (firstElement)
                {
                    firstElement = false;
                }
                else
                {
                    resultString = resultString + ", ";
                }

                resultString = resultString + element;
                resultTotaal += element;
            });

            resultString = resultString + ")";
            resultString = resultTotaal + " " + resultString;

            totalRolled += resultTotaal;
            superString += resultString + "\n";                        
        }

        let returnThing = "StatsRolled (" + totalRolled + "):\n" + superString; 
        return returnThing;
    }
    
    /*rollOldHtmlStats()
    {
        let superString = "";
        let originalRoll = "";

        for(var i=0; i<6; i++)
        {
            // Single Roll
            let result = this.rollDie(4, 6);
            let deleted = false;
            let currLowest = Math.min.apply(null, result.data);
            let toRemove = -1;
            let string = this.showRoll(result);
            originalRoll += string + "<br/>";
            result.data.forEach(function(element, index){
                if (element == currLowest)
                {
                    toRemove = index;
                }
            });

            result.data.splice(toRemove, 1);
            let string = this.showRoll(result);
            superString += string + "<br/>";                        
        }

        let returnThing = "<span style=\"color: grey;\"> Original: <br/>" + originalRoll + "</span><br/><br/>" + superString; 
        return returnThing;
    }*/
}


module.exports = RollingGuy