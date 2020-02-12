PUBLIC_DIR := api/dist/public/
APP_BUILD_DIR := app/build/

copy_cmd := cp -r
clean_cmd := rm -rf $(PUBLIC_DIR); mkdir api/dist; mkdir $(PUBLIC_DIR);


ifeq ($(OS), Windows_NT)
	PUBLIC_DIR := api\dist\public
	copy_cmd := xcopy /E /Q
	clean_cmd := rmdir /S /Q $(PUBLIC_DIR) | mkdir api\dist | mkdir $(PUBLIC_DIR)

	APP_BUILD_DIR := app\build\\
# required new line
endif

start-app:
	cd app && npm run start
start-api:
	cd api && npm run start
start-api-dev:
	cd api && npm run dev
start-dev:
	make start-api-dev & make start-app
build-shared:
	cd shared && npm run build
build-app:
	cd app && npm run build
build-api:
	cd api && npm run build
clean-public:
	$(clean_cmd)
move-app-contents: clean-public
	$(copy_cmd) $(APP_BUILD_DIR)* $(PUBLIC_DIR)
install:
	cd shared && npm i && npm run build && cd ../api && npm i && cd ../app && npm i
build: install build-app move-app-contents build-api
start: build start-api