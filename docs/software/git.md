# Git

## 正常显示中文文件名

```sh
git config --global core.quotepath false
```
## 用rebase合并commits

```sh
git rebase -i HEAD~3
```

数字为最后几个要编辑的commits

然后根据情况编辑commits，如果是全部合并的话就第一行留下`pick`，其他全部改成`squash`。最后再编辑commit信息即可。
