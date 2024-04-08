import { useState, useEffect } from 'react';

const usePrintDetector = (): [boolean, () => void] => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      setIsPrinting(true);
    };

    const handleAfterPrint = () => {
      setIsPrinting(false);
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log('Print operation completed');
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const triggerPrint = () => {
    window.print();
  };

  return [isPrinting, triggerPrint];
};

export default usePrintDetector;
