start:
	docker-compose up -d --build
	docker exec animal_blog_node sh -c "npm install"
	docker exec animal_blog_node sh -c "npm install -g nodemon"
	docker exec animal_blog_node sh -c "npm install -g sequelize-cli"
	docker exec animal_blog_node sh -c "npm start"

init_db:
	docker exec animal_blog_node sh -c "sequelize db:create"
	docker exec animal_blog_node sh -c "sequelize db:migrate"
	docker exec animal_blog_node sh -c "sequelize db:seed:all"

stop:
	docker-compose down

goin:
	docker exec -it animal_blog_node bash

goin_db:
	docker exec -it animal_blog_db bash