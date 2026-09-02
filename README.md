# 🚨 Wezwanie SW

Bot Discord.js z komendą `/wezwanie`, przeznaczoną do systemu wezwań w serwerze roleplay.

## Funkcje

- Slash command `/wezwanie`
- Roblox Username
- Roblox ID
- Powód wezwania
- Czas na stawienie się
- Estetyczny embed
- Informacja, kto wystawił wezwanie
- Timestamp
- Opcjonalna blokada komendy do konkretnej roli
- Opcjonalny kanał docelowy

## Instalacja

1. Zainstaluj Node.js 18 lub nowszy.
2. Otwórz terminal w folderze projektu.
3. Wpisz:

```bash
npm install
```

4. Skopiuj `.env.example` jako `.env`.
5. Uzupełnij:
   - `TOKEN`
   - `CLIENT_ID`
   - `GUILD_ID`

6. Zarejestruj komendę:

```bash
npm run deploy
```

7. Uruchom bota:

```bash
npm start
```

## Użycie

```text
/wezwanie roblox_username:ugorowo5 roblox_id:123 powod:"pom 1" czas:"5 min"
```

## Uprawnienia bota

Przy zapraszaniu bota zaznacz scope:
- `bot`
- `applications.commands`

Bot potrzebuje m.in.:
- View Channels
- Send Messages
- Embed Links

## Bezpieczeństwo

Nigdy nie wrzucaj tokenu bota do GitHuba. Plik `.env` jest już dodany do `.gitignore`.
