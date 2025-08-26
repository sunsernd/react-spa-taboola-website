# React SPA Website

A modern React Single Page Application featuring a homepage, section page, and multiple article pages with clean design and smooth navigation.

## Features

- 🏠 **Homepage**: Welcome section with featured articles
- 📝 **Section Page**: Complete list of all articles with categories
- 📖 **Article Pages**: Individual article pages with full content
- 🎨 **Modern Design**: Beautiful gradient styling and responsive layout
- 🧭 **React Router**: Smooth client-side navigation
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast**: Built with Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Main layout with header and footer
├── pages/
│   ├── HomePage.jsx        # Homepage with featured content
│   ├── SectionPage.jsx     # Articles listing page
│   └── ArticlePage.jsx     # Individual article pages
├── App.jsx                 # Main app component with routing
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Features Overview

### Homepage
- Hero section with welcome message
- About section explaining the site
- Featured articles grid with cards
- Call-to-action buttons

### Section Page
- Complete articles listing
- Category filtering display
- Article previews with metadata
- Responsive grid layout

### Article Pages
- Full article content
- Category tags and metadata
- Code syntax highlighting
- Navigation between articles
- Responsive typography

### Design Features
- Modern gradient design
- Card-based layouts
- Hover animations
- Responsive typography
- Mobile-first approach
- Clean navigation

## Technology Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Modern CSS** - Grid, Flexbox, custom properties
- **ESLint** - Code linting

## Customization

### Adding New Articles

1. Open `src/pages/ArticlePage.jsx`
2. Add your article data to the `articles` object
3. Update the article lists in `HomePage.jsx` and `SectionPage.jsx`

### Styling

- Global styles are in `src/index.css`
- The design uses CSS custom properties for easy theming
- Responsive breakpoints are set for mobile, tablet, and desktop

### Navigation

- Routes are defined in `src/App.jsx`
- Navigation component is in `src/components/Layout.jsx`
- Add new routes by updating both files

## Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your needs. Some ideas for enhancements:

- Add a search feature
- Implement article categories filtering
- Add a dark mode toggle
- Include author pages
- Add comments system
- Implement pagination

## License

This project is open source and available under the MIT License.
