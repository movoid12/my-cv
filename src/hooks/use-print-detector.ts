import { useEffect, useState } from 'react';

const usePrintDetector = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      setIsPrinting(true);
    };

    const handleAfterPrint = () => {
      setIsPrinting(false);
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

  return { isPrinting, triggerPrint };
};

export default usePrintDetector;
