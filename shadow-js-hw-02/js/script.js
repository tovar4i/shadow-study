(() => {
  const run = {
    example_3_1: document.querySelector("[run-example-3-1]"),
    example_3_2: document.querySelector("[run-example-3-2]"),
    example_3_3: document.querySelector("[run-example-3-3]"),
    example_3_4: document.querySelector("[run-example-3-4]"),
    example_3_5: document.querySelector("[run-example-3-5]"),
    example_3_6: document.querySelector("[run-example-3-6]"),
    example_3_7: document.querySelector("[run-example-3-7]"),
    example_3_8: document.querySelector("[run-example-3-8]"),
    

    
  };

  run.example_3_1.addEventListener("click", result_3_1);
  function result_3_1() {
    console.log("run example 3-1 ...");

    const genres = ['Jazz', 'Blues'] ;

    genres.push('Roc-n-roll');
    console.log(genres[0]);
    
    console.log(genres[genres.length-1]);

    


  }


})();
