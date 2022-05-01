# Paperless-ngx

## Use image from linuxserver.io


It seems to be better than the official image because I was keeping getting `password authentication failed for user "paperless"` when trying the official image.

[GitHub repo](https://github.com/linuxserver/docker-paperless-ngx)

My personal docker-compose file:

```yaml
---
version: "2.1"
services:
  paperless-ngx:
    image: lscr.io/linuxserver/paperless-ngx
    container_name: paperless-ngx
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Toronto
      - REDIS_URL= #optional
      - PAPERLESS_URL= #If you are accessing through the Internet, set it to your URL
      - PAPERLESS_OCR_LANGUAGES=chi-sim # this line seems not working
      - PAPERLESS_OCR_LANGUAGE=eng+chi_sim

    volumes:
      - config:/config
      - data:/data
    ports:
      - 8010:8000
    restart: unless-stopped
volumes:
  data:
  config:
networks:
  default:
    external:
      name: nginx-proxy-manager_default
```

## docker-compose file

[Official docker-compose file](https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml)

Create default super user:

It's listed in the docker-compose file but I still write here to remind myself.

- Open the list of containers, select paperless_webserver_1
- Click 'Console' and then 'Connect' to open the command line inside the container
- Run `python3 manage.py createsuperuser` to create a user
