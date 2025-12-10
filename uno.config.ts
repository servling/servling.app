import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
    ],
    theme: {
        fontFamily: {
            sans: 'Inter',
            display: 'Outfit',
        },
        colors: {
            brand: {
                primary: '#193CB8',
                purple: '#6E11B0',
                dark: '#0F172A',
            }
        }
    }
})
