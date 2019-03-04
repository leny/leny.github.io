workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "deploy: gh-pages"
  ]
}

action "filter: gatsby branch" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "branch gatsby"
}

action "create .npmrc" {
  uses = "actions/bin/sh@master"
  needs = ["filter: gatsby branch"]
  secrets = ["FONTAWESOME_TOKEN"]
  args = ["echo '' > .npmrc", "echo '@fortawesome:registry=https://npm.fontawesome.com/' >> .npmrc", "echo '//npm.fontawesome.com/:_authToken='$FONTAWESOME_TOKEN >> .npmrc"]
}

action "npm: install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["create .npmrc"]
  args = "install"
}

action "npm: build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm: install dependencies"]
  args = "run build"
}

action "deploy: gh-pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["npm: build"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "./public"
  }
}
