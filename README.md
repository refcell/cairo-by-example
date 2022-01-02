# cairo-by-example • [![tests & lints](https://github.com/a5f9t4/cairo-by-example/actions/workflows/ci.yml/badge.svg)](https://github.com/a5f9t4/cairo-by-example/actions/workflows/ci.yml) ![GitHub](https://img.shields.io/github/license/a5f9t4/cairo-by-example) ![GitHub package.json version](https://img.shields.io/github/package-json/v/a5f9t4/cairo-by-example) ![Vercel Deployment](https://img.shields.io/github/deployments/a5f9t4/cairo-by-example/production?label=vercel)

**Verbosely** Documented, **Minimal** Starknet Contract Examples.

**Cairo By Example** deployed to [https://cairo-by-example.xyz](https://cairo-by-example.xyz)

## Developing

Clone the repository

```bash
git clone git@github.com:a5f9t4/cairo-by-example.git
cd cairo-by-example
```

Install Dependencies

```bash
yarn
```

Run locally

```bash
yarn dev
```

## Contracts

Contracts are defined and available for extensible use in the [contracts](https://github.com/a5f9t4/cairo-by-example/tree/main/contracts) subdirectory.

### Usage

#### First time?

Further installation instructions provided in the [cairo-lang docs](https://www.cairo-lang.org/docs/quickstart.html)

Before installing Cairo on your machine, you need to install `gmp`:
```bash
sudo apt install -y libgmp3-dev # linux
brew install gmp # mac
```
> If you have any troubles installing gmp on your Apple M1 computer, [here’s a list of potential solutions](https://github.com/OpenZeppelin/nile/issues/22).

For VSCode support:

Download `cairo-0.6.2.vsix` from https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.2

And run:
```bash
code --install-extension cairo-0.6.2.vsix
```

#### Set up the environment


`cd` into it and create a Python virtual environment:

```bash
python3 -m venv env
source env/bin/activate
```

#### Nile

Install the [Nile](https://github.com/OpenZeppelin/nile) dev environment and then run `install` to get [the Cairo language](https://www.cairo-lang.org/docs/quickstart.html), a [local network](https://github.com/Shard-Labs/starknet-devnet/), and a [testing framework](https://docs.pytest.org/en/6.2.x/).
```bash
pip3 install cairo-nile
nile install
```


#### Compile the contracts

```bash
nile compile
```

#### Run tests

```bash
pytest
```

## Acknowledgements

- [Perama's Notes](https://perama-v.github.io/cairo/by-example/)

## Security

This project is still in a very early and experimental phase. It has never been audited nor thoroughly reviewed for security vulnerabilities. Not recommended for production use.

Please report any security issues you find by opening up an issue in this reposisitory.

## License

Cairo-by-example Contracts are released under the [AGPL-3.0-only](LICENSE).