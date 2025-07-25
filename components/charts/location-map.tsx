"use client"

import { useEffect, useRef } from "react"

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Esta es una simulación de un mapa. En una implementación real,
    // aquí se integraría una biblioteca de mapas como Mapbox, Google Maps, o Leaflet
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Dibujar un mapa simplificado para la demostración
        ctx.fillStyle = "#f0f0f0"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Dibujar contorno de Argentina
        ctx.beginPath()
        ctx.moveTo(canvas.width * 0.4, canvas.height * 0.3)
        ctx.lineTo(canvas.width * 0.45, canvas.height * 0.7)
        ctx.lineTo(canvas.width * 0.35, canvas.height * 0.8)
        ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5)
        ctx.closePath()
        ctx.fillStyle = "#e0e0e0"
        ctx.fill()
        ctx.strokeStyle = "#ccc"
        ctx.stroke()

        // Puntos de calor para las principales ciudades
        const drawHeatPoint = (x: number, y: number, size: number, intensity: number) => {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
          gradient.addColorStop(0, `rgba(255, 0, 0, ${intensity})`)
          gradient.addColorStop(1, "rgba(255, 0, 0, 0)")
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Buenos Aires (mayor intensidad)
        drawHeatPoint(canvas.width * 0.42, canvas.height * 0.6, 30, 0.7)

        // Córdoba
        drawHeatPoint(canvas.width * 0.38, canvas.height * 0.5, 20, 0.5)

        // Rosario
        drawHeatPoint(canvas.width * 0.4, canvas.height * 0.55, 15, 0.4)

        // Mendoza
        drawHeatPoint(canvas.width * 0.35, canvas.height * 0.45, 15, 0.4)

        // Santiago (Chile)
        drawHeatPoint(canvas.width * 0.3, canvas.height * 0.4, 10, 0.3)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="h-full w-full rounded-md border border-muted" style={{ minHeight: "400px" }}></div>
  )
}
