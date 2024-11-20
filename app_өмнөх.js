// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлъя
var isGameBegin;

// тухайн тоглож буй тоглогчийн элементийн дугаар;
var activePlayer;
// тоглогч нарын нийт оноо
var scores;

// тухайн ээлжинд цуглуулж буй нийт оноо
var currentscore;
var diceDom = document.querySelector(".dice");

//  тоглоомыг эхлүүл
initGame();
// initGame
function initGame() {
  isGameBegin = true;
  // тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 1, 2-р тоглогчийг 2 гэе
  activePlayer = 1;

  // тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0]; // эхний тоглогч болон хоёр дахь тоглогчийн оноо

  //  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  currentscore = 0;

  // програм эхлэхэд бэлтгэе  - тоглоом дууссаны дараа оноо нь өмнөх data хадгалсан баыж болзошгүй
  //  queryselector нь олон төрлөөр элементийг хайж олж авдаг бол getElementById нь зөвхөн ID аар хайж олдог
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.getElementById("name--0").textContent = "player 1";
  document.getElementById("name--1").textContent = "player 2";

  document.querySelector(".player--0").classList.remove("active");
  document.querySelector(".player--1").classList.remove("active");

  document.querySelector(".player--1").classList.add("active");
  diceDom.style.display = "none";
}
//  шоог шидэх эвент листенер буюу
//  click эвент хийгдэж js код руу хандах үед код програм ямар хариу үйлдэл үзүүлэх вэ?
document.querySelector(".btn--roll").addEventListener("click", () => {
  if (isGameBegin) {
    // 1-6 тоо рандомаар өгөгдөх
    var dicePoint = Math.floor(Math.random() * 6) + 1;
    // шооны зургийг дэлгэц дээр гаргаж ирнэ
    diceDom.src = "./img/dice-" + dicePoint + ".png";
    console.log(dicePoint);
    //  буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн оноог нэмэгдүүлнэ
    if (dicePoint !== 1) {
      // тоглогчийн current  оноог нэмэгдүүл
      currentscore += dicePoint;
      document.getElementById("current--" + activePlayer).textContent =
        currentscore;
    } else {
      SwitchNextPlayer();
    }
  } else {
    alert("NewGame товч дээр дарж тоглоомыг эхлүүлнэ!!");
  }
});

//  hold roll
document.querySelector(".btn--roll").addEventListener("click", () => {
  if (isGameBegin) {
    // дарах үед идэвхтэй тоглогчийн оноог үндсэн score руу оноог нэмэгдүүлэх
    scores[activePlayer] += currentscore;
    document.getElementById("score--" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      isGameBegin = false;
      document.getElementById("name--" + activePlayer).textContent = "Winner";
      var playerPanel = document.querySelector(".player--" + activePlayer);
      playerPanel.classList.add("winner");
      playerPanel.classList.remove("active");
    } else {
      SwitchNextPlayer();
    }
  } else {
    alert("new Game товч дээр дарж тоглоомыг шинээр эхлүүлнэ үү!");
  }
});


// энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг DRY
function SwitchNextPlayer(){
    //  тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
    currentscore = 0;
    // шоог түр болгоно
    document.getElementById("current--" + activePlayer).textContent = "0",
    diceDom.style.display = "none";


    // тоглогчийн ээлжийг соль
    activePlayer = activePlayer === 1 ? 0 : 1;

    // улаан цэгийг шилжүүлэх
    document.querySelector('.player--0').classList.toggle("active")
    document.querySelector('.player--1').classList.toggle("active")
}

//  тоглоом шинээр эхлүүлэх функц
document.querySelector(".btn--new").addEventListener("click", initGame)