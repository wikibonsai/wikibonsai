# Design

> "Operational Fallacy: The system itself does not do what it says it is doing."
>
> ~ [Systemantics, Ch. 7][bk-systemantics]

Systems almost never do what you expect them to. Aligning their behaviors with expectations is an involved process that requires attention and consistent, regular re-calibration. Below is an attempt to make explicit the expectations of the WikiBonsai project as a system, when [using it](#fashioning-a-tool-for-thought) or [building with it](#for-the-technical).

## Fashioning [A Tool For Thought][pst-tools-for-thought]

> "The world needs all kinds of minds."
>
> ~ Temple Grandin

### An API For The Mind

If the mind had an API, what would it look like?

For the nontechnical, API (Application Programming Interface) is a programming service that handles requests by providing access to resources. If the mind had an API, it would provide access to resources that help us understand reality. Developing understanding of reality might be thought of as a [tiling problem][wikbon-doc-phil--studying-to-tile-the-world]: How do we design tiles to cover as much of some allotted space with the least number of tiles? Here, "allotted space" represents observable phenomena in the world and "tiles"[^mm] refers to concepts we know.

One way to access such a "tile" might be by giving it a name and retrieving it via a **word**, or better yet, a particular **sense of a word**. This mirrors our verbal "API" and WikiBonsai leverages this with `entry` doctypes, [similar to Wikipedia][wiki-disam]: For example, the word "window" can refer to either a window in a house or a window on the computer. So there might be two documents with one titled `window-(house).md` and another `window-(computer).md`.

By fleshing out those documents with textual descriptions or media, we can interact more directly with our ideas. By placing them into the context of the WikiBonsai framework, we can get a sense of a bigger picture -- like our world view. This process provides a concrete means of interacting with and (re)shaping the ideas in one's own mind.

The goal of the WikiBonsai system is to create a tangible mental tile problem. This allows us to think about how we think and explicitly map the territory using APIs that run parallel to the natural APIs of the mind.

### Wiki All The Thingz

The mechanic that allows these "tiles" to be stitched together is called a "`[[wikiref]]`"; though is mostly synonymous with "wikilink", "bidirectional link", "internal link", among others. A wikiref is a kind of [markdown][mkdn] link defined by text surrounded by double square brackets -- like `[[this]]`. This type of reference allows connections to be made between entities (often files) quickly and easily. It is a well-known concept in the [personal knowledge management][wiki-pkm] (pkm) space and is an integral tool in leveraging associations and making old entities re-discoverable by providing multiple links back to that entity.

For example, while reading a book one might take notes on its concepts by breaking them down into individual words and phrases. Definitions, details, or thoughts might be added to those words. But how can these notes be useful in the future -- instead of sitting alone in a book or forgotten folder? `[[wikirefs]]` allow those words and ideas to be broken down and connected to other entities or files so that the contents of that book may be naturally revisited, when relevant, far into the future. (For a more detailed walkthrough of this process, see [here][wikbon-doc-use]) The mind has a strong associative component, so being able to draw random associations for later use is a powerful mechanic to integrate into a note-taking system.

Thus, many tools provide `[[wikiref]]`-like functionality. But as others have pointed out, (over)use of such systems can lead to fractured writing[^rank-n-file-fract] and does not tend to help build toward unified, coherent sets of ideas[^rank-n-file-uni]. A collection of modular facts, insights, and observations accrues, but what has been accomplished other than making spagehtti notes?

WikiBonsai acknowledges and addresses these weaknesses by providing scaffolding for a larger, coherent framework to help fit the pieces together.[^essay]

### Webs and Trees

So how do those "tiles" fit together? In WikiBonsai, there are two major structures: A web and a tree.

The web relies on associativity. By freely and easily creating connections using references like `[[wikiref]]`, we can leverage the mind's ability to draw meaningful connections between disparate concepts, ideas, sources, or memories. This unlocks free associativity in a collection of files, increasing the likelihood of rediscovering or stumbling upon old material and stimulating creative serendipity. It also allows for retracing one's mental steps between concepts, making it easier to navigate than a hierarchical file system. The system supports several levels of gradation, with a formalized attribute of a concept like a `:synonym::[[wikiattr]]` or `:antonym::[[wikiattr]]` being "stronger" than a random connection like a `[[wikilink]]`. These "strong" associations connect our "tiles" and form a complex quilt of understanding[^under-weave] to cover the observable world.

The other major structural component is a tree, which is a fundamental ordering structure[^maze]. The tree in WikiBonsai is a "semantic tree" or "knowledge bonsai" which outlines the [unification of one's knowledge][wikbon-doc-philosophy--the-tree]. It is a **tree of knowledge**: Each node in the tree is a particular sense of a word and the amount of generalization moves from more to less as you move from trunk to leaf. These trees are intuitive and crop up everywhere: When we make lists we are reifying branches on a priority tree, language is made comprehensible by grammar trees, and the text in the parenthesis of wikipedia-style (disambiguation) might be thought of as ancestor nodes that distinguish between different words (ex: wiki > computer > window (computer) vs. wiki > house > window (house)). Bread > crumb > trails that appear in website navigation can be thought of as a branch-path of a (semantic) tree. A tree provides a away to orient one's self within the system and a means of measuring progress toward the goal of maximizing understanding (or coverage) while minimizing the size of the bonsai[^refactor] (or number of tiles).

### Preserving Relational Integrity

The system has been designed so the web and tree structures can co-exist seamlessly, but the preservation of relationships does not stop there. For example, one can hop from word to word in written documents (great for verbal thinkers) or hop from node to node in a graph (better for visual thinkers). The idea is that the system takes in a collection of documents while preserving their relationships through various kinds of transformation. This allows the system to act as as a translation layer between multiple ways of interpretting said documents and relationships. (The graph itself can also be translated between 2d, 3d, vr, or ar without losing its integrity and without changing its shape)

Ultimately, an entire collection of markdown files should be easily viewable and digestible in multiple ways, whether it's simply to shift one's perspective or to accommodate someone with a different way of thinking.

### Graphical Visualization

Graphs have [exploded in popularity][twit-pkm-graph] among the PKM crowd, but there are some questions and a lot of debate with regard to their actual utility. This project firmly believes that graphs in their current form are largely gimmicks, albeit pretty ones. But what would make them extraordinarily useful is if they use **fixed coordinates**. Just imagine a detective's corkboard when analyzing and tracking a case. Adding the ability to "pin" information in-place is useful for organizing that information into an easy-to-remember structure.

These structures could then be used as "[memory palaces][memory-palace]" which is a memory trick with a long history: People have used them to memorize large swathes of information long before the printing press was invented and is still a common practice in memory competitions to this day. This project aims to provide a real, digital, tangible memory palace that will make remembering your documents and their relationships easier and make them more explorable.

### Semantic Space[^symbolic-ai]

The use of fixed coordinates in this manner could also lend to researching "[explainable AI][wiki-explain-ai]": When working with text, language, and artificial intelligence it common to work with [embeddings][how-chatgpt--embedding], like [word embeddings][word-embedding], which are a sort of language to math translation (e.g. "dog" = 1, "cat" = 2, etc.). These are pretty easy to derive from data sets, are programmatically easy to work with, and are fundamental to how large language models (llms) work.

If there is a collection of markdown files, where each file represented a word (sense) and mapped to a fixed coordinate, that collection might then act as a translation layer between natural language and a [semantic space][how-chatgpt--meaning-space] that describes a set of embeddings -- or perhaps even hidden layers in a neural net.

### Exploration > Repetition

It has become fashionable to utilize [spaced repetition][wiki-srs] systems in the how-to-learn-better spheres of the internet. For those not in the know, spaced repetition is a sort of algorithm that is typically used to determine when to review specific flashcards. The general premise is the more often and recently you remember something, the less you have to study it. This increases the amount someone can memorize in a shorter period of time due to increased efficiency the scheduling algorithm provides.

While its popularity is well-deserved, this is only one component of the learning process and the WikiBonsai project takes the view that over-reliance on such an algorithm can be as deterimental as the proposed benefits. Rather, an algorithm such as this should be integrated into a larger system designed for learning with an emphasis on play and exploration.

## For The Technical

> "Tip 25: Keep knowledge in plain text."
>
> ~ [The Pragmatic Programmer][bk-prag-prog]

### Drilling Down To "Standardization Bedrock"

In software, engineers have to consider the type of "technology stack" they are working with. The technology stack is composed of several layers of components that work together to allow a system to perform its operations and function properly. If you have ever had to double check if an app can install on your mobile's operating system, you have felt the grind between layers of a technology stack.

In knowledge work "productivity stacks" might be thought of as the "technology stack" for knowledge workers. Can you transfer that excel spreadsheet data to a LibreOffice document? Can that file be read on Mac, Windows, and Linux? If I use this application, can I get my data back out in a readable format in another application? One of the most frustrating aspects of current "productivity stacks" is the difficulty one faces when attempting to transfer notes between applications or environments.

This project aims to drill down to and build on "standardization bedrock". This might be thought of as the layer in the productivity stack in which a large portion of all productivity apps have some mutually agreed upon standard -- in this case it is raw text in markdown format. The hope of building directly on "standardization bedrock" is that these workflows may be easily integrated into other pre-existing systems and extend the current markdown standard to best accommodate user needs.

After all, it's said that "[text is the universal interface][^universal-interface]"...You could even leverage these notes in conversations with text-based AI assistants.

### Universal Language

Besides being universal for knowledge workers, this project also aims to be universal for developers[^carmack]. All projects are deployable to web ecosystems like `npm` and written largely in Typescript (for types) and Javascript (when there aren't types).[^rust] This is so regardless if someone wants to use these tools for the browser, the web, desktop, or mobile there are likely (easy) ways to integrate these workflows.

### Why So Modular?

To further facilitate standardized integration, and code re-use, this project is composed of multiple small-ish modular tools and plugins. This allows for easy integration into other and pre-existing projects. By modularizing each component of the system, different apps can plug'n'play with different aspects to see what works or simply "turn on" specific mechanics, like `[[wikirefs]]`, in their own environment.

WikiBonsai as a system is rather opinionated, but each individual component tries to be only as opinionated as necessary and integrates [pre-existing mechanics][wikbon-doc-cite] as much as possible. For example, there are a loose set of norms that have emerged around "wikilinks", which have largely been adopted in the [`[[wikirefs]]` module][wikbon-repo-wikirefs]. This module tries not to impose more than the popularly accepted syntax structures, but has added minor improvements to address old painpoints.

### Paperback Redundancy

WikiBonsai has been designed in such a way that it would be feasible to convert a set of documents into paper format and have the integrity of the content and relationships remain intact. One might want to use paper notes in the scenario where that is all you have or digital formats are simply too insecure. It is an extra level of redundancy and security.

Thus, WikiBonsai is designed to provide mechanics to make transitioning to analog, or interoperating between digital and analog, possible:

#### [Semantic Tree][wikbon-repo-semtree]

- The semantic tree is built from a set of files whose job is only to define the tree. This means a print-out describing the tree would only span the number of pages that describe the tree, rather than being strewn across every single file in the collection by metadata or filename.

#### [Zettelkasten][site-zettel]

- Generating (unique) IDs for filenames is supported so that maintaining note relationships in analog does not require as many renames and makes managing the system possible.

#### Legacy Techniques of Organizing Information

- _Dictionaries and Thesauri_: A [caml][wikbon-repo-caml-mkdn] or [yaml][yaml] style metadata attribute can be used to give a word or document a short sentence to paragraph length definition or description.
- _Encyclopedias and Wikipedia_: A file's content can be thought of as an "entry" from the encyclopedia or wikipedia.
- _Table of Contents, Indexes_: The semantic tree might be thought of as a large "table of contents" for one's collection of notes (the "vault" or "digital garden") and the file system might be thought of as an alpha-ordered index of files, depending on how one organizes their directory structure.
- _Dewey Decimal, Taxonomies, Faceted Indices_: The semantic tree is similar to the Dewey Decimal System in that it builds a conceptual hierarchy that makes navigation of vast amounts of information fast and intuitive. `[[Wikirefs]]`, specifically wikiattrs, provide a way to organize, search, and navigate notes based on facets.


[^carmack]: Also, see [Carmack's advice][utb-carmack] on using a single programming language across an entire project.
[^coord-sys]: A fixed coordinate system in addition to fixed coordinates also serves [important purposes][wikbon-doc-philosophy--finding-free-will].
[^essay]: Regularly writing essays is also an integral part of learning how to build coherent and cohesive sets of ideas.
[^maze]: Sidenote: In computer science, a common way to traverse a maze is the same way you traverse a tree (see ["recursion"][wiki-recurse]).
[^mm]: Each "tile" might also be thought of as a "mental model".
[^rank-n-file-fract]: "It was a catastrophic revelation. True, following link trails revealed unexpected connections. But those connections proved useless for the goal of coming up with or systematically defending a thesis. Had I done something wrong? I decided to read one of Luhmann’s books to see what a zettelkasten-generated text ought to look like. To my horror, it turned out to be a chaotic mess that would never have passed muster under my own dissertation director. It read, in my opinion, like something written by a sentient library catalog, full of disordered and tangential insights, loosely related to one another — very interesting, but hardly a model for my own academic work." ~ [src][pst-rank-n-file]
[^rank-n-file-uni]: "Seeing the shape of your ideas is not the same as having new ideas. Creating a too-comprehensive portrait of your own thoughts can amount to locking yourself into a labyrinth of your own preconceptions." ~ [src][pst-rank-n-file]
[^refactor]: The process of whittling down the tree stems can be thought of as "refactoring", which is a concept in software that describes the process of simplifying a software system similar to editing writing. Working with a tree such as this can give nontechnical people practice with this process of refactoring.
[^rust]: Rust was another consideration but at the time of development there weren't any markdown parsers with plugin capabilities. Also, many popular and extensible productivity tools already exist in the Javascript ecosystem.
[^symbolic-ai]: I am wondering if these are the symbols the symbolic AI people are looking for...
[^tree-nav]: The (semantic) tree would then be the most efficient route of traversal through the set of said tiles.
[^under-weave]: A motto of this project is: "Understanding is in the weave".
[^universal-interface]: [Article][pst-txt] and [video][utb-lex-karpathy].

[bk-prag-prog]: <https://www.goodreads.com/en/book/show/4099>
[bk-systemantics]: <https://www.goodreads.com/book/show/583785.The_Systems_Bible>
[how-chatgpt--embedding]: <https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/#the-concept-of-embeddings>
[how-chatgpt--meaning-space]: <https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/#meaning-space-and-semantic-laws-of-motion>
[memory-palace]: <https://artofmemory.com/blog/how-to-build-a-memory-palace/>
[mkdn]: <https://www.markdownguide.org/getting-started/>
[pst-tools-for-thought]: <https://numinous.productions/ttft/>
[pst-rank-n-file]: <https://reallifemag.com/rank-and-file/>
[pst-txt]: <https://scale.com/blog/text-universal-interface>
[twit-pkm-graph]: <https://twitter.com/search?q=pkm%20graph&src=typed_query&f=top>
[utb-carmack]: <https://www.youtube.com/watch?v=I845O57ZSy4&t=1095s>
[wiki-disam]: <https://en.wikipedia.org/wiki/Wikipedia:Disambiguation>
[wiki-explain-ai]: <https://en.wikipedia.org/wiki/Explainable_artificial_intelligence>
[wiki-pkm]: <https://en.wikipedia.org/wiki/Personal_knowledge_management>
[wiki-recurse]: <https://en.wikipedia.org/wiki/Recursion>
[wiki-srs]: <https://en.wikipedia.org/wiki/Spaced_repetition>
[word-embedding]: <https://en.wikipedia.org/wiki/Word_embedding>
[yaml]: <https://yaml.org/>
[site-zettel]: <https://zettelkasten.de/>
[utb-lex-karpathy]: <https://youtu.be/cdiD-9MMpb0?t=2909>

[wikbon-doc-cite]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/CITE.md>
[wikbon-doc-philosophy--the-tree]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md#the-tree>
[wikbon-doc-philosophy--finding-free-will]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md#finding-free-will>
[wikbon-doc-phil--studying-to-tile-the-world]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md#studying-to-tile-the-world>
[wikbon-doc-use]: <https://github.com/wikibonsai/wikibonsai/tree/main/docs/USE.md>

[wikbon-repo-caml-mkdn]: <https://github.com/wikibonsai/caml-mkdn>
[wikbon-repo-semtree]: <https://github.com/wikibonsai/semtree>
[wikbon-repo-wikirefs]: <https://github.com/wikibonsai/wikirefs>
