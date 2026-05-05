<template>
    <!-- Hero Section de Curso -->
    <section class="hero-glow-container text-center" style="padding: 6rem 0; overflow: hidden; position: relative;">
        <div class="container" style="position: relative; z-index: 2;">
            
            <div data-aos="fade-down" class="badge badge-conocer" style="font-size: 1.1rem; padding: 0.6rem 2rem; margin-bottom: 2rem; display: inline-block; border: 1px solid rgba(164, 198, 57, 0.3);">
                <i class="fas fa-certificate" style="margin-right: 8px;"></i> Prepárate para la certificación oficial RED-CONOCER
            </div>
            
            <h1 data-aos="fade-up" data-aos-delay="100" style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--color-blue-dark); max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.2; text-shadow: var(--shadow-glow);">
                Instalación de la red hidráulica y sanitaria
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="200" style="font-size: 1.5rem; font-weight: 500; color: var(--color-text-muted); margin-bottom: 3.5rem;">
                en edificaciones de vivienda (Estándar EC0324). <br><br>Sé el técnico(a) que las constructoras buscan.
            </h2>
            
            <div data-aos="zoom-in" data-aos-delay="300" style="display: flex; justify-content: center;">
                <a href="#" onclick="event.preventDefault(); window.location.href=atob('aHR0cHM6Ly9tb29kbGUudGVjbm9vZmljaW9zLmNvbQ==');" class="btn-glass btn-glow-pulse" style="padding: 1.2rem 2.5rem; font-size: 1.2rem; display: inline-flex; align-items: center;">
                    <i class="fas fa-laptop-code" style="margin-right: 10px; font-size: 1.4rem;"></i> Iniciar Capacitación en Aula Virtual
                </a>
            </div>
        </div>
    </section>

<!-- Ficha Técnica & Perfil de Egreso -->
<section class="py-12" style="background: transparent;">
    <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: start;">
            
            <!-- Ficha Técnica (Glassmorphism) -->
            <div data-aos="fade-right" class="card-glass" style="padding: 2.5rem; border-radius: var(--border-radius-lg);">
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(44, 110, 158, 0.2); padding-bottom: 1rem; color: var(--color-blue-dark);">
                    <i class="fas fa-clipboard-list" style="color: var(--color-blue); margin-right: 10px;"></i> Ficha Técnica
                </h3>
                <ul style="list-style: none; padding: 0; color: var(--color-text-main);">
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: center; font-size: 1.1rem;">
                        <i class="fas fa-clock" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem;"></i>
                        <strong>Duración estimada:</strong>&nbsp; 124 horas de capacitación
                    </li>
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: center; font-size: 1.1rem;">
                        <i class="fas fa-layer-group" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem;"></i>
                        <strong>Nivel de competencia:</strong>&nbsp; 2 (Sistema Nacional de Competencias)
                    </li>
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: flex-start; font-size: 1.1rem;">
                        <i class="fas fa-check-square" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem; margin-top: 3px;"></i>
                        <span><strong>Evaluación:</strong>&nbsp; 6 horas totales (1 en gabinete, 5 en campo)</span>
                    </li>
                </ul>
                
                <h4 style="margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-blue-dark); font-size: 1.2rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(44, 110, 158, 0.2);">Perfil del estudiante</h4>
                <ul style="list-style: none; padding: 0; color: var(--color-text-main);">
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: center; font-size: 1.1rem;">
                        <i class="fas fa-clock" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem;"></i>
                        <span><strong>Técnicos y plomeros:</strong> Que buscan certificar su experiencia con un documento oficial de la RED-CONOCER.</span>
                    </li>
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: center; font-size: 1.1rem;">
                        <i class="fas fa-layer-group" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem;"></i>
                        <span><strong>Personal de mantenimiento:</strong> Interesados en actualizarse en nuevas tecnologías (PPR/Termofusión).</span>
                    </li>
                    <li style="margin-bottom: 1.2rem; display: flex; align-items: flex-start; font-size: 1.1rem;">
                        <i class="fas fa-check-square" style="color: var(--color-green); margin-right: 15px; font-size: 1.3rem; margin-top: 3px;"></i>
                        <span><strong>Público en general:</strong> Entusiastas que desean aprender desde cero con bases de ingeniería y normatividad nacional para proyectos propios o emprendimiento.</span>
                    </li>
                </ul>

                <div style="display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 0.6rem;">
                    <!-- BOTÓN -->
                    <button 
                        @click="showModal = true"
                        class="px-6 py-3 bg-[var(--color-blue)] text-white rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] hover:bg-[var(--color-blue-dark)] hover:-translate-y-1 transition-all duration-300"
                    >
                        Ver requerimientos
                    </button>
                </div>
            </div>

            <!-- Perfil de Egreso -->
            <div data-aos="fade-left" data-aos-delay="200" style="display: flex; flex-direction: column; justify-content: center;">
                <h3 style="font-size: 2.2rem; margin-bottom: 1.5rem; color: var(--color-blue-dark);">Perfil de Egreso</h3>
                <p style="font-size: 1.2rem; color: var(--color-text-muted); line-height: 1.8; margin-bottom: 2rem;">
                    Al finalizar tu formación en TecnoOficios, serás un profesional técnico capaz de transformar un diseño 
                    isométrico en una realidad operativa. Dominarás con precisión el habilitado de tuberías en diversos materiales 
                    y ejecutarás instalaciones hidrosanitarias de alta calidad, garantizando la hermeticidad del sistema mediante pruebas t
                    écnicas oficiales. Estarás plenamente preparado para obtener tu certificación ante la RED CONOCER.
                </p>
                <div style="background: rgba(255,255,255,0.6); border-left: 4px solid var(--color-green); padding: 1.5rem; border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;">
                    <ul class="module-list" style="margin-top: 0; color: var(--color-text-main);">
                        <li><i class="fas fa-medal"></i> <span>Interpretación y transformación de diseños isométricos en instalaciones operativas.</span></li>
                        <li><i class="fas fa-medal"></i> <span>Habilitado preciso de tuberías en distintos materiales.</span></li>
                        <li><i class="fas fa-medal"></i> <span>Ejecución de instalaciones hidrosanitarias de alta calidad.</span></li>
                        <li><i class="fas fa-medal"></i> <span>Aplicación de pruebas técnicas oficiales para garantizar la hermeticidad del sistema.</span></li>
                        <li><i class="fas fa-medal"></i> <span>Preparación integral para la certificación ante la RED CONOCER.</span></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Modal -->
 <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-90"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0"
  >
