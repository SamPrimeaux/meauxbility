Wrangler GitHub Action

Easy-to-use GitHub Action to use Wrangler. Makes deploying Workers a breeze.

Big Changes in v3

Wrangler v1 is no longer supported.
Global API key & Email Auth no longer supported
Action version syntax is newly supported. This means e.g. uses: cloudflare/wrangler-action@v3, uses: cloudflare/wrangler-action@v3.x, and uses: cloudflare/wrangler-action@v3.x.x are all now valid syntax. Previously supported syntax e.g. uses: cloudflare/wrangler-action@3.x.x is no longer supported -- the prefix v is now necessary.
Refer to Changelog for more information.

Usage

Add wrangler-action to the workflow for your Workers/Pages application. The below example will deploy a Worker on a git push to the main branch:

name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
Authentication

You'll need to configure Wrangler using GitHub's Secrets feature - go to "Settings -> Secrets" and add your Cloudflare API token (for help finding this, see the Workers documentation). Your API token is encrypted by GitHub, and the action won't print it into logs, so it should be safe!

With your API token set as a secret for your repository, pass it to the action in the with block of your workflow. Below, I've set the secret name to CLOUDFLARE_API_TOKEN:

jobs:
  deploy:
    name: Deploy
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
Configuration

If you need to install a specific version of Wrangler to use for deployment, you can also pass the input wranglerVersion to install a specific version of Wrangler from NPM. This should be a SemVer-style version number, such as 2.20.0:

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        wranglerVersion: "2.20.0"
Optionally, you can also pass a workingDirectory key to the action. This will allow you to specify a subdirectory of the repo to run the Wrangler command from.

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        workingDirectory: "subfoldername"
Worker secrets can optionally be passed in via secrets as a string of names separated by newlines. Each secret name must match the name of an environment variable specified in the env field. This creates or replaces the value for the Worker secret using the wrangler secret put command. It's also possible to specify worker environment using environment parameter.

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        environment: production
        secrets: |
          SECRET1
          SECRET2
      env:
        SECRET1: ${{ secrets.SECRET1 }}
        SECRET2: ${{ secrets.SECRET2 }}
If you need to run additional shell commands before or after your command, you can specify them as input to preCommands (before deploy) or postCommands (after deploy). These can include additional wrangler commands (that is, whoami, kv:key put) or any other commands available inside the wrangler-action context.

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        preCommands: echo "*** pre command ***"
        postCommands: |
          echo "*** post commands ***"
          wrangler kv:key put --binding=MY_KV key2 value2
          echo "******"
You can use the command option to do specific actions such as running wrangler whoami against your project:

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        command: whoami
You can also add a command that spans multiple lines:

jobs:
  deploy:
    steps:
      uses: cloudflare/wrangler-action@v3
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        command: |
          pages project list
          pages deploy .vercel/output/static --project-name=demo-actions --branch=test
Use cases

Deploy when commits are merged to main

The above workflow examples have already shown how to run wrangler-action when new commits are merged to the main branch. For most developers, this workflow will easily replace manual deploys and be a great first integration step with wrangler-action:

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
Note that there are a number of possible events, like push, that can be used to trigger a workflow. For more details on the events available, refer to the GitHub Actions documentation.

Deploy your Pages site (production & preview)

If you want to deploy your Pages project with GitHub Actions rather than the built-in continous integration (CI), then this is a great way to do it. Wrangler 2 will populate the commit message and branch for you. You only need to pass the project name. If a push to a non-production branch is done, it will deploy as a preview deployment:

on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    permissions:
      contents: read
      deployments: write
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy YOUR_DIST_FOLDER --project-name=example
          # Optional: Enable this if you want to have GitHub Deployments triggered
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
