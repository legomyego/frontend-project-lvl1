install:
		npm install

brain-games:
		node bin/brain-games.js

brain-even:
		node bin/games/brain-even.js

publish:
		npm publish --dry-run

lint: 
		npx eslint .