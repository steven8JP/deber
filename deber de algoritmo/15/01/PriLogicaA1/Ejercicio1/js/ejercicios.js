class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)
    }
    mayor(){
      //console.log("mayor..")
      let n1 = document.getElementById(`num1`).value
      n1===parseFloat(n1)
      let n2 = document.getElementById(`num2`).value 
      n2===parseFloat(n2)
      let resp= document.getElementById("resp")
      console.log(n1)
      console.log(n2)
      if (n1>n2){
      resp.textContent=`el número `+n1+ ` es mayor`
      }else if (n2>n1){
        resp.textContent=`el número `+n2+` es mayor`
        console.log(resp.textContent)
      }else{
        resp.textContent=`El número ingresado no es valido`
      }
    }
    Dia() {
      //console.log("Dia...")
      let num = document.getElementById(`num`).value
      num=parseFloat(num)
      let resp= document.getElementById("resp")
      console.log(num)
      if (num==1){
      resp.textContent=`el número `+num+ `  es lunes`
    }else if (num==2){
      resp.textContent=`el número `+num+ ` es martes`
    }else if (num==3){
      resp.textContent=`el número `+num+ ` es miercoles`
    }else if (num==4){
      resp.textContent=`el número `+num+ ` es jueves`
    }else if (num==5){
      resp.textContent=`el número `+num+ ` es viernes`
    }else if (num==6){
      resp.textContent=`el número `+num+ ` es sabado`
    }else if (num==7){
      resp.textContent=`el número `+num+ ` es domingo`
    }else if(num==num){  
    resp.textContent=`el número ingresado esta fuera del rango `
    console.log(resp.textContent)
  }
 }   
 Año() {
  //console.log("Año..."")
  let num = document.getElementById(`num`).value
      num=parseFloat(num)
      let resp= document.getElementById("resp")
      console.log(num)
      if ((num % 4 == 0) && (num % 100 !=0 || num % 400 == 0)) {
        resp.textContent=`el año que ingreso es bisiesto `
      }else{
        resp.textContent=`el año que ingreso no es bisiesto`
      }
 }
Presentar(){
  //console.log("Presentar...")
  let num = document.getElementById(`num`).value
  num=parseFloat(num)
  let resp= document.getElementById(`resp`)
  let conta=0
  resp.textContent=`los números son:\n`
   while(conta <= num){
    conta++
if (conta <= num){
  resp.textContent+=`${conta.toString()}\n`
}
 }
}
 Suma(){
  //console.log("Sumar..")
  let num = document.getElementById(`num`).value
  num=parseFloat(num)
  let resp= document.getElementById(`resp`)
  let conta=1
  let acumulador = 0 
  resp.textContent=`los números  pares son:\n`
   while(conta <= num){
    conta++
if  (conta%2==0){
  resp.textContent+=`${conta.toString()}\n`
  acumulador = acumulador + conta
  } 
}
resp.textContent+=`la suma es: ${acumulador.toString()}\n`
 }
Divisores(){
  let num = document.getElementById(`num`).value
  num=parseFloat(num)
  let resp= document.getElementById(`resp`)
  let conta = 1
  resp.textContent=`los Divisores del número ${num.toString()} son:\n`
  if(num===num){
  while (conta < num){
    if(num % conta == 0){
    resp.textContent +=`${conta.toString()}\n`
  }
  conta++
}
}else{
  resp.textContent=`el número ingresado no es valido `
}
}
 Perfecto(){
  let num = document.getElementById(`num`).value
  num=parseFloat(num)
  let resp= document.getElementById(`resp`)
  let n = 1, acum = 0
  while(n < num){
    if (num % n == 0){
    acum = acum + n
  }
  n++
 }
 if (acum == num){
  resp.textContent=`el número ${num.toString()} es perfecto `
 }else {
  resp.textContent=`el número ${num.toString()} no es perfecto `
 } 
}
SumarYconta(){
  let n1=document.getElementById(`n1`).value
      n1=parseFloat(n1)
      let n2 = document.getElementById(`n2`).value 
      n2=parseFloat(n2)
      let resp= document.getElementById("resp")
      let acum=0
      if (n1 <= n2){
        resp.textContent=`los valores son: \n`
        while(n1 <= n2){
          resp.textContent+=`${n1.toString()}\n`
          acum = acum + n1
          n1++
        }
        resp.textContent+=`la suma de los números es: ${acum.toString()}`
      }else if (n1 >= n2){
        resp.textContent=`los valores son:\n`
        while (n1 >= n2){
          resp.textContent+=`${n1.toString()}\n`
          acum = acum + n1
          n1--
        }
        resp.textContent+=`la suma de los números es: ${acum.toString()}`
      }else{
        resp.textContent=`número no valido`
      }
}
}
let Ejer = new Ejercicios1()
//Ejer.venta()

