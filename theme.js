(async function applyFightcraftTheme(){
  const url = window.FIGHTCRAFT_SUPABASE_URL;
  const key = window.FIGHTCRAFT_SUPABASE_ANON_KEY;
  if (!url || !key) return;

  try {
    const response = await fetch(
      `${url}/rest/v1/site_settings?id=eq.main&select=content`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        cache: 'no-store'
      }
    );

    if (!response.ok) return;

    const rows = await response.json();
    const settings = rows[0]?.content || {};
    const root = document.documentElement;

    if (settings.accent) {
      root.style.setProperty('--accent', settings.accent);
      root.style.setProperty('--lime', settings.accent);
    }
    if (settings.background) root.style.setProperty('--bg', settings.background);
    if (settings.panel) root.style.setProperty('--panel', settings.panel);
  } catch (error) {
    console.info('Could not load Fightcraft colour settings.');
  }
})();
