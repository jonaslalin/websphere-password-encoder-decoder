# WebSphere Password Encoder / Decoder

## Encode

```
node -e "console.log(require('./index').encode('Password123'))"
```

## Decode

```
node -e "console.log(require('./index').decode('{xor}Dz4sLCgwLTtubWw='))"
```