<div 
    v-if="showModal"
    @click="showModal = false"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300"
>
    <!-- Caja -->
    <div 
    @click.stop
    class="bg-white rounded-[var(--border-radius-lg)] p-10  w-full max-w-5xl 
           max-h-[80vh] overflow-y-auto shadow-lg transform transition-all duration-300 scale-95">

        <!-- Botón cerrar -->
        <button 
            @click="showModal = false"
            class="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
            ✕
        </button>

        <!-- Contenido -->
        <h2 class="text-xl font-bold mb-4 text-[var(--color-blue-dark)]">
            Equipamiento y requerimientos:
        </h2>

        <div class="space-y-5">

            <!-- Intro -->
            <p class="text-center text-[var(--color-text-muted)] text-[1.1rem] max-w-2xl mx-auto leading-relaxed">
                Para alcanzar la competencia, el alumno(a) dominará el uso y gestión de los siguientes recursos:
            </p>


            <!-- Grid -->
            <div class="grid md:grid-cols-2 gap-6">

                <!-- CARD 1 -->
                <div class="p-6 rounded-[var(--border-radius-lg)] border border-gray-200 bg-white 
                            shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]
                            transition-all duration-300 transform hover:-translate-y-1">

                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-[rgba(44,110,158,0.1)] text-[var(--color-blue)]
                                flex items-center justify-center text-xl mr-3">
                    <i class="fas fa-fire"></i>
                    </div>
                    <h3 class="font-semibold text-[var(--color-blue-dark)]">
                    Sistemas de unión
                    </h3>
                </div>

                <ul class="space-y-2 text-sm text-[var(--color-text-muted)]">
                    <li><strong>Soldadura:</strong> Soplete, gas, soldadura y fundente.</li>
                    <li><strong>Químicos:</strong> Pegamento PVC/CPVC y limpiador.</li>
                    <li><strong>Termofusión:</strong> Dados.</li>
                    <li><strong>Sellado:</strong> Cinta teflón.</li>
                    <li><strong>Limpieza:</strong> Lija y estopa.</li>
                </ul>
                </div>


                <!-- CARD 2 -->
                <div class="p-6 rounded-[var(--border-radius-lg)] border border-gray-200 bg-white 
                            shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]
                            transition-all duration-300 transform hover:-translate-y-1">

                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-[rgba(44,110,158,0.1)] text-[var(--color-blue)]
                                flex items-center justify-center text-xl mr-3">
                    <i class="fas fa-tools"></i>
                    </div>
                    <h3 class="font-semibold text-[var(--color-blue-dark)]">
                    Herramientas
                    </h3>
                </div>

                <ul class="space-y-2 text-sm text-[var(--color-text-muted)]">
                    <li><strong>Plano:</strong> Guía de trazo.</li>
                    <li><strong>Corte:</strong> Cortador, tijeras, escariador.</li>
                    <li><strong>Medición:</strong> Flexómetro, nivel, manguera.</li>
                    <li><strong>Ajuste:</strong> Llaves, pinzas y desarmadores.</li>
                </ul>
                </div>


                <!-- CARD 3 -->
                <div class="p-6 rounded-[var(--border-radius-lg)] border border-gray-200 bg-white 
                            shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]
                            transition-all duration-300 transform hover:-translate-y-1">

                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-[rgba(44,110,158,0.1)] text-[var(--color-blue)]
                                flex items-center justify-center text-xl mr-3">
                    <i class="fas fa-network-wired"></i>
                    </div>
                    <h3 class="font-semibold text-[var(--color-blue-dark)]">
                    Infraestructura
                    </h3>
                </div>

                <ul class="space-y-2 text-sm text-[var(--color-text-muted)]">
                    <li><strong>Muebles:</strong> WC, lavabo, regadera.</li>
                    <li><strong>Control:</strong> Calentador y válvulas.</li>
                    <li><strong>Desagüe:</strong> Céspol bote y tipo P.</li>
                    <li><strong>Red:</strong> Tuberías y conexiones.</li>
                </ul>
                </div>


                <!-- CARD 4 -->
                <div class="p-6 rounded-[var(--border-radius-lg)] border border-gray-200 bg-white 
                            shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]
                            transition-all duration-300 transform hover:-translate-y-1">

                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-[rgba(164,198,57,0.15)] text-[var(--color-green-dark)]
                                flex items-center justify-center text-xl mr-3">
                    <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="font-semibold text-[var(--color-green-dark)]">
                    Seguridad
                    </h3>
                </div>

                <ul class="space-y-2 text-sm text-[var(--color-text-muted)]">
                    <li><strong>Corporal:</strong> Ropa de algodón.</li>
                    <li><strong>Protección:</strong> Botas, guantes y lentes.</li>
                </ul>
                </div>

            </div>

        </div>

    </div>
