import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { daratanQuestions, lautanQuestions, Question } from './data';
import { CheckCircle2, XCircle, Trophy, Home, Star, PlayCircle } from 'lucide-react';

type GameState = 'start' | 'playing' | 'result';
type Category = 'daratan' | 'lautan' | null;

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [category, setCategory] = useState<Category>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = category === 'daratan' ? daratanQuestions : lautanQuestions;
  const currentQuestion = questions?.[currentQuestionIndex];

  const startGame = (cat: Category) => {
    setCategory(cat);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setGameState('result');
      }
    }, 2000);
  };

  const resetGame = () => {
    setGameState('start');
    setCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-indigo-200 flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8 md:p-12 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4 drop-shadow-sm">
                  Selamat Datang di
                  <br />
                  <span className="text-amber-500 text-5xl md:text-6xl">Tebak Hewan!</span>
                </h1>
                <p className="text-xl text-indigo-400 font-medium">Pilih tempat bermainmu yuk!</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startGame('daratan')}
                  className="group relative bg-emerald-400 hover:bg-emerald-500 text-white p-8 rounded-3xl shadow-[0_8px_0_rgb(4,120,87)] hover:shadow-[0_4px_0_rgb(4,120,87)] hover:translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border-4 border-emerald-300 cursor-pointer"
                >
                  <span className="text-7xl group-hover:animate-bounce">🦁</span>
                  <span className="text-3xl font-bold tracking-wide">Daratan</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startGame('lautan')}
                  className="group relative bg-cyan-400 hover:bg-cyan-500 text-white p-8 rounded-3xl shadow-[0_8px_0_rgb(8,145,178)] hover:shadow-[0_4px_0_rgb(8,145,178)] hover:translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border-4 border-cyan-300 cursor-pointer"
                >
                  <span className="text-7xl group-hover:animate-bounce">🐬</span>
                  <span className="text-3xl font-bold tracking-wide">Lautan</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {gameState === 'playing' && currentQuestion && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-6 md:p-10 relative"
            >
              {/* Header / Progress */}
              <div className="flex justify-between items-center mb-8">
                <button 
                  onClick={resetGame}
                  className="p-3 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors cursor-pointer shrink-0"
                >
                  <Home size={28} />
                </button>
                <div className="flex gap-1 md:gap-2 flex-1 mx-4">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-3 md:h-4 flex-1 rounded-full transition-colors duration-500 ${
                        idx < currentQuestionIndex ? 'bg-emerald-400' : 
                        idx === currentQuestionIndex ? 'bg-amber-400 animate-pulse' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xl md:text-2xl font-bold text-indigo-600 bg-indigo-100 px-3 md:px-4 py-2 rounded-2xl shrink-0">
                  {currentQuestionIndex + 1}/{questions.length}
                </div>
              </div>

              {/* Question Area */}
              <div className="text-center mb-10">
                <motion.div 
                  key={currentQuestion.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-9xl mb-6 drop-shadow-xl"
                >
                  {currentQuestion.emoji}
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.answer;
                  
                  let buttonClass = "bg-white border-4 border-indigo-100 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50 shadow-sm cursor-pointer";
                  
                  if (selectedAnswer !== null) {
                    if (isCorrectAnswer) {
                      buttonClass = "bg-emerald-400 border-4 border-emerald-500 text-white shadow-lg scale-105 z-10";
                    } else if (isSelected) {
                      buttonClass = "bg-rose-400 border-4 border-rose-500 text-white shadow-inner opacity-80";
                    } else {
                      buttonClass = "bg-gray-100 border-4 border-gray-200 text-gray-400 opacity-50";
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`p-6 rounded-2xl text-2xl font-bold transition-all duration-300 ${buttonClass}`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback Overlay */}
              <AnimatePresence>
                {selectedAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                  >
                    <div className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-2xl ${
                      isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 size={100} className="mb-4 animate-bounce" />
                          <h3 className="text-4xl font-bold">Pintar Sekali!</h3>
                        </>
                      ) : (
                        <>
                          <XCircle size={100} className="mb-4 animate-pulse" />
                          <h3 className="text-4xl font-bold">Yah, Kurang Tepat!</h3>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 text-center"
            >
              <Trophy size={120} className="mx-auto text-amber-400 mb-6 drop-shadow-lg" />
              <h2 className="text-5xl font-extrabold text-indigo-600 mb-4">Hore! Selesai!</h2>
              
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(questions.length)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                  >
                    <Star 
                      size={48} 
                      className={i < score ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"} 
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-2xl text-gray-600 mb-10 font-medium">
                Kamu berhasil menjawab <span className="text-emerald-500 font-bold text-3xl">{score}</span> dari <span className="text-indigo-500 font-bold text-3xl">{questions.length}</span> dengan benar!
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-[0_8px_0_rgb(67,56,202)] hover:shadow-[0_4px_0_rgb(67,56,202)] hover:translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
              >
                <PlayCircle size={32} />
                Main Lagi Yuk!
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
