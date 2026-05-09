<template>
  <section class="bg-[var(--color-bg)] text-[var(--color-text-main)]">

    <!-- HERO -->
    <div class="py-20 px-6 text-center max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-blue-dark)] mb-6">
        Nuestra Metodología
      </h1>

      <p class="text-lg text-[var(--color-text-muted)] leading-relaxed">
        Combinamos tecnología de simulación, aprendizaje interactivo y evaluación práctica
        para formar profesionales listos para la industria.
      </p>
    </div>

    <!-- BLOQUE PRINCIPAL -->
    <div class="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-2xl font-semibold text-[var(--color-blue)] mb-4">
          Aprender haciendo
        </h2>

        <p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">
          Nuestra metodología se basa en la exposición constante a retos técnicos. A través 
          de simuladores interactivos, el estudiante desarrolla la <strong class="text-[#39aa35]">agilidad mental y el criterio 
          técnico</strong> necesarios para dominar los procesos antes de ejecutarlos en escenarios físicos.
        </p>

        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span><strong class="text-[#39aa35]">Simulación técnica de escenarios: </strong>Resolución de casos reales en entornos virtuales seguros.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span><strong class="text-[#39aa35]">Feedback inmediato: </strong>Corrección de errores en tiempo real para un aprendizaje basado en las mejores prácticas.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span><strong class="text-[#39aa35]">Ruta a la certificación oficial: </strong>Preparación integral alineada a los estándares de la RED-CONOCER.</span>
          </li>
        </ul>
      </div>

      <!-- IMAGEN -->
      <div>
        <img 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
          class="rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03]"
        />
      </div>

    </div>

    <!-- PROCESO -->
    <div class="bg-white py-20 px-6">
      
      <div class="max-w-6xl mx-auto text-center mb-16">
        <h2 class="text-3xl font-bold text-[var(--color-blue-dark)] mb-4">
          Nuestro Proceso
        </h2>
        <p class="text-[var(--color-text-muted)]">
          Un enfoque estructurado que garantiza aprendizaje real
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <!-- CARD 1 -->
        <div class="p-8 rounded-[var(--border-radius-lg)]
                    border border-gray-300
                    shadow-[var(--shadow-soft)]
                    hover:shadow-[var(--shadow-hover)]
                    transition-all duration-300 ease-out
                    transform hover:-translate-y-2
                    bg-white text-center">

          <div class="text-4xl mb-4 text-[var(--color-blue)] flex justify-center">
            <i class="fas fa-laptop-code mb-1"></i>
          </div>

          <h3 class="text-xl font-semibold mb-2 text-center">
            Aprendizaje interactivo
          </h3>

          <p class="text-[var(--color-text-muted)] text-center">
            Accede a contenido dinámico y lecciones técnicas diseñadas por expertos, desde cualquier lugar.
          </p>
        </div>

        <!-- CARD 2 -->
        <div class="p-8 rounded-[var(--border-radius-lg)]
                    border border-gray-300
                    shadow-[var(--shadow-soft)]
                    hover:shadow-[var(--shadow-hover)]
                    transition-all duration-300 ease-out
                    transform hover:-translate-y-2
                    bg-white text-center">

          <div class="text-4xl mb-4 text-[var(--color-green)] flex justify-center">
            <i class="fas fa-gears mb-1"></i>
          </div>

          <h3 class="text-xl font-semibold mb-2 text-center">
            Simulación Técnica
          </h3>

          <p class="text-[var(--color-text-muted)] text-center">
            Practica en entornos virtuales que replican situaciones reales de trabajo.
          </p>
        </div>

        <!-- CARD 3 -->
        <div class="p-8 rounded-[var(--border-radius-lg)]
                    border border-gray-300
                    shadow-[var(--shadow-soft)]
                    hover:shadow-[var(--shadow-hover)]
                    transition-all duration-300 ease-out
                    transform hover:-translate-y-2
                    bg-white text-center">

          <div class="text-4xl mb-4 text-[var(--color-blue-dark)] flex justify-center">
            <i class="fas fa-check-circle mb-1"></i>
          </div>

          <h3 class="text-xl font-semibold mb-2 text-center">
            Evaluación Presencial
          </h3>

          <p class="text-[var(--color-text-muted)] text-center">
            Demuestra tus habilidades en un entorno controlado para certificación.
          </p>
        </div>

      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <h2 class="text-3xl font-bold text-[var(--color-blue-dark)] mb-6">
        ¿Listo para comenzar?
      </h2>

      <p class="text-[var(--color-text-muted)] mb-8">
        Explora nuestros cursos y empieza tu formación hoy mismo.
      </p>

      <router-link 
        to="/courses"
        class="px-8 py-4 bg-blue-500 text-white rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] transform transition-all duration-300 ease-out hover:text-lime-300"
      >
        Ver Cursos
      </router-link>
    </div>

  </section>
</template>

<script setup>
</script>