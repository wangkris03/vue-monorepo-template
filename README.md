## 工程简介

- 此工程是一个 monorepo 工程，所有相关项目的代码均在一个 repo 中，这会有着更好的 package 复用性
- 请确保 workspace 中每个二级文件夹都是一个自洽的 npm package
- boundle-less 可以承载多个大型项目在同一工程而无开发过程的编译迟钝

## 为子包安装依赖

```sh
p -C apps/example i up-dir-env -D
```

## 前置条件

安装 pnpm:

```sh
npm i -g pnpm
```

使用 pnpm 安装依赖, 关联:

```
pnpm i
```

## 开发

```sh
pnpm dev:all
```

## 编译

```sh
pnpm build:all
```

## Check

工程有提交拦截，但是请不要恶意跳过 `pnpm check` 的检测进行提交，

## 重要

业务代码的 package.json 必须设定 `"private": true` , 以防止不小心将业务代码发布到 npm.

发布包, 会把 packages 中所有非 private 包发布到 npm, 并且会自动修改 workspace:\* 依赖，要确保 pnpm 版本大于 7.4：

```sh
pnpm publish --no-git-checks -r
```

## 分离业务代码和非业务代码

业务代码请保留在 apps 下的若干项目中; 非业务代码请抽象到 packages 中

## 工程约束

config 中为所有工程、库统一 eslint、ts-config、test 配置，所有包的约束请复用 config 中的配置


## .env

```sh
# dev
is_dev=1
```

## .vscode 设置 (可选)

`.vscode/settings.json` :

```json
{
  "makefile.extensionOutputFolder": "./.vscode",
  "files.exclude": {
    "**/node_modules": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Thumbs.db": true
  }
}
```
