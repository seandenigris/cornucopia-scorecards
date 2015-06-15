# Cornucopia Scorecards

Presents ratings (eggs only to start) in an easily-searchable web UI

## Getting Started

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
