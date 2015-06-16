mkdir -p deploy
cp the.js index.html egg_suppliers.json deploy/
zip deploy/www.zip the.js index.html egg_suppliers.json
