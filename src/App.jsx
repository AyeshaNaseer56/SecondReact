import Unordered from "./components/Unordered"; 
import Ordered from "./components/Ordered";
import Unorderedscnd from "./components/Unorderedscnd";
import Unorderedthird from "./components/Unorderedthird";
import Unorderedfrth from "./components/Unorderedfrth";
import Orderedscnd from "./components/Orderedscnd";
import Orderedthird from "./components/Orderedthird";
import Last from "./components/Last";


export default function App(){
  return(
    <>
    <ul><Unordered />
    <ol><Ordered />
    <ul><Unorderedscnd />
    <ul><Unorderedthird /></ul>
      <Unorderedfrth/></ul>
      <Orderedscnd />
      <ol><Orderedthird/></ol>
    </ol>
    <Last />
    </ul>
    </>
  )
}