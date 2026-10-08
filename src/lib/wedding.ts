export type Party = {
  name: string;
  personas: number;
  ninos?: number;
  mesa: number;
  lado: "novia" | "novio";
};

export type Table = {
  id: number;
  label: string;
  description: string;
  capacity: number;
  shape: "round" | "rect" | "sweetheart";
  area: "izquierda" | "derecha" | "centro";
  position: { x: number; y: number };
};

export const wedding = {
  bride: "Roxana",
  groom: "Andrés",
  dateLabel: "Sábado · 10 de octubre de 2026",
  dateShort: "10.10.2026",
  dateIso: "2026-10-10",
  venue: "Jardín Margaty",
  address: "Jiutepec 87, Las Rosas Esq., 62560 Jiutepec, Morelos",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jardin+Margaty+Jiutepec+87+Las+Rosas+62560+Jiutepec+Morelos",
  schedule: [
    { time: "15:45", label: "Ceremonia" },
    { time: "17:00", label: "Cóctel" },
    { time: "18:00", label: "Recepción" },
  ],
  dressCode: "Formal",
  invitationUrl: "https://sugarme.mx/RoxanayAndres_10oct26/",
};

export const tables: Table[] = [
  { id: 7,  label: "Mesa 7",  description: "Amigos del novio",       capacity: 10, shape: "round", area: "izquierda", position: { x: 8,  y: 14 } },
  { id: 5,  label: "Mesa 5",  description: "Familia de la novia",    capacity: 12, shape: "rect",  area: "izquierda", position: { x: 23, y: 14 } },
  { id: 3,  label: "Mesa 3",  description: "Amigos de la novia",     capacity: 10, shape: "rect",  area: "izquierda", position: { x: 38, y: 14 } },
  { id: 10, label: "Mesa 10", description: "Amigos del novio",       capacity: 10, shape: "rect",  area: "derecha",   position: { x: 62, y: 14 } },
  { id: 12, label: "Mesa 12", description: "Compañeros del novio",   capacity: 12, shape: "rect",  area: "derecha",   position: { x: 77, y: 14 } },
  { id: 14, label: "Mesa 14", description: "Amigos del novio",       capacity: 10, shape: "round", area: "derecha",   position: { x: 92, y: 14 } },

  { id: 6,  label: "Mesa 6",  description: "Familia de la novia",    capacity: 10, shape: "rect",  area: "izquierda", position: { x: 8,  y: 42 } },
  { id: 4,  label: "Mesa 4",  description: "Familia de la novia",    capacity: 12, shape: "rect",  area: "izquierda", position: { x: 23, y: 42 } },
  { id: 2,  label: "Mesa 2",  description: "Amigos de la novia",     capacity: 12, shape: "rect",  area: "izquierda", position: { x: 38, y: 42 } },
  { id: 9,  label: "Mesa 9",  description: "Amigos del novio",       capacity: 12, shape: "rect",  area: "derecha",   position: { x: 62, y: 42 } },
  { id: 11, label: "Mesa 11", description: "Familia del novio",      capacity: 12, shape: "rect",  area: "derecha",   position: { x: 77, y: 42 } },
  { id: 15, label: "Mesa 15", description: "Amigos del novio",       capacity: 10, shape: "rect",  area: "derecha",   position: { x: 92, y: 42 } },

  { id: 16, label: "Mesa 16", description: "Amigos del novio",       capacity: 10, shape: "rect",  area: "izquierda", position: { x: 10, y: 78 } },
  { id: 1,  label: "Mesa 1",  description: "Familia de la novia",    capacity: 10, shape: "round", area: "izquierda", position: { x: 28, y: 80 } },
  { id: 0,  label: "Mesa de novios", description: "Roxana & Andrés", capacity: 2,  shape: "sweetheart", area: "centro", position: { x: 50, y: 82 } },
  { id: 8,  label: "Mesa 8",  description: "Familia del novio",      capacity: 10, shape: "round", area: "derecha",   position: { x: 72, y: 80 } },
  { id: 13, label: "Mesa 13", description: "Familia del novio",      capacity: 12, shape: "rect",  area: "derecha",   position: { x: 92, y: 78 } },
];

