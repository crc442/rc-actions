BIN_DIR ?= node_modules/.bin
BUILD_DIR ?= build
SRC_DIR ?= src

BUILD_FLAGS ?=
SERVER_FLAGS ?= -p 3000 example
WATCH_FLAGS ?= example/index.js -p browserify-hmr -o example/bundle.js -dv

P="\\033[34m[+]\\033[0m"

help:
	@echo
	@echo "  \033[34mbuild\033[0m – builds the component"
	@echo "  \033[34mstart\033[0m – start dev server on :3000 with hot module replacement"
	@echo

build: export NODE_ENV = production
build:
	@echo "  $(P) build"
	@$(BIN_DIR)/babel $(BUILD_FLAGS) -d $(BUILD_DIR) $(SRC_DIR) -s

start:
	@$(MAKE) serve & $(MAKE) watch

watch:
	@echo "  $(P) watch $(WATCH_FLAGS)"
	@$(BIN_DIR)/watchify $(WATCH_FLAGS)

serve:
	@echo "  $(P) serve $(SERVER_FLAGS)"
	@$(BIN_DIR)/ecstatic $(SERVER_FLAGS)

.PHONY: build start watch serve help
