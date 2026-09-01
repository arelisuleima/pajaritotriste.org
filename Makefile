dev: 
	deno task serve

build:
	deno task build

fmt:
	deno fmt

ci:
	deno check
	deno lint
	$(MAKE) fmt
	$(MAKE) build