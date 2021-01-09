# m5-battery-test

# GAS
- for install clasp
```
$ npm install -g @google/clasp
$ clasp login
```
- initial setting
```
$ cd <dir root>
$ npm init -y
$ npm install -S @types/google-apps-script
$ clasp create --rootDir ./<root src dir>
```
- if --rootDir doesn't work
```
$ mkdir <root src dir>
$ mv appsscript.json ./<root src dir>
```
- .clasp.json
```
{
    "scriptId":"script ID",
    "rootDir": "./<root src dir>"
}
```
- pull and push
```
$ clasp pull
$ clasp push
```