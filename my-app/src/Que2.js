
const handleclick = ()=>{
    alert('Button clicked!');
  }

export function Button({text, onclick}) {
    return <button onClick={onclick} >{text}</button>
}