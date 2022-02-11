MPDS-based NLP for Optimade
==========

[![NPM version](https://img.shields.io/npm/v/optimade-mpds-nlp.svg?style=flat)](https://www.npmjs.com/package/optimade-mpds-nlp)
[![NPM downloads](https://img.shields.io/npm/dm/optimade-mpds-nlp.svg?style=flat)](https://www.npmjs.com/package/optimade-mpds-nlp)
[![GitHub issues](https://img.shields.io/github/issues/mpds-io/optimade-mpds-nlp?style=flat)](https://github.com/mpds-io/optimade-mpds-nlp/issues)

These are the first version of the utilities for parsing an arbitrary string into the Optimade filter query. An intermediate layer is the MPDS search query object notation, see the [MPDS platform](https://mpds.io) and its [API documentation](https://mpds.io/developer/#Categories).

Try to paste an example string `cubic, disordered perovskites with actinides and chlorine` into the main search field of the MPDS, and it will be correctly recognized and assigned to the following classes:

```
{
    "elements": "Cl",
    "classes": "disordered, perovskites, actinides",
    "lattices": "cubic",
}
```

## Installation

```sh
npm i optimade-mpds-nlp --save
```

## Usage

The code is fully isomorphic and standalone. The following MPDS categories (out of 15) can be currently detected in a free-form text:

- chemical _formulae_ (standard and anonymous)
- chemical _elements_
- crystalline _lattices_
- physical _properties_ (see [MPDS hierarchy](https://mpds.io/hierarchy))
- materials _classes_ (an umbrella term for [different various classifications](https://mpds.io/tutorial/#Classes))

The algorithm is mostly heuristic, it may or may not work for your particular keywords.

One has to import the only class from the module, instantiate, and use the `guess` method:

```
const converter = NLP();
const mpds_query = converter.guess(input_str);
```

The following Optimade query keywords can be currently obtained calling `converter.to_optimade(mpds_query)`:

- `chemical_formula_anonymous`
- `chemical_formula_reduced`
- `elements HAS ALL "..."`
- `nelements=...`

There are also some MPDS-specific Optimade keywords with the `_mpds_` prefix supported.


## License

MIT &copy; Tilde Materials Informatics