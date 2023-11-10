# Default commit message for the 'make commit' command
DEFAULT_MESSAGE ?= "default commit message"

install:
	npm init -y
	npm install express --save
	npm install --save morgan
	npm install --save helmet
	npm install eslint --save-dev
	npm install eslint-config-airbnb-base --save-dev
	npm install eslint-plugin-import --save-dev
	npm install --save-dev eslint-plugin-prettier eslint-config-prettier
	npm install jest --save-dev
	npm install supertest --save-dev
	npm install --save-dev nodemon
	npm install prettier --save-dev

update:
	npm update

test:
	npm test

lint:
	npm run lint

lint-fix:
	npm run lint-fix

pretty:
	npm run prettify

lint-and-pretty: lint-fix prettify

commit:
	git add .
	git commit -m "$(DEFAULT_MESSAGE)"
	git push

dynamic-commit:
	make lint-and-pretty
	FILE_COUNT=$$(git diff --cached --numstat | wc -l); \
	TIME_SINCE_LAST_COMMIT=$$(git log -1 --format=%cd --date=relative); \
	DYNAMIC_MESSAGE="Made changes to $$FILE_COUNT files. Last commit was $$TIME_SINCE_LAST_COMMIT ago."; \
	git add .; \
	git commit -m "$$DYNAMIC_MESSAGE"; \
	git push

dev:
	npm run dev

run:
	docker build -t your-microservice .
	docker run -p 3000:3000 your-microservice

.PHONY: lint lint-fix prettify commit lint-and-pretty dynamic-commit