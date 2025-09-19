# Default target (runs if you just type `make`)
default: help

## Install all dependencies
install:
	pnpm install

## Run all services in dev mode (parallel)
dev:
	pnpm dev

## Run only the auth service
auth:
	pnpm -F ./apps/auth dev

## Stop all Docker containers
down:
	docker compose -f ops/compose/docker-compose.core.yml -f ops/compose/docker-compose.apps.yml down -v

## Start core infra (db, redis, nats)
up-core:
	docker compose -f ops/compose/docker-compose.core.yml -f ops/compose/docker-compose.data.yml up -d

## Show this help
help:
	@echo "Available targets:"
	@grep '##' Makefile | awk -F: '{print $$1}' | sed 's/^/  make /'
