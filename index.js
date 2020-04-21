let time = 0;
let nums = []

const inflate = (data) => {
  const ele = `<p id="res">Number : ${data}</p>`
  return ele;
};

 function myFunction() {
    setInterval(alertTime, 1000);   
  }
  
  function alertTime() {
    if (time >= 10) {
      stopTimer()
    } else {
      time += 1
      console.log(time);
      nums.push(makeNumber())
      document.getElementById("counter-number").textContent = time
    }
  }


  document.getElementById("start_button").addEventListener('click',() => {
    if (document.getElementById('start_button').textContent == 'Reveal Result') {
      var xhg = nums.map(x => {
        return inflate(x);
      })
      document.getElementById("result-section").innerHTML = xhg
    }
    document.getElementById("start_button").textContent = 'Reveal Result'
    myFunction()
  })

  function stopTimer() {
    // let el  = val.toString().split("").map(x => {
    //   return inflate(x)
    // })
      clearInterval(myFunction())
  }

  function makeNumber() {
    var nummmm = Math.floor(Math.random() * 10) + 1;
    return nummmm;
  }