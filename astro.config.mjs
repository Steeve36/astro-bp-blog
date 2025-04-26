// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    
    // Intégration pour utiliser les propriétés de Astro Icon
    integrations: [icon()],
});



