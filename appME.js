// хоёр тоглогчийн нийт оноог хадгалах массив
let нийтОноо;
//  Одоогийн тоглогчийн оноог хадгалах хувьсагч
let түрОноо;
//  Идэвхтэй тоглогчийн  ээлжийг хадгалах хувьсагч
let идэвхтэйТоглогч;
// тоглоом дууссан эсэхийг илэрхийлэх хувьсагч
let playing;

// Хоёр тоглогчийн нийт оноог харуулах элемент
const тоглогчнэгН = document.getElementById("score--0");
const тоглогчхоёрН = document.getElementById("score--1");

//  Одоогийн тоглогчийн оноог харуулах элемэнтүүд
const тоглогчнэгТүр = document.getElementById("current--0");
const тоглогчхоёрТүр = document.getElementById("current--1");

//  идэвхтэй тоглогч
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
// шоог харуулах элемент
const шооныМодул = document.querySelector(".dice");

// товчлууруудийг модулиуд
const шооШидэх = document.querySelector(".btn--roll");
const онооХадгалах = document.querySelector(".btn--hold");
const шинээрЭхлэх = document.querySelector(".btn--new");

// тоглоомыг эхлүүл
АнхдагчТөлөв();

шооШидэх.addEventListener("click", () => {
  if (playing) {
    let шоо = Math.floor(Math.random() * 6) + 1;
    шооныМодул.src = `/img/dice-${шоо}.png`;

    if (шоо !== 1) {
      түрОноо += шоо;
      document.getElementById(`current--${идэвхтэйТоглогч}`).textContent =
        түрОноо;
    } else {
      ДараагийнТоглогчрууШилж();
    }
  }else{
    alert("тоглоом дууссан байна, NEW game товч дээр дарж , шинээр эхлүүлнэ үү")
  }
});

онооХадгалах.addEventListener("click", () => {
  if (playing) {
    нийтОноо[идэвхтэйТоглогч] += түрОноо;
    document.getElementById(`score--${идэвхтэйТоглогч}`).textContent =
      нийтОноо[идэвхтэйТоглогч];
    console.log(нийтОноо[идэвхтэйТоглогч]);
    document.getElementById(`current--${идэвхтэйТоглогч}`).textContent = 0;
    түрОноо = 0;
    if (нийтОноо[идэвхтэйТоглогч] >= 20) {
      document.getElementById(`name--${идэвхтэйТоглогч}`).textContent =
        "Winner!!!";
      шооныМодул.classList.add("hidden");
    //   шооШидэх.classList.add("hidden");
    //   онооХадгалах.classList.add("hidden");
      playing = false;

      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
    ДараагийнТоглогчрууШилж();
  }
});

шинээрЭхлэх.addEventListener("click", () => {
  АнхдагчТөлөв(); 
  хэнЭхлэхВэ()
});

function хэнЭхлэхВэ(){
    let ran = Math.floor(Math.random() * 2) + 1
    if(ran == 1)
    {
        идэвхтэйТоглогч = 0
    }else{
        идэвхтэйТоглогч = 1
    }
}

function ДараагийнТоглогчрууШилж() {
  түрОноо = 0;
  document.getElementById(`current--${идэвхтэйТоглогч}`).textContent = 0;

  идэвхтэйТоглогч = идэвхтэйТоглогч === 1 ? 0 : 1;

  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

function АнхдагчТөлөв() {
  // Хоёр тоглогчийн  оноог 0 болгох
  тоглогчнэгН.textContent = 0;
  тоглогчхоёрН.textContent = 0;

  //  Current оноо
  тоглогчнэгТүр.textContent = 0;
  тоглогчхоёрТүр.textContent = 0;

  //   тоглогчийн нэр ID ийг анхдагч байдалд оруулах
  document.getElementById("name--0").textContent = "PLAYER 1";
  document.getElementById("name--1").textContent = "PLAYER 2";

  шооШидэх.classList.remove("hidden");
  онооХадгалах.classList.remove("hidden");

  playing = true;
  нийтОноо = [0, 0];
  түрОноо = 0;
  идэвхтэйТоглогч = 0;
}
console.log(нийтОноо[0], нийтОноо[1]);
/**
 хүндрүүлж дахиад эхнээс нь бичих
 хэн эхлэхийг шоогоор шидэж олох
 өөр прожект
 */
