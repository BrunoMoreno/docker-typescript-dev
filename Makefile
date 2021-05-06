build:
	docker-compose up --build

up:
	docker-compose up -d

env:
	cp .env.example .env

dev:
	yarn dev	

 migration:
	yarn typeorm migration:create -n 

migrate:
	yarn typeorm migration:run	

migrate-rollback:
	yarn typeorm migration:revert	