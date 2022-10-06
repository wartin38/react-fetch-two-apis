import { React, useState } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import DogImage from "./components/DogImage";
import DogSpinner from "./components/DogSpinner";
import TextSpinner from "./components/TextSpinner";

function App() {
  const [quote, setQuote] = useState({});
  const [dogImage, setDogImage] = useState(null);
  const [textVisible, setTextVisible] = useState(false);
  const [dogVisible, setDogVisible] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingDog, setLoadingDog] = useState(false);

  const fetchRandomInfo = async () => {
    setTextVisible(true);
    setDogVisible(true);
    fetchRandomQuote();
    fetchRandomDog();
  };

  const fetchRandomQuote = async () => {
    setLoadingText(true);
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomQuoteIndex = Math.floor(Math.random() * data.length) + 1;
      const result = data.filter((e) => e === data[randomQuoteIndex]);
      setQuote(result[0]);
    } catch (error) {
      throw Error("Error, could not fetch quote");
    }
    setLoadingText(false);
  };

  const fetchRandomDog = async () => {
    setLoadingDog(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      throw Error("Error, could not fetch dog image");
    }
    setLoadingDog(false);
  };

  return (
    <div className="container">
      <Header />
      <button onClick={fetchRandomInfo}>Get Random Quote</button>
      {dogVisible && loadingDog ? <DogSpinner /> : null}
      {dogVisible && !loadingDog ? (
        <DogImage randomDogImage={dogImage} />
      ) : null}
      {textVisible && loadingText ? <TextSpinner /> : null}
      {textVisible && !loadingText ? (
        <Quote text={quote.text} author={quote.author} />
      ) : null}
    </div>
  );
}

export default App;
