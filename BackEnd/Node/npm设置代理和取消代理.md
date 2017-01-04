## npm 设置代理和取消代理

### 针对npm的配置命令如下

```bash
npm config set `key` `value` [--global] # 设置配置键值

npm config get `key` # 查看指定配置的值

npm config delete `key` # 删除指定配置

npm config list # 列出所有配置

npm config edit 
```

### 为npm设置代理
```bash
npm config set proxy http://127.0.0.1:8087 # 设置http代理

npm config set https-proxy https://127.0.0.1:8087 # 设置https代理

```


### 为npm取消代理
```bash
npm config delete proxy 

```