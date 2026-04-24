<template>
<!-- Hero Section -->
<section class="hero-glow-container text-center py-32 overflow-hidden relative">
  <div class="container relative z-[2]">
    <h1 
      data-aos="fade-down"
      class="text-[3.5rem] mb-6 text-[var(--color-blue-dark)] max-w-[800px] mx-auto leading-[1.2]"
    >
      Domina un Oficio con <br/>
      <span class="text-[var(--color-blue)] [text-shadow:var(--shadow-glow)]">
        Tecnología de Simulación
      </span>
    </h1>
    <p 
      data-aos="fade-up" 
      data-aos-delay="200"
      class="text-[1.25rem] text-[var(--color-text-muted)] max-w-[600px] mx-auto mb-12 leading-[1.8]"
    >
      Capacitación híbrida 100% online con certificación presencial SEP-CONOCER. La industria requiere expertos.
    </p>
    <div 
      data-aos="zoom-in" 
      data-aos-delay="400"
      class="flex gap-6 justify-center flex-wrap"
    >
      <a 
        href="#" 
        class="btn-glass btn-glow-pulse px-[2.5rem] py-[1.2rem] text-[1.2rem]"
      >
        <i class="fas fa-laptop-code mr-[10px]"></i> 
        Probar Simulador
      </a>
      <a 
        href="#cursos" 
        class="btn-primary px-[2.5rem] py-[1.2rem] text-[1.2rem] bg-[var(--color-blue-dark)]"
      >
        Ver Catálogo
      </a>
    </div>
  </div>
</section>

<!-- Sección SCORM -->
<section id="metodologia" class="py-12 bg-transparent">
  <div class="container text-center">
    <h2 
      data-aos="fade-up" 
      class="text-[2.5rem] mb-16"
    >
      No somos solo videos
    </h2>
    <div 
      data-aos="zoom-in-up" 
      data-aos-delay="200" 
      class="monitor-mockup mb-20"
    >
      <div class="monitor-screen relative">
        <img 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Simulador Técnico SCORM"
        >
        <!-- Botón play centrado -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="w-20 h-20 bg-[rgba(164,198,57,0.8)] rounded-full flex items-center justify-center text-[2rem] text-white cursor-pointer backdrop-blur-[5px] shadow-[var(--shadow-glow)]">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 pt-8 mt-24">

      <!-- CARD 1 -->
      <div 
        data-aos="fade-right" 
        data-aos-delay="300" 
        class="card-glass p-10 rounded-[var(--border-radius-lg)]"
      >
        <div class="text-[3.5rem] text-[var(--color-blue)] mb-6 [filter:drop-shadow(0_4px_6px_rgba(44,110,158,0.3))]">
          <i class="fas fa-project-diagram"></i>
        </div>
        <h3 class="text-[1.5rem]">
          Aprendizaje Interactivo SCORM
        </h3>
        <p class="text-[var(--color-text-muted)] mt-4">
          Módulos dinámicos que evalúan tu progreso paso a paso, asegurando la retención del conocimiento técnico mediante feedback instantáneo.
        </p>
      </div>
      
      <!-- CARD 2 -->
      <div 
        data-aos="fade-left" 
        data-aos-delay="700" 
        class="card-glass p-10 rounded-[var(--border-radius-lg)]"
      >
        <div class="text-[3.5rem] text-[var(--color-green)] mb-6 [filter:drop-shadow(0_4px_6px_rgba(164,198,57,0.3))]">
          <i class="fas fa-vr-cardboard"></i>
        </div>
        <h3 class="text-[1.5rem]">
          Simuladores de Realidad Técnica
        </h3>
        <p class="text-[var(--color-text-muted)] mt-4">
          Practica de forma segura en entornos virtuales tipo Blueprint antes de tocar las herramientas reales en tu evaluación presencial.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Ruta del Alumno (Stepper) -->
<section class="py-12 bg-transparent">
  <div class="container">
    
    <h2 
      data-aos="fade-down" 
      class="text-center text-[2.5rem] mb-16"
    >
      Tu camino hacia la Certificación
    </h2>
    
    <div class="flex flex-col gap-10 max-w-[800px] mx-auto pl-[10px]">
      
      <!-- Paso 1 -->
      <div 
        data-aos="fade-up" 
        data-aos-delay="100" 
        class="roadmap-step flex gap-8 relative"
      >
        <div class="roadmap-connector"></div>

        <div class="w-16 h-16 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-[1.7rem] font-bold shrink-0 relative z-[2] shadow-[0_0_15px_rgba(44,110,158,0.4)]">
          1
        </div>

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow">
          <h3 class="text-[1.4rem]">
            Teoría y Simuladores (Online)
          </h3>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Aprende los fundamentos a tu propio ritmo mediante nuestra plataforma SCORM y practica con simuladores técnicos especializados.
          </p>
        </div>
      </div>
      
      <!-- Paso 2 -->
      <div 
        data-aos="fade-up" 
        data-aos-delay="200" 
        class="roadmap-step flex gap-8 relative"
      >
        <div class="roadmap-connector"></div>

        <div class="w-16 h-16 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-[1.7rem] font-bold shrink-0 relative z-[2] shadow-[0_0_15px_rgba(44,110,158,0.4)]">
          2
        </div>

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow">
          <h3 class="text-[1.4rem]">
            Examen Diagnóstico (Online)
          </h3>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Evalúa tus conocimientos teóricos antes de presentarte a la prueba práctica, garantizando que estás listo para aprobar sin sorpresas.
          </p>
        </div>
      </div>
      
      <!-- Paso 3 -->
      <div 
        data-aos="fade-up" 
        data-aos-delay="300" 
        class="roadmap-step flex gap-8 relative"
      >
        <div class="w-16 h-16 rounded-full bg-[var(--color-green)] text-white flex items-center justify-center text-[1.7rem] font-bold shrink-0 relative z-[2] shadow-[var(--shadow-glow)]">
          <i class="fas fa-check"></i>
        </div>

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow border-2 border-[var(--color-green)]">
          <h3 class="text-[var(--color-green-dark)] text-[1.4rem]">
            Evaluación y Certificación (Presencial)
          </h3>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Demuestra tus habilidades en un centro evaluador equipado y obtén tu certificado oficial SEP-CONOCER con validez nacional.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Sección Catálogo -->
<section id="cursos" class="py-12" style="background-color: transparent;">
    <div class="container">
        <h2 data-aos="fade-down" class="text-center" style="font-size: 2.5rem; margin-bottom: 4rem;">Catálogo de Cursos Destacados</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
            <CourseCard
            badge="Alineado a CONOCER (EC0324)"
            title="Instalación de la red hidráulica y sanitaria"
            includes="Simulador Interactivo Incluido"
            image="/img/hidraulica.jpg"
            link="/hidraulic-course"
            />
        </div>
    </div>
</section>
</template>

<script setup>
import CourseCard from '../components/CourseCard.vue'
</script>