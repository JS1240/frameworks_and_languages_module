
DOCKER_COMPOSE:=docker-compose --file docker-compose.yml
DOCKER_COMPOSE_EXAMPLE:=${DOCKER_COMPOSE} --file docker-compose.example.yml
DOCKER_COMPOSE_TEST:=${DOCKER_COMPOSE} --file docker-compose.test.yml
DOCKER_COMPOSE_TEST_EXAMPLE:=${DOCKER_COMPOSE_EXAMPLE} --file docker-compose.test.yml

run:
	${DOCKER_COMPOSE} up
run_example:
	${DOCKER_COMPSE_EXAMPLE} up

test:
	${DOCKER_COMPOSE_TEST} up
test_server:
	${DOCKER_COMPOSE_TEST} up server_test
test_client:
	${DOCKER_COMPOSE_TEST} up client_test

test_example:
	${DOCKER_COMPOSE_TEST_EXAMPLE} up
test_example_server:
	${DOCKER_COMPOSE_TEST_EXAMPLE} up --build server_test
test_example_client:
	${DOCKER_COMPOSE_TEST_EXAMPLE} up client_test
