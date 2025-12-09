import { defineConfig, presetUno, presetAttributify, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/'
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:400,600,700',
                display: 'Outfit:400,700',
            },
        }),
    ],
    theme: {
        colors: {
            brand: {
                primary: '#193CB8',
                purple: '#6E11B0',
                dark: '#0F172A',
            }
        }
    }
})
