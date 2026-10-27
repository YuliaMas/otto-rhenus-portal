# 📱 OTTO Employee Portal

https://img.shields.io/badge/React-19-blue
https://img.shields.io/badge/TypeScript-5-blue
https://img.shields.io/badge/Vite-Latest-purple
https://img.shields.io/badge/i18next-Multilingual-green

Internal employee portal for OTTO Work Force employees working at the Rhenus logistics project in Poznań, Poland.

---

## 🌍 Supported Languages

The portal is available in:

- 🇺🇦 Ukrainian
- 🇵🇱 Polish
- 🇷🇺 Russian
- 🇬🇧 English

---

## ✨ Features

### 🚌 Transportation

- Bus schedules for Poznań / Swarzędz routes
- Bus schedules for Września and surrounding areas
- Bus stop search
- Direct Google Maps navigation
- Downloadable Excel schedules

### 🏖️ Vacation Requests

- Vacation request submission via Microsoft Forms
- Vacation policy and guidelines
- Form completion instructions
- Frequently Asked Questions

### ❌ Absence Reporting

- Absence reporting via Microsoft Forms
- NNK policy information
- Sick leave (L4) information
- Employee guidelines and instructions

### 📞 Contacts

- OTTO coordinators
- Office contact information
- WhatsApp and Viber contact options
- OTTO hotline
- Emergency numbers in Poland
- Office location and map

### 📚 Useful Information

- myOTTO application information
- Employee work shifts
- Workplace guidelines
- Project updates and announcements

---

## 🛠 Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next
- Lucide React

---

## 📂 Project Structure

```text
src
├── assets
├── components
├── data
├── hooks
├── i18n
├── layouts
├── locales
├── pages
├── routes
├── services
└── types
```

## 🌐 Deployment

The project is configured for deployment on:

- Vercel
- Netlify

For React Router support, the project includes:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔐 Access Protection

The portal uses a simple access code mechanism stored locally in the browser to restrict access to employees.

---

## 📱 Integrations

- Microsoft Forms
- Google Maps
- myOTTO
- Multilingual support through i18next

---

## 👩‍💻 Author

**Yuliya Masechko**

Employee Portal for OTTO Work Force – Rhenus Poznań

© 2026
