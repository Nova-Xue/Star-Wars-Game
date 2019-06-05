$(document).ready(function () {

    var characterChosen = false;
    var enemyChosen = false;
    var characterIndex;
    var enemyIndex;
    var character;
    var enemy;
    var characterInfo;
    var enemyInfo;
    var initialAttack;
    var chararcters = [
        {
            name: "Obi-Wan Kenobi",
            attack : 4,
            counterAttack : 10,
            health : 120
        },
        {
            name: "Luke Skywalker",
            attack : 6,
            counterAttack : 11,
            health : 100
        },
        {
            name: "Darth Vador",
            attack : 3,
            counterAttack : 9,
            health : 150
        },
        {
            name: "Darth Maul",
            attack : 2,
            counterAttack : 8,
            health : 180
        }

    ];
    $(".img-fluid").on("click", function () {
        if (characterChosen && enemyChosen) {//two character chosen 
            //return false;
        } else if (!characterChosen && !enemyChosen) {//choose attack 
            characterIndex = $(this).attr("alt");
            characterChosen = true;
            characterInfo = chararcters[characterIndex];
            initialAttack = characterInfo.attack;
            character = $(".div" + characterIndex).contents();
            $(".attack").append(character);
            $(".div"+characterIndex).remove();
            $("#choose").text("Choose Your Enemy");
        } else if (characterChosen && !enemyChosen) {//choose defend
            enemyIndex = $(this).attr("alt");
            enemyChosen = true;
            enemyInfo = chararcters[enemyIndex];
            enemy = $(".div" + enemyIndex).contents();
            $(".defend").append(enemy);
            $(".div"+enemyIndex).remove();
            $("#choose").text("Begin Your Fight");
            $(".vs").css("display", "block");
        }

    });

    $(".btn").on("click", function () {
        var counterAttack = enemyInfo.counterAttack;
        enemyInfo.health -= characterInfo.attack;
        characterInfo.health -= counterAttack;
        
        if(characterInfo.health>0){//character alive
            $(".attack").children(".health").text(characterInfo.health);
            $(".fight-history").append("<p>"+characterInfo.name+" hit "+enemyInfo.name+" by "+characterInfo.attack+"</p>")
            characterInfo.attack += initialAttack;
        }else{//character die
            $(".attack").children(".health").text("0");
            $(".fight-history").append("<p>"+characterInfo.name+" hit "+enemyInfo.name+" by "+characterInfo.attack+"</p>")
            $(".fight-history").append("you died");
            $(".vs").css("display", "none");
        }
        if(enemyInfo.health>0){//defend alive 
            $(".defend").children(".health").text(enemyInfo.health);
            $(".fight-history").append("<p>"+enemyInfo.name+" hit "+characterInfo.name+" by "+enemyInfo.counterAttack+"</p>")
        }else{//defend die
            $(".defend").children(".health").text("0");
            $(".fight-history").append("<p>"+enemyInfo.name+" hit "+characterInfo.name+" by "+enemyInfo.counterAttack+"</p>")
            $(".fight-history").append("<p>you defeated "+enemyInfo.name+"</p>")
            var deadEnemy = $(".defend").contents();
            var newDiv = $("<div class='col-md-2'>");
            newDiv.append(deadEnemy)
            $(".dead").append(newDiv);
            enemyChosen = false;
            $("#choose").text("Choose Your Enemy");
            $(".vs").css("display", "none");
        }

    });



});