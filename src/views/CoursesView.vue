<template>
  <section class="min-h-screen bg-[var(--color-bg)] py-20 px-6">
    
    <!-- HEADER -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-blue-dark)] mb-6">
        Nuestros Cursos
      </h1>

      <p class="text-[var(--color-text-muted)] text-lg leading-relaxed">
        Capacítate con tecnología de simulación avanzada y obtén certificación oficial.
      </p>
    </div>

    <!-- GRID DE CURSOS -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      <CourseCard
        v-for="course in courses"
        :key="course.title"
        v-bind="course"
      />

    </div>

  </section>
</template>

<script setup>
import CourseCard from '../components/CourseCard.vue'

const courses = [
  {
    badge: "Alineado a CONOCER",
    title: "Hidráulica Industrial",
    includes: "Simulador interactivo + prácticas reales",
    image: "/images/proximamente.png",
    link: "/courses/hidraulica"
  },
  {
    badge: "Certificación Profesional",
    title: "Neumática Aplicada",
    includes: "Laboratorio virtual + evaluación técnica",
    image: "/images/proximamente.png",
    link: "/courses/neumatica"
  },
  {
    badge: "Alta Demanda",
    title: "Electricidad Industrial",
    includes: "Simulación + casos reales",
    image: "/images/proximamente.png",
    link: "/courses/electricidad"
  },
  {
    badge: "Especialización",
    title: "PLC y Automatización",
    includes: "Programación + simuladores SCADA",
    image: "/images/proximamente.png",
    link: "/courses/plc"
  },
  {
    badge: "Certificación Técnica",
    title: "Mantenimiento Industrial",
    includes: "Diagnóstico + prácticas guiadas",
    image: "/images/proximamente.png",
    link: "/courses/mantenimiento"
  },
  {
    badge: "Nuevo",
    title: "Energías Renovables",
    includes: "Simulación de sistemas solares",
    image: "/images/proximamente.png",
    link: "/courses/energia"
  }
]
</script>