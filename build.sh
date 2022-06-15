#!/bin/bash
pm2 stop freecdn-backend
git pull git@github.com:badrun-bandi/freecdn-backend.git
npm clean-install
npm run build || exit
pm2 start freecdn-backend