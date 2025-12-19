# HOUSEN® Web Platform

Plataforma web corporativa para HOUSEN® – Constructora & Inmobiliaria.

## 🔐 SEGURIDAD DE CREDENCIALES

> ⚠️ **IMPORTANTE**: Las credenciales NUNCA deben subirse a Git ni exponerse públicamente.

### Archivos protegidos por .gitignore:
- `.env` - Variables de entorno general
- `.env.local` - Variables locales (tu archivo actual)
- `.env.production` - Variables de producción

**Estos archivos NUNCA se suben a Git** gracias a la línea `.env*` en `.gitignore`.

### Para Vercel (Producción):
1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Settings → Environment Variables
3. Agrega cada variable manualmente:
   - `DATABASE_URL` = tu URL de Supabase
   - `NEXTAUTH_SECRET` = un secreto único generado
   - `NEXTAUTH_URL` = tu dominio de producción

**Nunca compartas las credenciales por chat, email o código.**

---

## Configuración Rápida

### 1. El archivo `.env.local` ya está creado con tus credenciales.

### 2. Configurar Base de Datos

```bash
# Generar cliente Prisma
npx prisma generate

# Crear tablas en Supabase
npx prisma db push

# Crear usuario admin y datos demo
npx prisma db seed
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
housen-web/
├── src/
│   ├── app/
│   │   ├── admin/        # Panel CMS
│   │   ├── api/          # API Routes
│   │   ├── proyectos/    # Catálogo de proyectos
│   │   ├── constructora/ # Servicios de construcción
│   │   ├── inmobiliaria/ # Servicios inmobiliarios
│   │   ├── nosotros/     # Página de nosotros
│   │   └── contacto/     # Página de contacto
│   ├── components/       # Componentes reutilizables
│   └── lib/              # Utilidades y configuración
└── prisma/
    └── schema.prisma     # Esquema de base de datos
```

## Despliegue en Vercel

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

## Integraciones

- **WhatsApp**: Todos los números abren wa.me con mensaje prellenado
- **Google Maps**: Mapa embebido en página de contacto
- **NextAuth**: Autenticación para panel admin
