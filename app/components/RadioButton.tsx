'use client'

import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

export default function RadioButton() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.15)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const audioRef = React.useRef(null)
  const retryAttemptsRef = React.useRef(0)
  const buttonRef = React.useRef(null)

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

  const adjustVolume = (delta: number) => {
    handleVolumeChange(Math.max(0, Math.min(1, volume + delta)))
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
        <motion.button
          ref={buttonRef}
          onClick={toggleRadio}
          className={`fixed bottom-4 left-4 glass-effect rounded-full p-2 md:p-4 border border-dark-border/50 shadow-lg transition-all duration-300 ${
            isPlaying ? 'bg-dark-accent/20' : 'bg-dark-secondary/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-dark-accent/20 rounded-full ${
                isPlaying ? 'animate-pulse' : ''
              }`}
            ></motion.div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 text-dark-text relative z-10"
            >
              {isPlaying ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                />
              )}
            </svg>
          </div>
        </motion.button>
        
        <div className="flex flex-col min-w-[100px]">
          <p className="text-dark-text text-sm font-medium">89 FM</p>
          <p className="text-dark-text-secondary text-xs">A Rádio Rock</p>
        </div>

        <motion.div
          className={`fixed bottom-4 left-16 md:left-20 glass-effect rounded-lg p-2 md:p-3 border border-dark-border/50 shadow-lg transition-all duration-300 ${
            showVolumeControl ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}
        >
          <div className="flex items-center space-x-2">
            <button
              onClick={() => adjustVolume(-0.1)}
              className="text-dark-text hover:text-dark-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>

            <div className="relative w-20 md:w-24 h-1 bg-dark-border/30 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-dark-accent"
                style={{ width: `${volume * 100}%` }}
              />
            </div>

            <button
              onClick={() => adjustVolume(0.1)}
              className="text-dark-text hover:text-dark-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 