# Xaadi Mini App 🎮

A WeChat Mini Program implementation of Xaadi, the traditional African strategy game also known as Awélé or Mancala.

## 📖 About

Xaadi is a centuries-old African board game that develops strategic thinking and planning skills. This mini app brings the classic game experience to WeChat's platform with multiple game modes and comprehensive rules.

## ✨ Features

- **Single Player Mode** - Practice against AI
- **2 Players Mode** - Play locally with a friend
- **Online Multiplayer** - Challenge players online
- **Game Rules** - Comprehensive guide to learn how to play
- **Settings** - Customize your game experience
- **Scores** - Track your performance and achievements

## 🎯 Game Rules

### Setup
- The board has 12 holes (6 per player)
- Each hole starts with 4 seeds
- Total of 48 seeds in play

### How to Play
1. Choose a hole on your side containing seeds
2. Take all seeds from the chosen hole
3. Distribute them one by one counter-clockwise
4. Skip the starting hole if you make a complete round

### Capturing Seeds
- Your last seed falls in an opponent's hole
- That hole now contains 2 or 3 seeds
- You capture those seeds and any preceding holes with 2-3 seeds

### Winning
- The game ends when a player has no seeds left in their holes
- The winner is the player who captured the most seeds!

## 🏗️ Project Structure

```
xaadi-mini-app/
├── pages/              # Application pages
│   ├── index/         # Home page with game modes
│   ├── regles/        # Game rules page
│   └── params/        # Settings page
├── components/        # Reusable components
│   ├── Card/         # Card component
│   ├── menu-button/  # Menu button component
│   └── navigation-bar/ # Custom navigation bar
├── images/           # Image assets
├── app.js            # Application entry point
├── app.json          # App configuration
├── app.wxss          # Global styles
└── project.config.json # WeChat project config
```

## 🚀 Getting Started

### Prerequisites
- WeChat Developer Tools installed
- WeChat Developer Account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bakemono-san/xaadi-mini-app.git
```

2. Open WeChat Developer Tools

3. Import the project by selecting the project directory

4. Start developing!

## 🛠️ Development

### App Entry Point
The app uses global data management for game state:

```javascript
App({
  globalData: {
    todos: [...],
  },
  addTodo(todo) { ... },
  toggle(index) { ... },
  delete(index) { ... }
})
```

### Custom Components

- **navigation-bar**: Custom navigation component with back button
- **menu-button**: Reusable menu button with icons and navigation
- **Card**: Card layout component

## 📱 Pages

### Index (Home)
Main menu with game mode selection and navigation options

### Regles (Rules)
Detailed game rules and strategic tips

### Params (Settings)
Application settings and preferences

## 🎨 Styling

The app uses custom CSS classes with a color-coded system:
- `bg-turquoise` - Turquoise background
- `bg-blue` - Blue background
- `bg-green` - Green background
- `bg-yellowish` - Yellowish background
- Custom text colors for contrast

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bakemono-san**
- GitHub: [@Bakemono-san](https://github.com/Bakemono-san)

## 🙏 Acknowledgments

- Traditional African game heritage
- WeChat Mini Program platform
- All contributors and players

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Made with ❤️ for preserving traditional African games