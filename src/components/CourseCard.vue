<template>
  <div class="course-card card-glass transition-all duration-700 ease-out hover:translate-y-[-10px]">
    
    <img :src="image" alt="" class="course-card-img">

    <div class="course-card-content">

      <div v-if="showBadge">
        <span class="badge badge-conocer">
          <i class="fas fa-certificate mr-[5px]"></i> {{badge}}
        </span>
      </div>
      
      <h3 class="course-card-title">
        {{ title }}
      </h3>
      
      <div class="mb-4" style="color: var(--color-text-muted); font-size: 0.9rem;">
        <i class="fas fa-vr-cardboard text-[var(--color-blue)] mr-[5px]"></i>
        {{includes}}
      </div>
      
      <router-link 
        :to="link" 
        class="btn-primary mt-auto text-center w-full block"
      >
        Ver Detalles del Curso
      </router-link>

    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: String,
  title: String,
  includes: String,
  image: String,
  link: String,
  showBadge: {
    type: Boolean,
    default: true
  }
})
</script>
