function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect);
    console.log(playerSelect);

    if (playerSelect == comSelect) {
        // 一緒だったらあいこ
        result = 2;
    } else {
        // 違うので条件によって勝敗を振り分ける
        if (playerSelect == 0) {
            // プレイヤーはグー
            if (comSelect == 1) {
                // コンピューターはチョキ
                result = 1;
            } else {
                // コンピューターはパー
                result = 0;
            }
        } else if (playerSelect == 1) {
            // プレイヤーはチョキ
            if (comSelect == 0) {
                // コンピューターはグー
                result = 0;
            } else {
                // コンピューターはパー
                result = 1;
            }
        } else {
            // プレイヤーはパー
            if (comSelect == 0) {
                // コンピューターはグー
                result = 1;
            } else {
                // コンピューターはチョキ
                result = 0;
            }
        }
    }

    console.log(result);

    if (playerSelect == 0) {
        playerSelectHand = 'GOO the illusion';
    } else if (playerSelect == 1) {
        playerSelectHand = 'CHOKI of destructive';
    } else {
        playerSelectHand = 'Dangerous P';
    }

    let comSelectHand;
    if (comSelect == 0) {
        comSelectHand = 'Demon Seed';
    } else if (comSelect == 1) {
        comSelectHand = 'Dead Rampage';
    } else {
        comSelectHand = 'Chaos Necromancer';
    }

    if (result == 0) {
        resultString = 'lose';
    } else if (result == 1) {
        resultString = 'win';
    } else {
        resultString = 'Draw';
    }

    document.getElementById('playerselect').innerHTML = 'YOU ARE_' + playerSelectHand;
    document.getElementById('computerselect').innerHTML = 'ENEMY is ' + comSelectHand;
    document.getElementById('resultMsg').innerHTML = 'RESULT_' + resultString;

    // 結果に応じて画像を表示する処理
    if (result == 0) {
        // 負けの場合
        document.getElementById('result-message').textContent = 'You Lose!';
        document.getElementById('win-img').style.display = 'none';
        document.getElementById('lose-img').style.display = 'block';
    } else if (result == 1) {
        // 勝ちの場合
        document.getElementById('result-message').textContent = 'You Win!';
        document.getElementById('win-img').style.display = 'block';
        document.getElementById('lose-img').style.display = 'none';
    } else {
        // あいこの場合
        document.getElementById('result-message').textContent = 'Draw!';
        document.getElementById('win-img').style.display = 'none';
        document.getElementById('lose-img').style.display = 'none';
    }

    document.getElementById('result-popup').style.display = 'block';
}

function selectChar(charName) {
    // 選択されたキャラクター名を表示
    document.getElementById("selectedCharacterName").innerHTML = `You are: ${charName}`;
    document.getElementById("selectedCharacterImg").src = "画像のURL"; // 画像のURLを指定する

    // 結果ポップアップ内に選択したキャラクター名を表示
    document.getElementById("selectedCharacterNamePopup").innerHTML = "You selected: " + charName;
}

function playEnemySound() {
    var audio = new Audio("audio/voice_monster.mp3");
    audio.play();
  }

  function playCharacterSound() {
    var audio = new Audio("audio/se_sword.mp3");
    audio.play();
  }