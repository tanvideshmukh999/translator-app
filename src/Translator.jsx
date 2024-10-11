import React from "react";
import { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [srcLang, setSrcLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const translateText = async () => {
    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "87a200e624mshab5cff6970a3a3ap1ffb1ejsn7e0637884834",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: {
        source_language: srcLang,
        target_language: targetLang,
        text: inputText,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const newtext = response.data.data.translatedText;
      setOutputText(newtext);
      console.log(outputText);
      console.log(newtext);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="translator">
      {/* -----------source code--------  */}
      <div className="src-part">
        <span>Source Language</span>
        <select
          onChange={(e) => {
            setSrcLang(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ar">Arabic</option>
          <option value="hi">Hindi</option>
          <option value="ru">Russian</option>
        </select>
        <textarea value={inputText} onChange={handleInputText}></textarea>
      </div>

      <button onClick={translateText}>Translate</button>

      {/* -------------------target code ----------*/}
      <div className="target-part">
        <span>Target Language</span>
        <select
          onChange={(e) => {
            setTargetLang(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ar">Arabic</option>
          <option value="hi">Hindi</option>
          <option value="ru">Russian</option>
        </select>

        <textarea value={outputText}></textarea>
      </div>
    </div>
  );
};

export default Translator;