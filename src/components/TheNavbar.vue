<template>
    <div class="container header-container">
        <a href="" class="header-logo" data-aos="fade-right">
            <!-- Si tienes el logo, usa: <img src="assets/img/logo.png" alt="TecnoOficios Lab"> -->
            <!-- Placeholder en texto con los colores de la marca -->
            <h2 style="margin:0;"><span style="color:var(--color-blue)">Tecno</span><span style="color:var(--color-green)">Oficios</span> Lab</h2>
        </a>
        
        <nav class="header-nav" data-aos="fade-left">
            <router-link to="/">Inicio</router-link>
            <router-link to="/courses">Cursos</router-link>
            <router-link to="/methodology">Metodología</router-link>
            <a href="#" onclick="event.preventDefault(); window.open(atob('aHR0cHM6Ly9tb29kbGUudGVjbm9vZmljaW9zLmNvbQ=='), '_blank');" class="btn-glass btn-glow-pulse" style="font-weight: 700;">
                <i class="fas fa-laptop-code" style="margin-right: 8px;"></i> Ir al Aula Virtual
            </a>
        </nav>
    </div>
</template>