---
title: 'Caddy is awesome'
date: 2023-3-10 00:00
description: 'why was i not using it before'
author: 'James'
image: '/content/caddy/caddy.webp'

tags: ['caddy', 'web']
---

There's plenty of web servers. There's the ancient **Apache**, the newer **NGINX**, and a few others. I use web servers to be able to run multiple websites on one port, and proxy it to a local server by domain.

For example, I host my Git server **Gitea** on https://git.xylight.us, and my Pocketbase instance on https://pocketbase.xylight.us. Despite both domains pointing to the same IP and using the same port, (443 for HTTPS), they can go to different services.

Previously I was using Apache, as that was the default server for **Nextcloud**. After getting some more services running on my server, I added more websites.

However, one of my friends spammed [Imagi](https://imagi.xylight.us), and I realized I needed rate limits to https://pocketbase.xylight.us otherwise I couldn't make this thing public.

I needed a pretty specific requirement. "Allow only `5` `POST` requests to /api/collections/posts/records per `60` seconds." I got searching. I learned about `mod_evasive`, and tried it, but I couldn't limit just `POST` requests. I also tried `mod_security`, `mod_qos`, and a few others, but they either didn't do what I want or straight up didn't work at all.

After banging my head on my keyboard a few times, I tried NGINX. But it also couldn't do what I wanted. I asked in a Discord server, and someone recommended **Caddy**. I was hesitant, but decided to try it.

With my first `Caddyfile`, I was already sold.

This is literally **ALL** that you have to do to put a reverse proxy to a certain domain.

```nginx
git.xylight.us:443 {
    reverse_proxy http://localhost:1414/
}
```

_that's it?_

_Surely that's not it._

<img class="mx-auto" src="/content/caddy/git.png" alt="Gitea" width="480">

**Huh??**

I was already surprised, but even more when I realized it already setup SSL for me.

Look at the difference between Apache and Caddy configs! Even then, the Apache config is only for plain HTTP, while the Caddy config already has HTTPS.

### Apache

```xml
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html/example

    <Directory /var/www/html/example>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
```

### Caddy

```nginx
example.com:443 {
    root * /var/www/html/example
    file_server
}
```
