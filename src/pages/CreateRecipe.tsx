import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CreateRecipe() {
  const navigate = useNavigate();
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [finalText, setFinalText] = useState('');

  const handleSave = () => {
    console.log('Сохранение рецепта:', {
      recipeName,
      description,
      imageUrl,
      ingredients,
      steps,
      finalText
    });
    // Здесь будет логика сохранения
  };

  const handlePreview = () => {
    console.log('Предпросмотр рецепта');
    // Здесь будет логика предпросмотра
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/20 relative">
      {/* Фоновая картинка */}
      <div 
        className="absolute inset-0 opacity-20 bg-center bg-cover"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/ec709c0c-79e7-4a3c-8d6f-795ae428a0ac/files/471d5541-8534-4c2f-b3f4-ab2ba0c790cc.jpg)',
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Навигация */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-gradient-to-r from-card/95 to-secondary/10 sticky top-0 z-50 relative">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/ec709c0c-79e7-4a3c-8d6f-795ae428a0ac/bucket/3bd871da-dbe4-4358-a6da-984b2a443587.png" 
                alt="MGCook Logo" 
                className="h-12 w-12" 
              />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Кулинарка
              </h1>
            </Link>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      {/* Контент */}
      <div className="container mx-auto px-6 py-12 max-w-4xl relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3">Конструктор рецепта</h2>
          <p className="text-muted-foreground text-lg">Давай создадим новый рецепт</p>
        </div>

        <Card className="bg-card/95 backdrop-blur-sm border-border/40">
          <CardContent className="p-8 space-y-8">
            {/* Основная информация */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Основная информация</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Название вашего рецепта
                </label>
                <Input
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  placeholder="Например: Трюфельное ризотто"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Описание вашего рецепта
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Расскажите о вашем блюде..."
                  className="bg-background min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Фотография блюда
                </label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="URL фотографии или загрузите файл"
                  className="bg-background"
                />
                {imageUrl && (
                  <div className="mt-4">
                    <img 
                      src={imageUrl} 
                      alt="Предпросмотр" 
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Состав */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Состав</h3>
              <Textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Введите ингредиенты (по одному на строку)"
                className="bg-background min-h-[150px]"
              />
            </div>

            {/* Шаги рецепта */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Шаги рецепта</h3>
              <Textarea
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Опишите шаги приготовления..."
                className="bg-background min-h-[200px]"
              />
            </div>

            {/* Итоговый текст */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Итоговый текст</h3>
              <Textarea
                value={finalText}
                onChange={(e) => setFinalText(e.target.value)}
                placeholder="Завершающие советы и пожелания..."
                className="bg-background min-h-[100px]"
              />
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 pt-6">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handlePreview}
              >
                <Icon name="Eye" className="mr-2" size={18} />
                Предпросмотр
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                onClick={handleSave}
              >
                <Icon name="Save" className="mr-2" size={18} />
                СОХРАНИТЬ
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}