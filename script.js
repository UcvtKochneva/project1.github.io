rusLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
words = ["капуста","картон","диаграмма","полиция","хлопья","льдина","овчарка","бассейн","мандарин","футбол", "купюра"];
findUncorLtrs = [];
win = false;
lose = false;
word = words[Math.floor(Math.random()*11)];
attempts=1;
foundLtrs=0;
find = false;
displayLetters = [];
sovpadenie=false;
score=0;
for(i = 0; i < word.length; i++){
    displayLetters[i]="_";
}
for(i = 0; i < word.length; i++){ 
   document.getElementById("letter"+(i+1)).innerHTML="_";
}
updUncor_Ltr=function(){
    if (attempts < 6) {
        findUncorLtrs[attempts] = letter;
        uncorrectLtr.innerHTML = uncorrectLtr.innerHTML+" "+findUncorLtrs[attempts];
        draw_BodyPart();
        attempts++;
    } else if (attempts == 6) {
        draw_BodyPart();
        findUncorLtrs[attempts] = letter;
        uncorrectLtr.innerHTML = uncorrectLtr.innerHTML+" "+findUncorLtrs[attempts];
        lose=true;
        alert("Вы проиграли! Сейчас мы покажем буквы, которые вы не угадали");
        for(i = 0; i < word.length; i++){
            indLtr = document.getElementById("letter"+(i+1));
            if(displayLetters[i] == "_"){
                indLtr.innerHTML = word[i]
                indLtr.style.color = "red"
            } else if(displayLetters[i] == word[i]) {
                indLtr.innerHTML = word[i]
                indLtr.style.color = "green"
            }
            
        }
        final.innerHTML="Вы проиграли!";
        final.style.color="red";
    }
}

guessLetter = function(){
    if((win == false) && (lose == false)) {
        alert("Загрузка..");
        updateDispLetters();
    } else if (win == true) {
        alert("Вы уже победили. Чтобы начать заново перезагрузите страницу");
    } else if (lose == true) {
        alert("Вы уже проиграли. Чтобы начать заново перезагрузите страницу")
    }
}
updateDispLetters = function(){
    for (i = 0; i < word.length; i++){
        if ((letter == displayLetters[i]) || (letter == findUncorLtrs[i])) {
            sovpadenie=true;
        }
    }
    if (sovpadenie == false) {
        for(i = 0; i < word.length; i++) {
            if (letter.toLowerCase() == word[i]){
                alert("Вы угадали букву");
                document.getElementById("letter"+(i+1)).innerHTML=letter;
                displayLetters[i]=letter;
                foundLtrs++;
                score++;
                scores.innerHTML="Ваши очки: "+score;
                if (foundLtrs == word.length) {
                    win = true;
                    alert("Поздравляю! Вы победили! Ваши очки: " +score);
                    final.innerHTML="Победа!";
                    final.style.color="green";
                    for(i = 0; i < word.length; i++){
                        document.getElementById("letter"+(i+1)).style.color = "green"
                    }
                }
                find = true;
            } else if ((letter.toLowerCase() != word[i]) && (i == word.length-1) && (find == false)) {
                find = false;
                alert("Такой буквы здесь нет");
                if (score > 0) {
                    score--;
                    scores.innerHTML="Ваши очки: "+score;
                }
                updUncor_Ltr();
            }
        }    
    } else if (sovpadenie == true) {
        alert("Вы уже называли эту букву")
    }
    find=false;
    sovpadenie=false;
}
draw_BodyPart = function(){
    indImg = document.getElementById('bodyPart'+attempts);
    indImg.src ="img/BodyParts/bodyPart"+attempts+".png";
}