</div>
</transition>

<!-- Módulos de Aprendizaje (Acordeón) -->
<section class="py-12" style="background-color: transparent;">
    <div class="container">
        <div class="text-center mb-4">
            <h2 data-aos="fade-up" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-blue-dark);">Módulos de Aprendizaje</h2>
            <p data-aos="fade-up" data-aos-delay="100" style="color: var(--color-text-muted); font-size: 1.1rem; margin-bottom: 3rem;">Explora los elementos de competencia que dominarás en el curso.</p>
        </div>
        
        <div style="max-width: 900px; margin: 0 auto;">
            
            <!-- Módulo 1 -->
            <div class="accordion-item">
                <div 
                    class="accordion-header"
                    :class="{ active: activeIndex === 0 }"
                    @click="toggleAccordion(0)"
                >
                    <div class="flex items-center text-[1.25rem]">
                    <div class="w-10 h-10 rounded-full bg-[rgba(44,110,158,0.1)] text-[var(--color-blue)] flex items-center justify-center mr-[15px]">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    Módulo 1: Introducción a la red hidráulica y sanitaria
                    </div>
                    <i class="fas fa-chevron-down accordion-icon"></i>
                </div>
                <div 
                    class="accordion-body"
                    :style="activeIndex === 0 ? { maxHeight: '1000px' } : { maxHeight: '0px' }"
                >
                    <div class="accordion-content">
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">Dominarás la lógica técnica detrás de cada instalación. Aprenderás a leer el lenguaje de los planos, 
                        calcular presiones y caudales, e identificar los materiales correctos para asegurar que tu proyecto nazca con bases sólidas bajo el estándar EC0324.</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <ul class="module-list mt-0">
                                <li><i class="fas fa-check-circle"></i> <span>Sistemas hidrosanitarios: Diferencias clave entre redes de presión y de gravedad.</span></li>
                                <li><i class="fas fa-check-circle"></i> <span>Lectura de planos e isométricos: Interpretación experta de planos y simbología técnica.</span></li>
                                <li><i class="fas fa-check-circle"></i> <span>Física del agua: Controla la presión y el caudal para evitar fallas críticas en la instalación.</span></li>
                            </ul>
                            <ul class="module-list mt-0">
                                <li><i class="fas fa-check-circle"></i> <span>Selección de materiales: Identifica el tubo y la conexión ideal (Cobre, CPVC, PVC, PPR) según la normativa.</span></li>
                                <li><i class="fas fa-check-circle"></i> <span>Trazo y medición: Aprende a realizar levantamientos precisos y listas de materiales sin desperdicios.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Módulo 2 -->
            <div class="accordion-item">
                <div 
                    class="accordion-header"
                    :class="{ active: activeIndex === 1 }"
                    @click="toggleAccordion(1)"
                >
                    <div class="flex items-center text-[1.25rem]">
                    <div class="w-10 h-10 rounded-full bg-[rgba(164,198,57,0.15)] text-[var(--color-green-dark)] flex items-center justify-center mr-[15px]">
                        <i class="fas fa-wrench"></i>
                    </div>
                    Módulo 2: Puesta en marcha
                    </div>
                    <i class="fas fa-chevron-down accordion-icon"></i>
                </div>
                <div 
                    class="accordion-body"
                    :style="activeIndex === 1 ? { maxHeight: '1000px' } : { maxHeight: '0px' }"
                >
                    <div class="accordion-content">
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">Aplica todo lo habilitado para proceder al ensamblaje final, integración de equipos y la exhaustiva verificación de calidad y presiones de la instalación.</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <ul class="module-list mt-0">
                                <li><i class="fas fa-check-circle"></i> <span>Armado estructurado de redes hidráulicas y sanitarias completas.</span></li>
                                <li><i class="fas fa-check-circle"></i> <span>Conexión técnica e instalación de muebles (WC, lavabo, regadera).</span></li>
                            </ul>
                            <ul class="module-list mt-0">
                                <li><i class="fas fa-check-circle"></i> <span>Ejecución de pruebas de hermeticidad y presión.</span></li>
                                <li><i class="fas fa-check-circle"></i> <span>Verificación de funcionamiento, purgado y entrega profesional.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Experiencia Lab (SCORM) -->
