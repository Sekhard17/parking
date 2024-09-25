'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Mail, ChevronRight, Loader2 } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simular envío de formulario
    setTimeout(() => {
      setIsLoading(false)
      setEmail('')
      alert('¡Gracias por su interés! Le notificaremos cuando el software esté disponible.')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#003123] text-white flex flex-col justify-center items-center p-4 font-sans">
      <div className="max-w-4xl w-full space-y-12">
        <motion.header 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center space-x-8 items-center">
            <motion.img 
              src="/logo-sur-innova.svg" 
              alt="Sur Innova Limitada Logo" 
              className="h-24 w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src="/logo-spectrum-code.svg" 
              alt="Spectrum Code Software Logo" 
              className="h-24 w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
            Plataforma de Gestión de Estacionamientos
          </h1>
        </motion.header>

        <motion.main 
          className="space-y-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-2xl font-light">
            Estamos emocionados de anunciar que nuestro software está actualmente en producción.
          </p>
          <motion.div 
            className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center">
              <Clock className="mr-2" /> Próximamente
            </h2>
            <p className="text-xl">
              Nuestra plataforma de vanguardia para la gestión de estacionamientos estará disponible muy pronto.
              Agradecemos su paciencia e interés.
            </p>
          </motion.div>
          <div className="space-y-6">
            <p className="text-xl">
              Manténgase atento para más actualizaciones sobre el lanzamiento y las características exclusivas que ofreceremos.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="max-w-xs bg-white bg-opacity-20 text-white placeholder-gray-300"
              />
              <Button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" />
                )}
                Notifícame
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.main>

        <motion.footer 
          className="text-center text-sm opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p>© 2024 Sur Innova Limitada & Spectrum Code Software. Todos los derechos reservados.</p>
        </motion.footer>
      </div>
    </div>
  )
}