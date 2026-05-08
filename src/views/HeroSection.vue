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
      Capacitación híbrida 100% online. Prepara todo tu portafolio y conocimiento para obtener la certificación por la <span class="whitespace-nowrap">RED-CONOCER</span>. La industria requiere expertos CERTIFICADOS.
    </p>
    <div 
      data-aos="zoom-in" 
      data-aos-delay="400"
      class="flex gap-6 justify-center flex-wrap"
    >
      <router-link 
        to="/courses"
        class="btn-primary px-[2.5rem] py-[1.2rem] text-[1.2rem] bg-[var(--color-blue-dark)]"
      >
        Ver Catálogo
      </router-link>
    </div>
  </div>
</section>

<!-- Sección SCORM -->
<section id="metodologia" class="py-8 bg-transparent">
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
      <div class="monitor-screen relative overflow-hidden rounded-[var(--border-radius-lg)]">

        <iframe class="w-full h-full" src="https://www.youtube.com/embed/dxqMJ4SGYCc?si=dKfcC0xM1wAMYR5B"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>

      </div>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 pt-8 mt-24">

      <!-- CARD 1 -->
      <div 
        data-aos="fade-right" 
        data-aos-delay="300" 
        class="card-glass p-10 rounded-[var(--border-radius-lg)]
              transform transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
      >
        <div class="text-[3.5rem] text-[var(--color-blue)] mb-6 [filter:drop-shadow(0_4px_6px_rgba(44,110,158,0.3))]">
          <i class="fas fa-project-diagram"></i>
        </div>

        <h3 class="text-[1.5rem]">
          Aprendizaje Interactivo
        </h3>

        <p class="text-[var(--color-text-muted)] mt-4">
          Módulos dinámicos que evalúan tu progreso paso a paso, asegurando la retención del conocimiento técnico mediante feedback instantáneo.
        </p>
      </div>

      <!-- CARD 2 -->
      <div 
        data-aos="fade-left" 
        data-aos-delay="700" 
        class="card-glass p-10 rounded-[var(--border-radius-lg)]
              transform transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
      >
        <div class="text-[3.5rem] text-[var(--color-green)] mb-6 [filter:drop-shadow(0_4px_6px_rgba(164,198,57,0.3))]">
          <i class="fas fa-vr-cardboard"></i>
        </div>

        <h3 class="text-[1.5rem]">
          Simuladores Técnicos
        </h3>

        <p class="text-[var(--color-text-muted)] mt-4">
          Practica de forma segura en entornos virtuales tipo Blueprint (planos y esquemas detallados) antes de tocar las herramientas reales en tu evaluación presencial.
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
      class="text-center text-[2.5rem] mb-10"
    >
      Tu camino hacia la Certificación
    </h2>

    <h3 class="text-[1.4rem] text-[var(--color-text-muted)] text-center mb-16">
      Con Tecno Oficios no solo tomas un curso, recorres un camino diseñado por expertos para que obtengas tu Certificaciòn de Competencia Laboral.
    </h3>
    
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

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow transform transition-all duration-300 ease-out hover:translate-x-5">
          <div class="flex items-center gap-3">

            <img 
              src="../assets/iconos-01.png" 
              alt="Icono de laptop con un libro"
              class="w-20 h-auto object-contain"
            >

            <h3 class="text-[1.4rem] text-[#021980] mt-5">
              Teoría y Simuladores (Online)
            </h3>

          </div>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Aprende a tu ritmo con lecciones interactivas, videos técnicos y simuladores que recrean los desafíos reales de tu oficio.
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

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow transform transition-all duration-300 ease-out hover:translate-x-5">
          <div class="flex items-center gap-3">

            <img 
              src="../assets/iconos-02.png" 
              alt="Icono de examen siendo revisado"
              class="w-20 h-auto object-contain"
            >

            <h3 class="text-[1.4rem] text-[#021980] mt-5">
              Entrenamiento y Validación (Diagnóstico)
            </h3>

          </div>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Pon a prueba tus conocimientos con nuestro simulador de examen. Identificamos tus fortalezas y reforzamos lo que te falta para asegurar tu aprobación.
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

        <div class="card-glass p-8 rounded-[var(--border-radius-lg)] flex-grow border-2 border-[var(--color-green)] transform transition-all duration-300 ease-out hover:translate-x-5">
          <div class="flex items-center gap-3">

            <img 
              src="../assets/iconos-03.png" 
              alt="Simulador"
              class="w-20 h-auto object-contain"
            >

            <h3 class="text-[1.4rem] text-[var(--color-green-dark)] mt-5">
              Evaluación de competencia (Presencial / Certificación)
            </h3>

          </div>

          <p class="text-[var(--color-text-muted)] mt-2 text-[1.1rem]">
            Demuestra tu destreza ante un evaluador certificado en nuestros centros aliados. Obtén tu certificado con validez nacional emitido por la RED-CONOCER.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Sección Catálogo -->
<section id="cursos" class="py-12 bg-transparent">
  <div class="container">   
    <h2 
      data-aos="fade-down" 
      class="text-center text-[2.5rem] mb-16"
    >
      Catálogo de Cursos Destacados
    </h2>    
    <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 max-w-[1000px] mx-auto">      
      <CourseCard
        badge="Alineado a RED-CONOCER (EC0324)"
        title="Instalación de la red hidráulica y sanitaria"
        includes="Simulador interactivo incluido"
        image="https://imgs.search.brave.com/4EXu7MHQM_ojg8zEqemgunYduLkZrE3h8cUFTL3zXt8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y3Vyc29zYXVsYTIx/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNC9BZG9i/ZVN0b2NrXzEyMjA5/MjY3OC1lMTU1NDEx/MjY5MTU1Ni5qcGVn"
        link="/hidraulic-course"
      />
    </div>
  </div>
</section>
</template>

<script setup>
import CourseCard from '../components/CourseCard.vue'
</script>