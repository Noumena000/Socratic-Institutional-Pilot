# GitHub Pages Deployment

This repository is designed to deploy as a static site from the repository root.

## Initial setup

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** under **Code and automation**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/root` folder.
6. Save the configuration.

The expected site URL is:

`https://noumena000.github.io/Socratic-Institutional-Pilot/`

## Release workflow

- Develop each phase on an `agent/...` branch.
- Review the change through a draft pull request.
- Merge approved work into `main`.
- GitHub Pages then publishes the updated static files.

## Public-demo restrictions

The deployed site must not contain credentials, real learner data, institutional records, proprietary course content, private reasoning-engine code, production prompts, or a live provider endpoint.
