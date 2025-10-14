defmodule WavingforestWeb.DashboardLive do
  use WavingforestWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, count: 0)}
  end

  @impl true
  def handle_event("count_updated", %{"count" => count}, socket) do
    # React component pushed count update to LiveView
    IO.puts("Count updated from React: #{count}")
    {:noreply, assign(socket, count: count)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">React + shadcn/ui + LiveView Demo</h1>

      <div class="mb-4 p-4 bg-blue-50 rounded">
        <p class="text-sm text-gray-600">
          LiveView knows about the count: <strong class="text-lg"><%= @count %></strong>
        </p>
      </div>

      <div
        id="react-dashboard"
        phx-hook="DashboardHook"
        data-initial-count={@count}
        class="border rounded-lg shadow-sm"
      >
        <!-- React component will render here -->
        <div class="p-4 text-center text-gray-400">Loading React component...</div>
      </div>
    </div>
    """
  end
end
