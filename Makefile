include .env
export


# ==================================================================================== # # BUILD
# ==================================================================================== #
current_time = $(shell date --iso-8601=seconds)

## build/api: build the cmd/api application
.PHONY: build/api 
build/api:
	@echo 'Building cmd/api...'
	go build -ldflags='-s -X main.buildTime=${current_time}' -o=./bin/api ./cmd/api
	GOOS=linux GOARCH=amd64 go build -ldflags='-s -X main.buildTime=${current_time}' -o=./bin/linux_amd64/api ./cmd/api

# ==================================================================================== # 
# PRODUCTION
# ==================================================================================== #

## production/connect: connect to the production server
.PHONY: production/connect 
production/connect:
	ssh discover_ecommerce@${PRODUCTION_HOST_IP}


## production/deploy/api: deploy the api to production
.PHONY: production/deploy/api 
production/deploy/api:
	rsync -rP --delete ./bin/linux_amd64/api ./migrations discover_ecommerce@${PRODUCTION_HOST_IP}:~
	ssh -t discover_ecommerce@${PRODUCTION_HOST_IP} 'migrate -path ~/migrations -database $$DISCOVER_ECOMMERCE_DB_DSN up'


## production/configure/api.service: configure the production systemd api.service file
.PHONY: production/configure/api.service 
production/configure/api.service:
	rsync -P ./remote/production/api.service discover_ecommerce@${PRODUCTION_HOST_IP}:~ 
	ssh -t discover_ecommerce@${PRODUCTION_HOST_IP} 'sudo mv ~/api.service /etc/systemd/system/ && sudo systemctl enable api && sudo systemctl restart api'

## production/configure/caddyfile: configure the production Caddyfile
.PHONY: production/configure/caddyfile 
production/configure/caddyfile:
	rsync -P ./remote/production/Caddyfile discover_ecommerce@${PRODUCTION_HOST_IP}:~ 
	ssh -t discover_ecommerce@${PRODUCTION_HOST_IP} 'sudo mv ~/Caddyfile /etc/caddy/ && sudo systemctl reload caddy'