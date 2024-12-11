import { useState } from 'react';

const LoggerComponent = ({code}: {code: string}) => {
  const [logs, setLogs] = useState<string[]>([]);

  // Capture les logs, en s'assurant que tous les arguments sont convertis en chaînes
  const captureLog = (...args: any[]) => {
    setLogs((prevLogs) => [...prevLogs, args.map(arg => String(arg)).join(' ')]);
  };

  // Fonction pour exécuter du code JavaScript sous forme de chaîne de caractères
  const executeCode = (code: string) => {
    // Sauvegarder la fonction console.log originale
    const originalLog = console.log;

    // Remplacer console.log pour capturer les messages dans l'état
    console.log = captureLog;

    try {
      // Exécuter le code sous forme de string avec new Function
      new Function(code)();
    } catch (error) {
      console.error('Erreur lors de l\'exécution du code:', error);
    } finally {
      // Restaurer la fonction console.log originale
      console.log = originalLog;
    }
  };

  return (
    <div>
      <button onClick={() => executeCode(code)}>Exécuter le code</button>
      <div>
        <h3>Logs :</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoggerComponent;
