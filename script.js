
        document.getElementById("nombre").addEventListener("input", function() {
            document.getElementById("tablaNombre").textContent = this.value;
        });
        
        document.getElementById("apellido").addEventListener("input", function() {
            document.getElementById("tablaApellido").textContent = this.value;
        });

        document.getElementById("email").addEventListener("input", function() {
            document.getElementById("tablaEmail").textContent = this.value;
        });

        document.getElementById("telefono").addEventListener("input", function() {
            document.getElementById("tablaTelefono").textContent = this.value;
        });

        document.getElementById("edad").addEventListener("input", function() {
            document.getElementById("tablaEdad").textContent = this.value;
        });

        document.getElementById("direccion").addEventListener("input", function() {
            document.getElementById("tablaDireccion").textContent = this.value;
        });

        document.getElementById("provincia").addEventListener("input", function() {
            document.getElementById("tablaProvincia").textContent = this.value;
        });

        document.getElementById("codigoPostal").addEventListener("input", function() {
            document.getElementById("tablaCodigoPostal").textContent = this.value;
        });

        // Método preferido de contacto
        document.querySelectorAll("input[name='contacto']").forEach(function(element) {
            element.addEventListener("change", function() {
                document.getElementById("tablaContacto").textContent = this.nextElementSibling.textContent;
            });
        });

        //suscripción
        document.querySelectorAll("input[name='suscripcion']").forEach(function(element) {
            element.addEventListener("change", function() {
                const suscripciones = Array.from(document.querySelectorAll("input[name='suscripcion']:checked"))
                    .map(input => input.nextElementSibling.textContent)
                    .join(", ");
                document.getElementById("tablaSuscripcion").textContent = suscripciones;
            });
        });
        
        //acercade boton leer mas
        function toggleCV() {
            const abridged = document.getElementById("cv-abridged");
            const full = document.getElementById("cv-full");
            const button = document.getElementById("read-more-btn");
        
            if (full.style.display === "none") {
                full.style.display = "block";
                abridged.style.display = "none";
                button.innerText = "Leer menos";
            } else {
                full.style.display = "none";
                abridged.style.display = "block";
                button.innerText = "Leer más";
            }
        }
        
        if (window.location.pathname.includes("acercade.html")) {
            const button = document.getElementById("read-more-btn");
            if (button) {
                button.addEventListener("click", toggleCV);
            }
        }
        
