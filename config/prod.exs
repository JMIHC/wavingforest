import Config

# Vite handles asset bundling and versioning, so we don't need Phoenix's
# cache_static_manifest. Vite's manifest is at priv/static/.vite/manifest.json
# but Phoenix's digest system is not needed when using Vite.
# config :wavingforest, WavingforestWeb.Endpoint,
#   cache_static_manifest: "priv/static/.vite/manifest.json"

# Configures Swoosh API Client
config :swoosh, api_client: Swoosh.ApiClient.Req

# Disable Swoosh Local Memory Storage
config :swoosh, local: false

# Do not print debug messages in production
config :logger, level: :info

# Runtime production configuration, including reading
# of environment variables, is done on config/runtime.exs.
