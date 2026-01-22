import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/20 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/40 p-8">
          {/* Логотип и заголовок */}
          <div className="text-center mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/ec709c0c-79e7-4a3c-8d6f-795ae428a0ac/bucket/3bd871da-dbe4-4358-a6da-984b2a443587.png" 
              alt="MGCook Logo" 
              className="h-20 w-20 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Добро пожаловать
            </h1>
            <p className="text-muted-foreground">Войдите в свой аккаунт</p>
          </div>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Icon name="Mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="ваш@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Пароль
              </label>
              <div className="relative">
                <Icon name="Lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Запомнить меня</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Забыли пароль?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Войти
            </button>
          </form>

          {/* Разделитель */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground">или</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Яндекс ID */}
          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 bg-background border-2 border-border hover:border-primary/50 text-foreground py-3 rounded-lg font-semibold transition-all mb-6"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 18h-2.25l-2.25-6.75V18H9.75V6h2.813c2.625 0 4.125 1.313 4.125 3.375 0 1.5-.75 2.625-2.063 3.188L17.25 18h-2.75zm-4.688-7.875h.563c1.125 0 1.875-.563 1.875-1.5s-.75-1.5-1.875-1.5h-.563v3z"/>
            </svg>
            Войти с помощью Яндекс ID
          </a>

          {/* Регистрация */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Нет аккаунта?{' '}
              <a href="#" className="text-primary font-semibold hover:underline">
                Зарегистрироваться
              </a>
            </p>
          </div>

          {/* Кнопка назад */}
          <div className="mt-6 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}