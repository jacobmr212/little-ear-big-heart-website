# Little Ear, Big Heart - Official Website

A modern, responsive landing page for the children's book "Little Ear, Big Heart" by Jacob Rosales.

## About the Book

**Little Ear, Big Heart** is a children's book about Microtia, difference, and self-acceptance. Join Sam on a journey of self-discovery as he teaches us that the best way to listen isn't always with your ears—it's with your heart.

### 2nd Edition Coming 2026
- Bold, modern illustrations
- Premium 8.5" x 8.5" hardcover format
- Enhanced storytelling
- Educational resources included

## Website Features

- **Modern Design**: Clean, accessible interface with cool & calm color palette
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, animations, and engaging user experience
- **Email Notifications**: Visitors can sign up to be notified when the book launches
- **Educational**: Information about Microtia and resources for families
- **Accessible**: Built with accessibility best practices

## Tech Stack

- HTML5
- CSS3 (Custom styles, no frameworks)
- Vanilla JavaScript (No dependencies)
- Google Fonts (Poppins & Quicksand)

## Project Structure

```
little-ear-big-heart-website/
├── index.html          # Main landing page
├── css/
│   └── main.css       # All styles
├── js/
│   └── main.js        # Interactive features
├── images/
│   ├── old-cover-front.png
│   └── old-cover-back.png
├── .gitignore
└── README.md
```

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/little-ear-big-heart-website.git
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```
   Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Deployment to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to "main" branch and root folder
4. Your site will be published at `https://YOUR-USERNAME.github.io/little-ear-big-heart-website/`

## Customization

### Update Email Form
The email notification form currently stores emails in localStorage. To connect it to a real backend:

1. Edit `js/main.js`
2. Find the `submitEmail()` function
3. Replace the simulated API call with your actual endpoint:

```javascript
function submitEmail(email) {
    return fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json());
}
```

### Add New Book Cover
When the 2nd edition cover is ready:

1. Add the image to the `images/` folder (e.g., `new-cover-front.png`)
2. Edit `index.html`
3. Replace the placeholder section with:

```html
<img src="images/new-cover-front.png" alt="Little Ear, Big Heart 2nd Edition Cover" class="book-cover">
```

### Update Resource Links
Edit the resource cards in `index.html` to add actual links to Microtia resources and support groups.

## Color Palette

The website uses a cool & calm color scheme:

- Primary Blue: `#4A90E2`
- Deep Blue: `#2E5C8A`
- Teal: `#50C9C3`
- Purple: `#7B68EE`
- Sky Blue: `#E8F4F8`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This website follows WCAG 2.1 Level AA guidelines:
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Color contrast ratios

## Contributing

This is a personal project, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

Copyright © 2026 Jacob Rosales. All rights reserved.

## Contact

For questions about the book or website:
- Email: contact@littleearebigheart.com
- Website: [Coming Soon]

---

**"Different is awesome. ❤️"**
