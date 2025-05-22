Proyecto Comparativo de Rendimiento: Máquina Virtual (VM) vs Docker

Introducción

Este proyecto compara el rendimiento y uso de recursos entre una máquina virtual (VirtualBox) y un contenedor Docker, ejecutando una aplicación Node.js sencilla que simula una playlist musical.

Configuración del entorno

Aspecto	Máquina Virtual (VM)	Docker
Hipervisor	VirtualBox	Docker Engine
Sistema operativo	Ubuntu Server 22.04 LTS	Imagen base node:18-alpine
Recursos asignados	2 CPU, 2 GB RAM, 20 GB disco	Uso dinámico, limitado por contenedor
Aplicación ejecutada	App Node.js (playlist musical)	Misma app Node.js en contenedor
Puertos	3000 (expuesto en VM)	3000 (mapeado al host)
Estructura del Proyecto

app/
Código fuente de la aplicación Node.js, incluyendo servidor y archivos estáticos.

docker/
Contiene el Dockerfile para construir la imagen del contenedor.

docs/ Contiene información extra del proyecto y gráfica de las métricas evaluadas.

tests/ Pruebas unitarias básicas (opcional).

.gitignore
Archivos y carpetas ignoradas por Git.

README.md
Documentación del proyecto.

package.json Dependencias y scripts.

LICENSE Licencia del proyecto.

Cómo ejecutar

En Máquina Virtual

Instalar Node.js
Clonar repositorio
Ejecutar npm install
Ejecutar node app/index.js
Acceder a http://<ip-vm>:3000
Detalles de la aplicación

Se desarrolló una aplicación web sencilla en Node.js usando Express.js, que permite:

Mostrar una lista de canciones (playlist).
Agregar nuevas canciones mediante formulario.
Servir la interfaz en el puerto 3000.
Esta app sirve como caso de prueba para evaluar el rendimiento bajo carga y consumo de recursos en ambos entornos.

En Docker

Construir la imagen:
docker build -t playlist-app -f docker/Dockerfile .
Ejecutar el contenedor:
docker run -d -p 3000:3000 playlist-app
Acceder a http://localhost:3000
Métricas evaluadas

Uso de CPU y memoria
Tiempo de arranque
Espacio en disco
Rendimiento de CPU y disco
Latencia y rendimiento HTTP
Resultados

Métrica VM Docker Uso CPU (inactivo) 5% 2% Uso RAM 500 MB 150 MB Espacio en disco 4 GB 250 MB Tiempo de arranque 90 segundos 5 segundos CPU Benchmark (sysbench) 20 segundos 18 segundos Velocidad disco (fio) 150 MB/s 180 MB/s Latencia HTTP (ab) 120 ms 100 ms

Análisis

Máquina Virtual: Pros: Aislamiento completo, mayor seguridad, sistema operativo independiente. Contras: Mayor consumo de recursos, arranque más lento, mayor tamaño en disco. Docker: Pros: Inicio casi instantáneo, menor consumo de recursos, portabilidad. Contras: Menor aislamiento, depende del kernel del host, potenciales riesgos de seguridad. Portabilidad y Flexibilidad: Docker destaca por su facilidad para mover contenedores entre diferentes sistemas operativos y entornos, además de integrarse fácilmente en pipelines CI/CD.

Conclusión

Docker es ideal para desarrollo moderno, rápido y eficiente. Las máquinas virtuales siguen siendo relevantes para entornos con requisitos estrictos de aislamiento, pruebas de sistemas operativos completos o necesidad de replicar entornos reales.

Comandos útiles para el proyecto

Acción	Comando
Construir imagen Docker	docker build -t playlist-app .
Ejecutar contenedor Docker	docker run -d -p 3000:3000 playlist-app
Ver estadísticas Docker	docker stats
Monitorear VM (Linux)	top, htop
Medir espacio disco (VM)	du -sh playlist-app
Prueba carga HTTP	ab -n 1000 -c 50 http://localhost:3000/
Benchmark CPU (sysbench)	sysbench cpu --cpu-max-prime=20000 run
Test velocidad disco (fio)	fio --name=prueba --rw=write --bs=1M --size=500M --numjobs=1 --time_based --runtime=60 --group_reporting
Autor

Emilio Muciño Segura

Licencia

MIT