import{
  useEffect,
  useState
}from "react"
import React from "react"
import style from "./style.css";
function Sayma(props) {

const [sayi,uygula]=useState(()=>{
    if(Number(localStorage.getItem("sayi"))){
        return Number(localStorage.getItem("sayi"))
    }
    else{
        return 0;
    }
})

const arttir=() =>{ 
  uygula(sayi+Number(props.sayac1))
  // localStorage.setItem("sayac",sayac+Number(count))
}
function azalt(){//bu şekilde yazılabiliyor

  uygula(sayi-props.sayac1)
  // localStorage.setItem("sayac",sayac-Number(count))
}
useEffect(()=>{
  localStorage.setItem("sayi",sayi);
},[sayi])

  return (
    <div>
      <div>Sonuç={sayi}</div>
      <button onClick={arttir}>+</button>
      <button onClick={azalt}>-</button>
      
    </div>
  );
}

export default Sayma;

