$(document).ready(function () {

    var characterChosen = false;
    var enemyChosen = false;
    var characterIndex;
    var enemyIndex;
    var character;
    var enemy;
    var characterInfo;
    var enemyInfo;
    var chararcters = [
        {
            name: "Obi-Wan Kenobi",
            attack : 10,
            counterAttack : 8,
            health : 120
        },
        {
            name: "Luke Skywalker",
            attack : 12,
            counterAttack : 10,
            health : 100
        },
        {
            name: "Darth Vador",
            attack : 8,
            counterAttack : 6,
            health : 150
        },
        {
            name: "Obi-Wan Kenobi",
            attack : 6,
            counterAttack : 4,
            health : 180
        }

    ];
    $(".img-fluid").on("click", function () {
        if (characterChosen && enemyChosen) {
            //return false;
        } else if (!characterChosen && !enemyChosen) {
            characterIndex = $(this).attr("alt");
            characterChosen = true;
            character = $(".div" + characterIndex);
            characterInfo = chararcters[characterIndex];
            $(".attack").append(character);
            $("#choose").text("Choose Your Enemy");
        } else if (characterChosen && !enemyChosen) {
            enemyIndex = $(this).attr("alt");
            enemyChosen = true;
            enemy = $(".div" + enemyIndex);
            enemyInfo = chararcters[enemyIndex];
            $(".defend").append(enemy);
            $("#choose").text("Begin Your Fight");
            $(".vs").css("display", "block");
        }

    });

    $(".btn").on("click", function () {
        
        var characterAttack = characterInfo.attack;
        

    });



});