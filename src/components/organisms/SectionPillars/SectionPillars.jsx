import PillarCard from '../../atoms/PillarCard/PillarCard';
import styles from './SectionPillars.module.css'

const SectionPillars = () =>{
    return(
        <>
        <section className={styles.pillars}>
            <h2 className={styles.title}>Nuestros pilares fundamentales:</h2>
            <div className={styles.cards}>
                <PillarCard 
                    icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.66667H9.33334C7.86157 6.66667 6.66667 7.86156 6.66667 9.33333V25.3333C6.66667 26.8051 7.86157 28 9.33334 28H22.6667C24.1384 28 25.3333 26.8051 25.3333 25.3333V9.33333C25.3333 7.86156 24.1384 6.66667 22.6667 6.66667H20M12 6.66667C12 8.13844 13.1949 9.33333 14.6667 9.33333H17.3333C18.8051 9.33333 20 8.13844 20 6.66667M12 6.66667C12 5.19489 13.1949 4 14.6667 4H17.3333C18.8051 4 20 5.19489 20 6.66667M12 18.6667L14.6667 21.3333L20 16" stroke="#2563EB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                    title="Utilidad" 
                    description="Información sobre trámites, de fuentes oficiales con
                                consejos que ahorran tiempo y aseguran el éxito de los mismos." />
                <PillarCard 
                    icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_21)">
                            <path d="M22.6667 26.6667H29.3334V24C29.3332 22.2961 28.2536 20.7792 26.6437 20.221C25.0337 19.6629 23.2469 20.1859 22.192 21.524M22.6667 26.6667H9.33335M22.6667 26.6667V24C22.6667 23.1254 22.4987 22.2894 22.192 21.524M9.33335 26.6667H2.66669V24C2.66681 22.2961 3.7464 20.7792 5.35635 20.221C6.96631 19.6629 8.75314 20.1859 9.80802 21.524M9.33335 26.6667V24C9.33335 23.1254 9.50135 22.2894 9.80802 21.524M9.80802 21.524C10.8211 18.9924 13.2732 17.3324 16 17.3324C18.7268 17.3324 21.179 18.9924 22.192 21.524M20 9.33337C20 11.541 18.2077 13.3334 16 13.3334C13.7924 13.3334 12 11.541 12 9.33337C12 7.12571 13.7924 5.33337 16 5.33337C18.2077 5.33337 20 7.12571 20 9.33337L22.6667 26.6667M30.6667 30.6667C30.6667 32.1385 29.4718 33.3334 28 33.3334C26.5282 33.3334 25.3334 32.1385 25.3334 30.6667C25.3334 29.1949 26.5282 28 28 28C29.4718 28 30.6667 29.1949 30.6667 30.6667V30.6667M9.33335 13.3334C9.33335 14.8051 8.13846 16 6.66669 16C5.19491 16 4.00002 14.8051 4.00002 13.3334C4.00002 11.8616 5.19491 10.6667 6.66669 10.6667C8.13846 10.6667 9.33335 11.8616 9.33335 13.3334V13.3334" stroke="#2563EB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_21">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>} 
                    title="Comunidad" 
                    description="Valida los trámites compartiendo experiencias. Ayuda a otros 
                                documentando el tuyo."/>
                <PillarCard 
                    icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75739 8.42401C4.63215 9.54923 4 11.0754 4 12.6667C4 14.258 4.63215 15.7841 5.75739 16.9093L16.0001 27.152L26.2427 16.9093C28.5843 14.5678 28.5843 10.7656 26.2427 8.42401C23.9011 6.08242 20.099 6.08242 17.7574 8.42401L16.0001 10.1813L14.2427 8.42401C13.1175 7.29878 11.5914 6.66663 10.0001 6.66663C8.40874 6.66663 6.88261 7.29878 5.75739 8.42401V8.42401" stroke="#2563EB" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>} 
                    title="Empatía" 
                    description="Comprendemos los obstáculos y la incertidumbre de no saber por 
                                dónde empezar."/>
            </div>
        </section>
        </>
    )
}

export default SectionPillars;