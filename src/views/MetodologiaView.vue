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
          Nuestra metodología se basa en la práctica constante. A través de simuladores
          interactivos, el estudiante adquiere experiencia real antes de enfrentarse a
          escenarios físicos.
        </p>

        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span>Simulación técnica en entornos virtuales</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span>Evaluación continua con feedback inmediato</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[var(--color-green)]">✔</span>
            <span>Preparación para certificación oficial</span>
          </li>
        </ul>
      </div>

      <!-- IMAGEN -->
      <div>
        <img 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
          class="rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)]"
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

        <div class="p-8 rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all">
          <div class="text-4xl mb-4 text-[var(--color-blue)]">1</div>
          <h3 class="text-xl font-semibold mb-2">Aprendizaje Digital</h3>
          <p class="text-[var(--color-text-muted)]">
            Accede a contenido interactivo y módulos SCORM desde cualquier lugar.
          </p>
        </div>

        <div class="p-8 rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all">
          <div class="text-4xl mb-4 text-[var(--color-green)]">2</div>
          <h3 class="text-xl font-semibold mb-2">Simulación Técnica</h3>
          <p class="text-[var(--color-text-muted)]">
            Practica en entornos virtuales que replican situaciones reales de trabajo.
          </p>
        </div>

        <div class="p-8 rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all">
          <div class="text-4xl mb-4 text-[var(--color-blue-dark)]">3</div>
          <h3 class="text-xl font-semibold mb-2">Evaluación Presencial</h3>
          <p class="text-[var(--color-text-muted)]">
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
        class="px-8 py-4 bg-[var(--color-blue)] text-white rounded-[var(--border-radius-lg)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all"
      >
        Ver Cursos
      </router-link>
    </div>

  </section>
</template>

<script setup>
</script>