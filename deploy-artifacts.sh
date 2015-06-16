mkdir -p deploy/css
cp css/*.css deploy/css
cp index.html egg_suppliers.json deploy/
zip -r deploy/www.zip deploy/*
