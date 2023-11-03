import "./App.css";
import Card from "./components/Card";

function App() {
  const cardP = {
    name: "Pink",
    color: "#F54289",
    code: "#F54289",
  };
  const cardG = {
    name: "Green",
    color: "#2FB604",
    code: "#2FB604",
  };
  const cardY = {
    name: "Yellow",
    color: "#CED406",
    code: "#CED406",
  };
  const cardR = {
    name: "Red",
    color: "#D40606",
    code: "#D40606",
  };
  const cardB = {
    name: " Black",
    color: "#000000",
    code: "#000000",
  };
  const cardW = {
    name: "White",
    color: "#FFFFFF",
    code: "#FFFFFF",
  };
  const cardBL = {
    name: "Blue",
    color: "#0C68E3",
    code: "#0C68E3",
  };
  const cardV = {
    name: "Voilet",
    color: "#42217F",
    code: "#42217F",
  };
  const cardGr = {
    name: "Gray",
    color: "#57535B",
    code: "#57535B",
  };
  const cardPu = {
    name: "Purple",
    color: "#562396",
    code: "#562396",
  };

  return (
    <>
    <div>
    <h1 style={{textAlign: "center"}}>
    Props Assignment
    </h1>  
    </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card data={cardP} />
        <Card data={cardY} />
        <Card data={cardG} />
        <Card data={cardB} />
        <Card data={cardW} />
        <Card data={cardBL} />
        <Card data={cardPu} />
        <Card data={cardV} />
        <Card data={cardGr} />
        <Card data={cardR} />
      </div>
    </>
  );
}

export default App;
