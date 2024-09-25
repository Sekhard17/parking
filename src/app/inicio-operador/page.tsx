'use client'

import { useState, useEffect } from 'react'
import { Car, LogOut, Search, BarChart3, Home, User, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { addDays } from 'date-fns'

export default function DashboardOperador() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit'
    })
  }

  const handleReportClick = () => {
    setIsReportModalOpen(true)
  }

  const handlePrintReport = () => {
    // Aquí iría la lógica para imprimir el reporte
    console.log('Imprimiendo reporte...')
    setIsReportModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <img src="/logo-sur-innova.svg" alt="Sur Innova Logo" className="h-12 w-auto" />
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{formatTime(currentTime)}</p>
            <p className="text-sm text-gray-600">
              {currentTime.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dashboard Operador</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white p-3 rounded-full">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-center">Ingreso Vehículo</h2>
                <p className="text-sm text-center">Registra un vehículo en el sistema con su patente</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-400 to-red-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white p-3 rounded-full">
                  <LogOut className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-center">Salida Vehículo</h2>
                <p className="text-sm text-center">Darle salida a un vehículo y generar su ticket de cobro</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white p-3 rounded-full">
                  <Search className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-xl font-semibold text-center">Buscar Deuda</h2>
                <p className="text-sm text-center">Busca deuda con la patente y fecha de un vehículo registrado</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onClick={handleReportClick}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white p-3 rounded-full">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-center">Reportes</h2>
                <p className="text-sm text-center">Generar Reporte de Ganancias del Día o Fechas</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white shadow-md">
        <nav className="flex justify-around items-center h-20">
          <Button variant="ghost" className="flex flex-col items-center text-blue-600">
            <Home className="h-8 w-8" />
            <span className="text-xs">Inicio</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <User className="h-8 w-8" />
            <span className="text-xs">Perfil</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Settings className="h-8 w-8" />
            <span className="text-xs">Ajustes</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-red-600">
            <LogOut className="h-8 w-8" />
            <span className="text-xs">Salir</span>
          </Button>
        </nav>
      </footer>

      <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Generar Reporte de Ganancias</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Ganancias Totales:</h3>
              <p className="text-2xl font-bold text-green-600">$1,234,567</p>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handlePrintReport}>Imprimir Reporte</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}