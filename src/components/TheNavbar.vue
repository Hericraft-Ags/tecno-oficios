<template>
    <div class="header header-container">
        <router-link to="/" data-aos="fade-right">
        <img 
            src="../assets/logo.png" 
            alt="TecnoOficios Lab"
            class="h-[65px] w-auto"
        />
        </router-link>
        
        <nav class="header-nav">
            <router-link to="/">Inicio</router-link>
            <router-link to="/courses">Cursos</router-link>
            <router-link to="/methodology">Metodología</router-link>
            <a href="#" onclick="event.preventDefault(); window.open(atob('aHR0cHM6Ly9tb29kbGUudGVjbm9vZmljaW9zLmNvbQ=='), '_blank');" class="btn-glass btn-glow-pulse aulabtn" style="font-weight: 700;">
                <i class="fas fa-laptop-code mr-[8px]"></i> Iniciar Sesión
            </a>
        </nav>
    </div>
</template>