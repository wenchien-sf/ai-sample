
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-slate-700 rounded transition-colors text-white"
          title="複製代碼"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
      {language && (
        <span className="absolute left-2 bottom-1 text-[10px] text-slate-500 uppercase font-bold">
          {language}
        </span>
      )}
    </div>
  );
};
