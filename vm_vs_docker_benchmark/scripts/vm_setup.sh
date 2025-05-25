#!/bin/bash

# Actualiza el sistema
echo "Actualizando sistema..."
sudo apt update && sudo apt upgrade -y

# Instala Node.js (usando NodeSource)
echo "Instalando Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verifica instalación
node -v
npm -v

# Navega a la carpeta del proyecto (ajusta la ruta si es necesario)
cd ~/proyectos/playlist-app

# Instala las dependencias del proyecto
echo "Instalando dependencias del proyecto..."
npm install

# Ejecuta la aplicación
echo "Iniciando aplicación..."
npm start
