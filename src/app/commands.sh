# Start a new app
ng new angularmaterialproject --routing --style=scss


# Schematic to add Angular Material
ng add @angular/material

# Generate a component with sidenav
ng generate @angular/material:navigation app-navigation

# To add more pages
# Start by generating some components, one even using another schematic from Angular Material to setup a nice little dashboard:
ng generate @angular/material:dashboard dashboard
ng generate component about
ng generate component error

# To install flex-layout package for photo gallery
npm install @angular/flex-layout@latest --save