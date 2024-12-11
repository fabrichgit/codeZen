import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { VscRunAll } from "react-icons/vsc";

const LoggerComponent = ({code}: {code: string}) => {
  const [logs, setLogs] = useState<string[]>([]);

  const captureLog = (...args: any[]) => {
    setLogs((prevLogs) => [...prevLogs, args.map(arg => String(arg)).join(' ')]);
  };

  const executeCode = (code: string) => {
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

  return (
    <div className="w-full md:w-1/2 p-4">
      <button 
        onClick={() => executeCode(code)}
        className="flex items-center gap-2 mb-4 px-6 py-2 bg-teal-600 text-white rounded-md"
      >
        Run Code <VscRunAll/>
      </button>
      <div className="h-full p-4 rounded-md overflow-auto">
        <SyntaxHighlighter language="bash" style={okaidia}>
            {logs?.join("\n")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default LoggerComponent;
