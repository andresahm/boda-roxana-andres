# Boda · Sofía & Mateo

Una pequeña aplicación web para que los invitados a una boda puedan:

1. **Entrar por un QR** (`/qr` genera un código imprimible).
2. **Escribir su nombre** y encontrar su mesa automáticamente.
3. **Ver el menú** servido durante la noche (`/menu`).
4. **Consultar el orden y la distribución de las mesas** en el salón (`/mesas`).

Hecha con [Next.js 16](https://nextjs.org), TypeScript y Tailwind CSS 4.

## Scripts

```bash
npm run dev     # Desarrollo en http://localhost:4123
npm run build   # Build de producción
npm run start   # Correr el build
npm run lint    # Lint
```

El dev server corre en el puerto **4123** por defecto.

## Personalizar la boda

Toda la información (novios, mesas, invitados y menú) vive en un solo lugar:

- `src/lib/wedding.ts`

Edita ese archivo para cambiar:

- Nombres de los novios, fecha, lugar y hora (`wedding`).
- Mesas: nombre, descripción y posición en el mapa (`tables`).
- Lista de invitados y su asignación a mesa + preferencia de menú (`guests`).
- Secciones y platillos del menú (`menu`).

### Posiciones del mapa

El mapa del salón en `/mesas` posiciona cada mesa con coordenadas `x` y `y`
en porcentaje (0 a 100). Simplemente ajusta `position: { x, y }` en cada mesa
para reorganizar el salón.

### Búsqueda

La búsqueda es tolerante a mayúsculas y acentos: `maria`, `María` y
`maría fernanda` encontrarán a la misma invitada.

## Rutas

| Ruta       | Descripción                                                           |
| ---------- | --------------------------------------------------------------------- |
| `/`        | Bienvenida + flujo para buscar mesa por nombre.                       |
| `/menu`    | Menú completo de la noche.                                            |
| `/mesas`   | Mapa del salón y listado de invitados por mesa.                       |
| `/qr`      | Código QR imprimible que apunta a esta aplicación.                    |

## Despliegue

Cualquier plataforma que soporte Next.js (Vercel, Netlify, Railway, Fly.io,
etc.) funciona. Al desplegar, el QR en `/qr` apuntará automáticamente al host
desde el que se sirve la página.
