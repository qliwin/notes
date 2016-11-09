#####


#### 编译nginx
./configure --prefix=/usr/local/nginx --pid-path=/usr/local/nginx/nginx.pid --error-log-path=/usr/local/nginx/error.log --http-log-path=/usr/local/nginx/access.log --with-http_ssl_module --with-pcre=/usr/local/src/nginx/pcre-8.38 --with-zlib=/usr/local/src/nginx/zlib-1.2.8 --with-openssl=/usr/local/src/nginx/openssl-1.0.2h