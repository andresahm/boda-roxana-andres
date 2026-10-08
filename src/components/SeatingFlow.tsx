"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  type Guest,
  findExactGuest,
  getGuestsAtTable,
  getTable,
  menuLabel,
  searchGuests,
  wedding,
} from "@/lib/wedding";
import { OrnamentFlourish } from "./WeddingHeader";

type Step = "welcome" | "search" | "result";

export function SeatingFlow() {
  const [step, setStep] = useState<Step>("welcome");
  const [query, setQuery] = useState("");
  const [guest, setGuest] = useState<Guest | null>(null);

  const suggestions = useMemo(() => searchGuests(query, 6), [query]);
  const showNoMatches =
    step === "search" && query.trim().length >= 2 && suggestions.length === 0;

  function handleSelect(g: Guest) {
    setGuest(g);
    setQuery(g.name);
    setStep("result");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const exact = findExactGuest(query);
    if (exact) {
      handleSelect(exact);
      return;
    }
    if (suggestions.length === 1) {
      handleSelect(suggestions[0]);
    }
  }

  function reset() {
    setGuest(null);
    setQuery("");
    setStep("welcome");
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-6">
        {step === "welcome" && <Welcome onStart={() => setStep("search")} />}
        {step === "search" && (
          <Search
            query={query}
            setQuery={setQuery}
            onSubmit={handleSubmit}
            onSelect={handleSelect}
            suggestions={suggestions}
            showNoMatches={showNoMatches}
            onBack={() => setStep("welcome")}
          />
        )}
        {step === "result" && guest && <Result guest={guest} onReset={reset} />}
      </div>
    </section>
  );
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center py-10 sm:py-14 animate-fade-up">
      <span className="hairline">Bienvenidos a nuestra boda</span>
      <h1 className="font-serif text-5xl sm:text-7xl mt-6 leading-none">
        {wedding.bride}
        <span className="block text-accent italic text-3xl sm:text-4xl my-2">&</span>
        {wedding.groom}
      </h1>
      <div className="divider-ornament mt-6">
        <OrnamentFlourish />
      </div>
      <p className="font-serif italic text-xl mt-4 text-foreground/80">
        {wedding.dateLabel}
      </p>
      <p className="text-sm text-foreground/60 mt-1 tracking-widest uppercase">
        {wedding.venue} · Recepción {wedding.reception}
      </p>

      <div className="card mt-10 p-8 sm:p-10 text-left">
        <p className="font-serif text-2xl sm:text-3xl text-foreground">
          Gracias por acompañarnos.
        </p>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          Para esta noche hemos preparado una ubicación especial para cada uno
          de nuestros invitados. Toca el botón y escribe tu nombre para encontrar
          tu mesa, conocer el menú y ver el orden de la noche.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
          <button className="btn-primary" onClick={onStart}>
            Encontrar mi mesa
          </button>
          <Link href="/menu" className="btn-ghost">
            Ver el menú
          </Link>
          <Link href="/mesas" className="btn-ghost">
            Orden de las mesas
          </Link>
        </div>
      </div>
    </div>
  );
}

function Search({
  query,
  setQuery,
  onSubmit,
  onSelect,
  suggestions,
  showNoMatches,
  onBack,
}: {
  query: string;
  setQuery: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSelect: (g: Guest) => void;
  suggestions: Guest[];
  showNoMatches: boolean;
  onBack: () => void;
}) {
  return (
    <div className="py-10 sm:py-14 animate-fade-up">
      <div className="text-center">
        <span className="hairline">Encuentra tu mesa</span>
        <h2 className="font-serif text-4xl sm:text-5xl mt-5">¿Cuál es tu nombre?</h2>
        <p className="text-foreground/70 mt-3">
          Escribe tu nombre tal como aparece en tu invitación. No importan las
          mayúsculas ni los acentos.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8">
        <div className="card p-5 sm:p-6">
          <label htmlFor="guest-name" className="sr-only">
            Nombre
          </label>
          <input
            id="guest-name"
            className="field"
            placeholder="Ej. María Fernanda"
            autoFocus
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {suggestions.length > 0 && (
            <ul className="mt-4 divide-y divide-border/60 border border-border/60 rounded-xl overflow-hidden bg-white">
              {suggestions.map((g) => {
                const t = getTable(g.tableId);
                return (
                  <li key={g.name}>
                    <button
                      type="button"
                      onClick={() => onSelect(g)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 hover:bg-muted transition-colors"
                    >
                      <span className="font-serif text-lg">{g.name}</span>
                      <span className="chip">{t?.name ?? `Mesa ${g.tableId}`}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {showNoMatches && (
            <p className="mt-4 text-sm text-foreground/70 bg-muted/70 border border-border/70 rounded-lg p-3">
              No encontramos ese nombre. Prueba con otra forma de escribirlo o
              acércate a los anfitriones y con gusto te ayudaremos.
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="button" onClick={onBack} className="btn-ghost">
              ← Volver
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={suggestions.length === 0}
              style={{ opacity: suggestions.length === 0 ? 0.5 : 1 }}
            >
              Buscar mi mesa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Result({ guest, onReset }: { guest: Guest; onReset: () => void }) {
  const table = getTable(guest.tableId);
  const companions = getGuestsAtTable(guest.tableId).filter(
    (g) => g.name !== guest.name,
  );

  return (
    <div className="py-10 sm:py-14 animate-fade-up">
      <div className="text-center">
        <span className="hairline">Tu lugar esta noche</span>
        <p className="font-serif italic text-xl mt-5 text-foreground/70">
          Hola,
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl mt-1">{guest.name}</h2>

        <div className="mt-8 inline-flex flex-col items-center">
          <div className="card px-10 py-8 sm:px-14 sm:py-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Te sentarás en
            </p>
            <p className="font-serif text-6xl sm:text-7xl mt-2 text-primary">
              {table ? (table.id === 1 ? "Honor" : table.id) : guest.tableId}
            </p>
            <p className="font-serif text-2xl mt-1">{table?.name}</p>
            {table?.description && (
              <p className="text-foreground/60 mt-2 italic">{table.description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-10">
        <div className="card p-6">
          <h3 className="font-serif text-2xl flex items-center gap-2">
            Tu menú
            <OrnamentFlourish />
          </h3>
          {guest.menu ? (
            <>
              <p className="chip mt-3">{guest.menu}</p>
              <p className="font-serif text-xl mt-3">{menuLabel[guest.menu]}</p>
              <p className="text-foreground/70 mt-2 text-sm">
                Reservamos tu platillo principal con base en tu confirmación.
                Si deseas cambiarlo, avísale a nuestro capitán de meseros.
              </p>
            </>
          ) : (
            <p className="mt-3 text-foreground/70">
              Esta mesa comparte el servicio principal del menú. Consulta el
              menú completo para los detalles.
            </p>
          )}
          <Link href="/menu" className="btn-ghost mt-5 inline-flex">
            Ver menú completo →
          </Link>
        </div>

        <div className="card p-6">
          <h3 className="font-serif text-2xl flex items-center gap-2">
            Te acompañan
            <OrnamentFlourish />
          </h3>
          {companions.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {companions.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-serif text-lg">{c.name}</span>
                  {c.menu && <span className="chip">{menuLabel[c.menu]}</span>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-foreground/70">
              Tendrás una experiencia muy íntima esta noche.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/mesas" className="btn-primary">
          Ver el orden de las mesas
        </Link>
        <button type="button" onClick={onReset} className="btn-ghost">
          Buscar otro nombre
        </button>
      </div>
    </div>
  );
}
