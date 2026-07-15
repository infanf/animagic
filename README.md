# AnimagiC 2026 – Messe-App (PWA)

Inoffizielle Progressive Web App zur AnimagiC 2026 (31. Juli – 2. August 2026, Rosengarten Mannheim). Datenbasis: offizielles Programmheft (`AnimagiC_Programmheft_2026.pdf`) + animagic.de.

## Features

- **Zeitplan**: 269 Programmpunkte aus den offiziellen Programmtafeln (Mozartsaal, Musensaal, Crunchyroll Cinema, CineMagic 1, AnimagiC-Kino 1–3, Signing-Room) plus 80 Signierstunden an den Publisher-Ständen (peppermint anime, Black Screen Records, Crunchyroll VIP-Area, altraverse, Carlsen, Egmont, Dokico, AniMoon, TOHO, Manlin …), gruppiert nach Uhrzeit
- **Filter**: Tag, Raum (inkl. „Publisher-Stände“), Kategorie (Konzert, Screening, Panel, Workshop, Signierstunde …), Volltextsuche, „Nur Premieren“
- **Alternativtermine**: Events, die mehrfach stattfinden, zeigen ein „↻ n Termine“-Tag; im Detail-Dialog sind alle weiteren Termine verlinkt
- **Mein Plan**: Events per Stern speichern (localStorage), chronologische Übersicht pro Tag, Warnung bei Zeitüberschneidungen
- **Event-Details**: Zusatzinfos aus dem Programmheft (Gast-Bios, Film-Infos, FSK, Sprache, Saaleinlass-Zeiten)
- **FAQ**: 17 Einträge – Öffnungszeiten, Einlass/Armbänder, Ticketpreise, verbotene Gegenstände, Cosplay-Regeln, Foto-Regeln, Altersregelungen, Barrierefreiheit, Anfahrt, Essen & Trinken
- **PWA**: offline-fähig (Service Worker, Cache-first), installierbar (Manifest + Icons), mobile-first Dark Theme

## Struktur

```
app/
  index.html          App-Shell
  styles.css          Styling (Dark Theme, AnimagiC-Farben)
  data.js             Events, Räume, Kategorien, FAQ, Saaleinlass-Zeiten
  details.js          Zusatzbeschreibungen (per Slug den Events zugeordnet)
  app.js              Logik: Filter, Favoriten, Modal, Navigation
  manifest.webmanifest
  sw.js               Service Worker (Cache "animagic26-v1")
  img/                SVG + PNG (192/512)
```

## Lokal starten

```bash
python3 -m http.server 8734 --directory app
# → http://localhost:8734
```

## Deployment

Beliebiger statischer Hoster (nginx, GitHub Pages, Netlify …). Für die PWA-Installation und den Service Worker ist **HTTPS erforderlich** (Ausnahme: localhost). Bei Datenänderungen den Cache-Namen in `sw.js` hochzählen (`animagic26-v2` …), damit Clients die neue Version laden.
