#!/bin/bash

# 1. Construir la imagen Docker
echo "Construyendo la imagen Docker..."
docker build -t playlist-node-app .

# 2. Verificar si el contenedor ya existe y eliminarlo si es necesario
if [ "$(docker ps -aq -f name=playlist-container)" ]; then
  echo "Eliminando contenedor existente..."
  docker rm -f playlist-container
fi

# 3. Ejecutar el contenedor
echo "Iniciando el contenedor..."
docker run -d -p 3000:3000 --name playlist-container playlist-node-app

echo "Aplicación desplegada en http://localhost:3000"
