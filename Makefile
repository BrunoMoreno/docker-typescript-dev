build:
	docker-compose up --build

up:
	docker-compose up -d

env:
	cp .env.example .env

dev:
	yarn dev	