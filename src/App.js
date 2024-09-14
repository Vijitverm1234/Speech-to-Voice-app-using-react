
import './App.css';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
function App() {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration:1000
  });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
}
  return (
   <>
  <div className="container">
    <h2>
      Speech To Text Converter 
    </h2>
    <br/>
    <p>
    A React hook that converts speech from the microphone to text and makes it available to your React components.
    </p>
    <div className="main-content" onClick={()=>setTextToCopy(transcript)}>
    {transcript}
    </div>
    <div className="btn-style">
    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
      <button onClick={startListening}>start listening</button>
      <button  onClick={SpeechRecognition.stopListening}>stop listening</button>

    </div>
  </div>
   </> 
  );
}

export default App;
