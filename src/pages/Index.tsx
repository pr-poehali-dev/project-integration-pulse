import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Шапка */}
      <header className="w-full">
        {/* Название сайта */}
        <div className="w-full bg-background px-6 py-3 flex items-center justify-between border-b border-border">
          <div className="text-2xl font-bold tracking-tight">V_<span className="text-primary">KAZIN</span></div>
          <Button variant="outline" size="sm">
            Забронировать
          </Button>
        </div>
        {/* Полная картинка-шапка */}
        <div className="w-full">
          <img
            src="https://cdn.poehali.dev/projects/0396a746-4718-45f3-bb1d-5bc07f2afb5a/bucket/3df7453c-8c16-4232-9897-bc1f6e564348.png"
            alt="v_kazin header"
            className="w-full h-auto"
          />
        </div>
      </header>

      {/* Hero секция */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center pt-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-widest text-primary">ТРЕКИ :</h2>
              </div>
            </div>

            {/* Hero изображение */}
            <div className="lg:col-span-4 mt-5">
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

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">V_<span className="text-primary">KAZIN</span></div>

            </div>
            <div>
              <h4 className="font-semibold mb-4">Телефон</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Почта</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>info@v-kazin.ru</p>
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