(() => {
  const run = {
    example_6: document.querySelector("[run-example-6]"),
    example_9: document.querySelector("[run-example-9]"),
    example_10: document.querySelector("[run-example-10]"),
  };

  run.example_6.addEventListener("click", result_6);
  run.example_9.addEventListener("click", result_9);
  run.example_10.addEventListener("click", result_10);

  function result_6() {
    console.log("run example 6 ...");

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

  function result_9() {
    console.log("run example 9 ...");

    const incomingValue = 0;
    const defaultValue = 10;
    const value = incomingValue ?? defaultValue;
    console.log(value);
  }

  function result_10() {
    console.log("run example 10 ...");

    const totalMinutes = 1450;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);
    console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
  }
})();
