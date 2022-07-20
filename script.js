function hunek() {

  var szymon = Number(document.getElementsByName("liczba")[0].value)
  if (!isNaN(szymon) && szymon && szymon != '0'  && szymon > 0) {

    document.getElementById("wynik").innerHTML = `Wpisales liczbe ${szymon}`
    document.getElementById("wynik").style.border = `1px solid black`
    
    liczenie();

  } else {
    alert('Nie poprawna Liczba!')
  }

}

function nieliczenie() {
  document.getElementById("wyniktekst").innerHTML = 'Liczba nie jest liczbą pierwsza';
  document.getElementById("wyniktekst").style.color = 'darkred';
  console.log('nie')
}

function takliczenie(){
  document.getElementById("wyniktekst").innerHTML = `Liczba jest liczbą pierwsza`;
  document.getElementById("wyniktekst").style.color = `lime`;
}

function algorytm() {
  var szymon = Number(document.getElementsByName("liczba")[0].value)

  for(let i = 2; i < szymon; i++){
    if(szymon % i == 0) {
      nieliczenie();
      return;
    } else {
      takliczenie();
    }
  }

} 

function liczenie() {

  var szymon = Number(document.getElementsByName("liczba")[0].value)
  document.getElementById("wynik").style.border = `1px solid black`

  if(szymon == '1' || szymon == '2') {
    if(szymon == 1) {
      nieliczenie();
    } else if (szymon == 2) {
      takliczenie();
    }
  } else {
    algorytm();
  }

}