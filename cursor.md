# PROMPT: SaaS Landing Page (Inspired by adapty.io)

Сгенерируй **главную (Landing) страницу SaaS-сайта**, визуально и структурно **вдохновлённую https://adapty.io**, **без копирования контента, текстов или брендинга**.

---

## Технологический стек

- React (функциональные компоненты)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion (анимации)
- lucide-react (иконки)

---

## Архитектурные требования

- Один файл: `HomePage.tsx`
- Логическая декомпозиция компонентов внутри файла
- Production-ready код
- Полная адаптивность (desktop / tablet / mobile)
- Utility-first стилизация через Tailwind
- Все UI-элементы реализованы через **shadcn/ui**
- Совместимость React

---

## Структура страницы

---

### 2. Hero Section

- Крупный headline с SaaS value proposition
- Подзаголовок с кратким описанием продукта
- Primary CTA (filled)
- Secondary CTA (outline)
- Справа визуальный mockup (placeholder)
- Анимация появления через Framer Motion

---

### 3. Social Proof

- Горизонтальный ряд логотипов (grayscale placeholders)
- Текст: `Trusted by 10,000+ teams worldwide`

---

### 4. Features Section

- Grid 3×2
- Карточки с:
  - Иконкой
  - Заголовком
  - Кратким описанием
- Hover-эффекты
- Использовать `Card` из shadcn/ui

---

### 5. How It Works

- Вертикальный stepper
- 3 шага
- Нумерация
- Краткое описание каждого шага

---

### 6. Analytics / Dashboard Section

- Тёмный фон
- Текст слева
- Большой dashboard mockup справа (placeholder)
- Fade-in / parallax анимация при скролле

---

### 7. Testimonials

- 3 карточки отзывов
- Аватар
- Имя
- Роль
- Использовать `Card` из shadcn/ui
- Анимация при появлении

---

### 8. CTA Section

- Контрастный фон
- Крупный заголовок
- CTA кнопка: **Start free trial**

---

### 9. Footer

- Колонки:
  - Product
  - Company
  - Resources
- Минималистичный стиль
- Copyright

---

## Визуальные требования

- Современный SaaS-дизайн
- Большие отступы
- `rounded-2xl`
- Мягкие тени
- Цветовая палитра: neutral / indigo / violet
- Использовать `container` + `max-w-*`

---

## Ограничения

- ❌ Не копировать тексты, структуру или изображения с adapty.io
- ❌ Не использовать сторонние UI-библиотеки кроме shadcn/ui
- ✅ Использовать placeholder-контент вместо картинок
- ✅ Код должен быть чистым и готовым к использованию

---

## Результат

- Вернуть **полный код компонента `HomePage.tsx`**
- Без пояснений
- Без комментариев
- Только код
