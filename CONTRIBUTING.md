# Contributing

The following are the basic expectations of `wikibonsai` projects. Divergences will be noted in the corresponding `CONTRIBUTING.md` of other projects.

## clone

```bash
$ git clone https://github.com/wikibonsai/<repo-name>
```

## node / typescript / javascript

### install

```bash
$ yarn install
```

### build

```bash
$ yarn build
```

### rebuild

will clean/rm build files and rebuild the project.

```bash
$ yarn rebuild
```

### test

```bash
$ yarn test
```

### test local install

```bash
$ yarn add /path/to/build/files
```

### test commands

Basic:

```bash
$ yarn test
```

Targeted:

```bash
$ yarn test -g 'general test scenario; specific test scenario;'
```

### [publish] npm package

1. Test project (see 'test' above).

2. (Re)Build project (see '(re)build' above).

3. Publish package.

```bash
yarn publish
```

4. Copy build into `releases/` dir (not in repo).

## python

#todo

## gem / ruby

### Install local dependencies:

```
$ bundle install --local /path/to/gem
```

### Install dependencies:

```
$ bundle install
```

### Run tests:

```
$ bundle exec rspec spec
```

### Build project:

```
$ bundle exec rake build
```

### Install local gem for debugging:

```
gem 'gem-name'; path: /path/to/gem/
```

### Run jekyll project:

```
$ bundle exec jekyll serve --trace
```

### Release to rubygems:

```
$ bundle exec rake release
```

[publish]: <https://classic.yarnpkg.com/lang/en/docs/cli/publish/>
