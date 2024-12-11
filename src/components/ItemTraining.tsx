import { useState } from "react";
import { Exercise } from "./Training"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ItemTraining({exercise}: {exercise: Exercise}) {
    const [code, setCode] = useState('');
    const [fileName, setFileName] = useState('');
  
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const allowedTypes = ['text/plain', 'text/javascript', 'application/javascript', 'application/json'];
          if (!allowedTypes.includes(file.type)) {
            alert('Seuls les fichiers texte (.txt, .js, .json, ...) sont acceptés.');
            return;
          }
      
          setFileName(file.name);
      
          // Lire le contenu du fichier
          const reader = new FileReader();
          reader.onload = () => {
            const text = reader.result as string;
            console.log(text);
            
            setCode(text);
          };
          reader.onerror = () => {
            alert("Impossible de lire le fichier.");
          };
          reader.readAsText(file);
        }
    };
  
    const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCode(e.target.value);
    };



    const [logs, setLogs] = useState<string[]>([]);

  const captureLog = (...args: any[]) => {
    setLogs((prevLogs) => [...prevLogs, args.map(arg => String(arg)).join(' ')]);
  };

  const executeCode = () => {
    setLogs(_ => [])
    const originalLog = console.log;
    console.log = captureLog;

    try {
      new Function(code)();
    } catch (error) {
      console.error('Erreur lors de l\'exécution du code:', error);
    } finally {
      console.log = originalLog;
    }
  };

  const submit = () => {
    executeCode()
    if(logs.length !== 1){
        alert("Please, follows the guidelines")
    }
  }
  
    return (
      <div className="w-full h-max p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{exercise.title}</h1>
          <p className="text-gray-400 text-lg mb-6">{exercise.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                exercise.level === 'beginner'
                  ? 'bg-green-500 text-green-100'
                  : exercise.level === 'intermediate'
                  ? 'bg-yellow-500 text-yellow-100'
                  : 'bg-red-500 text-red-100'
              }`}
            >
              {exercise.level.charAt(0).toUpperCase() + exercise.level.slice(1)}
            </span>
          </div>
  
          {/* Alert Section */}
          <div className="bg-gray-800 border-l-4 border-teal-600 p-4 mb-6 rounded-lg">
            <h2 className="text-lg font-semibold text-indigo-400 mb-2">
              Submission Guidelines
            </h2>
            <p className="text-sm text-gray-300">
              Ensure your code follows these guidelines to be correctly interpreted:
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside mt-2">
              <li>Use modern JavaScript syntax <strong>(ES6 or later)</strong>.</li>
              <li>Use <strong>one console.log</strong> for the result.</li>
              {/* <li>Ensure the code handles both valid and invalid inputs gracefully.</li> */}
            </ul>
            <div className="bg-gray-700 p-3 rounded-lg mt-4">
              <p className="text-sm text-gray-400 mb-1">Example:</p>
              <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-auto text-sm">
<SyntaxHighlighter language="javascript" style={okaidia}>
{
`// Example: Reverse a String
const str = "abcd";
const result = str.split('').reverse().join('');
console.log(result);`
}
</SyntaxHighlighter>
                </div>
            </div>
          </div>
  
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Submit Your Solution</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Upload a File
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-4 py-2 bg-teal-600 hover:bg-indigo-500 text-gray-100 text-sm font-semibold rounded-lg transition"
                  >
                    Choose File
                  </label>
                  {fileName && (
                    <span className="text-sm text-gray-400 italic">{fileName}</span>
                  )}
                </div>
              </div>
  
              <div>
                <label
                  htmlFor="code-paste"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Paste Your Code
                </label>
                <textarea
                  id="code-paste"
                  rows={6}
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="Write or paste your code here..."
                  className="w-full bg-gray-700 text-gray-200 rounded-lg shadow-md p-4 resize-none focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                ></textarea>
              </div>
  
              <button disabled={!Boolean(code)} onClick={submit} className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-gray-100 font-semibold rounded-lg transition">
                Submit Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default ItemTraining
