# Comparativa Detallada entre Máquina Virtual y Docker
## 1. Uso de CPU en reposo

VM: 5%

Docker: 2%

La máquina virtual mantiene procesos del sistema operativo huésped activos constantemente, lo que incrementa el uso base de la CPU. Docker solo ejecuta el contenedor con Node.js, consumiendo menos ciclos.

## 2. Uso de RAM

VM: 500 MB

Docker: 150 MB

La VM requiere memoria para el SO completo, servicios de fondo y la aplicación. Docker solo asigna lo justo para el contenedor y la app.

## 3. Espacio en disco ocupado

VM: 4 GB

Docker: 250 MB

Ubuntu Server, junto con dependencias, ocupa mucho más espacio que una imagen de Node.js Alpine usada en Docker.



## 4. Tiempo de arranque

VM: 90 segundos

Docker: 5 segundos

El arranque de un sistema operativo completo y servicios como SSH o red toma tiempo. Docker simplemente inicia un contenedor preconfigurado.


## 5. Benchmark de CPU (sysbench)

VM: 20 segundos

Docker: 18 segundos

Ambos entornos ejecutaron la misma prueba. Docker tiene un leve rendimiento superior gracias a menor sobrecarga.

## 6. Velocidad de disco (fio)

VM: 150 MB/s

Docker: 180 MB/s

Docker accede directamente al sistema de archivos del host, mientras que la VM puede tener una capa adicional de virtualización del disco.


## 7. Latencia HTTP (Apache Benchmark)

VM: 120 ms

Docker: 100 ms

Docker responde más rápido a peticiones HTTP porque no atraviesa tanto middleware de red virtualizada como la VM.



# Guía de Configuración en Máquina Virtual (VM)

Esta guía te muestra cómo configurar y ejecutar la aplicación Node.js en una máquina virtual Ubuntu Server 22.04 y docker.








## Requisitos

- VirtualBox instalado
- Imagen de Ubuntu Server 22.04
- 2 CPU, 2 GB de RAM, 20 GB de disco
- Conexión de red NAT o puente

## Instalación

1. Inicia tu VM.
2. Instala Node.js:
```bash
sudo apt update
sudo apt install nodejs npm -y

3. Verifica:
  node -v
  npm -v

## Ejecución de la aplicación
1.- Clona el repositorio:
    - git clone https://github.com/tu-usuario/playlist-app.git
    - cd playlist-app
2.- Instala dependencias:
    - npm install

3.- Inicia la app:
    - node app/index.js

4.- Accede desde tu navegador:
    - http://<IP-DE-TU-VM>:3000

### 📄 Docker

```markdown
# Guía de Configuración en Docker

Esta guía explica cómo ejecutar la aplicación en un contenedor Docker.

## 🔧 Requisitos

- Docker instalado: https://docs.docker.com/get-docker/

## Construcción de la imagen

1.- Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/playlist-app.git
cd playlist-app

2.- Construye la imagen:
docker build -t playlist-app -f docker/Dockerfile.

3.- Abre en tu navegador:
http://localhost:3000

## Supervisar el contenedor

docker stats

### `docs/metricas_utilizadas.md`

```markdown
# Métricas y Herramientas Utilizadas
Este documento describe las herramientas y comandos usados para medir el rendimiento.

  ## CPU Benchmark — `sysbench`
  Simula operaciones intensivas de CPU:
  
  ```bashsysbench cpu --cpu-max-prime=20000 run
  
  
  ## Velocidad de Disco — fio
  fio --name=prueba --rw=write --bs=1M --size=500M --numjobs=1 --time_based --runtime=60 --group_reporting



  ## Latencia HTTP — ab (Apache Benchmark)
  ab -n 1000 -c 50 http://localhost:3000/

  ## Espacio en disco
  du -sh playlist-app

  ## Tiempo de arranque
  date && node app/index.js