export const parties: Party[] = [
  { name: "Alfredo Esquivel", personas: 1, mesa: 1, lado: "novia" },
  { name: "Andrea Ibarra", personas: 1, mesa: 1, lado: "novia" },
  { name: "Héctor Esquivel", personas: 3, mesa: 1, lado: "novia" },
  { name: "Martha Torres", personas: 2, mesa: 1, lado: "novia" },
  { name: "Olivia Luna", personas: 2, mesa: 1, lado: "novia" },
  { name: "Rosa Esquivel", personas: 1, mesa: 1, lado: "novia" },

  { name: "Ariana Islas", personas: 2, mesa: 2, lado: "novia" },
  { name: "Aylin Calderon", personas: 1, mesa: 2, lado: "novia" },
  { name: "Diana Garcia Carrillo", personas: 1, mesa: 2, lado: "novia" },
  { name: "Fernando Hernandez", personas: 1, mesa: 2, lado: "novia" },
  { name: "Jessica Espindola", personas: 1, mesa: 2, lado: "novia" },
  { name: "Jocelin Garrido", personas: 2, mesa: 2, lado: "novia" },
  { name: "Karen Cano", personas: 1, mesa: 2, lado: "novia" },
  { name: "Leobardo Garcia Carrillo", personas: 2, mesa: 2, lado: "novio" },
  { name: "Rogelio Chavez", personas: 1, mesa: 2, lado: "novia" },

  { name: "Abiam Romo", personas: 2, mesa: 3, lado: "novia" },
  { name: "Alfredo Resendiz", personas: 2, mesa: 3, lado: "novia" },
  { name: "Emilio Osio", personas: 2, mesa: 3, lado: "novia" },
  { name: "Sofia Prettel", personas: 2, mesa: 3, lado: "novia" },

  { name: "Damaris Amador", personas: 2, mesa: 4, lado: "novia" },
  { name: "Erik Hernandez", personas: 3, mesa: 4, lado: "novia" },
  { name: "Josefina Esquivel", personas: 1, mesa: 4, lado: "novia" },
  { name: "Lysette Hernandez", personas: 2, mesa: 4, lado: "novia" },
  { name: "Norberto Hernández", personas: 2, mesa: 4, lado: "novia" },
  { name: "Valeria Corona", personas: 2, mesa: 4, lado: "novia" },

  { name: "Aylin Robles", personas: 1, mesa: 5, lado: "novia" },
  { name: "Cristina Grande", personas: 2, mesa: 5, lado: "novia" },
  { name: "Fernando Sanchez", personas: 1, mesa: 5, lado: "novia" },
  { name: "Jose Lopez Hoyo", personas: 2, mesa: 5, lado: "novia" },
  { name: "Juan Moreno", personas: 2, ninos: 1, mesa: 5, lado: "novia" },
  { name: "Juana Hernandez", personas: 2, mesa: 5, lado: "novia" },
  { name: "Luis Angel Romero", personas: 1, mesa: 5, lado: "novia" },
  { name: "Mariana Loaiza", personas: 1, mesa: 5, lado: "novia" },

  { name: "Adrian Ramirez Mendoza", personas: 2, mesa: 6, lado: "novio" },
  { name: "Arturo Velázquez", personas: 2, mesa: 6, lado: "novia" },
  { name: "Laura Esquivel", personas: 2, mesa: 6, lado: "novia" },
  { name: "Lucia Martínez Macías", personas: 2, mesa: 6, lado: "novio" },
  { name: "Manuel Hernandez Portal", personas: 2, mesa: 6, lado: "novia" },

  { name: "Benjamin Colin Lopez", personas: 2, mesa: 7, lado: "novio" },
  { name: "Gabriel Yolotl Garcia Islas", personas: 1, mesa: 7, lado: "novio" },
  { name: "Gilberto Guedes", personas: 2, mesa: 7, lado: "novio" },
  { name: "Joaquin Gabriel Cruz Hidalgo", personas: 2, mesa: 7, lado: "novio" },
  { name: "Rodrigo Ricalde Torija", personas: 1, mesa: 7, lado: "novio" },
  { name: "Rogelio Ignacio Carrillo Hernandez", personas: 2, mesa: 7, lado: "novio" },

  { name: "Michelle Hernández", personas: 2, mesa: 8, lado: "novio" },
  { name: "Michelle Urrutia", personas: 1, mesa: 8, lado: "novio" },
  { name: "Noemi Betancourt", personas: 1, mesa: 8, lado: "novio" },
  { name: "Ricardo Alberto Hernández Mayo", personas: 2, mesa: 8, lado: "novio" },
  { name: "Rodolfo Alberto Hernandez Martinez", personas: 2, mesa: 8, lado: "novio" },

  { name: "Bernardo Velázquez y Luz", personas: 2, mesa: 9, lado: "novio" },
  { name: "Diego Mayo", personas: 2, mesa: 9, lado: "novio" },
  { name: "Eduardo Kavanagh", personas: 1, mesa: 9, lado: "novio" },
  { name: "Erick Alvarez", personas: 2, mesa: 9, lado: "novio" },
  { name: "Fernando Soria", personas: 1, mesa: 9, lado: "novio" },
  { name: "Ivan Ferrer", personas: 2, mesa: 9, lado: "novio" },
  { name: "Wendy Campos", personas: 2, mesa: 9, lado: "novio" },

  { name: "Abraham Ortiz", personas: 1, mesa: 10, lado: "novio" },
  { name: "Isaac Huerta", personas: 2, mesa: 10, lado: "novio" },
  { name: "Luis Leon", personas: 1, mesa: 10, lado: "novio" },
  { name: "Rodolfo Galicia", personas: 2, mesa: 10, lado: "novio" },
  { name: "Victor Figueroa", personas: 4, mesa: 10, lado: "novio" },

  { name: "Alejandra Hernandez", personas: 2, mesa: 11, lado: "novio" },
  { name: "Arturo Villa", personas: 2, mesa: 11, lado: "novio" },
  { name: "Jimena Villa", personas: 2, mesa: 11, lado: "novio" },
  { name: "Violeta Martinez", personas: 1, mesa: 11, lado: "novio" },

  { name: "Alfredo Ramirez", personas: 2, mesa: 12, lado: "novio" },
  { name: "Eli Samuel", personas: 2, mesa: 12, lado: "novio" },
  { name: "Josue Osorio", personas: 1, mesa: 12, lado: "novio" },
  { name: "Ludvin Mejia", personas: 2, ninos: 1, mesa: 12, lado: "novio" },
  { name: "Miguel Angel Hernandez", personas: 1, mesa: 12, lado: "novio" },
  { name: "Ricardo Atzin", personas: 1, mesa: 12, lado: "novio" },

  { name: "Araceli Vazquez", personas: 2, mesa: 13, lado: "novio" },
  { name: "Cuauhtemoc Cabrera García", personas: 2, mesa: 13, lado: "novio" },
  { name: "Jose Alberto Vazquez", personas: 2, mesa: 13, lado: "novio" },
  { name: "Luis David Cruz", personas: 2, mesa: 13, lado: "novio" },
  { name: "Miguel Bajonero", personas: 1, mesa: 13, lado: "novio" },
  { name: "Victor Cruz", personas: 2, mesa: 13, lado: "novio" },

  { name: "Carlos Sierra", personas: 2, mesa: 14, lado: "novio" },
  { name: "Ismael Salgado", personas: 2, mesa: 14, lado: "novio" },
  { name: "Jaime Esquivel", personas: 2, mesa: 14, lado: "novio" },
  { name: "Jose Flores", personas: 2, mesa: 14, lado: "novio" },
  { name: "Julio Aguiñaga", personas: 2, mesa: 14, lado: "novio" },

  { name: "Adair Rojas", personas: 2, mesa: 15, lado: "novio" },
  { name: "César Guzman", personas: 2, mesa: 15, lado: "novio" },
  { name: "Hector Cinco", personas: 2, mesa: 15, lado: "novio" },
  { name: "Oscar Ramirez Ramirez", personas: 2, mesa: 15, lado: "novio" },
  { name: "Xavier Angeles Mendoza", personas: 2, mesa: 15, lado: "novio" },

  { name: "Axel Fernando Montiel Aviles", personas: 2, mesa: 16, lado: "novio" },
  { name: "Cesar Bautista Castilla", personas: 2, mesa: 16, lado: "novio" },
  { name: "Eduardo Peña", personas: 1, mesa: 16, lado: "novio" },
  { name: "Gabriela Martinez Juarez", personas: 2, mesa: 16, lado: "novio" },
  { name: "Ricardo Arreola Santander", personas: 2, mesa: 16, lado: "novio" },
];

