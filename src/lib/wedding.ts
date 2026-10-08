export type Guest = {
  name: string;
  tableId: number;
  menu?: MenuChoice;
};

export type MenuChoice = "carne" | "pescado" | "vegetariano";

export type Table = {
  id: number;
  name: string;
  description: string;
  position: { x: number; y: number };
  shape?: "round" | "head";
};

export const wedding = {
  bride: "Sofía",
  groom: "Mateo",
  dateLabel: "Sábado · 25 de octubre de 2025",
  dateShort: "25.10.2025",
  venue: "Hacienda La Esperanza",
  city: "Valle de Bravo",
  reception: "19:30 h",
};

export const tables: Table[] = [
  {
    id: 1,
    name: "Mesa de honor",
    description: "Novios y padres de los novios",
    position: { x: 50, y: 18 },
    shape: "head",
  },
  {
    id: 2,
    name: "Mesa 2",
    description: "Familia de la novia",
    position: { x: 22, y: 38 },
  },
  {
    id: 3,
    name: "Mesa 3",
    description: "Familia del novio",
    position: { x: 78, y: 38 },
  },
  {
    id: 4,
    name: "Mesa 4",
    description: "Padrinos y testigos",
    position: { x: 50, y: 42 },
  },
  {
    id: 5,
    name: "Mesa 5",
    description: "Amigos de la universidad",
    position: { x: 20, y: 62 },
  },
  {
    id: 6,
    name: "Mesa 6",
    description: "Amigos de la infancia",
    position: { x: 80, y: 62 },
  },
  {
    id: 7,
    name: "Mesa 7",
    description: "Compañeros de trabajo",
    position: { x: 35, y: 80 },
  },
  {
    id: 8,
    name: "Mesa 8",
    description: "Primos y familia extendida",
    position: { x: 65, y: 80 },
  },
];

export const guests: Guest[] = [
  { name: "Sofía Martínez", tableId: 1 },
  { name: "Mateo Ramírez", tableId: 1 },
  { name: "Alicia Herrera de Martínez", tableId: 1, menu: "pescado" },
  { name: "Jorge Martínez Luna", tableId: 1, menu: "carne" },
  { name: "Carmen López de Ramírez", tableId: 1, menu: "vegetariano" },
  { name: "Roberto Ramírez Soto", tableId: 1, menu: "carne" },

  { name: "Lucía Martínez", tableId: 2, menu: "pescado" },
  { name: "Diego Martínez", tableId: 2, menu: "carne" },
  { name: "Patricia Herrera", tableId: 2, menu: "pescado" },
  { name: "Fernando Herrera", tableId: 2, menu: "carne" },
  { name: "Elena Luna", tableId: 2, menu: "vegetariano" },
  { name: "Raúl Luna", tableId: 2, menu: "carne" },

  { name: "Andrés Ramírez", tableId: 3, menu: "carne" },
  { name: "Valeria Ramírez", tableId: 3, menu: "pescado" },
  { name: "Mario Soto", tableId: 3, menu: "carne" },
  { name: "Teresa López", tableId: 3, menu: "pescado" },
  { name: "Javier López", tableId: 3, menu: "carne" },
  { name: "Mónica Soto", tableId: 3, menu: "vegetariano" },

  { name: "Daniela Ortega", tableId: 4, menu: "pescado" },
  { name: "Pablo Vargas", tableId: 4, menu: "carne" },
  { name: "Isabel Mendoza", tableId: 4, menu: "pescado" },
  { name: "Héctor Rivas", tableId: 4, menu: "carne" },
  { name: "Natalia Peña", tableId: 4, menu: "vegetariano" },
  { name: "Gabriel Flores", tableId: 4, menu: "carne" },

  { name: "Camila Torres", tableId: 5, menu: "pescado" },
  { name: "Esteban Núñez", tableId: 5, menu: "carne" },
  { name: "Renata Morales", tableId: 5, menu: "vegetariano" },
  { name: "Sebastián Reyes", tableId: 5, menu: "carne" },
  { name: "Paula Gómez", tableId: 5, menu: "pescado" },
  { name: "Iván Castillo", tableId: 5, menu: "carne" },

  { name: "Luis Pérez", tableId: 6, menu: "carne" },
  { name: "Ana Ruiz", tableId: 6, menu: "pescado" },
  { name: "Carla Jiménez", tableId: 6, menu: "vegetariano" },
  { name: "Tomás Aguilar", tableId: 6, menu: "carne" },
  { name: "Beatriz Navarro", tableId: 6, menu: "pescado" },
  { name: "Óscar Delgado", tableId: 6, menu: "carne" },

  { name: "María Fernanda Cruz", tableId: 7, menu: "pescado" },
  { name: "Alejandro Vega", tableId: 7, menu: "carne" },
  { name: "Rocío Salinas", tableId: 7, menu: "vegetariano" },
  { name: "Emilio Guzmán", tableId: 7, menu: "carne" },
  { name: "Verónica Pacheco", tableId: 7, menu: "pescado" },
  { name: "Ricardo Molina", tableId: 7, menu: "carne" },

  { name: "Jimena Carrillo", tableId: 8, menu: "pescado" },
  { name: "Bruno Esquivel", tableId: 8, menu: "carne" },
  { name: "Lorena Beltrán", tableId: 8, menu: "vegetariano" },
  { name: "Rodrigo Cabrera", tableId: 8, menu: "carne" },
  { name: "Sabrina Fuentes", tableId: 8, menu: "pescado" },
  { name: "Nicolás Arreola", tableId: 8, menu: "carne" },
];

