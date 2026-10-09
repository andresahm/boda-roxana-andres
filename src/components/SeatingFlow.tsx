"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  type Party,
  findExactParty,
  getPartiesAtTable,
  getTable,
  searchParties,
  wedding,
} from "@/lib/wedding";
import { OrnamentFlourish } from "./WeddingHeader";

type Step = "welcome" | "search" | "result";

export function SeatingFlow() {
  const [step, setStep] = useState<Step>("welcome");
  const [query, setQuery] = useState("");
  const [party, setParty] = useState<Party | null>(null);

  const suggestions = useMemo(() => searchParties(query, 8), [query]);
  const showNoMatches =
    step === "search" && query.trim().length >= 2 && suggestions.length === 0;

  function handleSelect(p: Party) {
    setParty(p);
    setQuery(p.name);
    setStep("result");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const exact = findExactParty(query);
    if (exact) {
      handleSelect(exact);
      return;
    }
    if (suggestions.length === 1) {
      handleSelect(suggestions[0]);
    }
  }

  function reset() {
    setParty(null);
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
        {step === "result" && party && <Result party={party} onReset={reset} />}
      </div>
    </section>
  );
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center py-10 sm:py-14 animate-fade-up">
      <span className="hairline">Bienvenido a nuestra boda</span>
      <h1 className="font-serif text-6xl sm:text-7xl mt-6 leading-none tracking-tight">
        {wedding.bride}
        <span className="block text-accent-dark italic text-3xl sm:text-4xl my-2">
          &amp;
        </span>
        {wedding.groom}
      </h1>
      <div className="divider-ornament mt-6">
        <OrnamentFlourish />
      </div>
      <p className="font-serif italic text-xl mt-4 text-foreground/80">
        {wedding.dateLabel}
      </p>
      <p className="text-sm text-foreground/60 mt-1 tracking-[0.25em] uppercase">
        {wedding.venue} · Jiutepec, Morelos
      </p>

      <div className="card mt-10 p-8 sm:p-10 text-left">
        <p className="font-serif text-2xl sm:text-3xl text-foreground">
          Gracias por acompañarnos.
        </p>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          Hemos preparado una mesa especial para cada uno de nuestros invitados.
          Escribe tu nombre o el de la persona bajo la que llegó tu invitación
          y aparecerá al instante tu mesa, el menú y la distribución del salón.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
          <button className="btn-primary" onClick={onStart}>
            Encontrar mi mesa
          </button>
          <Link href="/menu" className="btn-ghost">
            Ver el menú
          </Link>
          <Link href="/mesas" className="btn-ghost">
            Orden de las mesas
          </Link>
          <Link href="/fotos" className="btn-ghost">
            Sube tus fotos
          </Link>
          <Link href="/regalos" className="btn-ghost">
            Mesa de regalos
          </Link>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mt-6 text-left">
        {wedding.schedule.map((item) => (
          <div key={item.label} className="card px-5 py-4">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">
              {item.label}
            </p>
            <p className="font-serif text-2xl mt-1">{item.time} h</p>
          </div>
        ))}
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
  onSelect: (p: Party) => void;
  suggestions: Party[];
  showNoMatches: boolean;
  onBack: () => void;
}) {
  return (
    <div className="py-10 sm:py-14 animate-fade-up">
      <div className="text-center">
        <span className="hairline">Encuentra tu mesa</span>
        <h2 className="font-serif text-4xl sm:text-5xl mt-5">¿Cuál es tu nombre?</h2>
        <p className="text-foreground/70 mt-3 max-w-md mx-auto">
          Escríbelo tal como aparece en tu invitación. No importan los acentos
          ni las mayúsculas. Si vienes acompañado, prueba también con el nombre
          del titular de la invitación.
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
              {suggestions.map((p) => {
                const t = getTable(p.mesa);
                const total = p.personas + (p.ninos ?? 0);
                return (
                  <li key={p.name}>
                    <button
                      type="button"
                      onClick={() => onSelect(p)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 hover:bg-muted transition-colors"
                    >
                      <span>
                        <span className="font-serif text-lg block">
                          {p.name}
                        </span>
                        <span className="text-xs text-foreground/60">
                          {total === 1 ? "1 lugar" : `${total} lugares`}
                        </span>
                      </span>
                      <span className="chip">{t?.label ?? `Mesa ${p.mesa}`}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {showNoMatches && (
            <p className="mt-4 text-sm text-foreground/70 bg-muted/70 border border-border/70 rounded-lg p-3">
              No encontramos ese nombre. Puede que tu invitación esté a nombre
              de la persona con la que vienes; intenta buscar con ese nombre o
              acércate a los anfitriones y con gusto te orientamos.
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
            >
              Buscar mi mesa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Result({ party, onReset }: { party: Party; onReset: () => void }) {
  const table = getTable(party.mesa);
  const companions = getPartiesAtTable(party.mesa).filter(
    (g) => g.name !== party.name,
  );
  const total = party.personas + (party.ninos ?? 0);

  return (
    <div className="py-10 sm:py-14 animate-fade-up">
      <div className="text-center">
        <span className="hairline">Tu lugar esta noche</span>
        <p className="font-serif italic text-xl mt-5 text-foreground/70">
          Bienvenido,
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl mt-1">{party.name}</h2>
        <p className="text-sm text-foreground/60 mt-2">
          {total === 1
            ? "Tienes 1 lugar reservado"
            : `Tienen ${total} lugares reservados`}
          {party.ninos ? ` (incluye ${party.ninos} niño${party.ninos > 1 ? "s" : ""})` : ""}
          .
        </p>

        <div className="mt-8 inline-flex flex-col items-center">
          <div className="card px-10 py-8 sm:px-14 sm:py-10 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent-dark">
              Te sentarás en la
            </p>
            <p className="font-serif text-7xl sm:text-8xl mt-2 text-primary leading-none">
              {party.mesa}
            </p>
            <p className="font-serif text-2xl mt-2">{table?.label}</p>
            {table?.description && (
              <p className="text-foreground/60 mt-1 italic">
                {table.description}
              </p>
            )}
            {table && (
              <p className="chip chip-accent mt-4">
                Zona {table.area} · {table.shape === "round" ? "mesa redonda" : "mesa rectangular"}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-10">
        <div className="card p-6">
          <h3 className="font-serif text-2xl flex items-center gap-2">
            El menú
            <OrnamentFlourish />
          </h3>
          <p className="mt-3 text-foreground/70">
            Cóctel de bienvenida con mezcal y nieve artesanal, dos opciones de
            entrada, crema, plato principal y postre a elegir. Al cierre, hay
            tornaboda con chilaquiles y tortas de cochinita.
          </p>
          <Link href="/menu" className="btn-ghost mt-5 inline-flex">
            Ver menú completo →
          </Link>
        </div>

        <div className="card p-6">
          <h3 className="font-serif text-2xl flex items-center gap-2">
            Compartirás mesa con
            <OrnamentFlourish />
          </h3>
          {companions.length > 0 ? (
            <ul className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
              {companions.map((c) => {
                const t = c.personas + (c.ninos ?? 0);
                return (
                  <li
                    key={c.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="font-serif text-lg leading-tight">
                      {c.name}
                    </span>
                    <span className="text-xs text-foreground/60 shrink-0">
                      {t === 1 ? "1 lugar" : `${t} lugares`}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-3 text-foreground/70">
              Tendrás una experiencia muy íntima esta noche.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
        <Link href="/mesas" className="btn-primary">
          Ver el salón completo
        </Link>
        <Link href="/fotos" className="btn-ghost">
          Sube tus fotos 📸
        </Link>
        <button type="button" onClick={onReset} className="btn-ghost">
          Buscar otro nombre
        </button>
      </div>
    </div>
  );
}
