import TATETI from '../assets/Ta-Te-Ti.png'
import VALIDATION_SOFTWARE from '../assets/Validation-Software.png'
import TECNICORT from '../assets/Tecnicort.png'
import { Project } from '../interfaces/functionProps'

export const Projects: Project[] = [
    { img: TATETI, link: 'https://santino-stimoli.github.io/Ta-Te-Ti/', repo: 'https://github.com/santino-stimoli/Ta-Te-Ti', title: 'Ta Te Ti' },
    { img: TECNICORT, link: 'https://santino-stimoli.github.io/Tecnicort/', repo: 'https://github.com/santino-stimoli/Tecnicort', title: 'Generador facturas' },
    { img: VALIDATION_SOFTWARE, link: 'https://github.com/santino-stimoli/validation-software', repo: 'https://santino-stimoli.github.io/validation-software/', title: 'Test + detección facial' },
]