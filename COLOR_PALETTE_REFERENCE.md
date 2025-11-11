# HCJK Photography - Color Palette Quick Reference Card

## 🎨 Primary Palette (Use These First)

### Soft Cream - Background
```
HEX:  #F5F1E8
RGB:  rgb(245, 241, 232)
HSL:  hsl(40, 36%, 94%)
CMYK: C:0 M:2 Y:5 K:4
```
**Use for:** Main backgrounds, page base, card backgrounds

---

### Rich Charcoal - Text
```
HEX:  #1A1A1A
RGB:  rgb(26, 26, 26)
HSL:  hsl(0, 0%, 10%)
CMYK: C:0 M:0 Y:0 K:90
```
**Use for:** Body text, paragraphs, navigation, labels

---

### Deep Merlot - Accent
```
HEX:  #6B1C23
RGB:  rgb(107, 28, 35)
HSL:  hsl(355, 59%, 26%)
CMYK: C:0 M:74 Y:67 K:58
```
**Use for:** Buttons, CTAs, headings, links, accents

---

## 📊 Contrast Ratios (WCAG AAA Compliant)

| Background | Text | Ratio | Status |
|------------|------|-------|--------|
| Soft Cream | Rich Charcoal | 14.8:1 | ✅ AAA |
| Soft Cream | Deep Merlot | 10.2:1 | ✅ AAA |
| Soft Cream | Pure Black | 19.6:1 | ✅ AAA |

---

## 🎨 Extended Palette

### Beige Family
```
Soft Cream:    #F5F1E8  (Lightest - backgrounds)
Warm Sand:     #E8DCC8  (Medium - alt sections)
Golden Beige:  #D4C4A8  (Darkest - borders)
```

### Black Family
```
Pure Black:    #000000  (Darkest - max contrast)
Rich Charcoal: #1A1A1A  (Medium - body text)
Dark Slate:    #2C2C2C  (Lightest - secondary text)
```

### Merlot Family
```
Deep Merlot:     #6B1C23  (Darkest - primary accent)
Classic Burgundy:#8B2332  (Medium - hover states)
Rich Wine:       #A52A3A  (Lightest - light accents)
```

---

## 🎯 Common Use Cases

### Buttons
```css
Primary:   bg: #6B1C23, text: #F5F1E8
Secondary: bg: #D4C4A8, text: #1A1A1A
Outline:   border: #6B1C23, text: #6B1C23
```

### Typography
```css
H1-H3:     color: #6B1C23 (Deep Merlot)
H4-H6:     color: #1A1A1A (Rich Charcoal)
Body:      color: #1A1A1A (Rich Charcoal)
Links:     color: #6B1C23, hover: #8B2332
```

### Sections
```css
Main BG:   #F5F1E8 (Soft Cream)
Alt BG:    #E8DCC8 (Warm Sand)
Dark BG:   #1A1A1A (Rich Charcoal)
Footer:    #1A1A1A (Rich Charcoal)
```

---

## 📱 CSS Variables

```css
:root {
  /* Primary */
  --color-bg: #F5F1E8;
  --color-text: #1A1A1A;
  --color-accent: #6B1C23;
  
  /* Beige */
  --beige-light: #F5F1E8;
  --beige-medium: #E8DCC8;
  --beige-dark: #D4C4A8;
  
  /* Black */
  --black-pure: #000000;
  --black-rich: #1A1A1A;
  --black-slate: #2C2C2C;
  
  /* Merlot */
  --merlot-deep: #6B1C23;
  --merlot-classic: #8B2332;
  --merlot-rich: #A52A3A;
}
```

---

## ✅ Do's

- ✓ Use Soft Cream for main backgrounds
- ✓ Use Rich Charcoal for body text
- ✓ Use Deep Merlot for CTAs and accents
- ✓ Test all combinations for accessibility
- ✓ Use hover states (Classic Burgundy)
- ✓ Maintain consistent usage

## ❌ Don'ts

- ✗ Don't use Pure Black for body text
- ✗ Don't overuse merlot (use sparingly)
- ✗ Don't place merlot text on beige without testing
- ✗ Don't mix all merlot variations in one section
- ✗ Don't use beige on beige
- ✗ Don't ignore mobile rendering

---

## 🔧 Quick Implementation

### HTML
```html
<link rel="stylesheet" href="assets/css/color-palette.css">
```

### Body
```css
body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

### Headings
```css
h1, h2, h3 {
  color: var(--color-accent);
}
```

### Buttons
```css
.btn-primary {
  background: var(--merlot-deep);
  color: var(--beige-light);
}
```

---

## 📐 Color Distribution Guide

**Recommended Ratio:**
- 70% Soft Cream (backgrounds)
- 20% Rich Charcoal (text)
- 10% Deep Merlot (accents)

---

## 🎨 Gradients

```css
/* Merlot Gradient */
background: linear-gradient(135deg, #6B1C23 0%, #8B2332 100%);

/* Merlot to Dark */
background: linear-gradient(135deg, #6B1C23 0%, #1A1A1A 100%);

/* Beige Gradient */
background: linear-gradient(135deg, #F5F1E8 0%, #E8DCC8 100%);
```

---

## 🔍 Testing Tools

- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Blindness:** https://www.color-blindness.com/coblis-color-blindness-simulator/
- **WAVE:** https://wave.webaim.org/

---

## 📞 Support

**Questions?** Contact: design@hcjk.org  
**Website:** www.hcjk.org

---

**Version 1.0.0** | January 2024 | HCJK Collection