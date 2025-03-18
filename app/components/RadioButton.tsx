'use client'

import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

export default function RadioButton() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.15)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const audioRef = React.useRef(null)
  const retryAttemptsRef = React.useRef(0)

  useEffect(() => {
    const initializeAudio = async () => {
      if (!audioRef.current) {
        audioRef.current = new Audio('https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_89FM_ADP.aac')
        audioRef.current.volume = 0.15
        
        try {
          // Tenta iniciar o áudio
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Tentando iniciar o áudio novamente...')
          // Se falhar, tenta novamente após interação do usuário
          const handleUserInteraction = async () => {
            try {
              await audioRef.current.play()
              setIsPlaying(true)
              // Remove os event listeners após sucesso
              cleanup()
            } catch (err) {
              console.log('Falha ao iniciar áudio:', err)
            }
          }

          // Adiciona event listeners para detectar interação do usuário
          const events = ['click', 'touchstart', 'keydown']
          events.forEach(event => {
            document.addEventListener(event, handleUserInteraction, { once: true })
          })

          // Função para limpar os event listeners
          const cleanup = () => {
            events.forEach(event => {
              document.removeEventListener(event, handleUserInteraction)
            })
          }

          // Limpa os event listeners quando o componente for desmontado
          return cleanup
        }
      }
    }

    initializeAudio()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Adiciona um efeito para monitorar o estado de reprodução
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(error => {
        console.log('Erro ao retomar a reprodução:', error)
        setIsPlaying(false)
      })
    }
  }, [isPlaying])

  const toggleRadio = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_89FM_ADP.aac')
      audioRef.current.volume = volume
    }
    
    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log('Erro ao alternar reprodução:', error)
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      onHoverStart={() => setShowVolumeControl(true)}
      onHoverEnd={() => setShowVolumeControl(false)}
    >
      <motion.div 
        className="glass-effect p-2 rounded-lg shadow-lg flex items-center gap-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={toggleRadio}
          className="relative"
        >
          <div className={`w-12 h-12 rounded-full ${isPlaying ? 'bg-dark-accent' : 'bg-dark-secondary'} flex items-center justify-center transition-colors duration-300`}>
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          {isPlaying && (
            <motion.div
              className="absolute -inset-1 rounded-full border-2 border-dark-accent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </button>
        
        <div className="flex flex-col min-w-[100px]">
          <p className="text-dark-text text-sm font-medium">89 FM</p>
          <p className="text-dark-text-secondary text-xs">A Rádio Rock</p>
        </div>

        <motion.div
          className="relative flex items-center gap-2"
          animate={{ 
            width: showVolumeControl ? 'auto' : 0,
            opacity: showVolumeControl ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => handleVolumeChange(Math.max(0, volume - 0.1))}
            className="text-dark-text hover:text-dark-accent transition-colors"
            disabled={volume <= 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9"
              />
            </svg>
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-20 h-1 bg-dark-secondary rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1E4976 ${volume * 100}%, #132F4C ${volume * 100}%)`
            }}
          />

          <button
            onClick={() => handleVolumeChange(Math.min(1, volume + 0.1))}
            className="text-dark-text hover:text-dark-accent transition-colors"
            disabled={volume >= 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 