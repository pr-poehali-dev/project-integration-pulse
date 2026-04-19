import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">V_<span className="text-primary">KAZIN</span></div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Music" size={12} className="mr-1" />
                    Рок · Поп · Инди · Электроника
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Живая музыка
                    <span className="text-primary block">каждую ночь</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    STATIC NOISE — бар для тех, кто живёт музыкой. Четыре жанра, сотни артистов, один адрес.
                    Рок-риффы сменяются электронными битами, инди-меланхолия — поп-эйфорией.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Забронировать столик
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Сегодняшнее шоу
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero изображение */}
            <div className="lg:col-span-4 h-fit self-center">
              <Card className="overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/0396a746-4718-45f3-bb1d-5bc07f2afb5a/bucket/6105c9b5-9264-4951-a29d-e81684faa964.png"
                  alt="v_kazin"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция жанров */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ЧЕТЫРЕ ЖАНРА — ОДИН БАР</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Каждый вечер — новый звук. Мы не выбираем между жанрами, мы соединяем их
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-8 text-center border-primary/30 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">РОК</h3>
              <p className="text-muted-foreground text-sm">
                Тяжёлые риффы и живая энергия — от классики до пост-рока
              </p>
            </Card>

            <Card className="p-8 text-center border-accent/30 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">ПОП</h3>
              <p className="text-muted-foreground text-sm">
                Яркие мелодии и цепкие хиты — поп без компромиссов
              </p>
            </Card>

            <Card className="p-8 text-center border-primary/30 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">ИНДИ</h3>
              <p className="text-muted-foreground text-sm">
                Авторская музыка, независимые артисты и честные тексты
              </p>
            </Card>

            <Card className="p-8 text-center border-accent/30 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Activity" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">ЭЛЕКТРОНИКА</h3>
              <p className="text-muted-foreground text-sm">
                Синтезаторы, биты и живые сеты — электронная сцена в действии
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Сетка событий */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">БЛИЖАЙШИЕ КОНЦЕРТЫ</h2>
            <Button variant="outline">Вся афиша</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="The Hollow Bones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Сегодня</Badge>
                <Badge variant="outline" className="absolute top-4 right-4 bg-background/70">РОК</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Hollow Bones</h3>
                <p className="text-muted-foreground mb-4">Пост-рок · гитарные пейзажи и динамика</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    21:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    40 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Мира Соло"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">Завтра</Badge>
                <Badge variant="outline" className="absolute top-4 right-4 bg-background/70">ИНДИ-ПОП</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Мира Соло</h3>
                <p className="text-muted-foreground mb-4">Инди-поп · авторские тексты о городе</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    20:30
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    50 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/0396a746-4718-45f3-bb1d-5bc07f2afb5a/bucket/b117c54b-18d5-43bc-a8dd-05302ad94a9e.png"
                  alt="v_kazin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  В эти выходные
                </Badge>
                <Badge variant="outline" className="absolute top-4 right-4 bg-background/70">ЭЛЕКТРО</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">v_kazin</h3>
                <p className="text-muted-foreground mb-4">Электроника · живой сет с синтезаторами</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    22:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    60 мест
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Место, где жанры не делят на «серьёзные» и «не очень»</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  STATIC NOISE — это бар, где рок-гитарист и диджей делят одну сцену, а публика не выбирает
                  между танцами и вдумчивым слушанием. Мы верим: хорошая музыка не знает жанровых границ.
                </p>
                <p>
                  Каждую неделю — новые артисты, открытые микрофоны, специальные тематические вечера.
                  Авторские коктейли, живая энергия и звук, который ощущается физически.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-muted-foreground">Артистов в месяц</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4</div>
                  <div className="text-muted-foreground">Жанра на одной сцене</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Интерьер STATIC NOISE"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Следующий концерт — уже сегодня вечером</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Не ждите подходящего момента — он уже наступил. Забронируйте место и погрузитесь
            в атмосферу живой музыки, которую невозможно воспроизвести дома.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Забронировать столик
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="MapPin" size={16} className="mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">V_<span className="text-primary">KAZIN</span></div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Бар с живой музыкой для тех, кто слышит разницу. Рок, поп, инди и электроника — каждый вечер.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Рассылка
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Садовая, 123</p>
                <p>Музыкальный квартал</p>
                <p>Ежедневно 18:00 — 03:00</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программа</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Живые концерты</p>
                <p>Открытый микрофон</p>
                <p>DJ-сеты</p>
                <p>Частные вечеринки</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 V_KAZIN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;