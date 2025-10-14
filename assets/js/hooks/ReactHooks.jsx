import React from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from '@/components/Dashboard'

export const DashboardHook = {
  mounted() {
    const initialCount = parseInt(this.el.dataset.initialCount || '0')

    this.root = createRoot(this.el)
    this.root.render(
      <Dashboard
        initialCount={initialCount}
        onUpdate={(count) => {
          // Push count updates back to LiveView
          this.pushEvent('count_updated', { count })
        }}
      />
    )
  },

  updated() {
    const initialCount = parseInt(this.el.dataset.initialCount || '0')

    this.root.render(
      <Dashboard
        initialCount={initialCount}
        onUpdate={(count) => {
          this.pushEvent('count_updated', { count })
        }}
      />
    )
  },

  destroyed() {
    this.root.unmount()
  }
}
