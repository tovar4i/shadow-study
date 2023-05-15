(() => {
  const run = {
    example_1_6: document.querySelector("[run-example-1-6]"),
    example_1_9: document.querySelector("[run-example-1-9]"),
    example_1_10: document.querySelector("[run-example-1-10]"),
    example_2_1: document.querySelector("[run-example-2-1]"),
    example_2_2: document.querySelector("[run-example-2-2]"),
    example_2_3: document.querySelector("[run-example-2-3]"),
    example_2_4: document.querySelector("[run-example-2-4]"),
    example_2_5: document.querySelector("[run-example-2-5]"),
    example_2_6: document.querySelector("[run-example-2-6]"),
    example_2_7: document.querySelector("[run-example-2-7]"),
    example_2_8: document.querySelector("[run-example-2-8]"),
    example_2_9: document.querySelector("[run-example-2-9]"),
    example_2_10: document.querySelector("[run-example-2-10]"),
    example_2_11: document.querySelector("[run-example-2-11]"),
    example_2_12: document.querySelector("[run-example-2-12]"),
  };

  run.example_1_6.addEventListener("click", result_1_6);
  function result_1_6() {
    console.log("run example 1-6 ...");

    let weight = "88.3";
    let height = "1.75";

    weight = weight.replace(",", ".");
    height = height.replace(",", ".");

    const bmi = (
      parseFloat(weight) /
      parseFloat(height) /
      parseFloat(height)
    ).toFixed(1);
    console.log("bmi= ", bmi);
  }

  run.example_1_9.addEventListener("click", result_1_9);

  function result_1_9() {
    console.log("run example 1-9 ...");

    const incomingValue = 0;
    const defaultValue = 10;
    const value = incomingValue ?? defaultValue;
    console.log(value);
  }

  run.example_1_10.addEventListener("click", result_1_10);

  function result_1_10() {
    console.log("run example 1-10 ...");

    const totalMinutes = 1450;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);
    console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
  }

  run.example_2_1.addEventListener("click", result_2_1);

  function result_2_1() {
    console.log("run example 2-1 ...");

    const question = prompt("Яка офіційна назва JavaScript?");
    if (question === "ECMAScript") {
      alert("Правильно!");
    } else {
      alert("Не знаєте? ECMAScript!");
    }
  }

  run.example_2_2.addEventListener("click", result_2_2);

  function result_2_2() {
    console.log("run example 2-2 ...");

    const hours = 14;
    const minutes = 0;
    let timestring;

    if (minutes > 0) {
      timestring = `${hours} г. ${minutes} хв.`;
    } else {
      timestring = `${hours} г.`;
    }
    console.log(timestring);
  }

  run.example_2_3.addEventListener("click", result_2_3);

  function result_2_3() {
    console.log("run example 2-3 ...");
    const userInput = parseInt(prompt("Введіть ціле число"));

    if (userInput > 0) {
      console.log("Це позитивне число");
    } else if (userInput < 0) {
      console.log("Це негативне число");
    } else if (userInput === 0) {
      console.log("Це 0");
    } else {
      console.log("Це не число");
    }
  }

  run.example_2_4.addEventListener("click", result_2_4);

  function result_2_4() {
    console.log("run example 2-4 ...");

    const a = 10;
    const b = 10;

    if (a > 100 && b > 100) {
      console.log(Math.max(a, b));
    } else {
      console.log(b + 512);
    }
  }

  run.example_2_5.addEventListener("click", result_2_5);

  function result_2_5() {
    console.log("run example 2-5 ...");

    let link = "https://my-site.com/about";

    if (!link.endsWith("/")) {
      link += "/";
    }

    console.log(link);
  }

  run.example_2_6.addEventListener("click", result_2_6);

  function result_2_6() {
    console.log("run example 2-6 ...");

    let link = "https://some-site.com/about";

    if (link.includes('my-site') && !link.endsWith('/')) {
      link += "/";
    }

    console.log(link);
  }


  run.example_2_7.addEventListener("click", result_2_7);

  function result_2_7() {
    console.log("run example 2-7 ...");

    let link = "https://some-site.com/about";

    (link.includes('my-site') && !link.endsWith('/'))? link += "/" : link;
    

    console.log(link);
  }


  run.example_2_8.addEventListener("click", result_2_8);

  function result_2_8() {
    console.log("run example 2-8 ...");

    const hours = 25;

    if(hours <17 ) {
      console.log('Pending');
    } else if (hours>24){
      console.log('Overdue');
    }else{
      console.log('Expires');
    }

  }

  run.example_2_9.addEventListener("click", result_2_9);

  function result_2_9() {
    console.log("run example 2-9 ...");

    const daysUntilDeadline = 5;

    if (daysUntilDeadline === 0) {
      console.log('Сьогодні');
    } else if (daysUntilDeadline === 1) {
      console.log('Завтра');
    } else if (daysUntilDeadline === 2) {
      console.log('Післязавтра');
    } else {
      console.log('Дата у майбутньому');
    }

  }

  run.example_2_10.addEventListener("click", result_2_10);

  function result_2_10() {
    console.log("run example 2-10 ...");

    const daysUntilDeadline = 0;

    switch (daysUntilDeadline) {
      case 0: 
      console.log('Сьогодні');
      break;
      case 1: 
      console.log('Завтра');
      break;
      case 2: 
      console.log('Післязавтра');
      break;
      
      default: 
      console.log('Дата у майбутньому');
      break;
    }

  }


  run.example_2_11.addEventListener("click", result_2_11);

  function result_2_11() {
    console.log("run example 2-11 ...");

    const min = 20;
    const max = 100;

    for (let i = min; i <max; i++) {
      if (i%5==0) {
        console.log(i);
      }
      continue;
    }

  }

  run.example_2_12.addEventListener("click", result_2_12);

  function result_2_12() {
    console.log("run example 2-12 ...");

    const login = prompt ('Enter your login');

    console.log(login);

    if (login === 'admin'){
      const password = prompt ('enter password');
        if (password === 'adminpas'){
          console.log('Здрастуйте, admin');
        } else {
          console.log("Невірний пароль");
        }
    } else if ( login == false || login == ""){
      console.log('Скасовано');
    } else {
      console.log("Я вас не знаю");
    }


    }

  


})();
