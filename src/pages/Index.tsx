import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'contact'>('home');

  const dolls = [
    {
      id: 1,
      name: 'Розовая Мечта',
      image: 'https://cdn.poehali.dev/projects/8d5f0d60-4cea-48f2-8fab-b2a7a7e0e91f/files/612314fe-f484-467d-af32-af2d7caf7570.jpg',
      price: '12 000 ₽'
    },
    {
      id: 2,
      name: 'Небесная Фея',
      image: 'https://cdn.poehali.dev/projects/8d5f0d60-4cea-48f2-8fab-b2a7a7e0e91f/files/0a65986d-10a7-4727-bc74-a08038a8f008.jpg',
      price: '15 000 ₽'
    },
    {
      id: 3,
      name: 'Сказочная Принцесса',
      image: 'https://cdn.poehali.dev/projects/8d5f0d60-4cea-48f2-8fab-b2a7a7e0e91f/files/6c55ffa0-b066-482d-b8b0-57662b1f4e60.jpg',
      price: '14 500 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-montserrat font-bold text-primary">Blythe Collection</h1>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                О куклах
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="container mx-auto px-6 py-16 text-center">
              <h2 className="text-5xl font-montserrat font-bold text-foreground mb-4">
                Авторские куклы Blythe
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Уникальные коллекционные куклы ручной работы с неповторимым характером
              </p>
            </section>

            <section className="container mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dolls.map((doll, index) => (
                  <Card
                    key={doll.id}
                    className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={doll.image}
                          alt={doll.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-montserrat font-semibold mb-2">{doll.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{doll.price}</span>
                          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in">
            <section className="container mx-auto px-6 py-16 max-w-4xl">
              <h2 className="text-4xl font-montserrat font-bold text-center mb-12">О куклах Blythe</h2>
              
              <div className="space-y-8 text-lg leading-relaxed">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-montserrat font-semibold mb-3">История Blythe</h3>
                        <p className="text-muted-foreground">
                          Куклы Blythe были созданы в 1972 году дизайнером Элисон Каценштейн для компании Kenner. 
                          Их отличительная особенность — огромные глаза, цвет которых меняется при помощи специального механизма.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Heart" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-montserrat font-semibold mb-3">Уникальность</h3>
                        <p className="text-muted-foreground">
                          Каждая кукла в нашей коллекции — это результат кропотливой ручной работы. 
                          Мы создаём уникальные образы, тщательно подбирая причёски, макияж и одежду для каждой куклы.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Star" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-montserrat font-semibold mb-3">Коллекционная ценность</h3>
                        <p className="text-muted-foreground">
                          Авторские куклы Blythe — это не просто игрушки, а настоящие произведения искусства. 
                          Они ценятся коллекционерами по всему миру и становятся частью семейных реликвий.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="animate-fade-in">
            <section className="container mx-auto px-6 py-16 max-w-2xl">
              <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Свяжитесь с нами</h2>
              
              <Card className="border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input type="tel" placeholder="+7 (999) 123-45-67" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea placeholder="Расскажите, какая кукла вас заинтересовала..." rows={5} className="w-full" />
                    </div>
                    
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Отправить сообщение
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span>blythe@example.com</span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-muted-foreground">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>+7 (999) 123-45-67</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-muted/30 border-t border-border py-8 mt-24">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Blythe Collection. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
