
import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Github, 
  CloudUpload, 
  Key, 
  Rocket, 
  ChevronRight, 
  ChevronLeft,
  BookOpen,
  CheckCircle2,
  Info,
  Files
} from 'lucide-react';
import { TutorialStep } from './types';
import { CodeBlock } from './components/CodeBlock';
import { GeminiAssistant } from './components/GeminiAssistant';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: TutorialStep[] = useMemo(() => [
    {
      id: 0,
      title: "讓 Gemini 幫你寫網頁",
      shortDesc: "利用 AI 腦力激盪，產出你的第一個程式碼。",
      icon: <Sparkles className="text-purple-500" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            首先，我們要去 <a href="https://aistudio.google.com/" target="_blank" className="text-blue-600 font-bold underline">Google AI Studio</a>。
            它是免費的，而且使用的是最強大的 Gemini 模型！
          </p>
          
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-blue-800 font-bold">
              <Files size={20} />
              <h4>認識 File Explorer（檔案瀏覽器）</h4>
            </div>
            <p className="text-sm text-blue-700 leading-relaxed">
              你看見左邊那一排檔案了嗎？(像是 <code>App.tsx</code>, <code>index.html</code>)。
              這就是網頁的**零件清單**。Gemini 產出的代碼通常會分佈在這些檔案裡。
            </p>
            <div className="bg-white/50 p-3 rounded-lg text-xs text-blue-600">
              <strong>💡 搬家教學：</strong> 
              點擊左邊的檔名 -> 看到右邊出現代碼 -> 全選並複製 -> 到你電腦裡的 VS Code 貼上。
              這就是「下載」的過程！
            </div>
          </div>

          <div className="bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r-lg">
            <h4 className="font-bold text-purple-800 mb-2">試試看這樣下指令（Prompt）：</h4>
            <p className="italic text-purple-700 text-sm">
              「請幫我寫一個簡單的 React 單頁應用程式，要有 Tailwind CSS 美化。這是一個『我的待辦清單』網頁，可以新增和刪除任務，顏色要活潑明亮。」
            </p>
          </div>
          
          <div className="space-y-3">
            <p className="font-medium text-slate-800">具體操作：</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-600">
              <li>在左側 File Explorer 點開 <code>App.tsx</code>。</li>
              <li>複製裡面的所有內容。</li>
              <li>在你的電腦桌面建立一個資料夾 <code>my-cool-app</code>。</li>
              <li>用 VS Code 建立同名的 <code>App.tsx</code> 檔案並貼上。</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "串聯你的 GitHub 帳號",
      shortDesc: "把代碼存到雲端，像備份存檔一樣重要。",
      icon: <Github className="text-slate-800" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            GitHub 就像是開發者的雲端硬碟。既然你已經在電腦裡放好了剛才複製的檔案，現在我們要把它們推上雲端。
          </p>
          <div className="bg-slate-100 p-4 rounded-lg">
            <p className="text-sm font-bold text-slate-700 mb-2">💡 搬運代碼的咒語（指令）：</p>
            <CodeBlock code={`git init\ngit add .\ngit commit -m "我的第一個網頁上線囉！"\ngit remote add origin <你的REPO網址>\ngit push -u origin main`} />
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex gap-3">
            <Info className="text-amber-500 shrink-0" size={20} />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>為什麼沒看到連動按鈕？</strong> 因為 Gemini 主要是「大腦」，負責幫你思考內容；GitHub 是「倉庫」。大腦跟倉庫之間，目前需要你手動把東西搬過去。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "建立 Vercel 專案",
      shortDesc: "讓全世界的人都能透過網址看到你的作品。",
      icon: <CloudUpload className="text-blue-500" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            當你的代碼都成功搬到 GitHub 倉庫後，Vercel 就能讀取它們並變成網站。
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100 w-full">
              <h4 className="font-bold text-blue-800">1. 登入 Vercel</h4>
              <p className="text-sm text-blue-700">選擇 "Continue with GitHub"。</p>
            </div>
            <ChevronRight className="hidden md:block text-slate-300" />
            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100 w-full">
              <h4 className="font-bold text-blue-800">2. Import Repo</h4>
              <p className="text-sm text-blue-700">選擇那個裝滿你剛複製代碼的儲存庫。</p>
            </div>
            <ChevronRight className="hidden md:block text-slate-300" />
            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100 w-full">
              <h4 className="font-bold text-blue-800">3. 點擊 Deploy</h4>
              <p className="text-sm text-blue-700">魔法發生的地方！</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "設定 Google API 金鑰",
      shortDesc: "給你的網頁一顆 AI 大腦。",
      icon: <Key className="text-yellow-500" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            這一步是為了讓你的網站能夠「呼叫」Gemini。
          </p>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-slate-200 p-4 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-2">如何取得 API KEY？</h4>
              <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2">
                <li>回到 <a href="https://aistudio.google.com/app/apikey" target="_blank" className="text-blue-600 font-bold underline">API Key 管理頁面</a>。</li>
                <li>點擊「Create API key」。</li>
                <li>複製這串鑰匙代碼。</li>
              </ol>
            </div>
            <div className="bg-red-50 p-4 border-l-4 border-red-400 rounded-r-lg">
              <h4 className="font-bold text-red-800 mb-2">⚠️ 安全警告：</h4>
              <p className="text-xs text-red-700">
                千萬不要把鑰匙直接寫在 <code>App.tsx</code> 裡推到 GitHub，否則別人會偷用你的額度！請在 Vercel 設定中加入 Environment Variable。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "最終上線與分享",
      shortDesc: "恭喜！你已經是個小小工程師了。",
      icon: <Rocket className="text-orange-500" />,
      content: (
        <div className="text-center space-y-6 py-8">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
            <CheckCircle2 size={64} className="text-orange-500 animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">太棒了，你成功了！ 🎉</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            你現在擁有了一個具備 AI 能力、託管在雲端、全球都能瀏覽的網頁。
            快把你的 <code>.vercel.app</code> 網址分享給同學看看吧！
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setCurrentStep(0)}
              className="px-6 py-2 border border-slate-300 rounded-full hover:bg-slate-50 transition-colors"
            >
              再複習一次
            </button>
            <a 
              href="https://github.com/trending" 
              target="_blank"
              className="px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-transform hover:scale-105"
            >
              探索更多專案
            </a>
          </div>
        </div>
      )
    }
  ], []);

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-slate-50">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-6">
          <BookOpen size={18} className="text-blue-500" />
          <span className="text-sm font-medium text-slate-600 uppercase tracking-widest">開發者成長營</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          少年開發者：<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gemini 專案上線指南</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          只要五個步驟，讓你從零開始，把想像中的網頁變成全世界都能看到的真實網站。
        </p>
      </header>

      {/* Main Content Card */}
      <main className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
        {/* Progress Bar */}
        <div className="h-2 w-full bg-slate-100">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col md:flex-row flex-1">
          <aside className="w-full md:w-64 bg-slate-50 p-6 border-r border-slate-100 space-y-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                  currentStep === step.id 
                    ? 'bg-white shadow-md text-blue-600 font-bold' 
                    : 'text-slate-500 hover:bg-slate-200'
                }`}
              >
                <div className="flex-shrink-0">
                  {currentStep > step.id ? <CheckCircle2 size={18} className="text-green-500" /> : step.icon}
                </div>
                <span className="text-sm">{step.title}</span>
              </button>
            ))}
          </aside>

          <section className="flex-1 p-8 sm:p-12 relative">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-600 rounded">步驟 {currentStep + 1}</span>
                <h2 className="text-2xl font-bold text-slate-800">{steps[currentStep].title}</h2>
              </div>
              <p className="text-slate-500 italic">{steps[currentStep].shortDesc}</p>
            </div>

            <div className="min-h-[300px]">
              {steps[currentStep].content}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
                上一步
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  下一步
                  <ChevronRight size={20} />
                </button>
              ) : null}
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-12 text-slate-400 text-sm flex flex-col items-center gap-2">
        <p>© 2025 少年開發者學院 ｜ 讓科技變得簡單好玩</p>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;
