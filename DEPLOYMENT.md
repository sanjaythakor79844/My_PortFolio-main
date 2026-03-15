# Portfolio Deployment Guide

## 🚀 Quick Deployment Options

### 1. GitHub Pages (Free)
1. Push your portfolio to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant deployment with custom domain options

### 3. Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployments on every push

### 4. Local Development
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

## 📝 Pre-Deployment Checklist

- [ ] All images are optimized and properly linked
- [ ] Contact form is connected to a backend service
- [ ] All external links work correctly
- [ ] Resume PDF is accessible
- [ ] Social media links are updated
- [ ] Meta tags are properly configured
- [ ] Mobile responsiveness is tested

## 🔧 Customization Tips

### Update Personal Information
1. Replace profile images in `/images/` folder
2. Update contact details in HTML
3. Modify social media links
4. Replace resume PDF file
5. Update project links and descriptions

### Color Scheme
- Primary color: `#0ef` (cyan)
- Background: `#081b29` (dark blue)
- Text: `#ededed` (light gray)

### Adding New Projects
1. Add project section in HTML
2. Include project image (optional)
3. Add GitHub repository link
4. Write compelling project description

## 📱 Testing

Test your portfolio on:
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS Safari, Android Chrome)
- [ ] Tablet devices
- [ ] Different screen resolutions

## 🔒 Security Notes

- Remove any sensitive information
- Use environment variables for API keys
- Implement proper form validation
- Consider adding HTTPS

## 📈 Performance Optimization

- Compress images before uploading
- Minify CSS and JavaScript for production
- Use CDN for external libraries
- Enable browser caching

---

**Need help with deployment? Contact: sanjaythakor79844@gmail.com**