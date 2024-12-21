import{
  useEffect,
  useState
}from "react"

function App() {

const [sayac,uygula]=useState(Number(localStorage.getItem("sayac")))
const [count,degis]=useState(0)

const degistir= (event) =>{
  degis(event.target.value)
}

const arttir=() =>{
  uygula(sayac+Number(count))
  localStorage.setItem("sayac",sayac+Number(count))
}
function azalt(){//bu şekilde yazılabiliyor
  uygula(sayac-Number(count))
  localStorage.setItem("sayac",sayac-Number(count))
}

  return (
    <div>
      <button onClick={arttir}>+</button>
      <div>{sayac}</div>
      <button onClick={azalt}>-</button>
      <input type="number" id="input" value={count} onChange={degistir} />
    </div>
  );
}

export default App;

