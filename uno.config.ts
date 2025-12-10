import { defineConfig, presetAttributify, presetWind4 } from 'unocss'

export default defineConfig({
    presets: [
        presetWind4({
            preflights: {
                reset: true,
                theme: {
                    mode: 'on-demand',
                },
            },
        }),
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
            },
        },
    },
})
