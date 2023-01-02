first_start:
	docker-compose up -d --build
	docker exec animal_blog_node sh -c "npm install"
	docker exec animal_blog_node sh -c "npm install"
	docker exec animal_blog_node sh -c "npm start"

inst_deps: 
	docker exec animal_blog_node sh -c "npm install"
	docker exec animal_blog_node sh -c "npm install -g nodemon"

start:
	docker-compose up -d --build
	docker exec animal_blog_node sh -c "npm start"

down:
	docker-compose down

stop:
	docker-compose stop

goin:
	docker exec -it animal_blog_node bash