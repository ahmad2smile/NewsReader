start-app:
	cd app && npm run start
start-api:
	cd api && npm run start
start-api-dev:
	cd api && npm run start:dev
build-shared:
	cd shared && npm i && npm run build
build-app:
	cd app && npm i && npm run build
clean-public:
	rm -rf api/dist/public/ && mkdir api/dist/public/
move-app-contents: clean-public
	cp -r app/build/* api/dist/public/
install:
	cd shared && npm i && npm run build && cd ../api && npm i && cd ../app && npm i
build: build-app move-app-contents
	cd api && npm i && npm run build
start: install build
	cd api && npm run start