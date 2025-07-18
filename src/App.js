import React from 'react';
import { Heart, Star, Smile, MessageCircle, Music, Crown } from 'lucide-react'; // Иконки для красоты и имбовости

// Главный компонент приложения - тут вся магия!
function App() {
  return (
    // Фон, имитирующий космос: глубокий градиент с эффектом звездного неба
    // Добавим больше контраста и глубины для "космического" ощущения
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 font-inter p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
      {/* Добавляем эффект "звезд" с помощью псевдоэлементов для более глубокого космического вида */}
      {/* Увеличим плотность звезд и сделаем их более динамичными */}
      <div className="absolute inset-0 z-0 opacity-80" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at bottom right, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at center, rgba(255,255,255,0.05) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px, 120px 120px, 50px 50px',
        animation: 'twinkle 25s infinite alternate, moveStars 40s linear infinite'
      }}></div>
      <style>
        {`
        @keyframes twinkle {
          0% { background-position: 0% 0%, 0% 0%, 0% 0%; }
          100% { background-position: 100% 100%, 100% 100%, 100% 100%; }
        }
        @keyframes moveStars {
          from { background-position: 0 0; }
          to { background-position: 200% 200%; }
        }
        `}
      </style>

      {/* Основной контейнер профиля, теперь он будет выделяться на фоне космоса */}
      {/* Усилим тени и добавим легкую анимацию для "парящего" эффекта */}
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl max-w-2xl w-full border-4 border-pink-500 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-400/60 relative z-10 animate-float">
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px) scale(1.01); }
            50% { transform: translateY(-5px) scale(1.02); }
            100% { transform: translateY(0px) scale(1.01); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          `}
        </style>
        {/* Заголовок - чтобы сразу было понятно, кто тут звезда! */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-2 drop-shadow-lg">
            Добро пожаловать на мою страничку! ✨
          </h1>
          <p className="text-lg sm:text-xl text-purple-600 font-semibold">
            Рада видеть тебя здесь! 😎
          </p>
        </header>

        {/* Секция "Мои дефы" - мои друзья, без которых никуда! */}
        <section className="mb-8 p-4 bg-pink-100 rounded-2xl border-2 border-pink-300 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 flex items-center justify-center">
            Мои дефы: <Heart className="ml-2 text-pink-600 animate-pulse" size={28} />
          </h2>
          <ul className="text-center text-lg sm:text-xl text-gray-800 space-y-2">
            <li className="flex items-center justify-center">
              <Star className="mr-2 text-yellow-500" size={20} /> CBETLOTA (мой кореш)!)
            </li>
            <li className="flex items-center justify-center">
              <Star className="mr-2 text-yellow-500" size={20} /> #снялцепи
            </li>
            <li className="flex items-center justify-center">
              <Star className="mr-2 text-yellow-500" size={20} /> Николай
            </li>
          </ul>
        </section>

        {/* Секция "Мой прайс" - тут все по-взрослому, но с улыбкой! */}
        <section className="mb-8 p-4 bg-purple-100 rounded-2xl border-2 border-purple-300 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4 flex items-center justify-center">
            Мой прайс для убойного общения: <Smile className="ml-2 text-purple-600" size={28} />
          </h2>
          <ul className="text-center text-lg sm:text-xl text-gray-800 space-y-3">
            <li className="flex items-center justify-center p-2 bg-purple-200 rounded-xl shadow-inner">
              <MessageCircle className="mr-2 text-blue-500" size={22} /> 100р/час - просто поболтать с тобой! 🗣️
            </li>
            <li className="flex items-center justify-center p-2 bg-pink-200 rounded-xl shadow-inner">
              <Music className="mr-2 text-green-500" size={22} /> 150р - помурчать в ГС 🎧
            </li>
            <li className="flex items-center justify-center p-2 bg-yellow-200 rounded-xl shadow-inner">
              <Crown className="mr-2 text-red-500" size={22} /> 500р/час - классика все детали в личке! 💥
            </li>
          </ul>
        </section>

        {/* Призыв к действию / Контакты - чтобы не потерялись! */}
        <footer className="text-center text-gray-700 text-lg sm:text-xl p-4 bg-blue-100 rounded-2xl border-2 border-blue-300 shadow-md">
          <p className="mb-2">
            Хочешь затусить или узнать больше? Пиши мне! 👇
          </p>
          <p className="font-semibold text-blue-700">
            ghos_tik мой дискорд
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
