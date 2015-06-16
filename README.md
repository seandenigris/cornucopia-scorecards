# Cornucopia Scorecards

Presents ratings (eggs only to start) in an easily-searchable web UI

## Getting Started

### Install grunt (from http://gruntjs.com/getting-Started)
1. Ensure npm up to date - `sudo sudo npm update -g npm`
2. `sudo npm install -g grunt-cli`

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://github.com/amber-smalltalk/amber#prerequisites).

## Use CornucopiaScorecards as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install CornucopiaScorecards --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use CornucopiaScorecards,
add `'amber-cornucopiascorecards/CornucopiaScorecards'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions

### Importing packages (e.g. from Pharo)
1. Compile JS `amberc -n "amber-cornucopiascorecards" [PackageName].st`
2. Add entry to either devel.js or deploy.js
3. `grunt devel`

### Cleanup (already done)
1. Remove Web and Silk from the main package #imports:
1. bower uninstall amber-contrib-web silk amber-contrib-domite --save
2. rm -fr bower_components
3. bower install

## Deployment
- Copy the.js, index.html, and egg_suppliers.json under /var/www (Apache document root on Ubuntu)

### Build tools (already done)
1. Install grunt-shell (for compressing and copying binary artifacts for release)
	a. `npm install --save-dev load-grunt-tasks` ([per SO](http://stackoverflow.com/questions/28385685/grunt-error-cannot-find-module-load-grunt-tasks))
	b. `npm install --save-dev grunt-shell` (https://github.com/sindresorhus/grunt-shell)
