<template>
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Columna 1 -->
            <div>
                <h3 class="footer-heading">Sobre TecnoOficios Lab</h3>
                <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                    Somos una academia técnica de alto nivel especializada en la capacitación híbrida mediante simuladores interactivos SCORM, preparando a nuestros estudiantes para certificaciones SEP-CONOCER.
                </p>
            </div>
            
            <!-- Columna 2 -->
            <div>
                <h3 class="footer-heading">Enlaces Rápidos</h3>
                <ul class="footer-links">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/courses">Catálogo de Cursos</router-link></li>
                    <li><router-link to="/methodology">Nuestra Metodología</router-link></li>
                    <li><a href="#" onclick="event.preventDefault(); window.open(atob('aHR0cHM6Ly9tb29kbGUudGVjbm9vZmljaW9zLmNvbQ=='), '_blank');">Aula Virtual</a></li>
                </ul>
            </div>
            
            <!-- Columna 3 -->
            <div>
                <h3 class="footer-heading">Contacto y Redes</h3>
                <ul class="footer-links">
                    <li><i class="fas fa-envelope" style="margin-right: 10px;"></i> info@tecnooficios.com</li>
                    <li><i class="fas fa-phone" style="margin-right: 10px;"></i> +52 (55) 1234-5678</li>
                    <li style="margin-top: 1rem;">
                        <a href="#" style="font-size: 1.5rem; margin-right: 15px;"><i class="fab fa-facebook"></i></a>
                        <a href="#" style="font-size: 1.5rem; margin-right: 15px;"><i class="fab fa-instagram"></i></a>
                        <a href="#" style="font-size: 1.5rem;"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy;TecnoOficios Lab. Capacitación Técnica de Clase Mundial.</p>
        </div>
    </div>
</footer>
</template>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });

        // Prevent right click on images and technical diagrams
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG' || e.target.closest('.technical-diagram') || e.target.closest('.badge')) {
                e.preventDefault();
            }
        });
    });
</script>