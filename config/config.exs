# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :wavingforest,
  ecto_repos: [Wavingforest.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :wavingforest, WavingforestWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: WavingforestWeb.ErrorHTML, json: WavingforestWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Wavingforest.PubSub,
  live_view: [signing_salt: "BftEaSbh"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :wavingforest, Wavingforest.Mailer, adapter: Swoosh.Adapters.Local

config :vite_phx,
  release_app: :wavingforest,
  vite_manifest: "priv/static/.vite/manifest.json",
  dev_server_address: "http://localhost:5173"

# Configure tailwind (the version is required)
config :tailwind,
  version: "4.1.7",
  wavingforest: [
    args: ~w(
      --input=assets/css/app.css
      --output=priv/static/assets/css/app.css
    ),
    cd: Path.expand("..", __DIR__)
  ]

# Configures Elixir's Logger
config :logger, :default_formatter,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
