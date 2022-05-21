# 杂项

## 用cue文件分割flac并标记

```sh
shnsplit -f <cuefile> -t %n-%t -o flac <flacfile>
cuetag <cuefile> *.flac
```