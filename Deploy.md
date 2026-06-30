# Deployment notes

## How to deploy a new front-end
1. SSH into the droplet (non-root user please).
2. `cd inupiaq-web`
3. `git pull origin` or whatever you need to update the source code.
4. `npm run build` to create an optimized production build in `build` folder.
5. `pm2 restart inupiaq-web` to take the changes into account.

## How to deploy a new back-end
1. SSH into the droplet (non-root user please).
2. `cd yuarcuun-api`
3. `git pull origin` or whatever you need to update the source code.
4. `pm2 restart yuarcuun-api` to take the changes into account.

## How to check the logs
Use `pm2 logs`. Check processes logs / metrics with `pm2 monit`.

## How to manually start `pm2` processes
Check `pm2` processes with `pm2 list`. You should see 2 processes, `inupiaq-web`
and `yuarcuun-api`. If not, run `pm2 restart all` (few seconds of downtime) or `pm2 reload all` (no downtime, may not work for all kinds of changes).

If needed, you can start them manually with:

```
$ cd ~/inupiaq-web
$ pm2 serve build/ 3000 --name inupiaq-web --spa
$ cd ~/kyukwow
$ pm2 serve build/ 4000 --name kyukwow --spa
$ cd ~/yuarcuun-api
$ pm2 start api.py --name yuarcuun-api --interpreter python2.7
$ pm2 save
```

## Useful Links

* Serving with Nginx: [Digital Ocean + PM2 + Nginx](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)
* Process manager: [PM2 Quick start](https://pm2.keymetrics.io/docs/usage/quick-start/)
* [WordPress + Nginx + Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lemp-on-ubuntu-20-04)
