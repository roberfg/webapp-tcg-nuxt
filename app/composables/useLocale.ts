type Locale = 'es' | 'en'

const translations = {
  es: {
    home: '← Inicio',
    help: 'Ayuda',
    coming_soon: 'Próximamente...',
    footer_report: 'Si ves algún problema con la web, por favor infórmalo en',
    footer_thanks: '¡Gracias!',
    collage: 'Collage',
    collage_magic_title: 'Collage Generator - Magic',
    collage_pokemon_title: 'Collage Generator - Pokémon',
    enter_cards: 'Ingresa tu lista de cartas',
    formats_magic: 'Formatos: cantidad nombre / cantidad,"nombre"',
    format_pokemon: 'Formato: cantidad nombre set numero',
    process_list: 'Procesar lista',
    processing: 'Procesando...',
    deck_title: 'Cartas',
    cards_unique: 'cartas únicas',
    settings: 'Configuración',
    columns: 'Columnas',
    columns_hint: 'Recomendado para Móvil: 3 columnas',
    background: 'Fondo',
    circle: 'Círculo',
    gap: 'Espaciado',
    border: 'Borde',
    badge: 'Badge',
    diamond: 'Diamante',
    hexagon: 'Hexágono',
    generate_collage: 'Generar collage',
    download_png: 'Descargar PNG',
    preview: 'Preview',
    row: 'fila',
    not_found_label: 'No encontradas',
    api_error_label: 'Error al buscar (problema de red o API)',
    processing_progress: 'Procesando {processed}/{total}...',
    cards_loaded: '{count} cartas cargadas',
    not_found_count: '{count} no encontradas',
    error_processing: 'Error al procesar',
    generating: 'Generando...',
    collage_ready: 'Collage listo',
  },
  en: {
    home: '← Home',
    help: 'Help',
    coming_soon: 'Coming soon...',
    footer_report: 'If you see any issue with the website, please report it at',
    footer_thanks: 'Thanks!',
    collage: 'Collage',
    collage_magic_title: 'Collage Generator - Magic',
    collage_pokemon_title: 'Collage Generator - Pokémon',
    enter_cards: 'Enter your card list',
    formats_magic: 'Formats: quantity name / quantity,"name"',
    format_pokemon: 'Format: quantity name set number',
    process_list: 'Process list',
    processing: 'Processing...',
    deck_title: 'Cards',
    cards_unique: 'unique cards',
    settings: 'Settings',
    columns: 'Columns',
    columns_hint: 'Recommended for Mobile: 3 columns',
    background: 'Background',
    circle: 'Circle',
    gap: 'Gap',
    border: 'Border',
    badge: 'Badge',
    diamond: 'Diamond',
    hexagon: 'Hexagon',
    generate_collage: 'Generate collage',
    download_png: 'Download PNG',
    preview: 'Preview',
    row: 'row',
    not_found_label: 'Not found',
    api_error_label: 'Search error (network or API issue)',
    processing_progress: 'Processing {processed}/{total}...',
    cards_loaded: '{count} cards loaded',
    not_found_count: '{count} not found',
    error_processing: 'Error processing',
    generating: 'Generating...',
    collage_ready: 'Collage ready',
  }
}

type TranslationKey = keyof typeof translations.es

export const useLocale = () => {
  const locale = useState<Locale>('locale', () => {
    if (import.meta.client) {
      return (localStorage.getItem('locale') as Locale) || 'es'
    }
    return 'es'
  })

  const setLocale = (lang: Locale) => {
    locale.value = lang
    if (import.meta.client) localStorage.setItem('locale', lang)
  }

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    let text = translations[locale.value][key] as string
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v))
      })
    }
    return text
  }

  return { locale, setLocale, t }
}
