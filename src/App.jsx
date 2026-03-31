import FullForm from "./components/FullForm";
import Heading from "./components/Heading";
import HeadingOne from "./components/HeadingOne";
import Structure from "./components/Structure";
import Tags from "./components/Tags";
import Title from "./components/Title";
import Types from "./components/Types";

export default function App(){
  return(
    <>
    <Title/>
    <Heading/>
    <Types/>
    <HeadingOne/>
    <FullForm/>
    <Structure/>
    <Tags/>
    </>
  );
}