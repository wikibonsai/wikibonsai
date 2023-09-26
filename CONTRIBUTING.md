# Contributing

The following are the basic expectations of `wikibonsai` projects. Divergences will be noted in the corresponding `CONTRIBUTING.md` of other projects.

## clone

```bash
$ git clone https://github.com/wikibonsai/<repo-name>
```

## npm / typescript

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

### [publish] npm package

1. Test project (see 'test' above).

2. (Re)Build project (see '(re)build' above).

3. Publish package.

```bash
yarn publish
```

4. Copy build into `releases/` dir (not in repo).


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

### Run jekyll project:

```
$ bundle exec jekyll serve --trace
```

### Release to rubygems:

```
$ bundle exec rake release
```

[publish]: <https://classic.yarnpkg.com/lang/en/docs/cli/publish/>
