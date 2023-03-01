# WikiBonsai

![[](https://github.com/wikibonsai/wikibonsai)](https://img.shields.io/badge/%F0%9F%8E%8B-A%20WikiBonsai%20Project-brightgreen)

> A knowledge bonsai wends through concepts in semantic space, like a melody winds through harmonies in music.

###### [cite me!][wikbon-doc-cite-this]

<div style="width:100%; display: flex; justify-content: center;">
  <img src="./media/wikibonsai.svg" width="300" height="300"/>
</div>

> ⚠️ 🌱 This project is newly sprouted! So please consider it a beta: Remember to backup all data and please use version control.

The WikiBonsai project[^ai] transforms a collection of markdown files into a text-based, easy-to-navigate [jungle gym for thought][wikbon-doc-philosophy--a-jungle-gym-for-thought][^mind] with an [API for the mind][wikbon-doc-design--an-api-for-the-mind][^mixed-metaphors]. This is accomplished by enabling personal knowledge management (PKM) workflows that rely on `[[wiki]]` syntaxes, "[semantic trees][reddit-musk]" ("knowledge bonsais"), and data visualizations that are viewable on screens or in augmented/virtual reality.

This project is about strategically implementing functionality that will benefit the most users and developers across the digital ecosystem. Thus, it abides by the [Unix Philosophy][art-unix-phil]: Everything is modularized and implemented in such a way as to maximize re-use whether it be for the browser, desktop, mobile, or headset. It's about furthering the state of PKM as a whole by building atop "[standardization bedrock][wikbon-doc-design--drilling-down-to-standardization-bedrock]" instead of just creating a single application.

Further, these workflows may also facilitate the mapping of [semantic space][wikbon-doc-design--semantic-space] which could prove an invaluable resource in building a better understanding of how neural nets work and furthering the development of effective, explainable AI.

Only time will tell how far this path may [go][wikbon-doc-philosophy--finding-free-will].

## Notable Workflows

These are the workflows the WikiBonsai project enables for markdown-based collections of notes:

1. Mechanics to build a unified "[semantic tree][wikbon-repo-semtree]" or "knowledge bonsai" across a collection of markdown files.
2. Expanded syntax for [`[[wikirefs]]`][wikbon-repo-wikirefs] for quick associative linking (a.k.a. "wikilink", "bidirectional link", "internal link", etc.).
3. Graph utilities to visualize the relationships formed by the syntaxes 1 + 2 and unify them into an interactive "[memory palace][memory-palace]".
4. A lean, [yaml][yaml]-like [markup language for attributes][wikbon-repo-caml-mkdn] (with `[[wikiref]]` support).

A "digital garden" may be considered a "WikiBonsai" if it supports [`[[wikirefs]]`][wikbon-repo-wikirefs] and [semantic trees][wikbon-repo-semtree].

## Project Info

The following sections are organized by stack depth: Projects toward the top are ready-to-use and meant for the end user, while projects toward the bottom are meant for developers to build with and integrate into other solutions:

### Docs

The documentation in this repository describe the philosophies, mechanics, and terminologies that are adopted throughout all of the WikiBonsai projects:

- For Lore:
  - [Guiding Philosophy][wikbon-doc-philosophy]
  - [Origin Story][wikbon-doc-story]
  - [Citations and Sources][wikbon-doc-cite]
- For Use:
  - [How To Use][wikbon-doc-use]
  - [Privacy and Security][wikbon-doc-secure]
- For Dev:
  - [Design Principles][wikbon-doc-design]
  - [Terminology][wikbon-doc-terms]
  - [Code of Conduct][wikbon-doc-code-of-conduct]
  - [Contributing][wikbon-doc-contributing]

### Repos

The following links point to sub-projects of the WikiBonsai project:

- For Use:
  - [garden-beds][wikbon-repo-garden-beds]: A collection of starter WikiBonsai digital gardens.
  - [germs][wikbon-repo-germs]: A collection of markdown files meant to be added to pre-existing WikiBonsai, or other style, digital gardens.
  - [vscode-wikibonsai][wikbon-repo-vscode-wikibonsai]: A [VSCode][git-vscode] extension for tending a WikiBonsai digital garden.
  - [tendr][wikbon-repo-tendr]: A CLI tool for tending a markdown-based WikiBonsai digital garden.
  - [astro-wikibonsai][wikbon-repo-astro-wikibonsai]: An example setup to enable WikiBonsai workflows for an astro-based statically generated site (SSG).
  - [eleventy-wikibonsai][wikbon-repo-eleventy-wikibonsai]: An example setup to enable WikiBonsai workflows for eleventy-based static site generation (SSG).
- For Dev
  - [treehouze][wikbon-repo-treehouze]: Generalized graph utilities with minor specialized features for visualizing WikiBonsai-enabled markdown-based PKMs.
  - [caudex][wikbon-repo-caudex]: An index to cache and store WikiBonsai relationships.
  - [markdown-it-wikirefs][wikbon-repo-markdown-it-wikirefs]: A [markdown-it][git-markdown-it] plugin to enable `[[wikirefs]]`.
  - [markdown-it-caml][wikbon-repo-markdown-it-caml]: A [markdown-it][git-markdown-it] plugin to enable  `:colon::attributes`.
  - [remark-wikirefs][wikbon-repo-remark-wikirefs]: A [remark][git-remark] plugin to enable `[[wikirefs]]`.
  - [remark-caml][wikbon-repo-remark-caml]: A [remark][git-remark] plugin to enable `:colon::attributes`.
  - [semtree][wikbon-repo-semtree]: Base utilities for "semantic tree" or "knowledge bonsai" building in markdown.
  - [wikirefs][wikbon-repo-wikirefs]: Base utilities for `[[wikirefs]]`.
  - [wikirefs-spec][wikbon-repo-wikirefs-spec]: Test suite for `[[wikirefs]]` specification.
  - [caml][wikbon-repo-caml-mkdn]: Base utilities for Colon Attribute Markup Language (`:colon::attributes`).
  - [caml-spec][wikbon-repo-caml-spec]: Test suite for Colon Attribute Markup Language (`:colon::attributes`) specification.

## ⚠️ Usage Note

The systems you interact with have an effect on the way you think. This system is meant to provide a ["jungle gym for the thought,"][wikbon-doc-philosophy--a-jungle-gym-for-thought] but it can't do everything and might even have negative consequences if used improperly. Here are some supplemental suggestions for adopting a framework such as this, especially for educational purposes:

### Write Full Essays

The workflows this project enables are meant to help develop an explicit relationship with the words you use. It's possible over-reliance on a tool like this (like many other digital productivity tools) can allow, or even facilitate, overly modular and fractured trains of thought. Writing [full essays][utb-essay] can combat fractured thinking and exercise those parts of the mind.

### Refer to Common Cultural Reference Points
###### (such as [britannica][britannica] or [wikipedia][wikipedia])

By adopting a tool specifically meant for mapping vocabulary, it can be tempting to use niche words or make up one's own to demarcate an idea. But too much of this risks building a Tower of Babel and losing the ability to communicate effectively with others. Use shared vocabulary where you can and if you've found a word of better fit, use it with others. That is the purpose of language after all.

### There is Never a "Final Word"

Like this project it is best to view a set of notes and explicit knowledge as a current state of affairs -- it's the state of the trail; of how much clutter has been cleared away. The goal is to build a navigable path for yourself, but to remain aware of what other things lie beyond the already-explored path. Always be open to what hard reality is telling you, especially while getting your hands dirty.

### Get Your Hands Dirty

The digital world cannot replace practical, hands-in-the-mud experience. No matter what you learn or study be sure to learn something, _anything_, that requires your hands in the real world.

## Forward

As with pretty much all human endeavors, this project does not represent any kind of "final word" or "best solution" but a "clearing of brush" or "cutting away the chaffe"...Of making the road ahead a touch less bumpy and a bit more wonder-full for those that follow.

[**just keep tending...🪴**][wikbon-doc-use]

---

<div style="display: flex; justify-content: center;">
  <span>🇺🇸 Made in the USA 🦅 🐊</span>
</div>


[^ai]: 🤖 AI Collaboration: To date, code and prose of the WikiBonsai project was not written by AI, but was _occasionally_ consulted to improve overall quality. This may or may not change going forward.
[^mind]: Not too dissimilar from a ["bicycle for the mind"][utb-mind-bike].
[^mixed-metaphors]: Please excuse the mixed metaphor soup.

[art-unix-phil]: <https://ia902701.us.archive.org/12/items/bstj57-6-1899/bstj57-6-1899_text.pdf>
[britannica]: <https://britannica.com/>
[reddit-musk]: <https://www.reddit.com/r/IAmA/comments/2rgsan/comment/cnfre0a/?utm_source=share&utm_medium=web2x&context=3>
[git-markdown-it]: <https://github.com/markdown-it/markdown-it>
[git-remark]: <https://github.com/remarkjs/remark>
[git-vscode]: <https://github.com/microsoft/vscode>
[memory-palace]: <https://artofmemory.com/blog/how-to-build-a-memory-palace/>
[utb-essay]: <https://www.youtube.com/watch?v=XHIhtWPpDVI>
[utb-mind-bike]: <https://www.youtube.com/watch?v=KmuP8gsgWb8>
[wikipedia]: <https://www.wikipedia.org>
[yaml]: <https://yaml.org/>

[wikbon-doc-cite]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/CITE.md>
[wikbon-doc-cite-this]: <https://github.com/wikibonsai/wikibonsai/tree/main/CITATION.bib>
[wikbon-doc-code-of-conduct]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/CODE_OF_CONDUCT.md>
[wikbon-doc-contributing]: <https://github.com/wikibonsai/wikibonsai/tree/main/CONTRIBUTING.md>
[wikbon-doc-design]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md>
[wikbon-doc-design--an-api-for-the-mind]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md#an-api-for-the-mind>
[wikbon-doc-design--drilling-down-to-standardization-bedrock]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md#drilling-down-to-standardization-bedrock>
[wikbon-doc-design--semantic-space]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md#semantic-space>
[wikbon-doc-philosophy]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md>
[wikbon-doc-philosophy--a-jungle-gym-for-thought]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md#a-jungle-gym-for-thought>
[wikbon-doc-philosophy--finding-free-will]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md#finding-free-will>
[wikbon-doc-secure]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/SECURE.md>
[wikbon-doc-story]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/STORY.md>
[wikbon-doc-terms]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/TERMS.md>
[wikbon-doc-use]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/USE.md>

[wikbon-repo-astro-wikibonsai]: <https://github.com/wikibonsai/astro-wikibonsai>
[wikbon-repo-caml-mkdn]: <https://github.com/wikibonsai/caml-mkdn>
[wikbon-repo-caml-spec]: <https://github.com/wikibonsai/caml-mkdn/tree/main/spec>
[wikbon-repo-caudex]: <https://github.com/wikibonsai/caudex>
[wikbon-repo-eleventy-wikibonsai]: <https://github.com/wikibonsai/eleventy-wikibonsai>
[wikbon-repo-garden-beds]: <https://github.com/wikibonsai/garden-beds>
[wikbon-repo-germs]: <https://github.com/wikibonsai/germs>
[wikbon-repo-markdown-it-caml]: <https://github.com/wikibonsai/markdown-it-caml>
[wikbon-repo-markdown-it-wikirefs]: <https://github.com/wikibonsai/markdown-it-wikirefs>
[wikbon-repo-remark-caml]: <https://github.com/wikibonsai/remark-caml>
[wikbon-repo-remark-wikirefs]: <https://github.com/wikibonsai/remark-wikirefs>
[wikbon-repo-semtree]: <https://github.com/wikibonsai/semtree>
[wikbon-repo-tendr]: <https://github.com/wikibonsai/tendr>
[wikbon-repo-treehouze]: <https://github.com/wikibonsai/treehouze>
[wikbon-repo-vscode-wikibonsai]: <https://github.com/wikibonsai/vscode-wikibonsai>
[wikbon-repo-wikirefs]: <https://github.com/wikibonsai/wikirefs>
[wikbon-repo-wikirefs-spec]: <https://github.com/wikibonsai/wikirefs/tree/main/spec>
