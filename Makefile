all: install db serve

install:
	@npm install pm2 -g
	@npm install babel-cli -g
	@echo 'successfully install dependencies'

db:
	@mongod -f ./mongo.conf &
	@echo 'successfully start database'

serve:
	@npm run build
	@pm2 start ./pm2.json
