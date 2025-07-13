import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = [
    "Все",
    "Двигатель",
    "Тормоза",
    "Подвеска",
    "Электрика",
    "Кузов",
  ];

  const parts = [
    {
      id: 1,
      name: "Тормозные колодки",
      article: "BRK001",
      price: 2500,
      category: "Тормоза",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Масляный фильтр",
      article: "ENG002",
      price: 850,
      category: "Двигатель",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Амортизатор передний",
      article: "SUS003",
      price: 4200,
      category: "Подвеска",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Свеча зажигания",
      article: "ELC004",
      price: 320,
      category: "Электрика",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Крыло переднее",
      article: "BOD005",
      price: 8500,
      category: "Кузов",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Тормозной диск",
      article: "BRK006",
      price: 3200,
      category: "Тормоза",
      image: "/placeholder.svg",
    },
  ];

  const filteredParts = parts.filter((part) => {
    const matchesSearch =
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.article.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (part) => {
    setCart([...cart, part]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Settings" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AutoParts</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {cart.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-gray-500">Корзина пуста</p>
                    ) : (
                      <>
                        {cart.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                {item.article}
                              </p>
                            </div>
                            <p className="font-semibold">{item.price} ₽</p>
                          </div>
                        ))}
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">
                              Итого:
                            </span>
                            <span className="text-lg font-bold text-blue-600">
                              {getTotalPrice()} ₽
                            </span>
                          </div>
                          <Button className="w-full">Оформить заказ</Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Связаться
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Обратная связь</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Опишите ваш запрос" />
                    </div>
                    <Button className="w-full">Отправить</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Универсальные запчасти
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Быстрый поиск по артикулам. Качественные детали для любого
              автомобиля.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Введите артикул или название запчасти..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 shadow-lg"
              />
              <Icon
                name="Search"
                size={24}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Каталог запчастей
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParts.map((part) => (
              <Card
                key={part.id}
                className="hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Settings" size={48} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{part.name}</CardTitle>
                  <CardDescription>Артикул: {part.article}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {part.price} ₽
                      </p>
                      <Badge variant="secondary">{part.category}</Badge>
                    </div>
                    <Button
                      onClick={() => addToCart(part)}
                      className="hover:scale-105 transition-transform"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredParts.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Search"
                size={64}
                className="mx-auto text-gray-300 mb-4"
              />
              <p className="text-xl text-gray-500">Запчасти не найдены</p>
              <p className="text-gray-400">
                Попробуйте изменить поисковый запрос
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Settings" size={24} />
                <span className="text-xl font-bold">AutoParts</span>
              </div>
              <p className="text-gray-400">
                Качественные запчасти для всех марок автомобилей. Быстрая
                доставка по всей России.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@autoparts.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Автозаводская, 1
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
                <p className="text-green-400">Доставка 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoParts. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
