# Boda · Roxana & Andrés

Página web para los invitados a la boda de **Roxana y Andrés**
(10 de octubre de 2026, Jardín Margaty, Jiutepec, Morelos).

## ¿Qué pueden hacer los invitados?

1. **Entrar escaneando un QR** (hay uno imprimible en `/qr`).
2. **Buscar su mesa** escribiendo su nombre (o el nombre del titular de la
   invitación). La búsqueda ignora acentos y mayúsculas.
3. **Ver el menú** completo de la noche (`/menu`).
4. **Consultar la distribución del salón** y la lista de invitados por mesa
   (`/mesas`).
5. **Revisar el itinerario y la dirección** del lugar (`/evento`).

## Scripts

```bash
npm run dev     # Desarrollo en http://localhost:4123
npm run build   # Build de producción
npm run start   # Correr el build
npm run lint    # Lint
```

## ¿Cómo cambio los datos?

Toda la información vive en un solo archivo:

- `src/lib/wedding.ts`

Ahí puedes editar:

- `wedding`: nombres de los novios, fecha, lugar, dirección, itinerario y
  código de vestimenta.
- `tables`: las 16 mesas con nombre, descripción, capacidad, forma
  (`round` / `rect` / `sweetheart`) y posición `x` / `y` en el mapa (0 a 100).
- `parties`: la lista de invitados (una entrada por invitación emitida con el
  número total de personas y la mesa asignada).
- `menu`: las secciones y platillos del menú.

### Búsqueda

La búsqueda es tolerante a mayúsculas y acentos: `heriberto`, `Hériberto` y
`HERIBERTO` encuentran al mismo invitado. También acepta coincidencias
parciales por palabra (ej. "garcia" encuentra a varios).

Si una invitación es para una pareja y sólo está registrado el nombre de uno,
el acompañante puede buscar escribiendo el nombre del titular.

## Rutas

| Ruta       | Descripción                                                           |
| ---------- | --------------------------------------------------------------------- |
| `/`        | Bienvenida + flujo para buscar mesa por nombre.                       |
| `/menu`    | Menú completo de la noche.                                            |
| `/mesas`   | Mapa del salón + lista de invitados por mesa.                         |
| `/evento`  | Itinerario, lugar y código de vestimenta.                             |
| `/qr`      | Código QR imprimible que apunta a esta aplicación.                    |

## Paleta y tipografía

- Verde salvia (`#758061`), crema cálido (`#f6efeb`), dorado suave
  (`#c7af80`) y gris oscuro (`#393e46`) — tomados de la invitación de
  Sugarme.
- Serif *Cormorant Garamond* para títulos y encabezados.
- Sans *Geist* para cuerpo y controles.

## Despliegue

Cualquier plataforma que soporte Next.js funciona (Vercel, Netlify, Fly.io,
etc.). Al desplegar, el QR en `/qr` apuntará automáticamente al host desde
el que se sirve la página.
