import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");

const yaziListesi = [
  {
    baslik: "React Giriş",
    url: "www.sdu.edu.tr",
    yazar: "Dilek Gül",
    yorum_sayisi: 2,
    puan: 6,
    id: 0,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Esra Özkutlu",
    yorum_sayisi: 5,
    puan: 2,
    id: 1,
  },
  {
    baslik: "JavaScript Giriş",
    url: "www.example.com/js",
    yazar: "Jake Peralta",
    yorum_sayisi: 7,
    puan: 2,
    id: 2,
  },
  {
    baslik: "Backend Development Basics",
    url: "www.example.com/frontend",
    yazar: "John Smith",
    yorum_sayisi: 5,
    puan: 3,
    id: 3,
  },
  {
    baslik: "Learning React",
    url: "www.example.com/react",
    yazar: "Clara Johnson",
    yorum_sayisi: 1,
    puan: 4,
    id: 4,
  },
  {
    baslik: "Node.js",
    url: "www.example.com/nodejs",
    yazar: "Amy Santiago",
    yorum_sayisi: 6,
    puan: 4,
    id: 5,
  },
  {
    baslik: "CSS Styling Techniques",
    url: "www.example.com/css-styling",
    yazar: "Emily Black",
    yorum_sayisi: 10,
    puan: 4,
    id: 6,
  },
  {
    baslik: "Python Programming Fundamentals",
    url: "www.example.com/python-fundamentals",
    yazar: "Mark Mil",
    yorum_sayisi: 15,
    puan: 5,
    id: 7,
  },
  {
    baslik: "Mobile App Development with React Native",
    url: "www.example.com/react-native",
    yazar: "Daniel White",
    yorum_sayisi: 7,
    puan: 4,
    id: 8,
  },
  {
    baslik: "Database Design Principles",
    url: "www.example.com/database-design",
    yazar: "Alex Davis",
    yorum_sayisi: 9,
    puan: 4,
    id: 9,
  },
  {
    baslik: "Responsive Web Design",
    url: "www.example.com/responsive-design",
    yazar: "Andrew Wilson",
    yorum_sayisi: 11,
    puan: 5,
    id: 10,
  },
];
  
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
       ;
    }
  );

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni])

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;
