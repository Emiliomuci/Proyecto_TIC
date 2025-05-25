## Proyecto Comparativo de Rendimiento: Máquina Virtual (VM) vs Docker

## Introducción
Este proyecto compara el rendimiento y el uso de recursos entre una máquina virtual (VirtualBox) y un contenedor Docker, ejecutando una aplicación sencilla de Node.js que simula una playlist musical.

## Configuración del entorno
Aspecto	Máquina Virtual (VM)	Docker
Hipervisor	VirtualBox	Docker Engine
Sistema operativo	Ubuntu Server 22.04 LTS	Imagen base node:18-alpine
Recursos asignados	2 CPU, 2 GB RAM, 20 GB disco	Uso dinámico, limitado por contenedor
Aplicación ejecutada	App Node.js (playlist musical)	Misma app Node.js en contenedor
Puertos	3000 (expuesto en VM)	3000 (mapeado al host)


### Estructura del Proyecto
# Proyecto_TIC/  
│
-  .gitignore        # Archivos ignorados por Git  
│
│
-  README.md         # Documentación del proyecto
│
│
-  install.ipynb     # Dependencias y scripts de Node.js

# Proyecto_TIC/vm_vs_docker_benchmark/
│
│
- notebooks/         # Código fuente Node.js (servidor y estáticos). Dockerfile para construir la imagen
│
│
- scripts/           # Información extra y gráficas 


## Cómo ejecutar

En Máquina Virtual (VM)
# Instalar Node.js
# Clonar el repositorio
npm install
node app/index.js
Accede desde el navegador a:
http://<ip-vm>:3000

En Docker
# Construir la imagen
docker build -t playlist-app -f docker/Dockerfile .

# Ejecutar el contenedor
docker run -d -p 3000:3000 playlist-app
Accede desde el navegador a:
http://localhost:3000

## Detalles de la Aplicación
La app fue desarrollada en Node.js + Express y permite:

Ver una lista de canciones (playlist)
Agregar nuevas canciones mediante un formulario
Servir la interfaz en el puerto 3000
Esta app se usó para medir consumo de recursos y rendimiento bajo carga en ambos entornos.

## Comandos Útiles
Acción	Comando
Construir imagen Docker	docker build -t playlist-app .
Ejecutar contenedor Docker	docker run -d -p 3000:3000 playlist-app
Ver estadísticas Docker	docker stats
Monitorear VM (Linux)	top, htop
Medir espacio disco (VM)	du -sh playlist-app
Prueba carga HTTP	ab -n 1000 -c 50 http://localhost:3000/
Benchmark CPU (sysbench)	sysbench cpu --cpu-max-prime=20000 run
Test velocidad disco (fio)	fio --name=prueba --rw=write --bs=1M --size=500M --runtime=60

## Métricas Evaluadas
Métrica	VM	Docker
Uso CPU (inactivo)	5%	2%
Uso RAM	500 MB	150 MB
Espacio en disco	4 GB	250 MB
Tiempo de arranque	90 s	5 s
CPU Benchmark (sysbench)	20 s	18 s
Velocidad disco (fio)	150 MB/s	180 MB/s
Latencia HTTP (ab)	120 ms	100 ms
🔍 Análisis

Máquina Virtual (VM)
✔️ Pros:

Aislamiento completo
Mayor seguridad
Sistema operativo independiente
❌ Contras:

Mayor consumo de recursos
Arranque más lento
Mayor tamaño en disco
Docker
✔️ Pros:

Inicio casi instantáneo
Menor consumo de recursos
Portabilidad
❌ Contras:

Menor aislamiento
Depende del kernel del host
Potenciales riesgos de seguridad
Portabilidad y Flexibilidad
Docker sobresale por su portabilidad, facilidad de integración en pipelines CI/CD y su uso eficiente de recursos.

## Conclusión
Docker es ideal para un desarrollo moderno, ágil y eficiente.
Las máquinas virtuales siguen siendo útiles en entornos con altos requerimientos de aislamiento, pruebas de SO completos o replicación realista de infraestructuras.

## Autor
Emilio Muciño Segura

## Licencia
Copyright (c) 2025 Emilio Muciño Segura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

