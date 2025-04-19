# Kodenca - Landing Page

Landing page profesional para Kodenca, una empresa especializada en desarrollo de software a medida para PYMEs.

## Características

- Desarrollada con Next.js 14 y TypeScript
- Estilizada con Tailwind CSS
- Animaciones con Framer Motion
- Formulario de contacto con EmailJS
- Totalmente responsiva
- Optimizada para SEO
- Fácilmente desplegable en Vercel

## Requisitos Previos

- Node.js 18.0.0 o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/kodenca-landing.git
cd kodenca-landing
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

## Configuración de EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un nuevo servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email con las siguientes variables:
   - `from_name`
   - `from_email`
   - `company`
   - `message`
4. Copia los IDs y la clave pública a tu archivo `.env.local`

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Construcción

Para crear una versión de producción:

```bash
npm run build
# o
yarn build
```

## Despliegue

El proyecto está configurado para ser desplegado fácilmente en Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno en el panel de Vercel
4. ¡Listo! Tu sitio estará en línea

## Estructura del Proyecto

```
kodenca-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Benefits.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── styles/
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 