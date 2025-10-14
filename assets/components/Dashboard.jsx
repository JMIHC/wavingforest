import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Dashboard({ initialCount = 0, onUpdate }) {
  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    if (onUpdate) {
      onUpdate(newCount)
    }
  }

  const handleReset = () => {
    setCount(0)
    if (onUpdate) {
      onUpdate(0)
    }
  }

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>React Dashboard Example</CardTitle>
          <CardDescription>
            This is a React component using shadcn/ui, rendered inside a Phoenix LiveView
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl font-bold">{count}</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleIncrement}>
            Increment
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Vite for fast builds</li>
            <li>✅ React with hooks</li>
            <li>✅ shadcn/ui components</li>
            <li>✅ Tailwind CSS styling</li>
            <li>✅ Colocated with LiveView</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
