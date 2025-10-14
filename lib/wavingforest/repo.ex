defmodule Wavingforest.Repo do
  use Ecto.Repo,
    otp_app: :wavingforest,
    adapter: Ecto.Adapters.Postgres
end