export type MenuSection = {
  course: string;
  dishes: { name: string; description?: string; tag?: MenuChoice }[];
};

export const menu: MenuSection[] = [
  {
    course: "Bienvenida",
    dishes: [
      {
        name: "Cóctel de la casa",
        description: "Mezcal, toronja rosa, miel de agave y romero fresco.",
      },
      {
        name: "Canapés",
        description: "Burrata con higos, salmón ahumado y bruschetta de tomate confitado.",
      },
    ],
  },
  {
    course: "Entrada",
    dishes: [
      {
        name: "Ensalada de temporada",
        description:
          "Hojas verdes, pera asada, nuez caramelizada y queso de cabra con vinagreta de miel.",
      },
    ],
  },
  {
    course: "Sopa",
    dishes: [
      {
        name: "Crema de calabaza y romero",
        description: "Con aceite de trufa y crujiente de panceta ibérica.",
      },
    ],
  },
  {
    course: "Plato principal · elige uno",
    dishes: [
      {
        name: "Filete miñón",
        description: "Con reducción de vino tinto, puré de papa trufado y vegetales rostizados.",
        tag: "carne",
      },
      {
        name: "Salmón al horno",
        description: "Costra de hierbas finas, risotto cremoso y espárragos.",
        tag: "pescado",
      },
      {
        name: "Risotto de hongos silvestres",
        description: "Arroz carnaroli, mezcla de hongos, parmesano reggiano y aceite de trufa.",
        tag: "vegetariano",
      },
    ],
  },
  {
    course: "Postre",
    dishes: [
      {
        name: "Trío de chocolate",
        description: "Mousse de chocolate blanco, ganache amargo y helado de frutos rojos.",
      },
      {
        name: "Mesa de dulces y pastel",
        description: "Pastel de tres leches con frutos del bosque y mesa de dulces tradicionales.",
      },
    ],
  },
  {
    course: "Bebidas",
    dishes: [
      {
        name: "Vinos seleccionados",
        description: "Tinto Malbec, blanco Sauvignon Blanc y espumoso para el brindis.",
      },
      {
        name: "Barra libre",
        description: "Cocteles de autor, cervezas artesanales y bebidas sin alcohol.",
      },
      {
        name: "Café y digestivos",
        description: "Café de olla, té y licores para cerrar la noche.",
      },
    ],
  },
];

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function searchGuests(query: string, limit = 6): Guest[] {
  const q = normalize(query);
  if (!q) return [];
  const tokens = q.split(" ").filter(Boolean);

  const scored = guests
    .map((g) => {
      const n = normalize(g.name);
      let score = 0;
      let allTokensMatch = true;
      for (const t of tokens) {
        if (n.startsWith(t)) {
          score += 5;
        } else if (n.includes(` ${t}`)) {
          score += 4;
        } else if (n.includes(t)) {
          score += 2;
        } else {
          allTokensMatch = false;
        }
      }
      if (n === q) score += 20;
      if (n.startsWith(q)) score += 8;
      return { guest: g, score, allTokensMatch };
    })
    .filter((r) => r.allTokensMatch && r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.guest);

  return scored;
}

export function findExactGuest(query: string): Guest | undefined {
  const q = normalize(query);
  if (!q) return undefined;
  return guests.find((g) => normalize(g.name) === q);
}

export function getTable(id: number): Table | undefined {
  return tables.find((t) => t.id === id);
}

export function getGuestsAtTable(id: number): Guest[] {
  return guests.filter((g) => g.tableId === id);
}

export const menuLabel: Record<MenuChoice, string> = {
  carne: "Filete miñón",
  pescado: "Salmón al horno",
  vegetariano: "Risotto de hongos",
};