<section class="py-12" style="background-color: transparent;">
    <div class="container">
        <div data-aos="zoom-in" data-aos-duration="1000" class="card-glass" style="padding: 4rem 3rem; border-radius: var(--border-radius-lg); text-align: center; position: relative; overflow: hidden; border: 1px solid rgba(164,198,57,0.3);">
            <!-- Background Glow effect specifically for this block -->
            <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(164,198,57,0.08) 0%, transparent 60%); z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <div style="width: 80px; height: 80px; background: var(--color-blue); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem; box-shadow: var(--shadow-glow);">
                    <i class="fas fa-vr-cardboard"></i>
                </div>
                
                <h2 style="font-size: 2.5rem; color: var(--color-blue-dark); margin-bottom: 1.5rem;">
                    Experiencia Lab (SCORM)
                </h2>
                
                <p style="font-size: 1.25rem; color: var(--color-text-main); max-width: 800px; margin: 0 auto 2.5rem; line-height: 1.8;">
                    Nuestros simuladores interactivos logran cubrir el equivalente a <strong style="color: var(--color-green-dark); font-size: 1.3rem;">400 horas de experiencia práctica</strong> requeridas por la industria. Mediante la inmersión virtual intensiva, te enfrentarás a escenarios técnicos complejos sin riesgos materiales, cimentando la memoria muscular y la toma de decisiones <em>antes</em> de tocar una herramienta real en tu evaluación física.
                </p>
                
                <a href="#" onclick="event.preventDefault(); window.location.href=atob('aHR0cHM6Ly9tb29kbGUudGVjbm9vZmljaW9zLmNvbQ==');" class="btn-primary btn-glow-pulse" style="font-size: 1.2rem; padding: 1.2rem 2.5rem; display: inline-flex; align-items: center; font-weight: 700;">
                    <i class="fas fa-play-circle" style="margin-right: 10px; font-size: 1.5rem;"></i> Comenzar Módulos Simulados
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<!-- Script para Accordion -->
<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const activeIndex = ref(0)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

</script>
