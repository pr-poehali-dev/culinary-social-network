import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  const featuredRecipes = [
    {
      id: 1,
      title: 'Трюфельное ризотто',
      author: 'Chef Maria',
      authorAvatar: '/placeholder.svg',
      rating: 4.9,
      reviews: 247,
      cookTime: '45 мин',
      difficulty: 'Средний',
      image: '/placeholder.svg',
      calories: 380,
      category: 'Основное блюдо'
    },
    {
      id: 2,
      title: 'Тартар из лосося',
      author: 'Chef Alexandre',
      authorAvatar: '/placeholder.svg',
      rating: 4.8,
      reviews: 189,
      cookTime: '20 мин',
      difficulty: 'Легко',
      image: '/placeholder.svg',
      calories: 220,
      category: 'Закуска'
    },
    {
      id: 3,
      title: 'Крем-брюле с лавандой',
      author: 'Pastry Anna',
      authorAvatar: '/placeholder.svg',
      rating: 5.0,
      reviews: 312,
      cookTime: '60 мин',
      difficulty: 'Сложный',
      image: '/placeholder.svg',
      calories: 290,
      category: 'Десерт'
    },
    {
      id: 4,
      title: 'Карпаччо из говядины',
      author: 'Chef Giovanni',
      authorAvatar: '/placeholder.svg',
      rating: 4.7,
      reviews: 156,
      cookTime: '15 мин',
      difficulty: 'Легко',
      image: '/placeholder.svg',
      calories: 180,
      category: 'Закуска'
    }
  ];

  const topChefs = [
    { name: 'Maria Rossi', specialty: 'Итальянская кухня', rating: 4.9, recipes: 87, followers: '12.5k' },
    { name: 'Alexandre Dubois', specialty: 'Французская кухня', rating: 4.8, recipes: 64, followers: '9.8k' },
    { name: 'Anna Schmidt', specialty: 'Десерты', rating: 5.0, recipes: 45, followers: '15.2k' }
  ];

  const ingredients = [
    { name: 'Трюфельное масло', calories: 120, protein: 0, carbs: 0, fat: 14, benefits: 'Антиоксиданты, улучшает вкус' },
    { name: 'Рис Арборио', calories: 130, protein: 2.7, carbs: 28, fat: 0.4, benefits: 'Медленные углеводы, энергия' },
    { name: 'Пармезан', calories: 110, protein: 10, carbs: 0.9, fat: 7.3, benefits: 'Кальций, белок' },
    { name: 'Лосось', calories: 208, protein: 20, carbs: 0, fat: 13, benefits: 'Омега-3, витамин D' },
    { name: 'Авокадо', calories: 160, protein: 2, carbs: 8.5, fat: 14.7, benefits: 'Полезные жиры, калий' },
    { name: 'Лаванда', calories: 5, protein: 0.2, carbs: 1, fat: 0.1, benefits: 'Антистресс, аромат' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Gastronome</h1>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-sm hover:text-primary transition-colors">Рецепты</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Сообщество</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Рейтинги</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">О проекте</a>
              <Button variant="outline" size="sm">
                <Icon name="User" className="mr-2" size={16} />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            Искусство высокой кухни
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Откройте для себя эксклюзивные рецепты от ведущих шеф-поваров мира. 
            Делитесь своим кулинарным мастерством и совершенствуйте навыки.
          </p>
          <div className="flex gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Найти рецепт, ингредиент или шеф-повара..."
                className="pl-12 h-14 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button size="lg" className="h-14 px-8">
              Поиск
            </Button>
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Основные блюда
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Закуски
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Десерты
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Напитки
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Выпечка
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-4xl font-bold mb-2">Избранные рецепты</h3>
              <p className="text-muted-foreground">Коллекция лучших блюд от мастеров кулинарии</p>
            </div>
            <Button variant="outline">
              Все рецепты
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <Card 
                key={recipe.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedRecipe(recipe.id)}
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                    {recipe.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={recipe.authorAvatar} />
                      <AvatarFallback>{recipe.author[0]}</AvatarFallback>
                    </Avatar>
                    <span>{recipe.author}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-primary fill-primary" size={16} />
                      <span className="font-semibold">{recipe.rating}</span>
                      <span className="text-muted-foreground">({recipe.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{recipe.cookTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary">{recipe.difficulty}</Badge>
                    <span className="text-muted-foreground">{recipe.calories} ккал</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl font-bold mb-10 text-center">Топ шеф-поваров</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topChefs.map((chef, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">{chef.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">{chef.name}</CardTitle>
                  <CardDescription className="text-base">{chef.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Рейтинг</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-primary fill-primary" size={16} />
                      <span className="font-semibold">{chef.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Рецептов</span>
                    <span className="font-semibold">{chef.recipes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Подписчиков</span>
                    <span className="font-semibold">{chef.followers}</span>
                  </div>
                  <Button className="w-full mt-4">
                    <Icon name="UserPlus" className="mr-2" size={16} />
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl font-bold mb-4 text-center">База ингредиентов</h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Полная информация о калорийности, нутриентах и полезных свойствах продуктов
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="protein">Белки</TabsTrigger>
              <TabsTrigger value="vegetables">Овощи</TabsTrigger>
              <TabsTrigger value="spices">Специи</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ingredients.map((ingredient, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{ingredient.name}</CardTitle>
                      <CardDescription>На 100 г продукта</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Калории</span>
                        <span className="font-semibold">{ingredient.calories} ккал</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="text-muted-foreground text-xs">Белки</div>
                          <div className="font-semibold">{ingredient.protein}г</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs">Углеводы</div>
                          <div className="font-semibold">{ingredient.carbs}г</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs">Жиры</div>
                          <div className="font-semibold">{ingredient.fat}г</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="text-xs text-muted-foreground mb-1">Польза:</div>
                        <div className="text-sm">{ingredient.benefits}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="protein">
              <div className="text-center text-muted-foreground py-8">
                Фильтр по белковым продуктам
              </div>
            </TabsContent>
            <TabsContent value="vegetables">
              <div className="text-center text-muted-foreground py-8">
                Фильтр по овощам
              </div>
            </TabsContent>
            <TabsContent value="spices">
              <div className="text-center text-muted-foreground py-8">
                Фильтр по специям
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 px-6 mt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-primary">Gastronome</h4>
              <p className="text-sm text-muted-foreground">
                Платформа для гастрономических открытий и кулинарного мастерства
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Рецепты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Профили</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Gastronome. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
