#!/bin/bash

set -e  # Остановить скрипт при любой ошибке

echo "=== Step 1: Git pull ==="
git pull

echo "=== Step 2: Docker build (без остановки старых контейнеров) ==="
docker-compose build

echo "=== Step 3: Тестовый запуск нового стека ==="
docker-compose up -d --no-deps --force-recreate --build

echo "=== Step 4: Проверяем healthcheck нового контейнера ==="

# Здесь пример проверки: ждем макс 60 секунд, проверяя доступность сервиса на localhost:8080
MAX_RETRIES=30
COUNTER=0
until curl -s http://localhost:8080/api/health > /dev/null; do
    let COUNTER+=1
    echo "Waiting for container... (${COUNTER}s)"
    sleep 2
    if [ $COUNTER -ge $MAX_RETRIES ]; then
        echo "Healthcheck failed after $((COUNTER*2)) seconds. Rollback..."
        docker-compose down
        exit 1
    fi
done

echo "=== Step 5: Все ок! Останавливаем старые контейнеры (если есть), запускаем новые ==="
docker-compose down
docker-compose up -d

echo "=== Step 6: Чистим dangling images и volume мусор ==="
docker system prune -a --volumes -f

echo "=== Deployment success ==="