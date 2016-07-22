DOCKER_IMAGE = node
DOCKER_CONTAINER = node_server

.PHONY: server stop install

server: install
	@docker run -it --rm \
							--name $(DOCKER_CONTAINER) \
	            -p 3000:3000 \
	            -v `pwd`:/data \
	            -w /data \
	            $(DOCKER_IMAGE) \
	            node server.js

stop:
	@docker stop $(DOCKER_CONTAINER)

install:
	@docker run -it --rm \
	            -v `pwd`:/data \
	            -w /data \
	            $(DOCKER_IMAGE) \
	            npm install