export type MenuSection = {
  course: string;
  dishes: { name: string; description?: string }[];
};

export const menu: MenuSection[] = [
  {
    course: "Cóctel de bienvenida · 17:00 h",
    dishes: [
      {
        name: "Barra de bebidas",
        description: "Mezcal, vino espumoso, cerveza artesanal y bebidas sin alcohol.",
      },
      {
        name: "Canapés fríos y calientes",
        description:
          "Bruschetta de tomate confitado, brocheta caprese, mini quesadillas de huitlacoche y rollitos de salmón.",
      },
    ],
  },
  {
    course: "Entrada",
    dishes: [
      {
        name: "Ensalada de la casa",
        description:
          "Mezcla de hojas verdes, pera asada, nuez caramelizada y queso de cabra con vinagreta de miel de agave.",
      },
    ],
  },
  {
    course: "Sopa",
    dishes: [
      {
        name: "Crema de flor de calabaza",
        description: "Con un toque de epazote y crujiente de maíz azul.",
      },
    ],
  },
  {
    course: "Plato principal",
    dishes: [
      {
        name: "Filete de res al vino tinto",
        description:
          "Medallón de res con reducción de vino tinto, puré rústico de papa y vegetales de temporada.",
      },
      {
        name: "Opción alternativa · pollo",
        description: "Pechuga rellena de queso manchego en salsa de hierbas finas.",
      },
      {
        name: "Opción vegetariana",
        description:
          "Risotto cremoso de hongos silvestres con parmesano. Avísale a un capitán al llegar.",
      },
    ],
  },
  {
    course: "Postre",
    dishes: [
      {
        name: "Pastel de boda",
        description: "Tres leches con crema de vainilla y frutos del bosque.",
      },
      {
        name: "Mesa de dulces",
        description: "Selección de dulces tradicionales mexicanos para toda la noche.",
      },
    ],
  },
  {
    course: "Barra libre y café",
    dishes: [
      {
        name: "Barra libre",
        description: "Cocteles de autor, cerveza, vino y destilados premium.",
      },
      {
        name: "Café de olla y digestivos",
        description: "Café, tés e infusiones para cerrar la noche.",
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

export function searchParties(query: string, limit = 8): Party[] {
  const q = normalize(query);
  if (!q) return [];
  const tokens = q.split(" ").filter(Boolean);

  const scored = parties
    .map((p) => {
      const n = normalize(p.name);
      let score = 0;
      let allTokensMatch = true;
      for (const t of tokens) {
        if (n === t) {
          score += 15;
        } else if (n.startsWith(t + " ") || n === t) {
          score += 10;
        } else if (n.startsWith(t)) {
          score += 6;
        } else if (n.includes(" " + t)) {
          score += 5;
        } else if (n.includes(t)) {
          score += 2;
        } else {
          allTokensMatch = false;
        }
      }
      if (n === q) score += 50;
      if (n.startsWith(q)) score += 10;
      return { party: p, score, allTokensMatch };
    })
    .filter((r) => r.allTokensMatch && r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.party);

  return scored;
}

export function findExactParty(query: string): Party | undefined {
  const q = normalize(query);
  if (!q) return undefined;
  return parties.find((p) => normalize(p.name) === q);
}

export function getTable(id: number): Table | undefined {
  return tables.find((t) => t.id === id);
}

export function getPartiesAtTable(id: number): Party[] {
  return parties
    .filter((p) => p.mesa === id)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export function tableTotals(id: number): { parties: number; personas: number } {
  const list = getPartiesAtTable(id);
  return {
    parties: list.length,
    personas: list.reduce((acc, p) => acc + p.personas + (p.ninos ?? 0), 0),
  };
}

export function totalGuests(): number {
  return parties.reduce((acc, p) => acc + p.personas + (p.ninos ?? 0), 0);
}
